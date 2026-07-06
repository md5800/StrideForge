import { FaMinus, FaPlus } from "react-icons/fa";

function QuantitySelector({ quantity, onChange, min = 1, max = 10 }) {
  return (
    <div className="sf-qty-selector d-inline-flex align-items-center">
      <button
        type="button"
        className="sf-qty-btn"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <FaMinus size={10} />
      </button>
      <span className="sf-qty-value">{quantity}</span>
      <button
        type="button"
        className="sf-qty-btn"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <FaPlus size={10} />
      </button>
    </div>
  );
}

export default QuantitySelector;
