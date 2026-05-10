import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { advogada, assuntos } from '../data/siteData'
import './Contato.css'

const canais = [
  { icon: Phone,  titulo: 'WhatsApp',              valor: advogada.whatsapp    },
  { icon: Mail,   titulo: 'E-mail',                valor: advogada.email       },
  { icon: MapPin, titulo: 'Localização',            valor: advogada.localizacao },
  { icon: Clock,  titulo: 'Horário de Atendimento', valor: advogada.horario    },
]

function mascararTelefone(valor) {
  const nums = valor.replace(/\D/g, '').slice(0, 11)

  if (nums.length <= 2)  return nums.replace(/^(\d+)/, '($1')
  if (nums.length <= 6)  return nums.replace(/^(\d{2})(\d+)/, '($1) $2')
  if (nums.length <= 10) return nums.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2-$3')
  return nums.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
}

function validarTelefone(valor) {
  const nums = valor.replace(/\D/g, '')
  // Exige mínimo 10 dígitos (DDD + 8 dígitos fixo) ou 11 (DDD + 9 dígitos celular)
  return nums.length >= 10
}

export default function Contato() {
  const [form, setForm] = useState({
    nome: '', telefone: '', email: '', assunto: '', mensagem: '',
  })
  const [erros, setErros]    = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    const novoValor = name === 'telefone' ? mascararTelefone(value) : value
    setForm(prev => ({ ...prev, [name]: novoValor }))
    if (erros[name]) setErros(prev => ({ ...prev, [name]: '' }))
  }

  /* Valida ao sair do campo (onBlur) */
  function handleBlurTelefone() {
    if (form.telefone && !validarTelefone(form.telefone)) {
      setErros(prev => ({
        ...prev,
        telefone: 'Número incompleto. Informe DDD + número. Ex: (51) 9 9999-9999',
      }))
    }
  }

  function validarTudo() {
    const novosErros = {}

    if (!validarTelefone(form.telefone)) {
      novosErros.telefone = 'Número incompleto. Informe DDD + número. Ex: (51) 9 9999-9999'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Bloqueia envio se telefone inválido
    if (!validarTudo()) return

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/montezano.advocacia@gmail.com',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            nome: form.nome, telefone: form.telefone,
            email: form.email, assunto: form.assunto, mensagem: form.mensagem,
          }),
        }
      )
      if (response.ok) {
        setEnviado(true)
        setForm({ nome: '', telefone: '', email: '', assunto: '', mensagem: '' })
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
          <h2 className="contato__titulo">Vamos conversar sobre o seu caso</h2>
          <p className="contato__desc">
            A primeira consulta é gratuita. Entre em contato e agende um horário para
            conversarmos sobre a sua situação de forma sigilosa e sem compromisso.
          </p>
          <div className="contato__canais">
            {canais.map((c, i) => {
              const Icone = c.icon
              return (
                <div key={i} className="contato__canal">
                  <div className="contato__canal-icon">
                    <Icone size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong>{c.titulo}</strong>
                    <span>{c.valor}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="contato__form-wrap">
          <h3 className="contato__form-titulo">Consulta gratuita</h3>

          {enviado ? (
            <div className="contato__sucesso">
              ✅ Mensagem enviada! Retornaremos em breve.
            </div>
          ) : (
            <form className="contato__form" onSubmit={handleSubmit} noValidate>

              <div className="contato__row">
                <div className="contato__field">
                  <label>Nome completo</label>
                  <input
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    minLength={6}
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contato__field">
                  <label>Telefone / WhatsApp</label>
                  <input
                    name="telefone"
                    type="tel"
                    placeholder="(51) 9 9999-9999"
                    value={form.telefone}
                    onChange={handleChange}
                    onBlur={handleBlurTelefone}
                    className={erros.telefone ? 'input--erro' : ''}
                    required
                  />
                  {erros.telefone && (
                    <span className="campo__erro">{erros.telefone}</span>
                  )}
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
                    <option key={i} value={a}>{a}</option>
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