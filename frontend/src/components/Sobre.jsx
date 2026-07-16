import { GraduationCap, Shield } from 'lucide-react'
import { sobreTexto } from '../data/siteData'
import './Sobre.css'

export default function Sobre() {
  const fotoSobre = "/Mylenna.png"

  return (
    <section className="sobre" id="sobre">
      <div className="container sobre__inner">

        {/* FOTO */}
        <div className="sobre__foto-wrap">

          <img src={fotoSobre} alt="Dra. Mylenna Montezano" className="sobre__foto" />

          <div className="sobre__tag">
            <strong>Dra. Mylenna Montezano</strong>
            <span>Especialista em Direito de Família e Sucessões</span>
          </div>
        </div>

        {/* TEXTO */}
        <div className="sobre__conteudo">
          <div className="section-label">Quem sou eu</div>
          <h2 className="section-title">
            Comprometida com sua história e seus direitos
          </h2>

          {/* Percorre os parágrafos definidos no siteData */}
          {sobreTexto.map((p, i) => (
            <p key={i} className="sobre__texto">{p}</p>
          ))}

          {/* Cards de formação/mediação */}
          <div className="sobre__formacao">
            <div className="sobre__formacao-item">
              <GraduationCap size={18} strokeWidth={1.5} />
              <div>
                <strong>Faculdade de Desenvolvimento do Rio Grande do Sul</strong>
                <p>Formação em Direito</p>
              </div>
            </div>

            <div className="sobre__formacao-item">
              <Shield size={18} strokeWidth={1.5} />
              <div>
                <strong>Polícia Civil do Estado do RS</strong>
                <p>Mediadora capacitada</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}