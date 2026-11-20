import { useState } from "react";
import { Link } from "react-router-dom";
import type { Film } from "../data/films";

export default function FilmTile({ film, index }: { film: Film; index: number }) {
  const [imageFailed, setImageFailed] = useState(!film.image);

  return (
    <article className="film-tile" style={{ "--tile-index": index } as React.CSSProperties}>
      <Link to={`/films/${film.slug}`} aria-label={`View ${film.title}`}>
        <div className={`film-frame${imageFailed ? " film-frame-text" : ""}`}>
          {!imageFailed ? (
            <img
              src={film.image}
              alt=""
              loading={index < 3 ? "eager" : "lazy"}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="text-frame" aria-hidden="true">
              <span>Daylin Jerome</span>
              <strong>{film.title}</strong>
              <span>{film.type ?? "Film"}</span>
            </div>
          )}
        </div>
        <div className="tile-caption">
          <h2>{film.title}</h2>
          {(film.type || film.year) && <p>{[film.type, film.year].filter(Boolean).join(" · ")}</p>}
        </div>
      </Link>
    </article>
  );
}
