import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="header-link header-films" to="/#films">
        Films
      </Link>
      <Link className="site-name" to="/" aria-label="Daylin Jerome, home">
        Daylin Jerome
      </Link>
      <Link className="header-link header-contact" to="/#contact">
        Contact
      </Link>
    </header>
  );
}
