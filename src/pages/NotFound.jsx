import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="fw-bold" style={{ fontSize: "6rem" }}>
          404
        </h1>
        <h3 className="fw-semibold mb-3">Page Not Found</h3>
        <p className="text-secondary mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-dark rounded-pill px-4">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
