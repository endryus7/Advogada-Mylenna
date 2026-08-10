import { MessageCircle, Search, Scale, ShieldCheck } from 'lucide-react'
import { processo } from '../data/siteData'
import './Processo.css'

const icones = [MessageCircle, Search, Scale, ShieldCheck]

export default function Processo() {
  return (
    <section className="processo" id='processo'>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Como funciona</div>
          <h2 className="section-title">Do primeiro contato à resolução do seu caso</h2>
          <p className="section-desc">
            Um caminho claro, sem surpresas para você saber exatamente o que esperar em cada etapa.
          </p>
        </div>

        <div className="processo__grid">
          {processo.map((p, i) => {
            const Icone = icones[i]

            return (
              <div
                key={i}
                className="processo__card reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="processo__etapa">Etapa {String(i + 1).padStart(2, '0')}</span>

                <div className="processo__icon">
                  <Icone size={22} strokeWidth={1.5} />
                </div>

                <h4>{p.titulo}</h4>
                <p>{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}