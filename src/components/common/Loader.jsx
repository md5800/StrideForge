function Loader({ full = false, label = "Loading..." }) {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center gap-3 ${
        full ? "py-5 my-5" : "py-4"
      }`}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ width: 48, height: 48, color: "var(--sf-accent)" }}
      >
        <span className="visually-hidden">{label}</span>
      </div>
      <p className="text-muted mb-0">{label}</p>
    </div>
  );
}

export default Loader;
