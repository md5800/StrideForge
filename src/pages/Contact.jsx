import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import Breadcrumb from "../components/common/Breadcrumb";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm(initialForm);
      setSubmitting(false);
    }, 700);
  };

  return (
    <div className="container py-5">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="text-center mb-5">
        <span className="sf-eyebrow sf-eyebrow--dark">Get in Touch</span>
        <h1 className="fw-bold mt-2">We&apos;d Love to Hear From You</h1>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="d-flex flex-column gap-4"
          >
            <div className="sf-testimonial-card d-flex gap-3 align-items-start">
              <FaMapMarkerAlt size={20} className="text-dark flex-shrink-0 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Visit Us</h6>
                <p className="text-secondary mb-0 small">
                  482 Trailhead Avenue, Portland, OR 97201
                </p>
              </div>
            </div>
            <div className="sf-testimonial-card d-flex gap-3 align-items-start">
              <FaPhoneAlt size={20} className="text-dark flex-shrink-0 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Call Us</h6>
                <p className="text-secondary mb-0 small">+1 (503) 555-0198</p>
              </div>
            </div>
            <div className="sf-testimonial-card d-flex gap-3 align-items-start">
              <FaEnvelope size={20} className="text-dark flex-shrink-0 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Email Us</h6>
                <p className="text-secondary mb-0 small">support@strideforge.example</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-lg-8">
          <motion.form
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="sf-checkout-section"
          >
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Name</label>
                <input
                  required
                  className="form-control"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label small fw-semibold">Email</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Subject</label>
                <input
                  required
                  className="form-control"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>
              <div className="col-12">
                <label className="form-label small fw-semibold">Message</label>
                <textarea
                  required
                  rows={5}
                  className="form-control"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-dark btn-lg rounded-pill px-4 mt-3"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
