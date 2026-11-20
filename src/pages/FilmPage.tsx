import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { films } from "../data/films";
import NotFoundPage from "./NotFoundPage";

export default function FilmPage() {
  const { slug } = useParams();
  const film = films.find((entry) => entry.slug === slug);

  useEffect(() => {
    if (film) document.title = `${film.title} — Daylin Jerome`;
  }, [film]);

  if (!film) return <NotFoundPage />;

  const metadata = [film.type, film.year, film.role].filter(Boolean).join(" · ");
  const embedUrl = film.videoId
    ? `https://www.youtube-nocookie.com/embed/${film.videoId}?rel=0${film.startSeconds ? `&start=${film.startSeconds}` : ""}`
    : undefined;

  return (
    <div className="page-shell film-page">
      <SiteHeader />
      <main className="film-main">
        <Link className="back-link" to="/#films">
          ← Back to films
        </Link>
        <header className="film-title-block">
          <h1>{film.title}</h1>
          {metadata && <p>{metadata}</p>}
        </header>

        {embedUrl ? (
          <div className="player-section">
            <div className="video-player">
              <iframe
                src={embedUrl}
                title={`${film.title} video player`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a className="external-watch" href={film.url} target="_blank" rel="noreferrer">
              {film.watchLabel ?? "Watch on YouTube"} ↗
            </a>
          </div>
        ) : (
          <div className="external-only">
            <a className="external-watch" href={film.url} target="_blank" rel="noreferrer">
              Watch on Instagram ↗
            </a>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
