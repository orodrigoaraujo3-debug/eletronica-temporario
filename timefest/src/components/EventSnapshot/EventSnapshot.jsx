import { eventData } from "../../data/eventData";
import { useReveal } from "../../hooks/useReveal";
import "./EventSnapshot.css";

const ICONS = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 21s7-6.6 7-12a7 7 0 10-14 0c0 5.4 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  ),
  stages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="8" cy="8" r="4.2" />
      <circle cx="16" cy="16" r="4.2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" />
    </svg>
  ),
  age: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10.5h.01M15 10.5h.01M8.5 15c1-1.2 6-1.2 7 0" strokeLinecap="round" />
    </svg>
  ),
};

function SnapshotItem({ icon, top, bottom }) {
  return (
    <div className="snapshot-item">
      <span className="snapshot-item__icon" aria-hidden="true">
        {ICONS[icon]}
      </span>
      <span className="snapshot-item__top">{top}</span>
      <span className="snapshot-item__bottom">{bottom}</span>
    </div>
  );
}

export function EventSnapshot() {
  const revealRef = useReveal();

  return (
    <section className="snapshot section" data-theme="light" aria-label="Event snapshot">
      <div className="container">
        <div ref={revealRef} className="snapshot__grid reveal">
          <SnapshotItem icon="calendar" top={eventData.date.display} bottom={eventData.date.weekday} />
          <SnapshotItem icon="pin" top={eventData.venue.name} bottom={eventData.venue.city.toUpperCase()} />
          <SnapshotItem icon="stages" top={`${eventData.stagesCount} STAGES`} bottom="ONE EXPERIENCE" />
          <SnapshotItem icon="clock" top={eventData.date.doors} bottom="DOORS" />
          <SnapshotItem icon="age" top={eventData.age} bottom="EVENT" />
        </div>
      </div>
    </section>
  );
}
