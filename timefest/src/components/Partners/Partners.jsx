import { useReveal } from "../../hooks/useReveal";
import "./Partners.css";

// No confirmed sponsors yet — keep discreet placeholders.
// Flip SHOW_PARTNERS to false to hide the whole section once real logos land, or swap PLACEHOLDERS for real names.
const SHOW_PARTNERS = true;
const PLACEHOLDERS = ["PARTNER 01", "PARTNER 02", "PARTNER 03", "PARTNER 04"];

export function Partners() {
  const revealRef = useReveal();
  if (!SHOW_PARTNERS) return null;

  return (
    <section className="partners section" data-theme="light" aria-label="Partners">
      <div className="container">
        <div ref={revealRef} className="partners__inner reveal">
          <span className="micro-label">PARTNERS</span>
          <ul className="partners__list">
            {PLACEHOLDERS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
