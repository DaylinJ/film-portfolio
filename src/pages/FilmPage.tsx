import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { films, type Film } from "../data/films";
import NotFoundPage from "./NotFoundPage";

function FilmPlayer({ film }: { film: Film }) {
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  return (
    <div className="player-section">
      <div className="video-player">
        {playerLoaded ? (
          <iframe
            ref={(player) => player?.focus({ preventScroll: true })}
            src={`https://www.youtube-nocookie.com/embed/${film.videoId}?rel=0`}
            title={`${film.title} video player`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            className="player-poster"
            type="button"
            aria-label={`Load video player for ${film.title}`}
            onClick={() => setPlayerLoaded(true)}
          >
            {!posterFailed && <img src={film.poster ?? film.image} alt="" onError={() => setPosterFailed(true)} />}
            <span className="play-icon" aria-hidden="true" />
          </button>
        )}
      </div>
      <a className="external-watch" href={film.url} target="_blank" rel="noreferrer">
        Watch on YouTube
      </a>
    </div>
  );
}

export default function FilmPage() {
  const { slug } = useParams();
  const film = films.find((entry) => entry.slug === slug);

  useEffect(() => {
    if (film) document.title = `${film.title} — Daylin Jerome`;
  }, [film]);

  if (!film) return <NotFoundPage />;

  return (
    <div className="page-shell film-page">
      <SiteHeader />
      <main className="film-main" id="main-content" tabIndex={-1}>
        <Link className="back-link" to="/#films">
          Back to films
        </Link>
        <header className="film-title-block">
          <h1>{film.title}</h1>
          <p className="film-subtitle">{film.watchCredit ?? film.gridLabel}</p>
        </header>
        <FilmPlayer key={film.slug} film={film} />
      </main>
      <SiteFooter />
    </div>
  );
}
