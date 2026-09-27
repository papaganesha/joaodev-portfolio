import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <a href="#" className="logo" aria-label="João Dev">
        <span className="logo-name">João</span>
        <span className="logo-accent">Dev</span>
      </a>

      <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
        {[
          ['Sobre', 'sobre'],
          ['Serviços', 'serviços'],
          ['Projetos', 'projetos'],
          ['Contato', 'contato'],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a href="#contato" className="btn btn-primary btn-sm header-cta">
        Pedir orçamento
      </a>

      <button
        className="menu-toggle"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
