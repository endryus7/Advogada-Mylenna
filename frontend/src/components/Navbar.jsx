import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-name">Mylenna Montezano</span>
          <span className="navbar__logo-oab">OAB/RS</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contato"
            className="navbar__cta"
            onClick={() => setMenuOpen(false)}
          >
            Consulta gratuita
          </a>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}