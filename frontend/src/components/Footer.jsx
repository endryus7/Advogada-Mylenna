import { advogada } from '../data/siteData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Coluna 1: nome, especialidade e aviso legal */}
        <div className="footer__sobre">
          <span className="footer__nome">{advogada.nome}</span>
          <span className="footer__tagline">{advogada.especialidade}</span>
          <p className="footer__aviso">
            As informações contidas neste site têm caráter informativo e não constituem
            aconselhamento jurídico. Para orientações específicas, agende uma consulta.
          </p>
        </div>

        {/* Coluna 2: links */}
        <div className="footer__col">
          <strong>Navegação</strong>
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Áreas de Atuação</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>

        {/* Coluna 3: canais de contato */}
        <div className="footer__col">
          <strong>Contato</strong>
          <a href={advogada.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`mailto:${advogada.email}`}>{advogada.email}</a>
          <a href="https://www.instagram.com/mylenna.advogada/" target='_blank'>Instagram</a>
          <span>R. Manoelito de Ornellas, n° 55 - 8° andar - Praia de Belas - Porto Alegre/RS, CEP 90110-230 </span>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} {advogada.nome} — Todos os direitos reservados</span>
          <span>{advogada.oab}</span>
        </div>
      </div>
    </footer>
  )
}