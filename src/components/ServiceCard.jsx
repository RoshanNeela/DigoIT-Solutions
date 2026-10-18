import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

// Service card linking to the service's detail page or anchored section.
// Pass showPoints to display the service's key benefits.
export default function ServiceCard({ service, cta = "Read more", showPoints = false }) {
  const isPage = service.to.startsWith("/services/");
  return (
    <Link className="card card--accent" to={service.to}>
      <div className="card__icon"><Icon name={service.icon} /></div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      {showPoints && service.points && (
        <ul className="card__list card__list--divided">
          {service.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
      <span className="card__link">
        {isPage ? "View detail page" : cta} <Icon name="arrow" />
      </span>
    </Link>
  );
}
