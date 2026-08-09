import { eventData } from "../../data/eventData";
import { useReveal } from "../../hooks/useReveal";
import "./GoogleMap.css";

// Rendered inside Venue's "location" block — not a standalone section.
export function GoogleMap() {
  const revealRef = useReveal();
  const { mapQuery, lat, lng } = eventData.venue;
  const encodedQuery = encodeURIComponent(mapQuery);

  const embedSrc = `https://www.google.com/maps?q=${encodedQuery}&z=16&output=embed`;
  const openSrc = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  const directionsSrc = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div ref={revealRef} className="gmap reveal">
      <span className="micro-label">COMO CHEGAR</span>
      <h3 className="gmap__title">ENCONTRE SEU CAMINHO.</h3>

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
          ABRIR NO GOOGLE MAPS <span className="arrow">→</span>
        </a>
        <a className="btn btn--primary" href={directionsSrc} target="_blank" rel="noreferrer">
          TRAÇAR ROTA <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
}
