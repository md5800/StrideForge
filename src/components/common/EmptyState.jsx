import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function EmptyState({ icon, title, message, ctaLabel = "Continue Shopping", ctaTo = "/shop" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="text-center py-5 my-4"
    >
      <div className="fs-1 text-muted mb-3">{icon}</div>
      <h4 className="fw-semibold">{title}</h4>
      <p className="text-muted mb-4">{message}</p>
      <Link to={ctaTo} className="btn btn-dark rounded-pill px-4">
        {ctaLabel}
      </Link>
    </motion.div>
  );
}

export default EmptyState;
