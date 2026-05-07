import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Família · Sucessões · Inventário
          </div>

          <h1 className="hero__title">
            Advocacia com<br />
            <em>propósito</em> e<br />
            precisão jurídica
          </h1>

          <p className="hero__subtitle">
            Dra. Mylenna Montezano oferece atendimento especializado
            e humanizado nas áreas de Direito de Família e Sucessões.
            Seu caso merece atenção dedicada e estratégia jurídica de excelência.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="btn-primary hero__btn-main">
              Consulta Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#servicos" className="btn-outline">
              Ver Serviços
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>OAB Registrada</span>
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Atendimento Online e Presencial</span>
            </div>
            <div className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Porto Alegre, RS</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <div className="hero__photo-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Foto da Dra. Mylenna</span>
            </div>
            <div className="hero__photo-badge">
              <div className="hero__photo-badge-icon">⚖️</div>
              <div>
                <div className="hero__photo-badge-title">Especialista</div>
                <div className="hero__photo-badge-sub">Família e Sucessões</div>
              </div>
            </div>
          </div>

          <div className="hero__floating-card">
            <div className="hero__floating-icon">📋</div>
            <div>
              <div className="hero__floating-title">Consulta Online</div>
              <div className="hero__floating-sub">Atendimento por videochamada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
