import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";
import ImageWithFallback from "../common/ImageWithFallback";
import QuantitySelector from "../product/QuantitySelector";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      className="sf-cart-item d-flex gap-3 py-3 border-bottom"
    >
      <Link to={`/product/${item.id}`} className="sf-cart-item-media flex-shrink-0">
        <ImageWithFallback src={item.image} alt={item.name} />
      </Link>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <div>
            <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
              <h6 className="fw-semibold mb-1">{item.name}</h6>
            </Link>
            {item.size && <div className="text-muted small mb-2">Size: {item.size}</div>}
          </div>
          <button
            className="btn btn-sm btn-link text-muted p-0"
            onClick={() => removeFromCart(item.id, item.size)}
            aria-label="Remove item"
          >
            <FaTrashAlt size={14} />
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(qty) => updateQuantity(item.id, item.size, qty)}
          />
          <span className="fw-bold">{formatCurrency(item.price * item.quantity)}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default CartItem;
