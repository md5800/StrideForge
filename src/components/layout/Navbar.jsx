import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=running", label: "Running", category: "running" },
  { to: "/shop?category=basketball", label: "Basketball", category: "basketball" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const activeCategory = new URLSearchParams(location.search).get("category");

  const isLinkActive = (link) => {
    if (link.to === "/") return location.pathname === "/";
    if (link.category) return location.pathname === "/shop" && activeCategory === link.category;
    if (link.to === "/shop") return location.pathname === "/shop" && !activeCategory;
    return location.pathname === link.to;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
    setMenuOpen(false);
  };

  return (
    <header className={`sf-navbar sticky-top ${scrolled ? "sf-navbar--scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4 d-flex align-items-center">
            <span>Stride</span>
            <span className="text-accent">Forge</span>
          </Link>

          <button
            className="navbar-toggler border-0 d-lg-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
            <ul className="navbar-nav d-flex flex-row gap-4">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.label}>
                  <NavLink
                    to={link.to}
                    className={`nav-link px-0 fw-medium ${isLinkActive(link) ? "sf-nav-active" : ""}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <form onSubmit={handleSearch} className="sf-search d-flex align-items-center">
              <FaSearch className="text-muted" size={14} />
              <input
                type="search"
                placeholder="Search shoes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control form-control-sm border-0 shadow-none bg-transparent"
              />
            </form>

            <Link to="/wishlist" className="sf-icon-btn position-relative" aria-label="Wishlist">
              <FaHeart size={18} />
              {wishlistItems.length > 0 && (
                <span className="sf-badge">{wishlistItems.length}</span>
              )}
            </Link>

            <Link to="/cart" className="sf-icon-btn position-relative" aria-label="Cart">
              <FaShoppingBag size={18} />
              {itemCount > 0 && <span className="sf-badge">{itemCount}</span>}
            </Link>

            <div className="dropdown">
              <button
                className="sf-icon-btn dropdown-toggle-nocaret"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Account"
              >
                <FaUser size={16} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2">
                {isAuthenticated ? (
                  <>
                    <li className="px-3 py-1 text-muted small">Hi, {user.name.split(" ")[0]}</li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Create Account
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="d-lg-none sf-mobile-menu overflow-hidden"
          >
            <div className="container py-3">
              <form onSubmit={handleSearch} className="sf-search d-flex align-items-center mb-3">
                <FaSearch className="text-muted" size={14} />
                <input
                  type="search"
                  placeholder="Search shoes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control form-control-sm border-0 shadow-none bg-transparent"
                />
              </form>
              <ul className="navbar-nav gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="nav-link py-2 fw-medium"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="d-flex gap-3 mt-2">
                  <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="nav-link py-2">
                    Wishlist ({wishlistItems.length})
                  </Link>
                  <Link to="/cart" onClick={() => setMenuOpen(false)} className="nav-link py-2">
                    Cart ({itemCount})
                  </Link>
                </li>
                <li className="mt-2">
                  {isAuthenticated ? (
                    <div className="d-flex gap-3">
                      <Link to="/profile" onClick={() => setMenuOpen(false)} className="nav-link py-2">
                        My Account
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex gap-3">
                      <Link to="/login" onClick={() => setMenuOpen(false)} className="btn btn-sm btn-dark">
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setMenuOpen(false)}
                        className="btn btn-sm btn-outline-dark"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
