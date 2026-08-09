# TIME FEST 2026

Site oficial (fictício) do TIME FEST — festival premium de música eletrônica no Expominas, Belo Horizonte, em 19.12.26.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev)
- [GSAP](https://gsap.com) + ScrollTrigger para as animações controladas por scroll (Hero em sequência de frames, Time Moment, Film section)
- [Lenis](https://lenis.darkroom.engineering) para smooth scroll
- CSS puro com design tokens (`src/styles/tokens.css`)

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components/` — um componente por seção do site
- `src/data/` — dados centralizados e editáveis (line-up, palcos, ingressos, FAQ, programação)
- `src/assets/manifest.js` — mapa central de todos os assets (imagens e sequência do Hero)
