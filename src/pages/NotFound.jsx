import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";

export default function NotFound() {
  usePageMeta("Page Not Found | DigoIT Global", "The page you are looking for could not be found.");

  return (
    <section className="section">
      <div className="container notfound">
        <div className="notfound__code">4<span>0</span>4</div>
        <h1>Page not found</h1>
        <p className="lead mt-lg" style={{ maxWidth: "520px", marginInline: "auto" }}>
          The page you’re looking for doesn’t exist or may have moved. Let’s get you back on track.
        </p>
        <div className="btn-row mt-xl" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary btn--lg" to="/">Back to Home</Link>
          <Link className="btn btn--outline btn--lg" to="/services">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}
