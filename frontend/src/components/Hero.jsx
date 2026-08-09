import { MessageCircle, ArrowRight, Check, BadgeCheck, ChevronDown } from 'lucide-react'
import { advogada } from '../data/siteData'
import './Hero.css'
import heroBg from '../assets/hero-bg.jpg'

const credenciais = [
  { valor: '7+', label: 'anos de atuação', icon: Check },
  { valor: '6', label: 'áreas de especialização', icon: Check },
  { valor: 'FADERGS', label: 'formação jurídica', icon: Check },
  { valor: advogada.oab, label: 'registro profissional', icon: BadgeCheck },
]

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__decor" aria-hidden="true">
        <div className="hero__glow" />
        <div className="hero__grain" />
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
      </div>

      {/* Indicador de scroll */}
      <a href="#processo" className="hero__scroll-cue" aria-label="Rolar para ver mais">
        <ChevronDown size={18} strokeWidth={2} />
      </a>

      {/* BARRA DE CREDENCIAIS — flutua sobre a base do hero */}
      <div className="hero__creds-bar-wrap">
        <div className="container">
          <ul className="hero__creds-bar">
            {credenciais.map((c, i) => {
              const Icone = c.icon
              return (
                <li key={i} className="hero__cred">
                  <span className="hero__cred-icon">
                    <Icone size={13} strokeWidth={2.5} />
                  </span>
                  <div>
                    <b>{c.valor}</b>
                    <span>{c.label}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}