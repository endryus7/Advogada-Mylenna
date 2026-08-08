import { BadgeCheck, MessageCircle, ArrowRight, Check } from 'lucide-react'
import { advogada } from '../data/siteData'
import './Hero.css'
import fotoMylenna from '../assets/hero_image.jpg'

const credenciais = [
  { valor: '7+', label: 'anos de atuação' },
  { valor: '6', label: 'áreas de especialização' },
  { valor: 'FADERGS', label: 'formação jurídica' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__decor" aria-hidden="true">
        <div className="hero__glow" />
      </div>

      <div className="container hero__inner">

        {/* TEXTO */}
        <div className="hero__texto">
          <span className="hero__eyebrow">
            Direito de Família &amp; Sucessões · Porto Alegre
          </span>

          <h1 className="hero__titulo">
            <span className="hero__titulo-topo">Advocacia</span>
            <span className="hero__titulo-destaque">
              familiar <em>humanizada</em>
            </span>
            <br />
            e estratégica
          </h1>

          <div className="hero__divider" />

          <p className="hero__desc">
            Dra. Mylenna Montezano atua há mais de 7 anos em Direito de Família
            e Sucessões, com formação em mediação pela Polícia Civil do RS
            unindo técnica jurídica e escuta atenta em cada caso.
          </p>

          {/* Leva para o WhatsApp ou rola até a seção Sobre*/}
          <div className="hero__actions">
            <a href={advogada.whatsappLink} className="btn-gold" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} strokeWidth={2} />
              <span>Consulta gratuita</span>
              <ArrowRight size={16} strokeWidth={2} className="hero__btn-arrow" />
            </a>
            <a href="#sobre" className="btn-ghost">
              Conheça a atuação
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="hero__visual">
          <div className="hero__frame-wrap">
            <div className="hero__frame">
              <img src={fotoMylenna} alt="Dra. Mylenna Montezano" className="hero__foto" />

              <div className="hero__selo">
                <BadgeCheck size={14} strokeWidth={2} />
                {advogada.oab}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BARRA DE CREDENCIAIS — flutua sobre o hero */}
      <div className="hero__creds-bar-wrap">
        <div className="container">
          <ul className="hero__creds-bar">
            {credenciais.map((c, i) => (
              <li key={i} className="hero__cred">
                <span className="hero__cred-icon">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <div>
                  <b>{c.valor}</b>
                  <span>{c.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}