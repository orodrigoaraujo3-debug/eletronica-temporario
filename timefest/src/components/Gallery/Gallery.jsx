import { assets } from "../../assets/manifest";
import { useReveal } from "../../hooks/useReveal";
import "./Gallery.css";

function GalleryImage({ src, alt, className }) {
  const ref = useReveal();
  return (
    <figure ref={ref} className={`gallery__img reveal ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function GalleryText({ children, className }) {
  const ref = useReveal();
  return (
    <p ref={ref} className={`gallery__text reveal ${className}`}>
      {children}
    </p>
  );
}

export function Gallery() {
  const headRef = useReveal();

  return (
    <section className="gallery section" data-theme="light" aria-label="Visual story">
      <div className="container">
        <div ref={headRef} className="gallery__head reveal">
          <span className="micro-label">VISUAL STORY</span>
        </div>

        <div className="gallery__grid">
          <GalleryImage
            className="gallery__img--a"
            src={assets.gallery.crowdHandsWide}
            alt="Crowd with hands raised under laser light"
          />
          <GalleryImage className="gallery__img--b" src={assets.gallery.eyeCloseup} alt="Close-up of an eye under purple light" />

          <GalleryText className="gallery__text--a">BE PRESENT.</GalleryText>

          <GalleryImage
            className="gallery__img--c"
            src={assets.gallery.profileClosedEyes}
            alt="Profile portrait with eyes closed, dancing"
          />

          <GalleryImage className="gallery__img--d" src={assets.gallery.hairMotion} alt="Hair in motion under stage light" />
          <GalleryImage className="gallery__img--e" src={assets.gallery.duoCouple} alt="Duo dancing close together" />

          <GalleryText className="gallery__text--b">
            LOSE TRACK
            <br />
            OF TIME.
          </GalleryText>

          <GalleryImage
            className="gallery__img--f"
            src={assets.gallery.crowdSunriseHands}
            alt="Crowd at sunrise with hands raised"
          />

          <GalleryImage className="gallery__img--g" src={assets.gallery.crowdBack} alt="Crowd seen from behind under lasers" />
          <GalleryImage
            className="gallery__img--h"
            src={assets.gallery.handsMotionBlur}
            alt="Hands raised, motion blur"
          />
        </div>
      </div>
    </section>
  );
}
