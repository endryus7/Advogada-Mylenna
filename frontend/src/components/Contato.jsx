import { useState } from 'react'
import { advogada, assuntos } from '../data/siteData'
import './Contato.css'

const canais = [
  { icon: '📱', titulo: 'WhatsApp', valor: advogada.whatsapp },
  { icon: '✉️', titulo: 'E-mail', valor: advogada.email },
  { icon: '📍', titulo: 'Localização', valor: advogada.localizacao },
  { icon: '🕐', titulo: 'Horário de Atendimento', valor: advogada.horario },
]

/* Armazena os dados digitados no formulário */
export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  /* Envia o formulário de contato para o e-mail da advogada */
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/montezano.advocacia@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            nome: form.nome,
            telefone: form.telefone,
            email: form.email,
            assunto: form.assunto,
            mensagem: form.mensagem,
          }),
        }
      )

      if (response.ok) {
        setEnviado(true)

        setForm({
          nome: '',
          telefone: '',
          email: '',
          assunto: '',
          mensagem: '',
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <section className="contato" id="contato">
      <div className="container contato__inner">

        {/* LADO ESQUERDO */}
        <div>
          <div className="section-label">Entre em contato</div>

          <h2 className="contato__titulo">
            Vamos conversar sobre o seu caso
          </h2>

          <p className="contato__desc">
            A primeira consulta é gratuita. Entre em contato e agende um horário para
            conversarmos sobre a sua situação de forma sigilosa e sem compromisso.
          </p>

          <div className="contato__canais">
            {canais.map((c, i) => (
              <div key={i} className="contato__canal">
                <span className="contato__canal-icon">{c.icon}</span>

                <div>
                  <strong>{c.titulo}</strong>
                  <span>{c.valor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="contato__form-wrap">
          <h3 className="contato__form-titulo">
            Consulta gratuita
          </h3>

          {enviado ? (
            <div className="contato__sucesso">
              ✅ Mensagem enviada! Retornaremos em breve.
            </div>
          ) : (
            <form className="contato__form" onSubmit={handleSubmit}>

              <div className="contato__row">
                <div className="contato__field">
                  <label>Nome completo</label>

                  <input
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contato__field">
                  <label>Telefone / WhatsApp</label>

                  <input
                    name="telefone"
                    type="text"
                    placeholder="(51) 9 9999-9999"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contato__field">
                <label>E-mail</label>

                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contato__field">
                <label>Assunto</label>

                <select
                  name="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione um assunto</option>

                  {assuntos.map((a, i) => (
                    <option key={i} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contato__field">
                <label>Mensagem</label>

                <textarea
                  name="mensagem"
                  rows="4"
                  placeholder="Descreva brevemente sua situação..."
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contato__submit">
                Enviar mensagem
              </button>

              <p className="contato__aviso">
                🔒 Seus dados são tratados com total sigilo e confidencialidade.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}