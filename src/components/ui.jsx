import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

// Small reusable presentational building blocks shared across pages.

export function SectionHead({ eyebrow, title, children, center }) {
  return (
    <div className={"section-head" + (center ? " section-head--center" : "")}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function PageBanner({ bg, crumbs, title, children }) {
  return (
    <section className="page-banner">
      <div className="page-banner__bg" style={{ backgroundImage: `url('${bg}')` }} />
      <div className="container page-banner__inner">
        {crumbs && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
                {i < crumbs.length - 1 && <> &nbsp;/&nbsp; </>}
              </span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}

export function Feature({ icon, title, children }) {
  return (
    <div className="feature">
      <div className="feature__icon"><Icon name={icon} /></div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function Industry({ icon, title, children }) {
  return (
    <div className="industry">
      <div className="industry__icon"><Icon name={icon} /></div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function Steps({ steps }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Reveal with a staggered animation once the steps scroll into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={"steps" + (visible ? " is-visible" : "")} ref={ref}>
      {steps.map((s, i) => (
        <div className="step" key={i} style={{ "--d": `${i * 0.13}s` }}>
          <div className="step__num">{i + 1}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CTABand({ title, text, primary, secondary }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn-row">
            <Link className="btn btn--primary btn--lg" to={primary.to}>{primary.label}</Link>
            {secondary && (
              <Link className="btn btn--ghost-light btn--lg" to={secondary.to}>{secondary.label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}

// Split section with a text column and an image/media column.
export function Split({ eyebrow, title, mediaRight, media, badge, children }) {
  const text = (
    <div>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children}
    </div>
  );
  const mediaEl = (
    <div
      className={"media" + (badge ? " media--badge" : "")}
      data-badge={badge}
      style={{ backgroundImage: `url('${media}')` }}
    />
  );
  return (
    <div className="container split">
      {mediaRight ? <>{mediaEl}{text}</> : <>{text}{mediaEl}</>}
    </div>
  );
}
