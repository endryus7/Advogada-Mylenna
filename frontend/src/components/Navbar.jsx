import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { advogada } from '../data/siteData'
import './Navbar.css'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAberto])

  function toggleMenu() {
    console.log('clicou burger, estado atual:', menuAberto)
    setMenuAberto(prev => !prev)
  }

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

          <div className="navbar__links">
            <a href="#sobre"       className="navbar__link">Sobre</a>
            <a href="#atuacao"     className="navbar__link">Atuação</a>
            <a href="#depoimentos" className="navbar__link">Depoimentos</a>
            <a href="#contato"     className="navbar__link navbar__cta">Consulta gratuita</a>
          </div>

          <button
            className={`navbar__hamburger ${menuAberto ? 'aberto' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menu"
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {createPortal(
        <>
          <div
            className={`navbar__backdrop ${menuAberto ? 'visivel' : ''}`}
            onClick={fecharMenu}
            aria-hidden="true"
          />

          <div className={`navbar__drawer ${menuAberto ? 'visivel' : ''}`}>
            <div className="navbar__drawer-header">
              <div className="navbar__logo">
                <span className="navbar__name">{advogada.nome}</span>
                <span className="navbar__sub">{advogada.oab}</span>
              </div>
              <button className="navbar__fechar" onClick={fecharMenu} aria-label="Fechar menu">
                ✕
              </button>
            </div>

            <nav className="navbar__drawer-links">
              <a href="#home"        onClick={fecharMenu}>Início</a>
              <a href="#sobre"       onClick={fecharMenu}>Sobre</a>
              <a href="#atuacao"     onClick={fecharMenu}>Atuação</a>
              <a href="#depoimentos" onClick={fecharMenu}>Depoimentos</a>
              <a href="#contato"     onClick={fecharMenu}>Contato</a>
            </nav>

            <div className="navbar__drawer-footer">
              <a href="#contato" className="navbar__overlay-cta" onClick={fecharMenu}>
                Consulta gratuita
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}