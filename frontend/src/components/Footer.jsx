import { advogada } from '../data/siteData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__sobre">
          <span className="footer__nome">{advogada.nome}</span>
          <span className="footer__tagline">{advogada.especialidade}</span>
          <p className="footer__aviso">
            As informações contidas neste site têm caráter informativo e não constituem
            aconselhamento jurídico. Para orientações específicas, agende uma consulta.
          </p>
        </div>

        <div className="footer__col">
          <strong>Navegação</strong>
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Áreas de Atuação</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer__col">
          <strong>Contato</strong>
          <a href={advogada.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`mailto:${advogada.email}`}>{advogada.email}</a>
          <span>Porto Alegre, RS</span>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} {advogada.nome} — Todos os direitos reservados</span>
          <span>{advogada.oab} Inscrita</span>
        </div>
      </div>
    </footer>
  )
}