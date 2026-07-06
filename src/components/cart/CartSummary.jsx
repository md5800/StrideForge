import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

function CartSummary({ subtotal, showCheckoutButton = true }) {
  const shipping = subtotal > 0 && subtotal < 100 ? 8.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="sf-cart-summary p-4">
      <h5 className="fw-bold mb-4">Order Summary</h5>
      <div className="d-flex justify-content-between mb-2 text-secondary">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="d-flex justify-content-between mb-2 text-secondary">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
      </div>
      <div className="d-flex justify-content-between mb-3 text-secondary">
        <span>Estimated Tax</span>
        <span>{formatCurrency(tax)}</span>
      </div>
      {subtotal > 0 && subtotal < 100 && (
        <p className="small text-success mb-3">
          Add {formatCurrency(100 - subtotal)} more for free shipping!
        </p>
      )}
      <hr />
      <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
      {showCheckoutButton && (
        <Link
          to="/checkout"
          className={`btn btn-dark btn-lg w-100 rounded-pill py-3 ${subtotal === 0 ? "disabled" : ""}`}
          aria-disabled={subtotal === 0}
          onClick={(e) => subtotal === 0 && e.preventDefault()}
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}

export default CartSummary;
