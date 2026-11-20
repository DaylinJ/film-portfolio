import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header>
      <nav className="site-header" aria-label="Main navigation">
        <Link className="header-link header-films" to="/#films">
          Films
        </Link>
        <Link className="site-name" to="/" aria-label="Daylin Jerome">
          DAYLIN JEROME
        </Link>
        <Link className="header-link header-contact" to="#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
