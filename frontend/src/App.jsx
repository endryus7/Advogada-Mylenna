import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Sobre from './components/Sobre'
import Atuacao from './components/Atuacao'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <Atuacao />
        <Contato />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

export default App