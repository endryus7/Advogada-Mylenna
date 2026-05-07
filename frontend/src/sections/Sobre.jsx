import "./Sobre.css";

const valores = [
  { icon: "🤝", titulo: "Humanidade", desc: "Cada caso é tratado com empatia, respeitando a sensibilidade do momento." },
  { icon: "🎯", titulo: "Precisão", desc: "Estratégia jurídica clara e fundamentada para os melhores resultados." },
  { icon: "🔒", titulo: "Confidencialidade", desc: "Sigilo absoluto em todas as etapas do atendimento." },
];

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container sobre__inner">
        <div className="sobre__foto">
          <div className="sobre__foto-placeholder">
            <p>Foto profissional</p>
          </div>
          <div className="sobre__foto-tag">
            <strong>Dra. Mylenna Montezano</strong>
            <span>Especialista em Família e Sucessões</span>
          </div>
        </div>

        <div className="sobre__content">
          <div className="sobre__label">Sobre a advogada</div>
          <h2 className="sobre__title">
            Comprometida com<br />sua história e<br />seus direitos
          </h2>
          <p className="sobre__text">
            Com mais de 8 anos de experiência nas áreas de Direito de Família e
            Sucessões, a Dra. Mylenna Montezano construiu sua carreira com base
            em um atendimento próximo, ético e eficiente.
          </p>
          <p className="sobre__text">
            Formada em Direito e especialista na área, atua em processos de
            divórcio, guarda de filhos, inventários, testamentos e planejamento
            sucessório, sempre buscando a solução mais adequada para cada família.
          </p>

          <div className="sobre__valores">
            {valores.map((v) => (
              <div className="sobre__valor" key={v.titulo}>
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
  );
}
