import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're subscribed! Watch your inbox for drops.");
    setEmail("");
  };

  return (
    <section className="sf-newsletter py-5">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="fw-bold text-white mb-2">Join the StrideForge Club</h2>
          <p className="text-secondary mb-4">
            10% off your first order, plus early access to new drops.
          </p>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column flex-sm-row gap-2 justify-content-center mx-auto"
            style={{ maxWidth: 460 }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-control form-control-lg sf-newsletter-input"
            />
            <button type="submit" className="btn btn-light btn-lg fw-semibold px-4 rounded-pill">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
