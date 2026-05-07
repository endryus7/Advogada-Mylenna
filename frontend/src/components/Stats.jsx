import './Stats.css'

const stats = [
  { number: '+500', label: 'Casos Concluídos', desc: 'com êxito' },
  { number: '8+', label: 'Anos de Experiência', desc: 'em família e sucessões' },
  { number: '98%', label: 'Clientes Satisfeitos', desc: 'avaliações positivas' },
  { number: '2', label: 'Especializações', desc: 'pós-graduações concluídas' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__number">{s.number}</div>
            <div className="stats__label">{s.label}</div>
            <div className="stats__desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
