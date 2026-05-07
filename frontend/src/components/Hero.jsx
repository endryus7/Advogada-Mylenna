import { advogada } from '../data/siteData'
import './Hero.css'
import fotoMylenna from '../assets/Mylenna.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">

        {/* TEXTO */}
        <div className="hero__texto">
          <span className="hero__badge">Direito de Família e Sucessões</span>

          <h1 className="hero__titulo">
            Advocacia <em>humana</em><br />para cada família
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

          <div className="hero__trust">
            {advogada.stats.map((s, i) => (
              <div key={i} className="hero__trust-item">
                <span className="hero__trust-num">{s.num}</span>
                <span className="hero__trust-label">{s.label}</span>
                {i < advogada.stats.length - 1 && <div className="hero__trust-div" />}
              </div>
            ))}
          </div>
        </div>

        {/* FOTO */}
        <div className="hero__visual">
          <div className="hero__frame">
            
            <img src={fotoMylenna} alt="Dra. Mylenna Montezano" className="hero__foto" />

            {/* Card flutuante */}
            <div className="hero__card">
              <span className="hero__card-icon">⚖️</span>
              <div>
                <strong>Dra. Mylenna Montezano</strong>
                <span>Especialista em Família e Sucessões</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}