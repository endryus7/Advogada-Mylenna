import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Processo from './components/Processo'
import Sobre from './components/Sobre'
import Atuacao from './components/Atuacao'
import Faq from './components/Faq'
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
        <Sobre />
        <Atuacao />
        <Processo />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

export default App