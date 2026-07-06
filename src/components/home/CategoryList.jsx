import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageWithFallback from "../common/ImageWithFallback";
import { categories } from "../../data/products";

function CategoryList() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="sf-eyebrow sf-eyebrow--dark">Browse</span>
            <h2 className="fw-bold mt-2 mb-0">Shop by Category</h2>
          </div>
        </div>
        <div className="row g-3">
          {categories.map((cat, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={cat.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Link to={`/shop?category=${cat.id}`} className="sf-category-card d-block">
                  <div className="sf-category-media">
                    <ImageWithFallback src={cat.image} alt={cat.name} />
                  </div>
                  <span className="sf-category-label">{cat.name}</span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
