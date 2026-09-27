import './Services.css'

const services = [
  {
    icon: 'landing',
    title: 'Página de Vendas',
    desc: 'Transforme visitantes em clientes: uma página objetiva que apresenta sua oferta e leva direto à ação.',
    tags: ['Mais conversão', 'Direto ao ponto'],
  },
  {
    icon: 'site',
    title: 'Site Profissional',
    desc: 'Passe credibilidade e seja encontrado: apresente sua empresa, seus serviços e seus diferenciais.',
    tags: ['Credibilidade', 'Presença online'],
  },
  {
    icon: 'sistema',
    title: 'Sistemas & Soluções',
    desc: 'Automatize o que dá trabalho: agendamentos, catálogos, áreas de cliente e outras soluções sob medida.',
    tags: ['Automação', 'Sob medida'],
  },
  {
    icon: 'care',
    title: 'Manutenção & Suporte',
    desc: 'Seu site ou sistema sempre no ar, rápido e atualizado — sem dor de cabeça e sem preocupação.',
    tags: ['Sempre no ar', 'Atualizações'],
  },
]

const icons = {
  landing: <path d="M4 5h16v4H4zM4 12h10v7H4zM17 12h3v7h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>,
  site: <><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18M8 4v5" stroke="currentColor" strokeWidth="1.5"/></>,
  sistema: <><ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="currentColor" strokeWidth="1.5"/><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="currentColor" strokeWidth="1.5"/></>,
  care: <><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5"/><path d="M19 12a7 7 0 0 1-.1 1.2l2 1.6-2 3.4-2.4-1a7 7 0 0 1-2 1.2l-.4 2.6h-4l-.4-2.6a7 7 0 0 1-2-1.2l-2.4 1-2-3.4 2-1.6A7 7 0 0 1 5 12a7 7 0 0 1 .1-1.2l-2-1.6 2-3.4 2.4 1a7 7 0 0 1 2-1.2l.4-2.6h4l.4 2.6a7 7 0 0 1 2 1.2l2.4-1 2 3.4-2 1.6A7 7 0 0 1 19 12z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></>,
}

export default function Services() {
  return (
    <section id="serviços" className="services">
      <div className="section-inner">
        <div className="services-head">
          <p className="eyebrow">O que eu faço</p>
          <h2 className="section-title">Serviços sob medida para o seu objetivo</h2>
          <p className="services-sub">
            Escolha o que faz sentido para você — ou fale comigo que montamos a
            solução ideal juntos.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {icons[s.icon]}
                </svg>
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
