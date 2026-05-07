import "./Depoimentos.css";

const depoimentos = [
  {
    nome: "Ana Paula S.",
    texto: "A Dra. Mylenna foi fundamental no meu processo de divórcio. Além de muito competente, ela me apoiou emocionalmente em um momento tão difícil. Recomendo de olhos fechados.",
    area: "Divórcio",
  },
  {
    nome: "Carlos M.",
    texto: "Contratei a Dra. Mylenna para o inventário após o falecimento da minha mãe. O processo foi conduzido com muita eficiência e sensibilidade. Superou todas as expectativas.",
    area: "Inventário",
  },
  {
    nome: "Fernanda L.",
    texto: "Excelente profissional! Me ajudou a regularizar a guarda dos meus filhos de forma rápida e sem maiores conflitos. Atendimento humanizado e sempre disponível para esclarecer dúvidas.",
    area: "Guarda",
  },
];

function Estrelas() {
  return (
    <div className="depoimento__stars">
      {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
    </div>
  );
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

        <div className="depoimentos__grid">
          {depoimentos.map((d) => (
            <div className="depoimento__card" key={d.nome}>
              <Estrelas />
              <blockquote className="depoimento__texto">"{d.texto}"</blockquote>
              <div className="depoimento__autor">
                <div className="depoimento__avatar">
                  {d.nome.charAt(0)}
                </div>
                <div>
                  <strong>{d.nome}</strong>
                  <span>{d.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
