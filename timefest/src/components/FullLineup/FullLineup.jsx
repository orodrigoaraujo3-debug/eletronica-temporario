import { fullLineup } from "../../data/lineupData";
import { useReveal } from "../../hooks/useReveal";
import "./FullLineup.css";

export function FullLineup() {
  const revealRef = useReveal();

  return (
    <section className="full-lineup section" data-theme="light" aria-label="Full lineup">
      <div className="container">
        <div className="full-lineup__head">
          <span className="micro-label">FULL LINEUP</span>
        </div>
        <p ref={revealRef} className="full-lineup__wall reveal">
          {fullLineup.map((name, i) => (
            <span key={name} className="full-lineup__name" style={{ "--i": i }}>
              {name}
              <span className="full-lineup__dot" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </p>
        <p className="full-lineup__note">
          Nomes sujeitos a confirmação. Lineup completo atualizado conforme novos anúncios oficiais.
        </p>
      </div>
    </section>
  );
}
