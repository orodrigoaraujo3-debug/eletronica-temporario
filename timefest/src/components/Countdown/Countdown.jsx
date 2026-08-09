import { useEffect, useRef, useState } from "react";
import { eventData } from "../../data/eventData";
import { assets } from "../../assets/manifest";
import { useReveal } from "../../hooks/useReveal";
import { Community } from "../Community/Community";
import "./Countdown.css";

const TARGET = new Date(eventData.date.iso).getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const [time, setTime] = useState(getRemaining);
  const revealRef = useReveal();
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => setTime(getRemaining()), 1000);
    return () => window.clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="countdown section" data-theme="light" aria-labelledby="countdown-title">
      <div className="container">
        <div ref={revealRef} className="countdown__inner reveal">
          <p className="chapter-mark">CAPÍTULO 08 — A CONTAGEM</p>
          <span className="micro-label">CONTAGEM REGRESSIVA</span>
          <h2 id="countdown-title" className="visually-hidden">
            Contagem regressiva para o TIME FEST
          </h2>

          <div className="countdown__display">
            <img className="countdown__ring" src={assets.objects3d.ringTiltA} alt="" aria-hidden="true" />
            <div className="countdown__digits" role="timer" aria-live="off">
              <div className="countdown__unit">
                <span className="countdown__value">{pad(time.days)}</span>
                <span className="countdown__label">DIAS</span>
              </div>
              <span className="countdown__sep">:</span>
              <div className="countdown__unit">
                <span className="countdown__value">{pad(time.hours)}</span>
                <span className="countdown__label">HORAS</span>
              </div>
              <span className="countdown__sep">:</span>
              <div className="countdown__unit">
                <span className="countdown__value">{pad(time.minutes)}</span>
                <span className="countdown__label">MIN</span>
              </div>
              <span className="countdown__sep">:</span>
              <div className="countdown__unit">
                <span className="countdown__value">{pad(time.seconds)}</span>
                <span className="countdown__label">SEG</span>
              </div>
            </div>
          </div>
        </div>

        <Community />
      </div>
    </section>
  );
}
