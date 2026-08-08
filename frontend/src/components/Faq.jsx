import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "../data/siteData";
import "./Faq.css";

export default function Faq() {
  // Guarda o índice do item aberto (só um por vez). Começa tudo fechado.
  const [aberto, setAberto] = useState(null);

  function toggle(i) {
    setAberto((prev) => (prev === i ? null : i));
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Dúvidas frequentes</div>
          <h2 className="section-title">Perguntas que ouço com frequência</h2>
          <p className="section-desc">
            Um panorama inicial sobre os temas mais comuns. Cada caso tem suas
            particularidades, a consulta gratuita é o espaço ideal para
            esclarecer a sua.
          </p>
        </div>

        <div className="faq__lista">
          {faq.map((item, i) => {
            const estaAberto = aberto === i;

            return (
              <div
                key={i}
                className={`faq__item reveal ${estaAberto ? "faq__item--aberto" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="faq__pergunta"
                  onClick={() => toggle(i)}
                  aria-expanded={estaAberto}
                >
                  <span>{item.pergunta}</span>
                  <Plus size={18} strokeWidth={2} className="faq__icone" />
                </button>

                <div className="faq__resposta-wrap">
                  <p className="faq__resposta">{item.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
