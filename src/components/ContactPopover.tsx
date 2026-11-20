import { useId, useRef } from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/contact";

export default function ContactPopover() {
  const id = useId();
  const panel = useRef<HTMLElement>(null);

  if (typeof HTMLElement.prototype.showPopover !== "function") {
    return (
      <Link className="header-link header-contact" to="#contact">
        Contact
      </Link>
    );
  }

  const setInstant = (instant: boolean) => panel.current?.toggleAttribute("data-instant", instant);

  return (
    <div
      className="header-contact"
      onKeyDownCapture={(event) => {
        if (event.key === "Escape") setInstant(true);
      }}
    >
      <button
        type="button"
        className="header-link contact-trigger"
        popoverTarget={id}
        onClick={(event) => setInstant(event.detail === 0)}
      >
        Contact
      </button>
      <section
        className="contact-panel"
        id={id}
        popover="auto"
        ref={panel}
        aria-labelledby={id + "-title"}
      >
        <h2 id={id + "-title"}>Contact</h2>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          <span>{contact.email}</span>
        </a>
        <div className="contact-socials">
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a href={contact.youtube} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M21 7.3c-.2-.9-.9-1.6-1.8-1.8C17.6 5 12 5 12 5s-5.6 0-7.2.5C3.9 5.7 3.2 6.4 3 7.3c-.5 1.5-.5 4.7-.5 4.7s0 3.2.5 4.7c.2.9.9 1.6 1.8 1.8C6.4 19 12 19 12 19s5.6 0 7.2-.5c.9-.2 1.6-.9 1.8-1.8.5-1.5.5-4.7.5-4.7s0-3.2-.5-4.7ZM10 15.5v-7l6 3.5-6 3.5Z"
              />
            </svg>
            YouTube
          </a>
        </div>
        <button
          className="contact-close"
          type="button"
          popoverTarget={id}
          popoverTargetAction="hide"
          aria-label="Close contact"
          onClick={(event) => setInstant(event.detail === 0)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </section>
    </div>
  );
}
