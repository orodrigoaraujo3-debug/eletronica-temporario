import { useRef } from "react";
import { featuredArtists } from "../../data/lineupData";
import { ArtistCard } from "./ArtistCard";
import { useReveal } from "../../hooks/useReveal";
import "./Lineup.css";

export function Lineup() {
  const headRef = useReveal();
  const trackRef = useRef(null);

  const onWheel = (e) => {
    const track = trackRef.current;
    if (!track) return;
    // convert vertical wheel intent into horizontal scroll on desktop
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      track.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section id="lineup" className="lineup section" data-theme="light" aria-labelledby="lineup-title">
      <div className="container">
        <div ref={headRef} className="lineup__head reveal">
          <p className="chapter-mark">CHAPTER 03 — THE SOUND</p>
          <span className="micro-label">LINEUP / 2026</span>
          <h2 id="lineup-title" className="lineup__title">
            CURATED.
            <br />
            TIMELESS.
            <br />
            UNFORGETTABLE.
          </h2>
          <p className="lineup__sub">ARTISTS ACROSS FOUR WORLDS</p>
        </div>
      </div>

      <div className="lineup__track" ref={trackRef} onWheel={onWheel} tabIndex={0} aria-label="Featured artists, scroll horizontally">
        <div className="lineup__track-pad" aria-hidden="true" />
        {featuredArtists.map((a, i) => (
          <ArtistCard key={a.id} index={String(i + 1).padStart(2, "0")} name={a.name} style={a.style} image={a.image} />
        ))}
        <div className="lineup__track-pad" aria-hidden="true" />
      </div>
    </section>
  );
}
