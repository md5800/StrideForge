import { FaTruck, FaUndo, FaShieldAlt, FaLock, FaAward } from "react-icons/fa";

const GUARANTEES = [
  { icon: FaTruck, label: "Free Shipping Worldwide" },
  { icon: FaUndo, label: "30-Day Returns" },
  { icon: FaShieldAlt, label: "2-Year Warranty" },
  { icon: FaLock, label: "Secure Checkout" },
  { icon: FaAward, label: "Award Winning Design" },
];

function TrustBar() {
  return (
    <section className="sf-trustbar" aria-label="Store guarantees">
      <div className="sf-container">
        <ul>
          {GUARANTEES.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={16} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustBar;
