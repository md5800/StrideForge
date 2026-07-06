import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageWithFallback from "../common/ImageWithFallback";

function PromoBanner() {
  return (
    <section className="py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sf-promo-banner position-relative overflow-hidden rounded-4"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1600&q=80&auto=format&fit=crop"
            alt="Training collection"
            className="sf-promo-img"
          />
          <div className="sf-promo-overlay d-flex flex-column justify-content-center p-4 p-md-5">
            <span className="sf-eyebrow">Limited Time</span>
            <h2 className="text-white fw-bold mt-3 mb-3" style={{ maxWidth: 420 }}>
              Up to 30% off select training gear
            </h2>
            <div>
              <Link to="/shop?category=training" className="btn btn-dark rounded-pill px-4 py-3 fw-semibold">
                Shop the Sale
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PromoBanner;
