import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page not found — Daylin Jerome";
  }, []);

  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="not-found">
        <p>That frame isn’t here.</p>
        <Link to="/#films">Return to films</Link>
      </main>
      <SiteFooter />
    </div>
  );
}
