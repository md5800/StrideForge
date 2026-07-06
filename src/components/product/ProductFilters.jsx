import { categories } from "../../data/products";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

function ProductFilters({ filters, onChange, resultCount }) {
  const handleCategory = (categoryId) => {
    onChange({ ...filters, category: filters.category === categoryId ? "" : categoryId });
  };

  const handlePriceChange = (e) => {
    onChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const handleSort = (e) => {
    onChange({ ...filters, sort: e.target.value });
  };

  const clearAll = () => {
    onChange({ category: "", maxPrice: 200, sort: "featured", search: "" });
  };

  return (
    <div className="sf-filters">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h6 className="fw-bold mb-0">Filters</h6>
        <button className="btn btn-link btn-sm text-decoration-none p-0" onClick={clearAll}>
          Clear all
        </button>
      </div>

      <div className="mb-4">
        <h6 className="text-uppercase small fw-semibold text-muted mb-3">Category</h6>
        <div className="d-flex flex-column gap-2">
          {categories.map((cat) => (
            <label key={cat.id} className="sf-checkbox d-flex align-items-center gap-2">
              <input
                type="checkbox"
                checked={filters.category === cat.id}
                onChange={() => handleCategory(cat.id)}
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h6 className="text-uppercase small fw-semibold text-muted mb-3">
          Max Price: ${filters.maxPrice}
        </h6>
        <input
          type="range"
          min="40"
          max="200"
          step="5"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="form-range"
        />
      </div>

      <div className="mb-2">
        <h6 className="text-uppercase small fw-semibold text-muted mb-3">Sort By</h6>
        <select className="form-select form-select-sm" value={filters.sort} onChange={handleSort}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-muted small mt-4 mb-0">{resultCount} products found</p>
    </div>
  );
}

export default ProductFilters;
