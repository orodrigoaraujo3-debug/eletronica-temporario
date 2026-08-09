import { assets } from "../../assets/manifest";
import { eventData } from "../../data/eventData";
import { useReveal } from "../../hooks/useReveal";
import { Newsletter } from "../Newsletter/Newsletter";
import "./FinalCTA.css";

export function FinalCTA() {
  const revealRef = useReveal();

  return (
    <section className="final-cta" data-theme="dark" aria-labelledby="final-cta-title">
      <div className="final-cta__bg" aria-hidden="true">
        <img src={assets.textures.darkStreaksB} alt="" />
      </div>

      <div className="container final-cta__newsletter-wrap">
        <Newsletter />
      </div>

      <div ref={revealRef} className="container final-cta__inner reveal">
        <img className="final-cta__ring" src={assets.objects3d.ringFront} alt="" aria-hidden="true" />

        <h2 id="final-cta-title" className="final-cta__title">
          TIME IS
          <br />
          RUNNING.
        </h2>

        <p className="final-cta__meta">
          {eventData.date.display}
          <br />
          {eventData.venue.name} · {eventData.venue.city.toUpperCase()}
        </p>

        <a href="#tickets" className="btn btn--ghost-light final-cta__btn">
          GARANTA SEU INGRESSO <span className="arrow">→</span>
        </a>

        <p className="final-cta__signature">{eventData.signature}</p>
      </div>
    </section>
  );
}
