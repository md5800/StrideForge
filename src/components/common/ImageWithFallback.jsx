import { useState } from "react";

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
      <rect width="800" height="800" fill="#1a1d24"/>
      <g fill="none" stroke="#4a4f5a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
        <path d="M200 480 L260 400 L340 430 L420 360 L520 400 L600 480" />
        <ellipse cx="400" cy="500" rx="220" ry="40" />
      </g>
      <text x="400" y="600" fill="#6b7280" font-family="sans-serif" font-size="28" text-anchor="middle">
        Image unavailable
      </text>
    </svg>
  `);

function ImageWithFallback({ src, alt, className = "", style, loading = "lazy", ...rest }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={currentSrc || FALLBACK}
      alt={alt}
      className={`${className} ${loaded ? "img-loaded" : "img-loading"}`.trim()}
      style={style}
      loading={loading}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (currentSrc !== FALLBACK) {
          setCurrentSrc(FALLBACK);
        }
      }}
      {...rest}
    />
  );
}

export default ImageWithFallback;
