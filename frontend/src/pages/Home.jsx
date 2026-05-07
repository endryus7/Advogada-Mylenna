import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Atuacao from '../components/Atuacao'
import Depoimentos from '../components/Depoimentos'
import Contato from '../components/Contato'
import './Home.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Atuacao />
      <Depoimentos />
      <Contato />
    </main>
  )
}