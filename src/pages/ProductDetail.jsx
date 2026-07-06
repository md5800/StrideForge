import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { FaHeart, FaTruck, FaUndo, FaShieldAlt } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Rating from "../components/common/Rating";
import SizeSelector from "../components/product/SizeSelector";
import QuantitySelector from "../components/product/QuantitySelector";
import ProductGrid from "../components/product/ProductGrid";
import { formatCurrency } from "../utils/formatCurrency";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import NotFound from "./NotFound";

function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(0);
      setSelectedSize(null);
      setQuantity(1);
      setSizeError(false);
    }
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    addToCart(product, { size: selectedSize, quantity });
    toast.success(`${product.name} added to cart`);
  };

  const related = getRelatedProducts(product);

  return (
    <div className="container py-5">
      <Breadcrumb
        items={[
          { label: product.category, to: `/shop?category=${product.category}` },
          { label: product.name },
        ]}
      />

      <div className="row g-4 g-lg-5">
        <div className="col-lg-6">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="sf-pd-main-media mb-3"
          >
            <ImageWithFallback src={product.images[activeImage]} alt={product.name} />
          </motion.div>
          <div className="d-flex gap-2">
            {product.images.map((img, idx) => (
              <button
                key={img}
                className={`sf-pd-thumb ${activeImage === idx ? "sf-pd-thumb--active" : ""}`}
                onClick={() => setActiveImage(idx)}
              >
                <ImageWithFallback src={img} alt={`${product.name} ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="text-uppercase text-muted small fw-semibold">{product.category}</div>
            <h1 className="fw-bold h2 mt-1 mb-2">{product.name}</h1>
            <Rating value={product.rating} reviews={product.reviews} size={16} />

            <div className="d-flex align-items-center gap-3 my-3">
              <span className="fs-3 fw-bold">{formatCurrency(product.price)}</span>
              {product.oldPrice && (
                <span className="text-muted fs-5 text-decoration-line-through">
                  {formatCurrency(product.oldPrice)}
                </span>
              )}
              {product.oldPrice && (
                <span
                  className="badge fw-semibold"
                  style={{ backgroundColor: "var(--sf-accent-subtle)", color: "var(--sf-accent)" }}
                >
                  Save {Math.round(100 - (product.price / product.oldPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-secondary">{product.description}</p>

            <div className="my-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold small text-uppercase">Select Size</span>
                <Link to="#" onClick={(e) => e.preventDefault()} className="small text-muted text-decoration-none">
                  Size Guide
                </Link>
              </div>
              <SizeSelector
                sizes={product.sizes}
                selected={selectedSize}
                onSelect={(size) => {
                  setSelectedSize(size);
                  setSizeError(false);
                }}
              />
              {sizeError && <p className="text-danger small mt-2 mb-0">Please select a size.</p>}
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <QuantitySelector quantity={quantity} onChange={setQuantity} />
              <span className={`small ${product.stock > 5 ? "text-success" : "text-warning"}`}>
                {product.stock > 5 ? "In Stock" : `Only ${product.stock} left`}
              </span>
            </div>

            <div className="d-flex gap-3 mb-4">
              <button className="btn btn-dark btn-lg flex-grow-1 rounded-pill" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button
                className={`sf-icon-btn sf-icon-btn--lg ${wishlisted ? "sf-wishlist-btn--active" : ""}`}
                onClick={() => {
                  toggleWishlist(product);
                  toast.info(wishlisted ? "Removed from wishlist" : "Added to wishlist");
                }}
                aria-label="Toggle wishlist"
              >
                <FaHeart size={18} />
              </button>
            </div>

            <div className="d-flex flex-column gap-2 text-secondary small border-top pt-3">
              <span className="d-flex align-items-center gap-2">
                <FaTruck /> Free shipping on orders over $100
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaUndo /> Free 30-day returns
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaShieldAlt /> 1-year warranty against defects
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-5">
        <ul className="nav nav-tabs">
          {["description", "features", "reviews"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active fw-semibold" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="py-4"
          >
            {activeTab === "description" && <p className="text-secondary mb-0">{product.description}</p>}
            {activeTab === "features" && (
              <ul className="text-secondary">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
            {activeTab === "reviews" && (
              <div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Rating value={product.rating} size={18} />
                  <span className="fw-semibold">
                    {product.rating} out of 5 ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-muted">Review submission is not enabled in this demo.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {related.length > 0 && (
        <div className="mt-4">
          <h3 className="fw-bold h4 mb-4">You Might Also Like</h3>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
