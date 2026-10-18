import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Adds a rise-and-fade reveal to the main content blocks of each page.
// Runs on every route change, so new pages animate in automatically.
// Blocks already in view (above the fold) reveal immediately on load.
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const selector =
      "main .hero__inner, main .page-banner__inner, main .section > .container";
    const targets = Array.from(document.querySelectorAll(selector));
    if (!targets.length) return;

    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      targets.forEach((el) => el.classList.add("reveal", "is-visible"));
      return;
    }

    targets.forEach((el) => el.classList.add("reveal"));

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);
}
