import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="sf-footer pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold text-white mb-3">
              Stride<span className="text-accent">Forge</span>
            </h4>
            <p className="text-secondary small mb-3">
              Performance footwear engineered for runners, ballers, and everyday movers. Built
              to go the distance — wherever yours takes you.
            </p>
            <div className="d-flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="sf-social-icon"
                  onClick={(e) => e.preventDefault()}
                  aria-label="social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Shop</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/shop?category=running" className="sf-footer-link">Running</Link></li>
              <li><Link to="/shop?category=basketball" className="sf-footer-link">Basketball</Link></li>
              <li><Link to="/shop?category=casual" className="sf-footer-link">Casual</Link></li>
              <li><Link to="/shop?category=kids" className="sf-footer-link">Kids</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/about" className="sf-footer-link">About Us</Link></li>
              <li><Link to="/contact" className="sf-footer-link">Contact</Link></li>
              <li><Link to="/shop" className="sf-footer-link">All Products</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Stay in the loop</h6>
            <p className="text-secondary small mb-3">
              Get early access to drops, restocks, and members-only pricing.
            </p>
            <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                className="form-control form-control-sm sf-newsletter-input"
              />
              <button className="btn btn-sm btn-light fw-semibold px-3 rounded-pill">Join</button>
            </form>
          </div>
        </div>

        <hr className="border-secondary my-4 opacity-25" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-secondary small">
          <span>&copy; {new Date().getFullYear()} StrideForge. All rights reserved.</span>
          <span>Built with React, Bootstrap 5 &amp; Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
