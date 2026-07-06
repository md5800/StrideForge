import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import ImageWithFallback from "../common/ImageWithFallback";
import Rating from "../common/Rating";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, { size: product.sizes?.[0], quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
    toast.info(wishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ y: -6 }}
      className="sf-product-card h-100"
    >
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark d-block h-100">
        <div className="sf-product-media position-relative overflow-hidden">
          {product.isNew && <span className="sf-tag sf-tag--new">New</span>}
          {product.oldPrice && !product.isNew && <span className="sf-tag sf-tag--sale">Sale</span>}
          <ImageWithFallback
            src={product.images?.[0]}
            alt={product.name}
            className="sf-product-img sf-product-img--primary"
          />
          {product.images?.[1] && (
            <ImageWithFallback
              src={product.images[1]}
              alt={product.name}
              className="sf-product-img sf-product-img--secondary"
            />
          )}
          <button
            type="button"
            className={`sf-wishlist-btn ${wishlisted ? "sf-wishlist-btn--active" : ""}`}
            onClick={handleWishlist}
            aria-label="Toggle wishlist"
          >
            <FaHeart size={14} />
          </button>
          <button type="button" className="sf-quickadd-btn" onClick={handleAddToCart}>
            <FaShoppingBag size={13} className="me-2" />
            Quick Add
          </button>
        </div>
        <div className="pt-3">
          <div className="text-uppercase text-muted small fw-semibold">{product.category}</div>
          <h6 className="mb-1 mt-1 fw-semibold">{product.name}</h6>
          <Rating value={product.rating} reviews={product.reviews} size={12} />
          <div className="d-flex align-items-center gap-2 mt-2">
            <span className="fw-bold">{formatCurrency(product.price)}</span>
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through small">
                {formatCurrency(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;
