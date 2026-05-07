import "./Atuacao.css";

const areas = [
  {
    icon: "💍",
    titulo: "Divórcio e Separação",
    desc: "Assessoria completa em divórcio consensual e litigioso, partilha de bens e dissolução de união estável.",
    itens: ["Divórcio consensual", "Divórcio litigioso", "Partilha de bens", "União estável"],
  },
  {
    icon: "👨‍👩‍👧",
    titulo: "Guarda e Alimentos",
    desc: "Regulamentação de guarda compartilhada ou unilateral, fixação e revisão de alimentos.",
    itens: ["Guarda compartilhada", "Guarda unilateral", "Fixação de alimentos", "Revisão de alimentos"],
  },
  {
    icon: "📜",
    titulo: "Inventário e Herança",
    desc: "Condução de inventário judicial e extrajudicial, partilha de bens e planejamento sucessório.",
    itens: ["Inventário judicial", "Inventário extrajudicial", "Partilha de herança", "Alvará judicial"],
  },
  {
    icon: "📋",
    titulo: "Testamentos",
    desc: "Elaboração e registro de testamentos, planejamento patrimonial e proteção do patrimônio familiar.",
    itens: ["Elaboração de testamento", "Testamento vital", "Planejamento patrimonial", "Holding familiar"],
  },
  {
    icon: "👶",
    titulo: "Adoção e Tutela",
    desc: "Suporte jurídico completo nos processos de adoção, tutela e curatela.",
    itens: ["Adoção nacional", "Tutela de menores", "Curatela", "Reconhecimento de filiação"],
  },
  {
    icon: "⚖️",
    titulo: "Mediação Familiar",
    desc: "Resolução de conflitos familiares de forma consensual, preservando relacionamentos e economizando tempo.",
    itens: ["Mediação de conflitos", "Acordos extrajudiciais", "Conciliação familiar", "Orientação jurídica"],
  },
];

export default function Atuacao() {
  return (
    <section className="atuacao" id="atuacao">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Áreas de atuação</div>
          <h2 className="section-title">
            Soluções jurídicas para<br />cada etapa da sua vida
          </h2>
          <p className="section-desc">
            Atendimento especializado e personalizado em todas as questões
            que envolvem família e patrimônio.
          </p>
        </div>

        <div className="atuacao__grid">
          {areas.map((a) => (
            <div className="atuacao__card" key={a.titulo}>
              <div className="atuacao__card-icon">{a.icon}</div>
              <h3 className="atuacao__card-title">{a.titulo}</h3>
              <p className="atuacao__card-desc">{a.desc}</p>
              <ul className="atuacao__card-list">
                {a.itens.map((item) => (
                  <li key={item}>
                    <span className="atuacao__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
