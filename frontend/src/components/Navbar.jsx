import { useState } from 'react'
import { advogada } from '../data/siteData'
import './Navbar.css'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo" onClick={fecharMenu}>
            <span className="navbar__name">{advogada.nome}</span>
            <span className="navbar__sub">{advogada.oab}</span>
          </a>

          {/* Links desktop */}
          <div className="navbar__links">
            <a href="#sobre"       className="navbar__link">Sobre</a>
            <a href="#atuacao"     className="navbar__link">Atuação</a>
            <a href="#depoimentos" className="navbar__link">Depoimentos</a>
            <a href="#contato"     className="navbar__link navbar__cta">Consulta gratuita</a>
          </div>

          {/* Botão hamburger*/}
          <button
            className={`navbar__hamburger ${menuAberto ? 'aberto' : ''}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* menu mobile */}
      <div className={`navbar__overlay ${menuAberto ? 'visivel' : ''}`}>
        <div className="navbar__overlay-header">
          <div className="navbar__logo">
            <span className="navbar__name">{advogada.nome}</span>
            <span className="navbar__sub">{advogada.oab}</span>
          </div>
          <button className="navbar__fechar" onClick={fecharMenu} aria-label="Fechar menu">
            ✕
          </button>
        </div>

        <nav className="navbar__overlay-links">
          <a href="#home"        onClick={fecharMenu}>Início</a>
          <a href="#sobre"       onClick={fecharMenu}>Sobre</a>
          <a href="#atuacao"     onClick={fecharMenu}>Atuação</a>
          <a href="#depoimentos" onClick={fecharMenu}>Depoimentos</a>
          <a href="#contato"     onClick={fecharMenu}>Contato</a>
        </nav>

        <a href="#contato" className="navbar__overlay-cta" onClick={fecharMenu}>
          Consulta gratuita
        </a>
      </div>
    </>
  )
}