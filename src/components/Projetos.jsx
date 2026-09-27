import './Projetos.css'

/* ===================================================================
   Para adicionar um projeto real: coloque a imagem em
   src/assets/projetos/ , importe aqui e preencha "img".
   Ex:  import site1 from '../assets/projetos/site1.jpg'
   Enquanto "img" for null, o card mostra um placeholder.
   =================================================================== */
const projetos = [
  { titulo: 'Site Profissional', tags: ['Design', 'Responsivo'], tom: 'a', img: null },
  { titulo: 'Página de Vendas', tags: ['Conversão', 'Performance'], tom: 'b', img: null },
  { titulo: 'Sistema sob medida', tags: ['Automação', 'Dashboard'], tom: 'c', img: null },
]

export default function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="section-inner">
        <div className="projetos-head">
          <p className="eyebrow">Projetos</p>
          <h2 className="section-title">Trabalhos feitos para converter</h2>
          <p className="projetos-sub">
            Cada projeto é construído do zero e pensado para o objetivo do
            cliente — do visual à performance.
          </p>
        </div>

        <div className="projetos-grid">
          {projetos.map((p) => (
            <article key={p.titulo} className="projeto-card">
              <div className={`projeto-thumb tom-${p.tom}`}>
                {p.img
                  ? <img src={p.img} alt={p.titulo} className="projeto-img" />
                  : <span className="projeto-badge">Em breve</span>}
              </div>
              <div className="projeto-body">
                <h3>{p.titulo}</h3>
                <div className="projeto-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projetos-cta">
          <p>Tem um projeto em mente?</p>
          <a href="#contato" className="btn btn-primary">
            Vamos conversar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
