import { useMemo, useState } from "react";
import { timetableData } from "../../data/timetableData";
import { stageFilters } from "../../data/stageData";
import { useReveal } from "../../hooks/useReveal";
import "./Timetable.css";

export function Timetable() {
  const [filter, setFilter] = useState("TODOS");
  const headRef = useReveal();
  const listRef = useReveal();

  const rows = useMemo(
    () => timetableData.filter((row) => filter === "TODOS" || row.stage === filter || row.stage === "TODOS"),
    [filter]
  );

  return (
    <section className="timetable section" data-theme="light" aria-labelledby="timetable-title">
      <div className="container">
        <div ref={headRef} className="timetable__head reveal">
          <span className="micro-label">PROGRAMAÇÃO</span>
          <h2 id="timetable-title" className="timetable__title">
            SUA NOITE
            <br />
            NO TEMPO.
          </h2>

          <div className="timetable__filters" role="group" aria-label="Filtrar por palco">
            {stageFilters.map((f) => (
              <button
                key={f}
                type="button"
                className={`timetable__filter ${filter === f ? "is-active" : ""}`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ol ref={listRef} className="timetable__list reveal">
          {rows.map((row) => (
            <li key={`${row.time}-${row.title}`} className="timetable__row">
              <span className="timetable__time">{row.time}</span>
              <span className="timetable__title-text">{row.title}</span>
              <span className="timetable__stage">{row.stage}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
