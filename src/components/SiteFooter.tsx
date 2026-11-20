import { contact } from "../data/contact";
import { moreFilmsUrl } from "../data/films";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact" tabIndex={-1}>
      <p className="footer-about">
        I’m Daylin Jerome, a filmmaker and multimedia producer based in Storrs, Connecticut. I work
        across cinematography, editing, sound, and live production. I study computer science at UConn
        and serve as Assistant Multimedia Director at WHUS Radio.
      </p>
      <nav className="footer-links" aria-label="Contact links">
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={contact.youtube} target="_blank" rel="noreferrer">
          YouTube
        </a>
        <a href={moreFilmsUrl} target="_blank" rel="noreferrer">
          More films
        </a>
      </nav>
      <p className="footer-meta">© {new Date().getFullYear()} Daylin Jerome</p>
    </footer>
  );
}
