import { assets } from "../../assets/manifest";
import { useReveal } from "../../hooks/useReveal";
import "./Installations.css";

export function Installations() {
  const headRef = useReveal();
  const row1Ref = useReveal();
  const row2Ref = useReveal();

  return (
    <section className="installations section" data-theme="light" aria-labelledby="installations-title">
      <div className="container">
        <div ref={headRef} className="installations__head reveal">
          <p className="chapter-mark">CHAPTER 05 — THE EXPERIENCE</p>
          <span className="micro-label">IMMERSIVE INSTALLATIONS</span>
          <h2 id="installations-title" className="installations__title">
            THE SPACE
            <br />
            REACTS TO YOU.
          </h2>
        </div>

        <div ref={row1Ref} className="installations__row reveal">
          <figure className="installations__media installations__media--lg">
            <img src={assets.installations.timeRingArch} alt="Time Ring Installation" loading="lazy" />
            <figcaption>Time Ring Installation</figcaption>
          </figure>
          <div className="installations__stack">
            <figure className="installations__media">
              <img src={assets.installations.lightGateCrowd} alt="Light Gate" loading="lazy" />
              <figcaption>Light Gate</figcaption>
            </figure>
            <figure className="installations__media">
              <img src={assets.installations.mirrorRoom} alt="Mirror Room" loading="lazy" />
              <figcaption>Mirror Room</figcaption>
            </figure>
          </div>
        </div>

        <div ref={row2Ref} className="installations__row installations__row--reverse reveal">
          <div className="installations__stack">
            <figure className="installations__media">
              <img src={assets.installations.chromeTunnel} alt="Chrome Tunnel" loading="lazy" />
              <figcaption>Chrome Tunnel</figcaption>
            </figure>
            <figure className="installations__media">
              <img src={assets.installations.pulseWall} alt="Pulse Wall" loading="lazy" />
              <figcaption>Pulse Wall</figcaption>
            </figure>
          </div>
          <figure className="installations__media installations__media--lg">
            <img src={assets.installations.prismRoom} alt="Prism Room" loading="lazy" />
            <figcaption>Prism Room</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
