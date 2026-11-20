import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { hash, key, pathname } = useLocation();
  const navigationType = useNavigationType();
  const previousKey = useRef<string | null>(null);
  const scrollPositions = useRef(new Map<string, number>());

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const isNavigation = previousKey.current !== null && previousKey.current !== key;
    previousKey.current = key;
    const anchor = hash && document.getElementById(hash.slice(1));
    const restoredY = navigationType === "POP" ? scrollPositions.current.get(key) : undefined;

    if (anchor) {
      anchor.focus({ preventScroll: true });
    } else if (isNavigation) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }

    if (restoredY !== undefined) {
      window.scrollTo(0, restoredY);
    } else if (anchor) {
      anchor.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }

    const rememberPosition = () => scrollPositions.current.set(key, window.scrollY);
    rememberPosition();
    window.addEventListener("scroll", rememberPosition, { passive: true });
    return () => window.removeEventListener("scroll", rememberPosition);
  }, [hash, key, navigationType, pathname]);

  return null;
}
