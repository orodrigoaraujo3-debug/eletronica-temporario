import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ensureGsap } from "../lib/gsapSetup";

/**
 * Sets up Lenis smooth-scroll and keeps it perfectly in sync with GSAP's
 * ScrollTrigger + ticker. Disabled entirely under prefers-reduced-motion,
 * falling back to native scroll.
 */
export function useLenis(reducedMotion) {
  useEffect(() => {
    if (reducedMotion) return undefined;

    const { gsap, ScrollTrigger } = ensureGsap();

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
