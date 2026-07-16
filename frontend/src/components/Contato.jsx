import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { advogada, assuntos } from '../data/siteData'
import './Contato.css'

// Lista de canais de contato
const canais = [
  { icon: Phone,  titulo: 'WhatsApp',              valor: advogada.whatsapp    },
  { icon: Mail,   titulo: 'E-mail',                valor: advogada.email       },
  { icon: MapPin, titulo: 'Localização',           valor: advogada.localizacao },
  { icon: Clock,  titulo: 'Horário de Atendimento', valor: advogada.horario    },
]

// Formata o campo telefone no padrão brasileiro
// Recebe o valor do input e devolve já formatado.
function mascararTelefone(valor) {
  const nums = valor.replace(/\D/g, '').slice(0, 11)
  // mantém só números, no máximo 11 dígitos

  if (nums.length <= 2)  return nums.replace(/^(\d+)/, '($1')
  if (nums.length <= 6)  return nums.replace(/^(\d{2})(\d+)/, '($1) $2')
  if (nums.length <= 10) return nums.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2-$3')

  return nums.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
}

// Verifica se o telefone tem dígitos suficientes para ser válido
function validarTelefone(valor) {
  const nums = valor.replace(/\D/g, '')

  // Exige mínimo 10 dígitos (DDD + 8 dígitos fixo)
  // ou 11 (DDD + 9 dígitos celular)
  return nums.length >= 10
}

// Seção contato
export default function Contato() {
  //Valores de todos os campos do formulário
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const [erros, setErros] = useState({})  //mensagens de erro por campo)
  const [enviado, setEnviado] = useState(false) //exibição da mensagem de sucesso


  // Atualiza o valor do formulário conforme o usuário digita.
  function handleChange(e) {
    const { name, value } = e.target

    const novoValor =
      name === 'telefone'
        ? mascararTelefone(value)
        : value

    setForm(prev => ({
      ...prev,
      [name]: novoValor,
    }))

    // Remove erro ao digitar novamente
    if (erros[name]) {
      setErros(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  /* Valida ao sair do campo (onBlur) */
  function handleBlurTelefone() {
    if (form.telefone && !validarTelefone(form.telefone)) {
      setErros(prev => ({
        ...prev,
        telefone:
          'Número incompleto. Informe DDD + número. Ex: (51) 9 9999-9999',
      }))
    }
  }


  // Valida todos os campos de uma vez
  function validarTudo() {
    const novosErros = {}

    // Nome
    if (form.nome.trim().length < 6) {
      novosErros.nome = 'Informe seu nome completo.'
    }

    // Telefone
    if (!validarTelefone(form.telefone)) {
      novosErros.telefone =
        'Número incompleto. Informe DDD + número. Ex: (51) 9 9999-9999'
    }

    // Email
    if (!form.email.trim()) {
      novosErros.email = 'Informe um e-mail.'
    }

    // Assunto
    if (!form.assunto) {
      novosErros.assunto = 'Selecione um assunto.'
    }

    // Mensagem
    if (!form.mensagem.trim()) {
      novosErros.mensagem = 'Digite uma mensagem.'
    }

    setErros(novosErros)

    return Object.keys(novosErros).length === 0
  }

  // Envio do formulário
  async function handleSubmit(e) {
    e.preventDefault()

    // Bloqueia envio se houver erro
    if (!validarTudo()) return

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
        setEnviado(true) // mostra a mensagem de sucesso no lugar do formulário

        // Limpa o formulário para um eventual novo envio
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
            A primeira consulta é gratuita. Entre em contato e
            agende um horário para conversarmos sobre a sua situação
            de forma sigilosa e sem compromisso.
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

        {/* LADO DIREITO - formulário */}
        <div className="contato__form-wrap">
          <h3 className="contato__form-titulo">
            Consulta gratuita
          </h3>

          {enviado ? (
            <div className="contato__sucesso">
              ✅ Mensagem enviada! Retornaremos em breve.
            </div>
          ) : (

            <form
              className="contato__form"
              onSubmit={handleSubmit}
            >

              <div className="contato__row">

                {/* NOME */}
                <div className="contato__field">
                  <label>Nome completo</label>

                  <input
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    minLength={6}
                    value={form.nome}
                    onChange={handleChange}
                    className={erros.nome ? 'input--erro' : ''}
                    required
                  />

                  {erros.nome && (
                    <span className="campo__erro">
                      {erros.nome}
                    </span>
                  )}
                </div>

                {/* TELEFONE */}
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
                    <span className="campo__erro">
                      {erros.telefone}
                    </span>
                  )}
                </div>

              </div>

              {/* EMAIL */}
              <div className="contato__field">
                <label>E-mail</label>

                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={erros.email ? 'input--erro' : ''}
                  required
                />

                {erros.email && (
                  <span className="campo__erro">
                    {erros.email}
                  </span>
                )}
              </div>

              {/* ASSUNTO opções lista assuntos em siteData */}
              <div className="contato__field">
                <label>Assunto</label>

                <select
                  name="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  className={erros.assunto ? 'input--erro' : ''}
                  required
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>

                  {assuntos.map((a, i) => (
                    <option key={i} value={a}>
                      {a}
                    </option>
                  ))}
                </select>

                {erros.assunto && (
                  <span className="campo__erro">
                    {erros.assunto}
                  </span>
                )}
              </div>

              {/* MENSAGEM */}
              <div className="contato__field">
                <label>Mensagem</label>

                <textarea
                  name="mensagem"
                  rows="4"
                  placeholder="Descreva brevemente sua situação..."
                  value={form.mensagem}
                  onChange={handleChange}
                  className={erros.mensagem ? 'input--erro' : ''}
                  required
                />

                {erros.mensagem && (
                  <span className="campo__erro">
                    {erros.mensagem}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="contato__submit"
              >
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