import { sobreTexto, valores } from '../data/siteData'
import './Sobre.css'

export default function Sobre() {
  const fotoSobre = "/Mylenna.png";

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

          {sobreTexto.map((p, i) => (
            <p key={i} className="sobre__texto">{p}</p>
          ))}

          <div className="sobre__valores">
            {valores.map((v, i) => (
              <div key={i} className="sobre__valor">
                <span className="sobre__valor-icon">{v.icon}</span>
                <div>
                  <strong>{v.titulo}</strong>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}