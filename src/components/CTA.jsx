import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="section-inner cta-inner">
        <div>
          <h2 className="cta-title">Pronto pra colocar a tecnologia pra trabalhar pelo seu negócio?</h2>
          <p className="cta-sub">
            Preço justo, comunicação direta e foco total no seu projeto — do
            primeiro contato à entrega.
          </p>
        </div>
        <a href="#contato" className="btn cta-btn">
          Pedir orçamento
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
