import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle, FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Breadcrumb from "../components/common/Breadcrumb";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Profile() {
  const { user, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();
  const { items: cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("You've been logged out.");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <Breadcrumb items={[{ label: "My Account" }]} />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="sf-auth-card p-4 p-md-5 mb-4">
          <div className="d-flex align-items-center gap-3">
            <FaUserCircle size={56} className="text-secondary" />
            <div>
              <h1 className="fw-bold h4 mb-1">{user.name}</h1>
              <p className="text-secondary mb-0">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="sf-cart-summary p-4 text-center h-100">
              <FaShoppingBag size={28} className="mb-3 text-dark" />
              <h5 className="fw-bold">{cartItems.length}</h5>
              <p className="text-muted small mb-0">Items in cart</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sf-cart-summary p-4 text-center h-100">
              <FaHeart size={28} className="mb-3 text-dark" />
              <h5 className="fw-bold">{wishlistItems.length}</h5>
              <p className="text-muted small mb-0">Saved items</p>
            </div>
          </div>
          <div className="col-md-4">
            <button
              className="sf-cart-summary p-4 text-center h-100 w-100 border-0 bg-transparent d-flex flex-column align-items-center justify-content-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt size={28} className="mb-3 text-danger" />
              <h5 className="fw-bold text-danger mb-0">Logout</h5>
            </button>
          </div>
        </div>

        <p className="text-muted small mt-4">
          Order history isn&apos;t persisted in this demo beyond the current session.
        </p>
      </motion.div>
    </div>
  );
}

export default Profile;
