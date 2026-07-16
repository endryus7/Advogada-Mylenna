import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { depoimentos } from '../data/siteData'
import './Depoimentos.css'

// Card individual de depoimento
function DepCard({ dep }) {
  return (
    // dep__card--exemplo só é aplicada se dep.exemplo existir
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

// Carrossel horizontal de depoimentos
export default function Depoimentos() {
  // faixa track que contém os cards
  const trackRef = useRef(null)

  // Rola o carrossel um card de largura para a esquerda ou direita
  function scroll(dir) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.dep__card')
    const gap = 20 // bate o gap definido no CSS do .dep__track
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
           {/* Faixa rolável com todos os cards de depoimento */}
          <div className="dep__track" ref={trackRef}>
            {depoimentos.map((dep, i) => (
              <DepCard key={i} dep={dep} />
            ))}
          </div>

          {/* Setas de navegação */}
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