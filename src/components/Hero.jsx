import heroPhoto from '../assets/images/hero-photo.webp'
import heroBg from '../assets/images/hero-bg.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Disponível para novos projetos
          </span>
          <h1 className="hero-title">João <span className="hero-title-accent">Dev</span></h1>
          <h2 className="hero-subtitle">Desenvolvedor Web</h2>
          <p className="hero-description">
            Crio sites e sistemas sob medida que atraem clientes, passam
            profissionalismo e fazem o seu negócio vender mais — do primeiro
            acesso à conversão.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              Pedir orçamento
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#serviços" className="btn btn-outline">Ver serviços</a>
          </div>

          <div className="hero-stats">
            <Stat icon="check" value="Feito para vender" label="foco em resultado" />
            <Stat icon="clock" value="Resposta rápida" label="direto no WhatsApp" />
            <Stat icon="globe" value="Sob medida" label="site ou sistema" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroPhoto} alt="João Pedro" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, value, label }) {
  const icons = {
    clock: <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>,
    check: <><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/></>,
    globe: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/></>,
  }

  return (
    <div className="stat">
      <span className="stat-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {icons[icon]}
          {icon === 'clock' && <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>}
        </svg>
      </span>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  )
}
