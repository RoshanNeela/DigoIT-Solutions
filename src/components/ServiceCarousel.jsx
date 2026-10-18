import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import Icon from "./Icon.jsx";
import { services } from "../data/services.js";

function getPerView(w) {
  if (w >= 992) return 3;
  if (w >= 600) return 2;
  return 1;
}

// Auto-advancing, responsive carousel of service cards.
// Autoplay pauses on hover/focus and respects prefers-reduced-motion.
export default function ServiceCarousel() {
  const [perView, setPerView] = useState(
    typeof window !== "undefined" ? getPerView(window.innerWidth) : 3
  );
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const touchX = useRef(null);

  const maxIndex = Math.max(0, services.length - perView);

  // Responsive: recompute cards-per-view on resize.
  useEffect(() => {
    const onResize = () => setPerView(getPerView(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Keep the active index within bounds when perView changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Autoplay.
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || maxIndex === 0) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const go = (i) => setIndex(Math.max(0, Math.min(i, maxIndex)));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchX.current = null;
  };

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our key services"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <button className="carousel__btn carousel__btn--prev" aria-label="Previous services" onClick={prev}>
        <Icon name="chevronLeft" />
      </button>

      <div className="carousel__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {services.map((s) => (
            <div className="carousel__slide" style={{ flex: `0 0 ${100 / perView}%` }} key={s.id}>
              <ServiceCard service={s} cta="Explore service" showPoints />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel__btn carousel__btn--next" aria-label="Next services" onClick={next}>
        <Icon name="chevronRight" />
      </button>

      <div className="carousel__dots" role="tablist" aria-label="Select slide">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={"carousel__dot" + (i === index ? " is-active" : "")}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
