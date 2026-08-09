import { useReveal } from "../../hooks/useReveal";
import { assets } from "../../assets/manifest";
import "./Manifesto.css";

export function Manifesto() {
  const titleReveal = useReveal();
  const textReveal = useReveal();

  return (
    <section className="manifesto section" data-theme="light" aria-labelledby="manifesto-title">
      <div className="container manifesto__inner">
        <div className="manifesto__col">
          <p className="chapter-mark">CHAPTER 02 — THE IDEA</p>
          <div ref={titleReveal} className="reveal">
            <span className="micro-label">OUR MANIFESTO</span>
            <h2 id="manifesto-title" className="manifesto__title">
              Moments.
              <br />
              Sound.
              <br />
              Eternally You.
            </h2>
          </div>
        </div>

        <div ref={textReveal} className="manifesto__col manifesto__col--text reveal">
          <p className="manifesto__lead">
            TIME FEST é o encontro entre som, luz, espaço e pessoas. Uma noite criada para quem
            vive o presente e deixa o tempo desaparecer.
          </p>
          <p className="manifesto__sub">
            Four stages.
            <br />
            Infinite moments.
            <br />
            One experience.
          </p>
        </div>

        <div className="manifesto__object" aria-hidden="true">
          <img src={assets.objects3d.glassOrb} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
