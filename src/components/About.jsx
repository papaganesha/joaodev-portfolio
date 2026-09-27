import { CONTATO } from '../data/contato'
import { WhatsAppIcon, InstagramIcon, MailIcon, PinIcon } from './Icons'
import './About.css'

const stats = [
  { value: '+5 anos', label: 'com desenvolvimento' },
  { value: '100%', label: 'foco no seu projeto' },
  { value: 'Remoto', label: 'atendo o mundo todo' },
  { value: 'Sob medida', label: 'site ou sistema' },
]

const telFormatado = '+55 51 99659-9543'

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="section-inner about-inner">
        <div className="about-text">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="section-title">Tecnologia que trabalha pelo seu negócio</h2>
          <p className="about-lead">
            São mais de 5 anos imerso em desenvolvimento web, criando sites e
            sistemas do zero. Coloco toda essa bagagem para trabalhar pelo seu
            resultado.
          </p>
          <p className="about-body">
            Seja um site que atrai clientes ou um sistema que organiza a sua
            rotina, o objetivo é sempre o mesmo: resolver um problema real e te
            dar retorno — com dedicação total, comunicação direta e um preço justo.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.value} className="about-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-card">
          <a className="about-row" href={`https://wa.me/${CONTATO.whatsapp}`} target="_blank" rel="noopener">
            <span className="about-row-icon"><WhatsAppIcon width="20" height="20" /></span>
            <span className="about-row-text">
              <span className="about-row-label">WhatsApp</span>
              <span className="about-row-value">{telFormatado}</span>
            </span>
          </a>
          <a className="about-row" href={`mailto:${CONTATO.email}`}>
            <span className="about-row-icon"><MailIcon width="20" height="20" /></span>
            <span className="about-row-text">
              <span className="about-row-label">E-mail</span>
              <span className="about-row-value">{CONTATO.email}</span>
            </span>
          </a>
          <a className="about-row" href={`https://instagram.com/${CONTATO.instagram}`} target="_blank" rel="noopener">
            <span className="about-row-icon"><InstagramIcon width="20" height="20" /></span>
            <span className="about-row-text">
              <span className="about-row-label">Instagram</span>
              <span className="about-row-value">@{CONTATO.instagram}</span>
            </span>
          </a>
          <div className="about-row about-row-static">
            <span className="about-row-icon"><PinIcon width="20" height="20" /></span>
            <span className="about-row-text">
              <span className="about-row-label">Onde atendo</span>
              <span className="about-row-value">Remoto — mundo todo</span>
            </span>
          </div>

          <a href="#contato" className="btn btn-primary about-card-cta">Pedir orçamento</a>
        </aside>
      </div>
    </section>
  )
}
