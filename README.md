# Trainer Card — Portfólio RPG

Portfólio interativo em formato de **Trainer Card de Pokémon**, feito em React + Vite.
Navegação por abas no estilo menu de jogo: Card, Bag (skills), Map (projetos),
Battle (experiência), Dex (tecnologias) e Save (contato).

> O build deste projeto é publicado dentro do portfólio principal, na pasta `trainer/`.

## Estrutura

```
portifolio Treiner-card/
├── index.html                  ← entrada do Vite (fonte pixel carregada aqui)
├── vite.config.js              ← base: "./" para funcionar no GitHub Pages
├── public/                     ← imagens (WebP otimizado)
│   ├── avatar.webp
│   └── projetos/
└── src/
    ├── main.jsx                ← monta o React no #root
    ├── TrainerPortfolio.jsx    ← componentes e lógica (sem CSS!)
    ├── data/
    │   └── trainer.js          ← TODO o conteúdo (textos, skills, projetos...)
    └── styles/
        └── trainer.css         ← TODO o visual (tema, classes, animações)
```

**Por que essa separação?**
- `data/` — atualizar um projeto ou skill é editar um objeto JS, sem tocar em componente.
- `styles/` — CSS em arquivo próprio destrava `:hover`, `@keyframes` e media queries
  (impossíveis com style inline) e mantém o JSX legível.

## Animações

- **Bio digitada letra a letra** (caixa de diálogo de RPG) com cursor ▼ piscando
- **Skill bars enchem de 0 até o nível** em cascata ao abrir a Bag
- **Transição de tela** (fade + slide) a cada troca de aba
- **Pokébolas giram** no header ao trocar de aba
- **Stagger** nos cards da Pokédex e do Battle Log
- **Cursor ▶** de menu de RPG no hover dos contatos
- Tudo respeita `prefers-reduced-motion`

## Comandos

```bash
npm install        # 1ª vez
npm run dev        # desenvolvimento (localhost:5173)
npm run build      # gera dist/
```

## Publicar no portfólio principal

```powershell
# apagar o trainer/ antigo e copiar o build novo
Remove-Item ..\Portifolio-main\trainer -Recurse -Force
Copy-Item dist ..\Portifolio-main\trainer -Recurse
```
