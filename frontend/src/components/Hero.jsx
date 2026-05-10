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
            Dra. Mylenna Montezano oferece atendimento comprometido e humanizado
            nas áreas de Direito de Família e Sucessões, auxiliando você nos
            momentos que mais importam.
          </p>

          <div className="hero__actions">
            <a href={advogada.whatsappLink} className="btn-gold" target="_blank" rel="noopener noreferrer">
              Consulta gratuita
            </a>
            <a href="#sobre" className="btn-ghost">
              Conheça a atuação
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="hero__visual">
          <div className="hero__frame">

            <img src={fotoMylenna} alt="Dra. Mylenna Montezano" className="hero__foto" />

            {/* Card flutuante */}
            <div className="hero__card">
              <div className="hero__card-avatar">⚖️</div>
              <div className="hero__card-text">
                <div className="hero__card-status">
                  <span className="hero__card-dot" />
                  <span>Disponível para consulta</span>
                </div>
                <strong>Dra. Mylenna Montezano</strong>
                <span>Família e Sucessões</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}