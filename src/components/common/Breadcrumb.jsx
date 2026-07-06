import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className="py-3">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none text-muted">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li
            key={item.label}
            className={`breadcrumb-item ${idx === items.length - 1 ? "active text-dark fw-semibold" : ""}`}
            aria-current={idx === items.length - 1 ? "page" : undefined}
          >
            {item.to && idx !== items.length - 1 ? (
              <Link to={item.to} className="text-decoration-none text-muted">
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
