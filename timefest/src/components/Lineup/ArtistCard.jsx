import { assets } from "../../assets/manifest";

export function ArtistCard({ index, name, style, image }) {
  return (
    <article className="artist-card">
      <span className="artist-card__index">{index}</span>
      <div className="artist-card__frame">
        <img src={assets.artists[image]} alt={`${name} — ${style}`} loading="lazy" />
      </div>
      <h3 className="artist-card__name">{name}</h3>
      <p className="artist-card__style">{style}</p>
    </article>
  );
}
