import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ value = 0, reviews, size = 14 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} size={size} />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} size={size} />);
    } else {
      stars.push(<FaRegStar key={i} size={size} />);
    }
  }

  return (
    <span className="d-inline-flex align-items-center gap-1 rating">
      <span className="d-inline-flex text-warning gap-1">{stars}</span>
      {typeof reviews === "number" && (
        <span className="text-muted small ms-1">({reviews})</span>
      )}
    </span>
  );
}

export default Rating;
