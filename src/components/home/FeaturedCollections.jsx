import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ImageWithFallback from "../common/ImageWithFallback";

const COLLECTIONS = [
  {
    index: "01",
    title: "Urban Collection",
    description:
      "Clean silhouettes and premium leather-knit blends designed to move seamlessly from street to studio.",
    image:
      "https://images.unsplash.com/photo-1770736559558-b5b76f9d9f95?auto=format&fit=crop&crop=entropy&w=1200&h=840&q=80",
    alt: "Urban Collection sneakers on wet city pavement",
    cta: "Shop Urban",
    to: "/shop?category=lifestyle",
  },
  {
    index: "02",
    title: "Trail Collection",
    description:
      "Rugged, waterproof builds with aggressive lug patterns engineered for unpredictable terrain.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&crop=entropy&w=1200&h=840&q=80",
    alt: "Trail collection shoe on forest trail with hiking backdrop",
    cta: "Shop Trail",
    to: "/shop?category=running",
    reverse: true,
  },
  {
    index: "03",
    title: "Elite Racing Collection",
    description:
      "Our lightest, fastest builds — developed alongside elite marathoners for record-setting performance.",
    image:
      "https://images.unsplash.com/photo-1744060204728-f68e434a3edf?auto=format&fit=crop&crop=entropy&w=1200&h=840&q=80",
    alt: "Elite Racing athlete sprinting on the track at golden hour",
    cta: "Shop Elite Racing",
    to: "/shop?category=running",
  },
];

function FeaturedCollections() {
  return (
    <section className="sf-section" id="collections">
      <div className="sf-container">
        <div className="sf-section-head">
          <span className="sf-eyebrow sf-eyebrow--dark">Featured Collections</span>
          <h2>Curated for the Way You Move</h2>
        </div>

        {COLLECTIONS.map((collection, idx) => (
          <motion.div
            key={collection.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className={`sf-collection-row ${collection.reverse ? "reverse" : ""}`}
          >
            <div className="sf-collection-media">
              <ImageWithFallback src={collection.image} alt={collection.alt} />
            </div>
            <div className="sf-collection-copy">
              <div className="sf-collection-index">{collection.index}</div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <Link to={collection.to} className="btn-sf btn-sf-dark">
                {collection.cta} <FaArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;
