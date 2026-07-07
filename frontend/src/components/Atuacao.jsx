import { Check } from 'lucide-react'
import { areasAtuacao } from '../data/siteData'
import iconMap from './iconMap'
import './Atuacao.css'

function AreaCard({ area }) {
  const Icone = iconMap[area.icon]

  return (
    <div className="atuacao__card">
      <div className="atuacao__card-icon">
        <Icone size={22} strokeWidth={1.5} />
      </div>
      <h3 className="atuacao__card-titulo">{area.titulo}</h3>
      <p className="atuacao__card-desc">{area.desc}</p>
      <ul className="atuacao__card-lista">
        {area.itens.map((item, i) => (
          <li key={i}>
            <Check size={12} strokeWidth={2.5} className="atuacao__check" />
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