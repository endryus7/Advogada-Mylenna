import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { depoimentos } from '../data/siteData'
import './Depoimentos.css'

function DepCard({ dep }) {
  return (
    <div className={`dep__card ${dep.exemplo ? 'dep__card--exemplo' : ''}`}>
      <span className="dep__tag">{dep.area}</span>
      <blockquote className="dep__texto">"{dep.texto}"</blockquote>
      <div className="dep__autor">
        <div className="dep__avatar">{dep.inicial}</div>
        <strong>{dep.nome}</strong>
      </div>
    </div>
  )
}

export default function Depoimentos() {
  const trackRef = useRef(null)

  function scroll(dir) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.dep__card')
    const gap = 20
    const width = card.offsetWidth + gap
    track.scrollBy({ left: dir * width, behavior: 'smooth' })
  }

  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Depoimentos</div>
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <p className="section-desc">
            Histórias reais de pessoas que confiaram no trabalho da Dra. Mylenna,
            organizadas por área de atuação.
          </p>
        </div>

        <div className="dep__carrossel">
          <div className="dep__track" ref={trackRef}>
            {depoimentos.map((dep, i) => (
              <DepCard key={i} dep={dep} />
            ))}
          </div>

          <div className="dep__controles">
            <button
              className="dep__nav"
              onClick={() => scroll(-1)}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="dep__nav"
              onClick={() => scroll(1)}
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}