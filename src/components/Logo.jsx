import { Link } from "react-router-dom";

// Text-based DigoIT logo treatment (no official asset provided).
// Replace the SVG mark with the official logo when available.
export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="DigoIT Solution — home">
      <svg className="logo__mark" viewBox="0 0 48 48" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="dgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563A6" />
            <stop offset="1" stopColor="#123B72" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#dgGrad)" />
        <text x="24" y="31" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="20" fill="#FFFFFF">D</text>
        <text x="33" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="13" fill="#FFC928">G</text>
      </svg>
      <span className="logo__text">
        <span className="logo__name">Digo<span>IT</span></span>
        <span className="logo__tag">Global Solutions</span>
      </span>
    </Link>
  );
}
