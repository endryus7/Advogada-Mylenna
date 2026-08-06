import { diferenciais } from '../data/siteData'
import iconMap from './iconMap'
import './Diferenciais.css'

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container diferenciais__grid">
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
    </section>
  )
}