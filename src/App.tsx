import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films/:slug" element={<FilmPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
