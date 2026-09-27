import { CONTATO, whatsappLink } from '../data/contato'
import { WhatsAppIcon, InstagramIcon, MailIcon, GithubIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="logo-name">João</span>
            <span className="logo-accent">Dev</span>
          </a>
          <p>Sites profissionais, rápidos e sob medida para o seu negócio.</p>
        </div>

        <nav className="footer-nav" aria-label="Rodapé">
          <a href="#sobre">Sobre</a>
          <a href="#serviços">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="btn btn-outline btn-sm">Pedir orçamento</a>
      </div>

      <div className="section-inner footer-bottom">
        <div className="footer-social">
          {CONTATO.whatsapp && (
            <a href={whatsappLink()} target="_blank" rel="noopener" aria-label="WhatsApp">
              <WhatsAppIcon width="20" height="20" />
            </a>
          )}
          {CONTATO.instagram && (
            <a href={`https://instagram.com/${CONTATO.instagram}`} target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon width="20" height="20" />
            </a>
          )}
          {CONTATO.email && (
            <a href={`mailto:${CONTATO.email}`} aria-label="E-mail">
              <MailIcon width="20" height="20" />
            </a>
          )}
          {CONTATO.github && (
            <a href={`https://github.com/${CONTATO.github}`} target="_blank" rel="noopener" aria-label="GitHub">
              <GithubIcon width="20" height="20" />
            </a>
          )}
        </div>
        <span>© {ano} João Dev. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
