import { useLayoutEffect, useRef } from "react";
import { ensureGsap } from "../../lib/gsapSetup";
import { assets } from "../../assets/manifest";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./TimeMoment.css";

const CLOCK_STEPS = ["23:59:57", "23:59:58", "23:59:59", "00:00:00"];

export function TimeMoment() {
  const sectionRef = useRef(null);
  const clockRef = useRef(null);
  const ringRef = useRef(null);
  const bloomRef = useRef(null);
  const captionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const clock = clockRef.current;
    const ring = ringRef.current;
    const bloom = bloomRef.current;
    const caption = captionRef.current;

    if (reducedMotion) {
      clock.textContent = CLOCK_STEPS[3];
      ring.style.opacity = "1";
      ring.style.transform = "scale(1.15)";
      bloom.style.opacity = "0.8";
      caption.style.opacity = "1";
      caption.style.transform = "none";
      return undefined;
    }

    const { gsap, ScrollTrigger } = ensureGsap();
    let lastStep = -1;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        const p = self.progress;
        const stepIdx = Math.min(3, Math.floor(p * 4));
        if (stepIdx !== lastStep) {
          clock.textContent = CLOCK_STEPS[stepIdx];
          lastStep = stepIdx;
        }

        const bloomP = gsap.utils.clamp(0, 1, gsap.utils.normalize(0.72, 1, p));
        ring.style.opacity = String(bloomP);
        ring.style.transform = `scale(${0.85 + bloomP * 0.4})`;
        bloom.style.opacity = String(bloomP * 0.85);
        caption.style.opacity = String(bloomP);
        caption.style.transform = `translateY(${(1 - bloomP) * 16}px)`;
        clock.style.transform = `scale(${1 + bloomP * 0.08})`;
        clock.style.color = bloomP > 0.5 ? "var(--afterglow)" : "var(--chrome)";
      },
    });

    return () => st.kill();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="time-moment"
      data-theme="dark"
      aria-label="The Time Moment"
    >
      <div className="time-moment__sticky">
        <img className="time-moment__bg" src={assets.textures.darkStreaksA} alt="" aria-hidden="true" />
        <div ref={bloomRef} className="time-moment__bloom" aria-hidden="true" />

        <span className="micro-label time-moment__label">THE TIME MOMENT</span>

        <div className="time-moment__center">
          <div ref={ringRef} className="time-moment__ring" aria-hidden="true">
            <img src={assets.objects3d.ringsConcentric} alt="" />
          </div>
          <p ref={clockRef} className="time-moment__clock" aria-live="off">
            {CLOCK_STEPS[0]}
          </p>
        </div>

        <p ref={captionRef} className="time-moment__caption">
          THIS IS THE MOMENT.
        </p>
      </div>
    </section>
  );
}
