import { stageData } from "../../data/stageData";
import { StageSection } from "./StageSection";
import { useReveal } from "../../hooks/useReveal";
import "./Stages.css";

export function Stages() {
  const headRef = useReveal();

  return (
    <section id="stages" className="stages section" data-theme="light" aria-labelledby="stages-title">
      <div className="container">
        <div ref={headRef} className="stages__head reveal">
          <p className="chapter-mark">CAPÍTULO 04 — OS MUNDOS</p>
          <span className="micro-label">QUATRO PALCOS</span>
          <h2 id="stages-title" className="stages__title">
            QUATRO MUNDOS.
            <br />
            UMA NOITE.
          </h2>
        </div>
      </div>

      <div className="stages__list">
        {stageData.map((stage, i) => (
          <StageSection key={stage.id} stage={stage} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
