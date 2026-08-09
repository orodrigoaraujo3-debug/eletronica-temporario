import { assets } from "../../assets/manifest";
import { eventData, infoFacilities } from "../../data/eventData";
import { useReveal } from "../../hooks/useReveal";
import { GoogleMap } from "../GoogleMap/GoogleMap";
import { EventMap } from "../EventMap/EventMap";
import "./Venue.css";

export function Venue() {
  const headRef = useReveal();
  const mediaRef = useReveal();
  const factsRef = useReveal();

  return (
    <section id="venue" className="venue section" data-theme="light" aria-labelledby="venue-title">
      <div className="container">
        <div ref={headRef} className="venue__head reveal">
          <p className="chapter-mark">CAPÍTULO 06 — O LUGAR</p>
          <span className="micro-label">O LOCAL</span>
          <h2 id="venue-title" className="venue__title">
            {eventData.venue.name}
            <br />
            {eventData.venue.city.toUpperCase()}
          </h2>
        </div>

        <div ref={mediaRef} className="venue__media reveal">
          <figure className="venue__media-item venue__media-item--lg">
            <img src={assets.venue.portalA} alt="Portal de entrada do Expominas à noite" loading="lazy" />
          </figure>
          <figure className="venue__media-item">
            <img src={assets.venue.exteriorA} alt="Fachada externa do Expominas à noite" loading="lazy" />
          </figure>
          <figure className="venue__media-item">
            <img src={assets.venue.interiorA} alt="Interior do Expominas transformado para o evento" loading="lazy" />
          </figure>
        </div>

        <div ref={factsRef} className="venue__facts reveal">
          <div className="venue__address">
            <p>{eventData.venue.name}</p>
            <p>
              {eventData.venue.address}
              <br />
              {eventData.venue.neighborhood}
              <br />
              {eventData.venue.city} — {eventData.venue.state}
            </p>
          </div>
          <div className="venue__data">
            <span>{eventData.date.display}</span>
            <span>{eventData.date.doors}</span>
            <span>{eventData.age}</span>
          </div>
        </div>

        <ul className="venue__facilities">
          {infoFacilities.map((f) => (
            <li key={f.label} className="venue__facility">
              <span className="venue__facility-label">{f.label}</span>
              <span className="venue__facility-note">{f.note}</span>
            </li>
          ))}
        </ul>
        <p className="venue__facilities-disclaimer">
          Serviços demonstrativos — sujeitos a confirmação oficial antes do evento.
        </p>

        <div className="venue__location">
          <GoogleMap />
          <EventMap />
        </div>
      </div>
    </section>
  );
}
