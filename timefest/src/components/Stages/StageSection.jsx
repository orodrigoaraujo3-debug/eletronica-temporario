import { assets } from "../../assets/manifest";
import { useReveal } from "../../hooks/useReveal";

export function StageSection({ stage, reverse }) {
  const revealRef = useReveal();

  return (
    <article
      ref={revealRef}
      className={`stage-block reveal ${reverse ? "stage-block--reverse" : ""}`}
      id={stage.id}
    >
      <div className="stage-block__media">
        <img src={assets.stages[stage.image]} alt={`${stage.name} — ${stage.role}`} loading="lazy" />
      </div>
      <div className="stage-block__copy">
        <span className="stage-block__index" style={{ color: stage.swatch }}>
          {stage.index}
        </span>
        <h3 className="stage-block__name">{stage.name}</h3>
        <p className="stage-block__role">{stage.role}</p>
        <p className="stage-block__genre">{stage.genre}</p>
        <p className="stage-block__desc">{stage.description}</p>
      </div>
    </article>
  );
}
