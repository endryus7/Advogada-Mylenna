import { depoimentos } from '../data/siteData'
import './Depoimentos.css'

function DepCard({ dep }) {
  return (
    <div className="dep__card">
      <div className="dep__stars">★★★★★</div>
      <blockquote className="dep__texto">"{dep.texto}"</blockquote>
      <div className="dep__autor">
        <div className="dep__avatar">{dep.inicial}</div>
        <div>
          <strong>{dep.nome}</strong>
          <span>{dep.area}</span>
        </div>
      </div>
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Depoimentos</div>
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <p className="section-desc">
            Histórias reais de pessoas que confiaram no trabalho da Dra. Mylenna.
          </p>
        </div>

        <div className="dep__grid">
          {depoimentos.map((dep, i) => (
            <DepCard key={i} dep={dep} />
          ))}
        </div>
      </div>
    </section>
  )
}