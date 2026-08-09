import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ensureGsap } from "../../lib/gsapSetup";
import { heroFrames, assets } from "../../assets/manifest";
import { eventData } from "../../data/eventData";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./HeroSequence.css";

const TOTAL = heroFrames.length; // auto-discovered — never hardcoded
const STATIC_FRAME_INDEX = Math.floor(TOTAL * 0.4);

export function HeroSequence() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const fadeOverlayRef = useRef(null);
  const contentRef = useRef(null);
  const ringRef = useRef(null);

  const imagesRef = useRef([]); // Image[] parallel to heroFrames
  const loadedRef = useRef(new Uint8Array(TOTAL));
  const rafRef = useRef(null);
  const pendingFrameRef = useRef(0);
  const lastDrawnRef = useRef(-1);

  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // ---- object-fit: cover draw, DPR-aware ----
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = getBestAvailable(index);
    if (!img) return;

    const isMobile = window.innerWidth < 760;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    const targetW = Math.round(cssW * dpr);
    const targetH = Math.round(cssH * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cssW / cssH;
    let drawW, drawH, dx, dy;
    if (imgRatio > canvasRatio) {
      drawH = cssH;
      drawW = cssH * imgRatio;
      dx = (cssW - drawW) / 2;
      dy = 0;
    } else {
      drawW = cssW;
      drawH = cssW / imgRatio;
      dx = 0;
      dy = (cssH - drawH) / 2;
    }
    ctx.drawImage(img, dx, dy, drawW, drawH);
    lastDrawnRef.current = index;
  };

  const getBestAvailable = (index) => {
    if (loadedRef.current[index]) return imagesRef.current[index];
    // fall back to nearest already-loaded frame so the canvas is never blank
    for (let d = 1; d < TOTAL; d++) {
      const lo = index - d;
      const hi = index + d;
      if (lo >= 0 && loadedRef.current[lo]) return imagesRef.current[lo];
      if (hi < TOTAL && loadedRef.current[hi]) return imagesRef.current[hi];
    }
    return null;
  };

  const scheduleDraw = (index) => {
    pendingFrameRef.current = index;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      drawFrame(pendingFrameRef.current);
    });
  };

  // ---- preload: first frame -> priority spread -> everything else ----
  useEffect(() => {
    let cancelled = false;
    const images = new Array(TOTAL);
    imagesRef.current = images;

    const loadOne = (i) =>
      new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          loadedRef.current[i] = 1;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = heroFrames[i];
        images[i] = img;
      });

    async function run() {
      // 1) first frame, blocking the loading screen
      await loadOne(0);
      if (cancelled) return;
      setLoadProgress(1 / TOTAL);
      scheduleDraw(0);

      // 2) priority spread across the whole range (~1 every 4 frames)
      const priority = [];
      for (let i = 0; i < TOTAL; i += 4) priority.push(i);
      let done = 1;
      await Promise.all(
        priority
          .filter((i) => i !== 0)
          .map((i) =>
            loadOne(i).then(() => {
              done += 1;
              if (!cancelled) setLoadProgress(done / TOTAL);
            })
          )
      );
      if (cancelled) return;
      setReady(true);

      // 3) fill in the remaining frames quietly in the background
      const remaining = [];
      for (let i = 0; i < TOTAL; i++) if (!loadedRef.current[i]) remaining.push(i);

      const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 60));
      let cursor = 0;
      const step = () => {
        if (cancelled) return;
        const batchEnd = Math.min(cursor + 6, remaining.length);
        const batch = remaining.slice(cursor, batchEnd);
        cursor = batchEnd;
        Promise.all(batch.map(loadOne)).then(() => {
          if (cancelled) return;
          setLoadProgress((p) => Math.min(1, p + batch.length / TOTAL));
          if (cursor < remaining.length) idle(step);
        });
      };
      if (remaining.length) idle(step);
    }

    run();
    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- scroll-scrub via ScrollTrigger (skipped under reduced motion) ----
  useLayoutEffect(() => {
    if (!ready) return undefined;

    if (reducedMotion) {
      scheduleDraw(STATIC_FRAME_INDEX);
      return undefined;
    }

    const { gsap, ScrollTrigger } = ensureGsap();
    const section = sectionRef.current;
    const content = contentRef.current;
    const fade = fadeOverlayRef.current;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.35,
      onUpdate: (self) => {
        const idx = Math.min(TOTAL - 1, Math.round(self.progress * (TOTAL - 1)));
        scheduleDraw(idx);

        // text: fades + drifts up between 45%–80% of the hero scroll
        const textP = gsap.utils.clamp(0, 1, gsap.utils.normalize(0.45, 0.8, self.progress));
        if (content) {
          content.style.opacity = String(1 - textP);
          content.style.transform = `translateY(${-textP * 40}px)`;
        }
        // luminosity: canvas brightens toward off-white from 78%–100%
        const fadeP = gsap.utils.clamp(0, 1, gsap.utils.normalize(0.78, 1, self.progress));
        if (fade) fade.style.opacity = String(fadeP);
      },
    });

    const onResize = () => scheduleDraw(pendingFrameRef.current);
    window.addEventListener("resize", onResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, reducedMotion]);

  // ---- subtle cursor tilt on the ring symbol (desktop, motion-safe only) ----
  useEffect(() => {
    if (reducedMotion) return undefined;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return undefined;
    const ring = ringRef.current;
    if (!ring) return undefined;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      ring.style.transform = `rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  return (
    <section id="top" ref={sectionRef} className="hero" data-theme="dark" aria-label="TIME FEST — hero">
      <div className="hero__sticky">
        <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />
        <div ref={fadeOverlayRef} className="hero__fade-overlay" aria-hidden="true" />

        <div className={`hero__loading ${ready ? "hero__loading--done" : ""}`} role="status" aria-live="polite">
          <span className="hero__loading-symbol" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="34" height="34">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="50" cy="50" r="6" fill="currentColor" />
            </svg>
          </span>
          <span className="hero__loading-word">TIME FEST</span>
          <span className="hero__loading-label">CARREGANDO EXPERIÊNCIA</span>
          <span className="hero__loading-bar">
            <span className="hero__loading-bar-fill" style={{ width: `${Math.round(loadProgress * 100)}%` }} />
          </span>
        </div>

        <div ref={contentRef} className={`hero__content ${ready ? "hero__content--visible" : ""}`}>
          <div className="hero__copy">
            <span className="hero__iris-line" aria-hidden="true" />
            <h1 className="hero__title">
              TIME IS
              <br />
              THE EXPERIENCE.
            </h1>
            <p className="hero__signature">{eventData.signature}</p>

            <div className="hero__meta">
              <span className="hero__meta-date">{eventData.date.display}</span>
              <span className="hero__meta-venue">
                {eventData.venue.name}
                <br />
                {eventData.venue.city.toUpperCase()}
              </span>
            </div>

            <a href="#tickets" className="btn btn--ghost-light hero__cta">
              GARANTIR MEU INGRESSO <span className="arrow">→</span>
            </a>
          </div>

          <div ref={ringRef} className="hero__ring" aria-hidden="true">
            <img src={assets.objects3d.ringFront} alt="" />
          </div>

          <div className="hero__scroll-indicator" aria-hidden="true">
            <span className="hero__scroll-line" />
            <span className="hero__scroll-word">ROLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
