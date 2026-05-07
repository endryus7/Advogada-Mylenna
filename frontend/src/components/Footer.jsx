import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Mylenna Montezano</span>
          <span className="footer__tagline">Advogada · OAB/RS · Família e Sucessões</span>
          <p className="footer__aviso">
            As informações contidas neste site têm caráter informativo e não
            constituem aconselhamento jurídico. Para orientações específicas,
            agende uma consulta.
          </p>
        </div>

        <div className="footer__links">
          <strong>Navegação</strong>
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Áreas de Atuação</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer__links">
          <strong>Contato</strong>
          <a href="https://wa.me/5551999999999">WhatsApp</a>
          <a href="mailto:contato@mylennamontezano.adv.br">E-mail</a>
          <span>Porto Alegre, RS</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Mylenna Montezano — Todos os direitos reservados</span>
          <span>OAB/RS Inscrita</span>
        </div>
      </div>
    </footer>
  );
}
