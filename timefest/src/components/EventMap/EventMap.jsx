import { useState } from "react";
import { eventMapPoints } from "../../data/installationsData";
import { useReveal } from "../../hooks/useReveal";
import "./EventMap.css";

export function EventMap() {
  const [active, setActive] = useState(null);
  const revealRef = useReveal();

  return (
    <section className="event-map section" data-theme="light" aria-labelledby="event-map-title">
      <div className="container">
        <div ref={revealRef} className="event-map__head reveal">
          <span className="micro-label">EVENT MAP</span>
          <h2 id="event-map-title" className="event-map__title">
            KNOW THE GROUND.
          </h2>
          <p className="event-map__hint">Hover or tap a point to explore the layout.</p>
        </div>

        <div className="event-map__stage">
          <svg viewBox="0 0 100 100" className="event-map__svg" role="img" aria-label="Conceptual event floor plan">
            <rect x="4" y="4" width="92" height="92" rx="6" className="event-map__outline" />
            {eventMapPoints.map((p) => (
              <line
                key={`line-${p.id}`}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                className={`event-map__line ${active === p.id ? "is-active" : ""}`}
              />
            ))}
            {eventMapPoints.map((p) => (
              <g
                key={p.id}
                className={`event-map__point ${active === p.id ? "is-active" : ""}`}
                tabIndex={0}
                role="button"
                aria-label={p.label}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(p.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive((v) => (v === p.id ? null : p.id))}
              >
                <circle cx={p.x} cy={p.y} r={p.r} style={{ fill: p.tone }} />
                <circle cx={p.x} cy={p.y} r={p.r + 3.5} className="event-map__point-ring" />
              </g>
            ))}
          </svg>

          <div className="event-map__legend">
            {eventMapPoints.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`event-map__legend-item ${active === p.id ? "is-active" : ""}`}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive((v) => (v === p.id ? null : p.id))}
              >
                <span className="event-map__legend-dot" style={{ background: p.tone }} />
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
