import { Link } from "react-router-dom";
import ProductGrid from "../product/ProductGrid";
import { products } from "../../data/products";

function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="py-5 bg-light-subtle">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="sf-eyebrow sf-eyebrow--dark">Handpicked</span>
            <h2 className="fw-bold mt-2 mb-0">Featured Products</h2>
          </div>
          <Link to="/shop" className="btn btn-outline-dark rounded-pill px-4 d-none d-md-inline-block">
            View All
          </Link>
        </div>
        <ProductGrid products={featured} />
        <div className="text-center mt-4 d-md-none">
          <Link to="/shop" className="btn btn-outline-dark rounded-pill px-4">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
