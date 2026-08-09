import { fullLineup } from "../../data/lineupData";
import { useReveal } from "../../hooks/useReveal";
import "./FullLineup.css";

// Rendered inside Lineup as the closing typographic wall — not a standalone section.
export function FullLineup() {
  const revealRef = useReveal();

  return (
    <div className="full-lineup">
      <div className="full-lineup__head">
        <span className="micro-label">LINEUP COMPLETO</span>
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
  );
}
