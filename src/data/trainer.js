// ============================================================
//  DADOS DO TRAINER CARD
//  Todo o conteúdo do site fica aqui, separado do visual.
//  Para atualizar textos, projetos ou skills, edite só este
//  arquivo — nenhum componente precisa ser tocado.
// ============================================================
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiVite, SiGit,
  SiPython, SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiTypescript,
} from "react-icons/si";

export const trainer = {
  name: "Rodrigo Ruan",
  classe: "Dev Full-Stack",
  age: "21",
  region: "Valparaíso de Goiás",
  type: "Web / Automação",
  bio: "Dev web em formação. 2 anos na Amazon. Interfaces, automações e uma tech nova a cada projeto.",
  status: "Disponível para estágio / freela",
};

export const skills = [
  { nome: "HTML / CSS", nivel: 85, icone: "🎨" },
  { nome: "JavaScript", nivel: 80, icone: "🟨" },
  { nome: "React", nivel: 75, icone: "⚛️" },
  { nome: "Git / GitHub", nivel: 75, icone: "🔧" },
  { nome: "Python", nivel: 65, icone: "🐍" },
  { nome: "Node / Express", nivel: 55, icone: "🟢" },
  { nome: "Supabase / SQL", nivel: 55, icone: "🗄️" },
  { nome: "TypeScript", nivel: 40, icone: "🔷" },
];

// MAP -> Projetos (cada projeto é uma "localização" no mapa)
export const projetos = [
  {
    nome: "Lumen E-commerce",
    desc: "E-commerce full-stack com auth JWT, aprovação de vendedores, rate-limiting e design system completo com dark mode.",
    techs: ["React", "Node.js", "Express", "Supabase", "PostgreSQL"],
    link: "https://rodrigoruan2.github.io/lumen-ecommerce/",
    github: "https://github.com/RodrigoRuan2/lumen-ecommerce",
    img: "./projetos/lumen.webp",
  },
  {
    nome: "Anime Calendar V3",
    desc: "Tracker de animes com múltiplos status, grade semanal, filtros por temporada e persistência local via APIs públicas.",
    techs: ["React", "Axios", "APIs"],
    link: "https://rodrigoruan2.github.io/anime-calendar-V3/",
    github: "https://github.com/RodrigoRuan2/anime-calendar-V3",
    img: "./projetos/calendario-anime.webp",
  },
  {
    nome: "Netflix Dashboard",
    desc: "Catálogo de filmes/séries com carrosséis, busca em tempo real e favoritos persistidos no Supabase com autenticação.",
    techs: ["React", "TMDB API", "Supabase"],
    link: "https://rodrigoruan2.github.io/netflix-dashboard/",
    github: "https://github.com/RodrigoRuan2/netflix-dashboard",
    img: "./projetos/netflix-dashboard.webp",
  },
  {
    nome: "Tradutor OCR",
    desc: "App desktop em Python com Tesseract OCR, captura por área, hotkeys globais e interface moderna com customtkinter.",
    techs: ["Python", "Tesseract", "customtkinter"],
    link: "https://github.com/RodrigoRuan2/tradutor-ocr",
    github: "https://github.com/RodrigoRuan2/tradutor-ocr",
    img: "./projetos/tradutor-ocr.png",
  },
  {
    nome: "Pokedex",
    desc: "Consumo da PokeAPI com Fetch nativo, paginação on-demand e foco em performance com JavaScript puro.",
    techs: ["JavaScript", "HTML", "PokeAPI"],
    link: "https://rodrigoruan2.github.io/pokedex/",
    github: "https://github.com/RodrigoRuan2/pokedex",
    img: "./projetos/pokedex.webp",
  },
  {
    nome: "Quiz One Piece",
    desc: "Quiz SPA com gerenciamento de estado via React Hooks, pontuação progressiva e fluxo condicional entre telas.",
    techs: ["React", "Vite", "JavaScript"],
    link: "https://rodrigoruan2.github.io/Quiz-Onepiece2/",
    github: "https://github.com/RodrigoRuan2/Quiz-Onepiece2",
    img: "./projetos/quiz-onepiece.webp",
  },
];

// BATTLE -> Experiência (cada item é uma "batalha vencida")
export const experiencia = [
  {
    cargo: "Operações / Análise",
    local: "Amazon",
    periodo: "~2 anos",
    desc: "Ambiente corporativo de alto volume. Resolução rápida de problemas e operação sob pressão real.",
  },
  {
    cargo: "ADS (em andamento)",
    local: "Cruzeiro do Sul (UDF)",
    periodo: "Graduação",
    desc: "Análise e Desenvolvimento de Sistemas — base técnica em algoritmos, banco de dados e engenharia de software.",
  },
  {
    cargo: "Dev Frontend (em formação)",
    local: "Projetos pessoais",
    periodo: "Atual",
    desc: "6+ projetos publicados. Construindo portfólio e buscando primeira vaga como dev.",
  },
  {
    cargo: "Machine Learning, IA & Deep Learning",
    local: "Udemy",
    periodo: "Em andamento",
    desc: "ML, Deep Learning, LLMs, IA Generativa, Redes Neurais, NLP e Agentes — GPT, RAGs, LangChain, CNN, LSTM e Algoritmos Genéticos.",
  },
  {
    cargo: "Lógica de Programação — Do VisualG às linguagens",
    local: "Udemy",
    periodo: "Em andamento",
    desc: "Algoritmos e lógica completa com C, C++, Python, C# e Java — variáveis, estruturas condicionais, repetitivas, vetores e matrizes.",
  },
  {
    cargo: "Introduction to Data Science",
    local: "IBM / Coursera",
    periodo: "Concluído ✓",
    desc: "Conceitos fundamentais de ciência de dados: análise, coleta e validação de dados, e como Machine Learning está moldando negócios e saúde.",
  },
];

// POKEDEX -> Tecnologias dominadas (cada tech é uma "criatura")
export const tecnologias = [
  { id: "001", nome: "React",      tipo: "Framework",  icone: SiReact,      cor: "#61DAFB" },
  { id: "002", nome: "JavaScript", tipo: "Linguagem",  icone: SiJavascript, cor: "#F7DF1E" },
  { id: "003", nome: "HTML5",      tipo: "Markup",     icone: SiHtml5,      cor: "#E34F26" },
  { id: "004", nome: "CSS3",       tipo: "Estilo",     icone: SiCss,        cor: "#1572B6" },
  { id: "005", nome: "Vite",       tipo: "Build",      icone: SiVite,       cor: "#646CFF" },
  { id: "006", nome: "Git",        tipo: "Ferramenta", icone: SiGit,        cor: "#F05032" },
  { id: "007", nome: "Python",     tipo: "Linguagem",  icone: SiPython,     cor: "#3776AB" },
  { id: "008", nome: "Node.js",    tipo: "Runtime",    icone: SiNodedotjs,  cor: "#339933" },
  { id: "009", nome: "Express",    tipo: "Framework",  icone: SiExpress,    cor: "#ffffff" },
  { id: "010", nome: "Supabase",   tipo: "BaaS",       icone: SiSupabase,   cor: "#3ECF8E" },
  { id: "011", nome: "PostgreSQL", tipo: "Banco",      icone: SiPostgresql, cor: "#4169E1" },
  { id: "012", nome: "TypeScript", tipo: "Linguagem",  icone: SiTypescript, cor: "#3178C6" },
];

// SAVE -> Contato / redes
export const contatos = [
  { rede: "GitHub", user: "RodrigoRuan2", icone: "🐙", link: "https://github.com/RodrigoRuan2" },
  { rede: "LinkedIn", user: "rodrigo-oliveira-141499258", icone: "💼", link: "https://www.linkedin.com/in/rodrigo-oliveira-141499258" },
  { rede: "WhatsApp", user: "+55 (61) 99215-3423", icone: "💬", link: "https://wa.me/5561992153423" },
  { rede: "Email", user: "ruancamisaazul@gmail.com", icone: "✉️", link: "mailto:ruancamisaazul@gmail.com" },
  { rede: "Portfólio", user: "rodrigoruan2.github.io", icone: "🌐", link: "https://rodrigoruan2.github.io/Portifolio" },
];
