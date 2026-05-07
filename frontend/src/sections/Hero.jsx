import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">Família · Sucessões · Inventário</div>
          <h1 className="hero__title">
            Advocacia com<br />
            <span className="hero__title-accent">propósito</span> e<br />
            precisão jurídica
          </h1>
          <p className="hero__desc">
            Dra. Mylenna Montezano oferece atendimento especializado e
            humanizado nas áreas de Direito de Família e Sucessões,
            auxiliando você nos momentos que mais importam.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary">Consulta gratuita</a>
            <a href="#atuacao" className="btn btn--ghost">Conhecer a atuação</a>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-num">+500</span>
              <span className="hero__trust-label">casos concluídos</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-num">8+</span>
              <span className="hero__trust-label">anos de experiência</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-num">OAB</span>
              <span className="hero__trust-label">registrada RS</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-frame">
            <div className="hero__photo-placeholder">
              <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'90px'}}>
                <circle cx="60" cy="50" r="30" fill="rgba(255,255,255,0.2)" />
                <rect x="10" y="90" width="100" height="50" rx="10" fill="rgba(255,255,255,0.12)" />
              </svg>
              <p>Foto da Dra. Mylenna</p>
            </div>
            <div className="hero__photo-card">
              <span>⚖️</span>
              <div>
                <strong>Atendimento online</strong>
                <span>para todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
