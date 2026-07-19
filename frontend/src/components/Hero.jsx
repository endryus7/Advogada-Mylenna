import { BadgeCheck } from 'lucide-react'
import { advogada } from '../data/siteData'
import './Hero.css'
import fotoMylenna from '../assets/hero_image.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">

        {/* TEXTO */}
        <div className="hero__texto">
          <h1 className="hero__titulo">
            <span className="hero__titulo-topo">Advocacia</span>

            <span className="hero__titulo-destaque">
              familiar <em>humanizada</em>
            </span>

            <br />
              e estratégica
          </h1>

          <p className="hero__desc">
            Dra. Mylenna Montezano atua há mais de 7 anos em Direito de Família
            e Sucessões, com formação em mediação pela Polícia Civil do RS —
            unindo técnica jurídica e escuta atenta em cada caso.
          </p>

          {/* Leva para o WhatsApp ou rola até a seção Sobre*/}
          <div className="hero__actions">
            <a href={advogada.whatsappLink} className="btn-gold" target="_blank" rel="noopener noreferrer">
              Consulta gratuita
            </a>
            <a href="#sobre" className="btn-ghost">
              Conheça a atuação
            </a>
          </div>

          {/* Anos de atuação, áreas, formação */}
          <div className="hero__creds">
            <div className="hero__cred">
              <b>7+</b>
              <span>anos de atuação</span>
            </div>
            <div className="hero__cred">
              <b>6</b>
              <span>áreas de especialização</span>
            </div>
            <div className="hero__cred">
              <b>FADERGS</b>
              <span>formação jurídica</span>
            </div>
          </div>
        </div>

        {/* FOTO */}
        <div className="hero__visual">
          <div className="hero__frame">
            <img src={fotoMylenna} alt="Dra. Mylenna Montezano" className="hero__foto" />

            <div className="hero__selo">
              <BadgeCheck size={14} strokeWidth={2} />
              {advogada.oab}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}