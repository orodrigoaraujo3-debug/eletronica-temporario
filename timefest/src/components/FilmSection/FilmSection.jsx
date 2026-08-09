import { useLayoutEffect, useRef } from "react";
import { ensureGsap } from "../../lib/gsapSetup";
import { assets } from "../../assets/manifest";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./FilmSection.css";

export function FilmSection() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const labelRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const label = labelRef.current;

    if (reducedMotion) {
      frame.style.width = "92vw";
      frame.style.height = "56vh";
      frame.style.borderRadius = "var(--radius-lg)";
      return undefined;
    }

    const { gsap, ScrollTrigger } = ensureGsap();
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        const p = self.progress;
        const width = gsap.utils.interpolate(64, 100, p);
        const height = gsap.utils.interpolate(56, 100, p);
        const radius = gsap.utils.interpolate(28, 0, p);
        frame.style.width = `${width}vw`;
        frame.style.height = `${height}vh`;
        frame.style.borderRadius = `${radius}px`;
        label.style.opacity = String(1 - gsap.utils.clamp(0, 1, p * 2));
      },
    });

    return () => st.kill();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="film" data-theme="dark" aria-label="Enter the experience">
      <div className="film__sticky">
        <span ref={labelRef} className="micro-label film__label">
          ENTRE NA EXPERIÊNCIA
        </span>
        <div ref={frameRef} className="film__frame">
          <img src={assets.installations.timeRingHanging} alt="Instalação luminosa em anel suspensa sobre o público" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
