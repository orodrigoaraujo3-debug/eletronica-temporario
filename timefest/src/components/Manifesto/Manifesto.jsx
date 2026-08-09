import { useReveal } from "../../hooks/useReveal";
import { assets } from "../../assets/manifest";
import { EventSnapshot } from "../EventSnapshot/EventSnapshot";
import "./Manifesto.css";

export function Manifesto() {
  const titleReveal = useReveal();
  const textReveal = useReveal();

  return (
    <section className="manifesto section" data-theme="light" aria-labelledby="manifesto-title">
      <div className="container manifesto__inner">
        <div className="manifesto__col">
          <p className="chapter-mark">CAPÍTULO 02 — A IDEIA</p>
          <div ref={titleReveal} className="reveal">
            <span className="micro-label">NOSSO MANIFESTO</span>
            <h2 id="manifesto-title" className="manifesto__title">
              Momentos.
              <br />
              Som.
              <br />
              Eternamente Você.
            </h2>
          </div>
        </div>

        <div ref={textReveal} className="manifesto__col manifesto__col--text reveal">
          <p className="manifesto__lead">
            TIME FEST é o encontro entre som, luz, espaço e pessoas. Uma noite criada para quem
            vive o presente e deixa o tempo desaparecer.
          </p>
          <p className="manifesto__sub">
            Quatro palcos.
            <br />
            Momentos infinitos.
            <br />
            Uma experiência.
          </p>
        </div>

        <div className="manifesto__object" aria-hidden="true">
          <img src={assets.objects3d.glassOrb} alt="" loading="lazy" />
        </div>

        <div className="manifesto__snapshot">
          <EventSnapshot />
        </div>
      </div>
    </section>
  );
}
