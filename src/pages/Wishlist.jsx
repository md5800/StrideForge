import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaTrashAlt, FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import Breadcrumb from "../components/common/Breadcrumb";
import EmptyState from "../components/common/EmptyState";
import ImageWithFallback from "../components/common/ImageWithFallback";
import { formatCurrency } from "../utils/formatCurrency";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

function Wishlist() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-5">
        <Breadcrumb items={[{ label: "Wishlist" }]} />
        <EmptyState
          icon={<FaHeart />}
          title="Your wishlist is empty"
          message="Save the pairs you love so you don't lose track of them."
        />
      </div>
    );
  }

  const handleAddToCart = (item) => {
    const product = getProductById(item.id);
    addToCart(product, { size: product?.sizes?.[0], quantity: 1 });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="container py-3">
      <Breadcrumb items={[{ label: "Wishlist" }]} />
      <h1 className="fw-bold h3 mb-4">My Wishlist ({items.length})</h1>
      <div className="row g-4">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="col-6 col-md-4 col-lg-3"
              key={item.id}
            >
              <div className="sf-product-card h-100">
                <div className="sf-product-media position-relative">
                  <Link to={`/product/${item.id}`}>
                    <ImageWithFallback src={item.image} alt={item.name} className="sf-product-img" />
                  </Link>
                  <button
                    className="sf-wishlist-btn sf-wishlist-btn--active"
                    onClick={() => removeFromWishlist(item.id)}
                    aria-label="Remove from wishlist"
                  >
                    <FaTrashAlt size={13} />
                  </button>
                </div>
                <div className="pt-3">
                  <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                    <h6 className="fw-semibold mb-1">{item.name}</h6>
                  </Link>
                  <div className="fw-bold mb-3">{formatCurrency(item.price)}</div>
                  <button
                    className="btn btn-dark btn-sm w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 py-3"
                    onClick={() => handleAddToCart(item)}
                  >
                    <FaShoppingBag size={12} /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Wishlist;
