import { useEffect } from "react";
import FilmTile from "../components/FilmTile";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { films } from "../data/films";

export default function HomePage() {
  useEffect(() => {
    document.title = "Daylin Jerome — Filmmaker";
  }, []);

  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="home-main" id="films">
        <h1 className="sr-only">Films by Daylin Jerome</h1>
        <div className="film-grid">
          {films.map((film, index) => (
            <FilmTile key={film.slug} film={film} index={index} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
