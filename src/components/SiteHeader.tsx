import { Link } from "react-router-dom";
import ContactPopover from "./ContactPopover";

export default function SiteHeader() {
  return (
    <header>
      <nav className="site-header" aria-label="Main navigation">
        <Link className="header-link header-films" to="/#films">
          Films
        </Link>
        <Link className="site-name" to="/" aria-label="Directed by Daylin Jerome">
          <span className="site-prefix">Directed by</span>
          <span>DAYLIN JEROME</span>
        </Link>
        <ContactPopover />
      </nav>
    </header>
  );
}
