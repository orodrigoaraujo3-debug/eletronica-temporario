import { useReveal } from "../../hooks/useReveal";
import "./Experience.css";

const CONCEPTS = [
  { index: "01", name: "SOUND", desc: "Precision audio engineering across the entire venue.", size: "lg" },
  { index: "02", name: "LIGHT", desc: "Four rigs, one language of movement and color.", size: "sm" },
  { index: "03", name: "IMMERSIVE ART", desc: "Large-scale installations that react and evolve.", size: "sm" },
  { index: "04", name: "FOOD & DRINKS", desc: "Curated flavors to keep you moving.", size: "sm" },
  { index: "05", name: "COMMUNITY", desc: "A global family united by music and time.", size: "md" },
];

export function Experience() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="experience" className="experience section" data-theme="light" aria-labelledby="experience-title">
      <div className="container">
        <div ref={headRef} className="experience__head reveal">
          <span className="micro-label">THE NIGHT EXPERIENCE</span>
          <h2 id="experience-title" className="experience__title">
            A JOURNEY THROUGH
            <br />
            SOUND, SPACE AND TIME.
          </h2>
        </div>

        <div ref={gridRef} className="experience__grid reveal">
          {CONCEPTS.map((c) => (
            <div key={c.name} className={`experience__item experience__item--${c.size}`}>
              <span className="experience__index">{c.index}</span>
              <h3 className="experience__name">{c.name}</h3>
              <p className="experience__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
