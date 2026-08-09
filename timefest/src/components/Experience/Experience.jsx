import { useReveal } from "../../hooks/useReveal";
import "./Experience.css";

const CONCEPTS = [
  { index: "01", name: "SOM", desc: "Engenharia de áudio de precisão em todo o espaço do evento.", size: "lg" },
  { index: "02", name: "LUZ", desc: "Quatro rigs, uma só linguagem de movimento e cor.", size: "sm" },
  { index: "03", name: "ARTE IMERSIVA", desc: "Instalações de grande escala que reagem e evoluem.", size: "sm" },
  { index: "04", name: "COMIDA & BEBIDA", desc: "Sabores selecionados para manter você em movimento.", size: "sm" },
  { index: "05", name: "COMUNIDADE", desc: "Uma família global unida pela música e pelo tempo.", size: "md" },
];

export function Experience() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="experience" className="experience section" data-theme="light" aria-labelledby="experience-title">
      <div className="container">
        <div ref={headRef} className="experience__head reveal">
          <span className="micro-label">A EXPERIÊNCIA DA NOITE</span>
          <h2 id="experience-title" className="experience__title">
            UMA JORNADA POR
            <br />
            SOM, ESPAÇO E TEMPO.
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
