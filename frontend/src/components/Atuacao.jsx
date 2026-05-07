import { areasAtuacao } from '../data/siteData'
import './Atuacao.css'

function AreaCard({ area }) {
  return (
    <div className="atuacao__card">
      <div className="atuacao__card-icon">{area.icon}</div>
      <h3 className="atuacao__card-titulo">{area.titulo}</h3>
      <p className="atuacao__card-desc">{area.desc}</p>
      <ul className="atuacao__card-lista">
        {area.itens.map((item, i) => (
          <li key={i}>
            <span className="atuacao__check">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Atuacao() {
  return (
    <section className="atuacao" id="atuacao">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Áreas de atuação</div>
          <h2 className="section-title">Soluções jurídicas para cada etapa da sua vida</h2>
          <p className="section-desc">
            Atendimento especializado e personalizado em todas as questões que envolvem família e patrimônio.
          </p>
        </div>

        <div className="atuacao__grid">
          {areasAtuacao.map((area, i) => (
            <AreaCard key={i} area={area} />
          ))}
        </div>
      </div>
    </section>
  )
}