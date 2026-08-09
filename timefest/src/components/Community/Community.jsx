import { assets } from "../../assets/manifest";
import { useReveal } from "../../hooks/useReveal";
import "./Community.css";

const FEED = [
  { src: assets.gallery.crowdHandsWide, tag: "VOID · 00:15" },
  { src: assets.gallery.duoCouple, tag: "PULSE" },
  { src: assets.gallery.hairMotion, tag: "CHROME" },
  { src: assets.gallery.crowdSunriseHands, tag: "RADIANCE · SUNRISE" },
  { src: assets.venue.interiorB, tag: "EXPOMINAS" },
  { src: assets.gallery.crowdBack, tag: "VOID" },
];

export function Community() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="community section" data-theme="light" aria-labelledby="community-title">
      <div className="container">
        <div ref={headRef} className="community__head reveal">
          <span className="micro-label">COMMUNITY</span>
          <h2 id="community-title" className="community__title">
            ONE NIGHT.
            <br />
            THOUSANDS OF STORIES.
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
    </section>
  );
}
