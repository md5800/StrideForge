import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSlidersH } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductFilters from "../components/product/ProductFilters";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products";

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [uiFilters, setUiFilters] = useState({ maxPrice: 200, sort: "featured" });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // category/search live in the URL so external nav links (and back/forward)
  // always drive the visible filters — there's no separate local copy to fall out of sync.
  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";
  const filters = { category, search, ...uiFilters };

  const handleFiltersChange = (next) => {
    const params = {};
    if (next.category) params.category = next.category;
    if (next.search) params.search = next.search;
    setSearchParams(params, { replace: true });
    setUiFilters({ maxPrice: next.maxPrice, sort: next.sort });
  };

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.price <= filters.maxPrice);

    if (filters.category) {
      list = list.filter((p) => p.category === filters.category);
    }

    if (filters.search) {
      const term = filters.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    switch (filters.sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list = [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        list = [...list].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return list;
  }, [filters]);

  return (
    <div className="container py-5">
      <Breadcrumb items={[{ label: "Shop" }]} />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold h3 mb-0">
          {filters.search ? `Results for "${filters.search}"` : "All Products"}
        </h1>
        <button
          className="btn btn-outline-dark btn-sm d-lg-none d-flex align-items-center gap-2"
          onClick={() => setShowMobileFilters((s) => !s)}
        >
          <FaSlidersH size={14} /> Filters
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-3 d-none d-lg-block">
          <ProductFilters
            filters={filters}
            onChange={handleFiltersChange}
            resultCount={filteredProducts.length}
          />
        </div>

        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="col-12 d-lg-none overflow-hidden"
            >
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
                resultCount={filteredProducts.length}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="col-lg-9">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
