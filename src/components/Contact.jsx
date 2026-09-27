import { useState } from 'react'
import { CONTATO, whatsappLink } from '../data/contato'
import { WhatsAppIcon, MailIcon, GithubIcon } from './Icons'
import './Contact.css'

const servicos = [
  'Um site profissional',
  'Uma página de vendas',
  'Um sistema / solução',
  'Manutenção do meu site',
  'Ainda não sei, quero conversar',
]

export default function Contact() {
  const [nome, setNome] = useState('')
  const [servico, setServico] = useState(servicos[0])
  const [msg, setMsg] = useState('')

  const configurado = CONTATO.whatsapp.length > 0

  function abrirWhatsApp(e) {
    e.preventDefault()
    if (!configurado) return
    const texto =
      `Olá João! Meu nome é ${nome || '[seu nome]'}.\n` +
      `Tenho interesse em: ${servico}.\n` +
      (msg ? `\nDetalhes: ${msg}` : '')
    window.open(whatsappLink(texto), '_blank', 'noopener')
  }

  return (
    <section id="contato" className="contact">
      <div className="section-inner contact-inner">
        <div className="contact-text">
          <p className="eyebrow">Contato</p>
          <h2 className="section-title">Vamos tirar seu site do papel?</h2>
          <p className="contact-lead">
            Me conte um pouco sobre o que você precisa. Respondo rápido e a
            primeira conversa é sempre sem compromisso.
          </p>

          <ul className="contact-list">
            {configurado && (
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener" className="ci-link">
                  <span className="ci"><WhatsAppIcon width="18" height="18" /></span>
                  <span className="ci-value">WhatsApp</span>
                </a>
              </li>
            )}
            {CONTATO.email && (
              <li>
                <a href={`mailto:${CONTATO.email}`} className="ci-link">
                  <span className="ci"><MailIcon width="18" height="18" /></span>
                  <span className="ci-value">{CONTATO.email}</span>
                </a>
              </li>
            )}
            {CONTATO.github && (
              <li>
                <a href={`https://github.com/${CONTATO.github}`} target="_blank" rel="noopener" className="ci-link">
                  <span className="ci"><GithubIcon width="18" height="18" /></span>
                  <span className="ci-value">github.com/{CONTATO.github}</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <form className="contact-form" onSubmit={abrirWhatsApp}>
          <label className="field">
            <span>Seu nome</span>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como posso te chamar?"
            />
          </label>

          <label className="field">
            <span>O que você precisa</span>
            <select value={servico} onChange={(e) => setServico(e.target.value)}>
              {servicos.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>

          <label className="field">
            <span>Detalhes (opcional)</span>
            <textarea
              rows="3"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Conte um pouco sobre o projeto..."
            />
          </label>

          <button type="submit" className="btn btn-primary contact-submit" disabled={!configurado}>
            {configurado ? 'Chamar no WhatsApp' : 'WhatsApp em breve'}
            <WhatsAppIcon width="18" height="18" />
          </button>
          {!configurado && (
            <p className="contact-note">O botão fica ativo assim que o número do WhatsApp for configurado.</p>
          )}
        </form>
      </div>
    </section>
  )
}
