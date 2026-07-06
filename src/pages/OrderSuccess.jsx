import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { formatCurrency } from "../utils/formatCurrency";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("strideforge_last_order");
    if (!stored) {
      navigate("/");
      return;
    }
    setOrder(JSON.parse(stored));
  }, [navigate]);

  if (!order) return null;

  const orderId = location.state?.orderId || order.id;

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center mx-auto"
        style={{ maxWidth: 560 }}
      >
        <FaCheckCircle size={64} className="text-success mb-4" />
        <h1 className="fw-bold h2 mb-2">Order Confirmed!</h1>
        <p className="text-secondary mb-1">
          Thank you for your purchase. Your order <strong>{orderId}</strong> is being processed.
        </p>
        <p className="text-secondary mb-4">
          A confirmation email will be sent to {order.shippingAddress?.email}.
        </p>

        <div className="sf-cart-summary p-4 text-start mb-4">
          <h6 className="fw-bold mb-3">Order Summary</h6>
          {order.items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="d-flex justify-content-between small mb-2">
              <span>
                {item.name} {item.size ? `(Size ${item.size})` : ""} &times; {item.quantity}
              </span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <span>Subtotal</span>
            <span>{formatCurrency(order.subtotal)}</span>
          </div>
        </div>

        <div className="d-flex gap-3 justify-content-center">
          <Link to="/shop" className="btn btn-dark rounded-pill px-4">
            Continue Shopping
          </Link>
          <Link to="/" className="btn btn-outline-dark rounded-pill px-4">
            Back Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default OrderSuccess;
