import ProductCard from "./ProductCard";

function ProductGrid({ products, columns = 4 }) {
  if (!products.length) {
    return (
      <div className="text-center py-5 text-muted">
        <p className="fs-5 mb-1">No products found</p>
        <p className="small">Try adjusting your filters or search term.</p>
      </div>
    );
  }

  const colClass =
    columns === 3 ? "col-6 col-md-4" : "col-6 col-md-4 col-lg-3";

  return (
    <div className="row g-4">
      {products.map((product, idx) => (
        <div className={colClass} key={product.id}>
          <ProductCard product={product} index={idx} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
