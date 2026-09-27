/* ===================================================================
   Dados de contato — edite aqui e o site inteiro é atualizado.
   =================================================================== */
export const CONTATO = {
  whatsapp: '5551996599543',    // DDI 55 + DDD + número, só dígitos
  email: 'joaopedro.ads2021@gmail.com',
  instagram: 'joao_alvestt',    // sem o @
  github: 'papaganesha',
  cidade: 'Atendimento remoto — mundo todo',
}

export function whatsappLink(texto) {
  const base = `https://wa.me/${CONTATO.whatsapp}`
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base
}
