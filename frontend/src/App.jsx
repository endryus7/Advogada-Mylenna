import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Sobre from './components/Sobre'
import Atuacao from './components/Atuacao'
import Depoimentos from './components/Depoimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <Atuacao />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

export default App