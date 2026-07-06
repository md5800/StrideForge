function SizeSelector({ sizes, selected, onSelect }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          className={`sf-size-btn ${selected === size ? "sf-size-btn--active" : ""}`}
          onClick={() => onSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelector;
