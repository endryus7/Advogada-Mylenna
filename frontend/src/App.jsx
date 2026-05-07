import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Atuacao from './components/Atuacao'
import Depoimentos from './components/Depoimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Atuacao />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App