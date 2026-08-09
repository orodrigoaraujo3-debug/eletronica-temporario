import { assets } from "../../assets/manifest";
import { useReveal } from "../../hooks/useReveal";
import "./Community.css";

const FEED = [
  { src: assets.gallery.crowdHandsWide, tag: "VOID · 00:15" },
  { src: assets.gallery.duoCouple, tag: "PULSE" },
  { src: assets.gallery.hairMotion, tag: "CHROME" },
  { src: assets.gallery.crowdSunriseHands, tag: "RADIANCE · AMANHECER" },
  { src: assets.venue.interiorB, tag: "EXPOMINAS" },
  { src: assets.gallery.crowdBack, tag: "VOID" },
];

// Rendered inside Countdown as the closing block of Chapter 08 — not a standalone section.
export function Community() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <div className="community">
      <div ref={headRef} className="community__head reveal">
        <span className="micro-label">COMUNIDADE</span>
        <h2 id="community-title" className="community__title">
          UMA NOITE.
          <br />
          MILHARES DE HISTÓRIAS.
        </h2>
      </div>

      <div ref={gridRef} className="community__grid reveal">
        {FEED.map((item, i) => (
          <figure key={i} className="community__card">
            <img src={item.src} alt="" loading="lazy" />
            <figcaption>{item.tag}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
