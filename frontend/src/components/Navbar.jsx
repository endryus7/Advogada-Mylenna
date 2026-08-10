import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { advogada } from '../data/siteData'
import './Navbar.css'

export default function Navbar() {
  // Controla se o menu mobile está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

  // Enquanto o menu mobile estiver aberto, trava o scroll da página
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAberto])

  function toggleMenu() {
    setMenuAberto(prev => !prev)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <>
    {/* Barra fixa no topo */}
      <nav className="navbar">
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo" onClick={fecharMenu}>
            <span className="navbar__name">{advogada.nome}</span>
            <span className="navbar__sub">{advogada.areaFoco}</span>
          </a>

          {/* Links */}
          <div className="navbar__links">
            <a href="#home"        className="navbar__link">Início</a>
            <a href="#sobre"       className="navbar__link">Sobre</a>
            <a href="#atuacao"     className="navbar__link">Atuação</a>
            <a href="#processo"    className="navbar__link">Como funciona</a>
            <a href="#faq"         className="navbar__link">Dúvidas</a>
            <a href="#contato"     className="navbar__link navbar__cta">Entrar em Contato</a>
          </div>

          {/* Botão hambúrguer */}
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

      {/* Menu mobile (drawer) */}
      {createPortal(
        <>
        {/* Fundo escuro, clicar nele fecha o menu */}
          <div
            className={`navbar__backdrop ${menuAberto ? 'visivel' : ''}`}
            onClick={fecharMenu}
            aria-hidden="true"
          />

          {/* Painel lateral */}
          <div className={`navbar__drawer ${menuAberto ? 'visivel' : ''}`}>
            <div className="navbar__drawer-header">
              <div className="navbar__logo">
                <span className="navbar__name">{advogada.nome}</span>
                <span className="navbar__sub">{advogada.areaFoco}</span>
              </div>
              <button className="navbar__fechar" onClick={fecharMenu} aria-label="Fechar menu">
                ✕
              </button>
            </div>

            <nav className="navbar__drawer-links">
              <a href="#home"        onClick={fecharMenu}>Início</a>
              <a href="#sobre"       onClick={fecharMenu}>Sobre</a>
              <a href="#atuacao"     onClick={fecharMenu}>Atuação</a>
              <a href="#processo"    onClick={fecharMenu}>Como funciona</a>
              <a href="#faq"         onClick={fecharMenu}>Dúvidas</a>
            </nav>

            <div className="navbar__drawer-footer">
              <a href="#contato" className="navbar__overlay-cta" onClick={fecharMenu}>
                Entrar em Contato
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}