import { useEffect, useRef } from "react";
import { featuredArtists } from "../../data/lineupData";
import { ArtistCard } from "./ArtistCard";
import { FullLineup } from "../FullLineup/FullLineup";
import { useReveal } from "../../hooks/useReveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./Lineup.css";

const AUTO_SCROLL_SPEED = 0.5; // px per frame (~30px/s at 60fps) — slow, editorial pace
const RESUME_DELAY = 2200; // ms of inactivity before auto-scroll resumes after user interaction

export function Lineup() {
  const headRef = useReveal();
  const trackRef = useRef(null);
  const setARef = useRef(null);
  const reducedMotion = useReducedMotion();

  const onWheel = (e) => {
    const track = trackRef.current;
    if (!track) return;
    // convert vertical wheel intent into horizontal scroll on desktop
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      track.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  // ---- automatic, seamlessly looping horizontal scroll ----
  useEffect(() => {
    if (reducedMotion) return undefined;
    const track = trackRef.current;
    const setA = setARef.current;
    if (!track || !setA) return undefined;

    let rafId = null;
    let paused = false;
    let resumeTimer = null;
    let setWidth = 0;

    const measure = () => {
      // exact width of one full artist set — the loop resets by this amount,
      // so set B picks up pixel-perfect where set A left off (no jump/jitter)
      setWidth = setA.getBoundingClientRect().width;
    };
    measure();

    const tick = () => {
      if (!paused && setWidth > 0) {
        track.scrollLeft += AUTO_SCROLL_SPEED;
        if (track.scrollLeft >= setWidth) {
          track.scrollLeft -= setWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const scheduleResume = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, RESUME_DELAY);
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", scheduleResume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", scheduleResume);
    track.addEventListener("wheel", scheduleResume);
    track.addEventListener("pointerdown", pause);
    track.addEventListener("pointerup", scheduleResume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", scheduleResume);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer) clearTimeout(resumeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [reducedMotion]);

  const cards = (offset) =>
    featuredArtists.map((a, i) => (
      <ArtistCard
        key={`${a.id}-${offset}`}
        index={String(i + 1).padStart(2, "0")}
        name={a.name}
        style={a.style}
        image={a.image}
      />
    ));

  return (
    <section id="lineup" className="lineup section" data-theme="light" aria-labelledby="lineup-title">
      <div className="container">
        <div ref={headRef} className="lineup__head reveal">
          <p className="chapter-mark">CAPÍTULO 03 — O SOM</p>
          <span className="micro-label">LINEUP / 2026</span>
          <h2 id="lineup-title" className="lineup__title">
            CURADO.
            <br />
            ATEMPORAL.
            <br />
            INESQUECÍVEL.
          </h2>
          <p className="lineup__sub">ARTISTAS EM QUATRO MUNDOS</p>
        </div>
      </div>

      <div
        className="lineup__track"
        ref={trackRef}
        onWheel={onWheel}
        tabIndex={0}
        aria-label="Artistas em destaque — rolagem automática, role manualmente se preferir"
      >
        <div className="lineup__track-pad" aria-hidden="true" />
        <div className="lineup__set" ref={setARef}>
          {cards("a")}
        </div>
        {/* duplicated set enables the seamless auto-scroll loop */}
        <div className="lineup__set" aria-hidden="true">
          {cards("b")}
        </div>
      </div>

      <div className="container">
        <FullLineup />
      </div>
    </section>
  );
}
