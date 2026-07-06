import { AnimatePresence } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import EmptyState from "../components/common/EmptyState";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext";

function Cart() {
  const { items, subtotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-5">
        <Breadcrumb items={[{ label: "Cart" }]} />
        <EmptyState
          icon={<FaShoppingBag />}
          title="Your cart is empty"
          message="Looks like you haven't added anything yet. Let's find your next pair."
        />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Breadcrumb items={[{ label: "Cart" }]} />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold h3 mb-0">Shopping Cart ({items.length})</h1>
        <button className="btn btn-link text-muted text-decoration-none" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <div className="row g-4">
        <div className="col-lg-8">
          <AnimatePresence>
            {items.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))}
          </AnimatePresence>
        </div>
        <div className="col-lg-4">
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
