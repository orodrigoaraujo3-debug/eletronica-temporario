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
    <section className="gallery section" data-theme="light" aria-label="Narrativa visual">
      <div className="container">
        <div ref={headRef} className="gallery__head reveal">
          <span className="micro-label">NARRATIVA VISUAL</span>
        </div>

        <div className="gallery__grid">
          <GalleryImage
            className="gallery__img--a"
            src={assets.gallery.crowdHandsWide}
            alt="Multidão com as mãos levantadas sob luz de laser"
          />
          <GalleryImage className="gallery__img--b" src={assets.gallery.eyeCloseup} alt="Close de um olho sob luz roxa" />

          <GalleryText className="gallery__text--a">ESTEJA PRESENTE.</GalleryText>

          <GalleryImage
            className="gallery__img--c"
            src={assets.gallery.profileClosedEyes}
            alt="Retrato de perfil com os olhos fechados, dançando"
          />

          <GalleryImage className="gallery__img--d" src={assets.gallery.hairMotion} alt="Cabelo em movimento sob a luz do palco" />
          <GalleryImage className="gallery__img--e" src={assets.gallery.duoCouple} alt="Dupla dançando próxima, sorrindo" />

          <GalleryText className="gallery__text--b">
            PERCA A NOÇÃO
            <br />
            DO TEMPO.
          </GalleryText>

          <GalleryImage
            className="gallery__img--f"
            src={assets.gallery.crowdSunriseHands}
            alt="Multidão ao amanhecer com as mãos levantadas"
          />

          <GalleryImage className="gallery__img--g" src={assets.gallery.crowdBack} alt="Multidão vista de costas sob lasers" />
          <GalleryImage
            className="gallery__img--h"
            src={assets.gallery.handsMotionBlur}
            alt="Mãos levantadas, com desfoque de movimento"
          />
        </div>
      </div>
    </section>
  );
}
