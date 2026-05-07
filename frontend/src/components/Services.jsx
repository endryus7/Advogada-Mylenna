import './Services.css'

const services = [
  {
    icon: '💍',
    title: 'Divórcio e Separação',
    desc: 'Orientação completa em processos de divórcio consensual ou litigioso, visando a proteção dos seus direitos com o mínimo de conflito possível.',
    tags: ['Consensual', 'Litigioso', 'Extrajudicial'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Guarda e Alimentos',
    desc: 'Definição e revisão de guarda compartilhada ou unilateral, regulamentação de visitas e fixação ou revisão de pensão alimentícia.',
    tags: ['Guarda Compartilhada', 'Pensão Alimentícia', 'Revisão'],
  },
  {
    icon: '📜',
    title: 'Inventário e Herança',
    desc: 'Gestão completa do processo de inventário judicial ou extrajudicial, partilha de bens e regularização do espólio com eficiência.',
    tags: ['Judicial', 'Extrajudicial', 'Partilha'],
  },
  {
    icon: '📋',
    title: 'Testamentos',
    desc: 'Elaboração e orientação sobre testamentos, cláusulas de inalienabilidade, incomunicabilidade e impenhorabilidade de bens.',
    tags: ['Elaboração', 'Planejamento', 'Proteção'],
  },
  {
    icon: '🏠',
    title: 'Planejamento Patrimonial',
    desc: 'Estratégias jurídicas para proteção e transmissão do patrimônio familiar de forma segura, eficiente e com menor carga tributária.',
    tags: ['Holding Familiar', 'Doação', 'Proteção'],
  },
  {
    icon: '🤝',
    title: 'União Estável',
    desc: 'Reconhecimento, dissolução e regulamentação de uniões estáveis, incluindo contrato de convivência e seus efeitos patrimoniais.',
    tags: ['Reconhecimento', 'Dissolução', 'Contrato'],
  },
]

export default function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="services__header">
          <div className="section-tag">Áreas de Atuação</div>
          <h2 className="section-title">Soluções jurídicas<br />para cada etapa da vida</h2>
          <p className="section-subtitle">
            Atendimento especializado nas principais demandas do Direito de Família e Sucessões,
            com foco em resultados e na proteção dos seus interesses.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="services__card">
              <div className="services__card-icon">{s.icon}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
              <div className="services__tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="services__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <p>Não encontrou o que procura? Entre em contato para uma avaliação personalizada.</p>
          <a href="#contato" className="btn-primary">Falar com a Dra. Mylenna</a>
        </div>
      </div>
    </section>
  )
}
