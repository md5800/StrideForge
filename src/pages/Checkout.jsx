import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/common/Breadcrumb";
import CartSummary from "../components/cart/CartSummary";
import { formatCurrency } from "../utils/formatCurrency";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const initialForm = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ...initialForm,
    fullName: user?.name || "",
    email: user?.email || "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const orderPlacedRef = useRef(false);

  useEffect(() => {
    if (items.length === 0 && !orderPlacedRef.current) {
      navigate("/cart");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCardNumberChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
    setForm((prev) => ({ ...prev, cardNumber: formatted }));
    setErrors((prev) => ({ ...prev, cardNumber: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.address.trim()) nextErrors.address = "Address is required";
    if (!form.city.trim()) nextErrors.city = "City is required";
    if (!form.state.trim()) nextErrors.state = "State is required";
    if (!/^\d{5}(-\d{4})?$/.test(form.zip)) nextErrors.zip = "Enter a valid ZIP code";
    if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, "")))
      nextErrors.cardNumber = "Enter a valid 16-digit card number";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) nextErrors.expiry = "Format: MM/YY";
    if (!/^\d{3,4}$/.test(form.cvv)) nextErrors.cvv = "Enter a valid CVV";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const orderId = `SF-${Math.floor(Math.random() * 900000 + 100000)}`;
    const order = {
      id: orderId,
      items,
      subtotal,
      shippingAddress: form,
    };
    sessionStorage.setItem("strideforge_last_order", JSON.stringify(order));

    setTimeout(() => {
      orderPlacedRef.current = true;
      clearCart();
      navigate("/order-success", { state: { orderId } });
    }, 900);
  };

  return (
    <div className="container py-5">
      <Breadcrumb items={[{ label: "Cart", to: "/cart" }, { label: "Checkout" }]} />
      <h1 className="fw-bold h3 mb-4">Checkout</h1>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="sf-checkout-section mb-4">
              <h5 className="fw-bold mb-3">Shipping Information</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Full Name</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                  />
                  {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-12">
                  <label className="form-label small fw-semibold">Street Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className={`form-control ${errors.address ? "is-invalid" : ""}`}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                <div className="col-md-5">
                  <label className="form-label small fw-semibold">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={`form-control ${errors.city ? "is-invalid" : ""}`}
                  />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold">State</label>
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={`form-control ${errors.state ? "is-invalid" : ""}`}
                  />
                  {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                </div>
                <div className="col-md-3">
                  <label className="form-label small fw-semibold">ZIP Code</label>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    placeholder="12345"
                    className={`form-control ${errors.zip ? "is-invalid" : ""}`}
                  />
                  {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                </div>
              </div>
            </div>

            <div className="sf-checkout-section">
              <h5 className="fw-bold mb-3">Payment Details</h5>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label small fw-semibold">Card Number</label>
                  <input
                    name="cardNumber"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    value={form.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                    className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                  />
                  {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Expiry (MM/YY)</label>
                  <input
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    placeholder="08/27"
                    className={`form-control ${errors.expiry ? "is-invalid" : ""}`}
                  />
                  {errors.expiry && <div className="invalid-feedback">{errors.expiry}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">CVV</label>
                  <input
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className={`form-control ${errors.cvv ? "is-invalid" : ""}`}
                  />
                  {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                </div>
              </div>
              <p className="text-muted small mt-3 mb-0">
                This is a demo checkout — no real payment is processed and card details are not
                stored.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sf-cart-summary p-4 mb-3">
              <h6 className="fw-bold mb-3">
                {items.reduce((sum, i) => sum + i.quantity, 0)} item(s)
              </h6>
              <div className="d-flex flex-column gap-2 mb-2" style={{ maxHeight: 220, overflowY: "auto" }}>
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="d-flex justify-content-between small">
                    <span className="text-truncate pe-2">
                      {item.name} {item.size ? `(Size ${item.size})` : ""} &times; {item.quantity}
                    </span>
                    <span className="text-nowrap">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
            <CartSummary subtotal={subtotal} showCheckoutButton={false} />
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-dark btn-lg w-100 rounded-pill mt-3"
            >
              {submitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
}

export default Checkout;
