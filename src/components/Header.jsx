import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import { services } from "../data/services.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close everything whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    function onClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") { setDropdownOpen(false); setMenuOpen(false); }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    "nav__link" + (isActive ? " is-active" : "");

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />

          <nav className={"nav" + (menuOpen ? " is-active" : "")} aria-label="Primary">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

            <div
              className={"nav__item" + (dropdownOpen ? " is-open" : "")}
              ref={dropdownRef}
            >
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <div className="dropdown" role="menu">
                <Link className="dropdown__link dropdown__link--all" to="/services">
                  <span className="dropdown__icon"><Icon name="globe" /></span>
                  <span>
                    <span className="dropdown__title">All Services</span>
                    <span className="dropdown__desc">Browse the full capability overview</span>
                  </span>
                </Link>
                {services.map((s) => (
                  <Link className="dropdown__link" to={s.to} key={s.id}>
                    <span className="dropdown__icon"><Icon name={s.icon} /></span>
                    <span>
                      <span className="dropdown__title">{s.title}</span>
                      <span className="dropdown__desc">{s.short}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="header-cta">
            <Link className="btn btn--primary" to="/contact">Contact Us</Link>
            <button
              type="button"
              className={"nav-toggle" + (menuOpen ? " is-active" : "")}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div
        className={"nav-backdrop" + (menuOpen ? " is-active" : "")}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
