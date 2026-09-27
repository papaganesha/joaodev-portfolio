# João Dev — Portfólio

Site pessoal / portfólio de João Dev, feito em **React + Vite**. Página única
(landing) orientada a CTA para venda de sites e sistemas sob medida.

Branch deste site: **`portfolio`**.

## Rodar localmente

```bash
cd portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # gera a pasta dist/
npm run preview    # serve o build de produção
```

## Deploy na Vercel

O app fica na subpasta `portfolio/` do repositório, então o passo que **não
pode faltar** é apontar o Root Directory para essa pasta.

### Opção A — Conectar o GitHub (deploy automático, recomendado)

1. vercel.com → **Add New → Project** → importar `papaganesha/Jobstore`.
2. Configuração:
   - **Root Directory:** `portfolio`  ← essencial
   - **Framework Preset:** Vite (detectado automaticamente)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. **Deploy.**
4. **Settings → Git → Production Branch:** trocar para `portfolio`.

Depois disso, cada `git push` no branch `portfolio` republica o site.

### Opção B — Deploy manual (arrastar a pasta)

1. `npm run build` gera `portfolio/dist/`.
2. Em vercel.com/new, arrastar a pasta `dist/` na área de deploy estático.

Não é necessário `vercel.json` — é uma página única, sem rotas.
O `dist/` está no `.gitignore`; a Vercel builda a partir do código-fonte.

## Onde editar as informações

- **Contato (WhatsApp, e-mail, Instagram, GitHub, cidade):**
  `src/data/contato.js` — um único lugar, atualiza o site inteiro.
- **Projetos:** `src/components/Projetos.jsx` — colocar a imagem em
  `src/assets/projetos/`, importar e preencher o campo `img` de cada card.
- **Textos das seções:** cada seção tem seu componente em `src/components/`
  (Hero, About, Services, Projetos, CTA, Contact, Footer).
- **Cores, fontes e espaçamentos (tokens):** `src/index.css`.

## Estrutura

```
portfolio/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # tokens (cores, fontes, espaçamento)
│   ├── data/contato.js        # dados de contato (edite aqui)
│   ├── assets/images/         # foto e fundo do hero
│   └── components/            # Hero, About, Services, Projetos, CTA, Contact, Footer, Icons
└── dist/                      # build de produção (gerado, não versionado)
```
