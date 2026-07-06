import { motion } from "framer-motion";
import { FaBolt, FaLeaf, FaHandshake } from "react-icons/fa";
import Breadcrumb from "../components/common/Breadcrumb";
import ImageWithFallback from "../components/common/ImageWithFallback";

const VALUES = [
  {
    icon: FaBolt,
    title: "Performance First",
    text: "Every silhouette is tested by real athletes before it ever reaches a shelf.",
  },
  {
    icon: FaLeaf,
    title: "Responsible Materials",
    text: "We're transitioning our core lineup to recycled mesh and bio-based foams by 2027.",
  },
  {
    icon: FaHandshake,
    title: "Built to Last",
    text: "Backed by a 1-year warranty and a no-hassle 30-day return policy.",
  },
];

function About() {
  return (
    <div>
      <div className="container py-5">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>

      <section className="container pb-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="sf-eyebrow sf-eyebrow--dark">Our Story</span>
              <h1 className="fw-bold mt-2 mb-3">Footwear built for real movement</h1>
              <p className="text-secondary">
                StrideForge started in a small workshop with one obsession: build shoes that
                disappear on your feet. A decade later, we design across running, basketball,
                training, and everyday lifestyle categories — but the obsession hasn't changed.
              </p>
              <p className="text-secondary">
                Every pair goes through hundreds of hours of wear-testing with amateur and pro
                athletes before it ships. If it doesn't hold up on our test crew, it doesn't hold
                up, period.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="StrideForge workshop"
                className="img-fluid rounded-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light-subtle">
        <div className="container">
          <div className="text-center mb-4">
            <span className="sf-eyebrow sf-eyebrow--dark">What We Stand For</span>
            <h2 className="fw-bold mt-2">Our Values</h2>
          </div>
          <div className="row g-4">
            {VALUES.map(({ icon: Icon, title, text }, idx) => (
              <div className="col-md-4" key={title}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="sf-testimonial-card h-100 text-center"
                >
                  <Icon size={28} className="mb-3 text-dark" />
                  <h5 className="fw-semibold">{title}</h5>
                  <p className="text-secondary mb-0">{text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
