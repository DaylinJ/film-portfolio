import { moreFilmsUrl } from "../data/films";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <p className="footer-about">
        Daylin Jerome is a filmmaker and multimedia producer in Storrs, Connecticut — a UConn
        computer science student and Assistant Multimedia Director at WHUS Radio.
      </p>
      <div className="footer-links" aria-label="Contact links">
        <a href="mailto:bec24004@uconn.edu">Email</a>
        <a href="https://www.instagram.com/daylin.jerome/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.youtube.com/@DaylinJerome" target="_blank" rel="noreferrer">
          YouTube
        </a>
        <a href={moreFilmsUrl} target="_blank" rel="noreferrer">
          More films
        </a>
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} Daylin Jerome</p>
    </footer>
  );
}
