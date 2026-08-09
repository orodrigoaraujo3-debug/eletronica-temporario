import { eventData } from "../../data/eventData";
import { useReveal } from "../../hooks/useReveal";
import "./GoogleMap.css";

export function GoogleMap() {
  const revealRef = useReveal();
  const { mapQuery, lat, lng } = eventData.venue;
  const encodedQuery = encodeURIComponent(mapQuery);

  const embedSrc = `https://www.google.com/maps?q=${encodedQuery}&z=16&output=embed`;
  const openSrc = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  const directionsSrc = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="gmap section" data-theme="light" aria-labelledby="gmap-title">
      <div className="container">
        <div ref={revealRef} className="gmap__head reveal">
          <span className="micro-label">GET THERE</span>
          <h2 id="gmap-title" className="gmap__title">
            FIND YOUR WAY.
          </h2>
        </div>

        <div className="gmap__frame">
          <iframe
            title="Expominas — Belo Horizonte no Google Maps"
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="gmap__actions">
          <a className="btn btn--outline" href={openSrc} target="_blank" rel="noreferrer">
            OPEN IN GOOGLE MAPS <span className="arrow">→</span>
          </a>
          <a className="btn btn--primary" href={directionsSrc} target="_blank" rel="noreferrer">
            DIRECTIONS <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
