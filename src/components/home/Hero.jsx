import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBolt } from "react-icons/fa";
import ImageWithFallback from "../common/ImageWithFallback";
import { products } from "../../data/products";

const spotlight = products.find((p) => p.isNew && p.isFeatured) || products[0];

function Hero() {
  return (
    <section className="sf-hero">
      <div className="sf-hero-grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center min-vh-75 py-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sf-hero-badge d-inline-flex align-items-center gap-2 mb-4">
                <span className="sf-badge-pill">New</span>
                <span className="small fw-medium text-white">
                  {spotlight.name} just dropped
                </span>
              </div>
              <h1 className="sf-hero-title mb-4">
                Engineered <br /> for Every <span className="text-accent">Stride.</span>
              </h1>
              <p className="text-secondary fs-5 mb-4 pe-lg-5">
                Precision-built performance footwear for runners, athletes, and everyday movers
                who refuse to slow down. Discover the science of stride.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link
                  to="/shop"
                  className="btn btn-dark btn-lg rounded-pill px-4 py-3 fw-semibold d-inline-flex align-items-center gap-2"
                >
                  Shop Now <FaArrowRight size={14} />
                </Link>
                <Link
                  to="/shop?category=running"
                  className="btn btn-outline-light btn-lg rounded-pill px-4 py-3"
                >
                  Explore Running
                </Link>
              </div>
              <div className="sf-hero-stats">
                <div>
                  <div className="stat-num">2.4M+</div>
                  <div className="stat-label">Miles Run in StrideForge</div>
                </div>
                <div>
                  <div className="stat-num">98%</div>
                  <div className="stat-label">Athlete Satisfaction</div>
                </div>
                <div>
                  <div className="stat-num">180+</div>
                  <div className="stat-label">Countries Shipped</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="sf-hero-media position-relative"
            >
              <div className="sf-hero-media-card">
                <ImageWithFallback
                  src={spotlight.images[0]}
                  alt={spotlight.name}
                  className="img-fluid"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sf-hero-stat-card"
              >
                <span className="sf-hero-stat-icon">
                  <FaBolt size={14} />
                </span>
                <div>
                  <div className="fw-bold small">Responsive Foam</div>
                  <div className="text-muted small">+18% energy return</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
