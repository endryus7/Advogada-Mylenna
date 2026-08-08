import { MessageCircle, Search, Scale, ShieldCheck } from 'lucide-react'
import { processo } from '../data/siteData'
import './Processo.css'

const icones = [MessageCircle, Search, Scale, ShieldCheck]

export default function Processo() {
  return (
    <section className="processo">
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
                <div className="processo__head">
                  <div className="processo__numero">{String(i + 1).padStart(2, '0')}</div>
                  <div className="processo__icon">
                    <Icone size={18} strokeWidth={1.5} />
                  </div>
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