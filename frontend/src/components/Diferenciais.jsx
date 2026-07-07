import { diferenciais } from '../data/siteData'
import iconMap from './iconMap'
import './Diferenciais.css'

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container diferenciais__grid">
        {diferenciais.map((d, i) => {
          const Icone = iconMap[d.icon]

          return (
            <div key={i} className="diferenciais__card">
              <Icone size={24} strokeWidth={1.5} />
              <h4>{d.titulo}</h4>
              <p>{d.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}