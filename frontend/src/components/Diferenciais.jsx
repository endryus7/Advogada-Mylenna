import { diferenciais } from '../data/siteData'
import iconMap from './iconMap'
import './Diferenciais.css'

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Por que escolher</div>
          <h2 className="section-title">Uma advocacia pensada para o seu momento</h2>
        </div>

        <div className="diferenciais__grid">
          {diferenciais.map((d, i) => {
            // traduz a string salva no siteData, no componente de ícone
            const Icone = iconMap[d.icon]

            return (
              <div
                key={i}
                className="diferenciais__card reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="diferenciais__icon">
                  <Icone size={22} strokeWidth={1.5} />
                </div>
                <h4>{d.titulo}</h4>
                <p>{d.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}