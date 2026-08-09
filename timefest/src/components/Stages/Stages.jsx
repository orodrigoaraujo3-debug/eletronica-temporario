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
          <p className="chapter-mark">CHAPTER 04 — THE WORLDS</p>
          <span className="micro-label">FOUR STAGES</span>
          <h2 id="stages-title" className="stages__title">
            FOUR WORLDS.
            <br />
            ONE NIGHT.
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
