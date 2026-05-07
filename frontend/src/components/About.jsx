import './About.css'

const credentials = [
  { icon: '🎓', text: 'Pós-graduação em Direito de Família e Sucessões' },
  { icon: '⚖️', text: 'Membro da OAB — Ordem dos Advogados do Brasil' },
  { icon: '📚', text: 'Especialização em Mediação de Conflitos Familiares' },
  { icon: '🏆', text: 'Palestrante em eventos jurídicos regionais' },
]

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__photo-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Foto Profissional</span>
          </div>
          <div className="about__accent-card">
            <div className="about__accent-number">2016</div>
            <div className="about__accent-text">Formada em Direito</div>
          </div>
        </div>

        <div className="about__content">
          <div className="section-tag">Sobre a Advogada</div>
          <h2 className="section-title">Dra. Mylenna<br />Montezano</h2>

          <p className="about__text">
            Advogada especialista em Direito de Família e Sucessões, a Dra. Mylenna Montezano
            atua com dedicação e sensibilidade nos casos que envolvem as questões mais delicadas
            da vida das pessoas.
          </p>
          <p className="about__text">
            Com mais de 8 anos de experiência, oferece assessoria jurídica completa, priorizando
            sempre soluções consensuais quando possível, e representação firme quando necessário.
            Cada cliente recebe atenção personalizada e acompanhamento em todas as etapas do processo.
          </p>

          <div className="about__credentials">
            {credentials.map((c) => (
              <div key={c.text} className="about__credential">
                <span className="about__credential-icon">{c.icon}</span>
                <span className="about__credential-text">{c.text}</span>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href="#contato" className="btn-primary">Agendar Consulta</a>
            <a
              href="https://wa.me/5551999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
