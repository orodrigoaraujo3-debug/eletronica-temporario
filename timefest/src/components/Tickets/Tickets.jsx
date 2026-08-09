import { ticketData } from "../../data/ticketData";
import { eventData } from "../../data/eventData";
import { useReveal } from "../../hooks/useReveal";
import "./Tickets.css";

function TicketCard({ ticket }) {
  const ref = useReveal();
  return (
    <article ref={ref} className={`ticket-card reveal ${ticket.highlight ? "ticket-card--highlight" : ""}`}>
      {ticket.badge && <span className="ticket-card__badge">{ticket.badge}</span>}
      <div className="ticket-card__head">
        <span className="ticket-card__batch">{ticket.batch}</span>
        <h3 className="ticket-card__name">{ticket.name}</h3>
        <p className="ticket-card__price">{ticket.price ? `R$ ${ticket.price}` : "R$ —"}</p>
      </div>
      <ul className="ticket-card__features">
        {ticket.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <a href="#" className="btn btn--outline ticket-card__cta">
        GET TICKETS <span className="arrow">→</span>
      </a>
    </article>
  );
}

export function Tickets() {
  const headRef = useReveal();

  return (
    <section id="tickets" className="tickets section" data-theme="light" aria-labelledby="tickets-title">
      <div className="container">
        <div ref={headRef} className="tickets__head reveal">
          <p className="chapter-mark">CHAPTER 07 — YOUR ACCESS</p>
          <span className="micro-label">YOUR MOMENT AWAITS</span>
          <h2 id="tickets-title" className="tickets__title">
            BE PART
            <br />
            OF TIME.
          </h2>
          <p className="tickets__meta">
            {eventData.date.display} · {eventData.venue.name}
          </p>
        </div>

        <div className="tickets__grid">
          {ticketData.map((t) => (
            <TicketCard key={t.id} ticket={t} />
          ))}
        </div>

        <p className="tickets__note">
          Valores oficiais serão divulgados na abertura de cada lote. Os preços acima são apenas ilustrativos.
        </p>
      </div>
    </section>
  );
}
