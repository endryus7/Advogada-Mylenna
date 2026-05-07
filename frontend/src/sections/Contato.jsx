import { useState } from "react";
import "./Contato.css";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="contato" id="contato">
      <div className="container contato__inner">
        <div className="contato__info">
          <div className="section-label">Entre em contato</div>
          <h2 className="contato__title">Vamos conversar<br />sobre o seu caso</h2>
          <p className="contato__desc">
            A primeira consulta é gratuita. Entre em contato e agende um
            horário para conversarmos sobre a sua situação de forma sigilosa e sem compromisso.
          </p>

          <div className="contato__canais">
            <a href="https://wa.me/5551999999999" className="contato__canal" target="_blank" rel="noreferrer">
              <span className="contato__canal-icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <span>(51) 9 9999-9999</span>
              </div>
            </a>
            <a href="mailto:contato@mylennamontezano.adv.br" className="contato__canal">
              <span className="contato__canal-icon">✉️</span>
              <div>
                <strong>E-mail</strong>
                <span>contato@mylennamontezano.adv.br</span>
              </div>
            </a>
            <div className="contato__canal">
              <span className="contato__canal-icon">📍</span>
              <div>
                <strong>Localização</strong>
                <span>Porto Alegre, RS — atendimento presencial e online</span>
              </div>
            </div>
            <div className="contato__canal">
              <span className="contato__canal-icon">🕐</span>
              <div>
                <strong>Horário</strong>
                <span>Segunda a sexta, das 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contato__form-wrap">
          {enviado ? (
            <div className="contato__success">
              <span>✅</span>
              <h3>Mensagem enviada!</h3>
              <p>A Dra. Mylenna entrará em contato em breve. Obrigado!</p>
            </div>
          ) : (
            <form className="contato__form" onSubmit={submit}>
              <h3 className="contato__form-title">Consulta gratuita</h3>
              <div className="contato__row">
                <div className="contato__field">
                  <label>Nome completo</label>
                  <input name="nome" value={form.nome} onChange={handle} placeholder="Seu nome" required />
                </div>
                <div className="contato__field">
                  <label>Telefone / WhatsApp</label>
                  <input name="telefone" value={form.telefone} onChange={handle} placeholder="(51) 9 9999-9999" />
                </div>
              </div>
              <div className="contato__field">
                <label>E-mail</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="seu@email.com" required />
              </div>
              <div className="contato__field">
                <label>Assunto</label>
                <select name="assunto" value={form.assunto} onChange={handle} required>
                  <option value="">Selecione uma área</option>
                  <option>Divórcio e Separação</option>
                  <option>Guarda e Alimentos</option>
                  <option>Inventário e Herança</option>
                  <option>Testamentos</option>
                  <option>Adoção e Tutela</option>
                  <option>Mediação Familiar</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="contato__field">
                <label>Mensagem</label>
                <textarea name="mensagem" value={form.mensagem} onChange={handle} placeholder="Descreva brevemente sua situação..." rows={4} />
              </div>
              <button type="submit" className="contato__submit">
                Enviar mensagem
              </button>
              <p className="contato__aviso">🔒 Seus dados são tratados com total sigilo e confidencialidade.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
