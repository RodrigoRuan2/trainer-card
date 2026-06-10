import React, { useState, useEffect, useRef } from "react";
import {
  trainer, skills, projetos, experiencia, tecnologias, contatos,
} from "./data/trainer.js";
import "./styles/trainer.css";

// ============================================================
//  HOOK: useTypewriter — "digita" um texto letra a letra,
//  como caixa de diálogo de RPG. Retorna o trecho visível e
//  se já terminou (para mostrar o ▼ piscando).
// ============================================================
function useTypewriter(text, speed = 30) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) return;
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduced]);

  return { typed: text.slice(0, count), done: count >= text.length };
}

// ============================================================
//  PIXEL ICON — renderiza ícone em canvas 16x16 e escala
//  pixelado (efeito 8-bit)
// ============================================================
function PixelIcon({ Icon, color, size = 44 }) {
  const hiddenRef = useRef();
  const [src, setSrc] = useState("");

  useEffect(() => {
    const el = hiddenRef.current;
    if (!el) return;
    const svg = el.querySelector("svg");
    if (!svg) return;

    const svgStr = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgStr], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      canvas.getContext("2d").drawImage(img, 0, 0, 16, 16);
      setSrc(canvas.toDataURL());
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, []);

  return (
    <>
      <div ref={hiddenRef} className="pixel-hidden">
        <Icon size={44} color={color} />
      </div>
      {src && <img className="pixel-img" src={src} width={size} height={size} alt="" />}
    </>
  );
}

// ============================================================
//  COMPONENTES REUTILIZÁVEIS
// ============================================================
function StatField({ label, value }) {
  return (
    <div className="stat-field">
      <span className="stat-label">{label}</span>
      <span className="stat-dots" />
      <span className="stat-value">{value}</span>
    </div>
  );
}

// --nivel e --i são variáveis CSS lidas pela animação da barra
// (mesmo padrão de "dados via custom property" do portfólio)
function SkillBar({ nome, nivel, icone, index }) {
  return (
    <div className="skill-row">
      <div className="skill-head">
        <span className="skill-name">{icone} {nome}</span>
        <span className="skill-pct">{nivel}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ "--nivel": `${nivel}%`, "--i": index }} />
      </div>
    </div>
  );
}

function Pokeball({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#e29bf0" stroke="#1a1428" strokeWidth="1.5" />
      <path d="M1 12 h22" stroke="#1a1428" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="4" fill="#1a1428" />
      <circle cx="12" cy="12" r="2" fill="#e29bf0" />
    </svg>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function SectionTitle({ children }) {
  return <p className="section-title">{children}</p>;
}

// ============================================================
//  TELA 1: TRAINER CARD (Sobre mim)
// ============================================================
function TrainerCard() {
  const { typed, done } = useTypewriter(trainer.bio);

  return (
    <div className="tcard">
      <div className="tcard-photo">
        <p className="photo-label">✦ PHOTO ID ✦</p>
        <img src="./avatar.webp" alt="Trainer" />
      </div>
      <div className="tcard-stats">
        <StatField label="Name" value={trainer.name} />
        <StatField label="Class" value={trainer.classe} />
        <StatField label="Age" value={trainer.age} />
        <StatField label="Region" value={trainer.region} />
        <StatField label="Type" value={trainer.type} />
        <div className="bio-box">
          <p className="bio-label">📖 BIO</p>
          <p className="bio-text">
            {typed}
            {done && <span className="bio-cursor">▼</span>}
          </p>
          <span className="bio-status">● {trainer.status}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
//  TELA 2: INVENTORY (Skills)
// ============================================================
function Inventory() {
  return (
    <div>
      <SectionTitle>🎒 BAG — Tecnologias equipadas</SectionTitle>
      {skills.map((s, i) => (
        <SkillBar key={s.nome} {...s} index={i} />
      ))}
    </div>
  );
}

// ============================================================
//  TELA 3: MAP (Projetos) — grade de "localizações"
// ============================================================
function Mapa() {
  return (
    <div>
      <SectionTitle>🗺️ MAP — Localizações desbloqueadas (Projetos)</SectionTitle>
      <div className="proj-list">
        {projetos.map((p) => (
          <a key={p.nome} className="proj-card" href={p.link} target="_blank" rel="noreferrer">
            <div className="proj-thumb">
              <img src={p.img} alt={p.nome} loading="lazy" />
            </div>
            <div className="proj-body">
              <p className="proj-name">📍 {p.nome}</p>
              <p className="proj-desc">{p.desc}</p>
              <div>{p.techs.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================
//  TELA 4: BATTLE (Experiência) — "batalhas" em timeline
// ============================================================
function Battle() {
  return (
    <div>
      <SectionTitle>⚔️ BATTLE LOG — Experiência</SectionTitle>
      {experiencia.map((e, i) => (
        <div key={e.cargo} className="battle-card" style={{ "--i": i }}>
          <div className="battle-head">
            <span className="battle-cargo">{e.cargo}</span>
            <span className="battle-periodo">{e.periodo}</span>
          </div>
          <p className="battle-local">🏛️ {e.local}</p>
          <p className="battle-desc">{e.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ============================================================
//  TELA 5: POKEDEX (Tecnologias) — grade de "criaturas"
// ============================================================
function Pokedex() {
  return (
    <div>
      <SectionTitle>📟 POKÉDEX — Tecnologias registradas</SectionTitle>
      <div className="dex-grid">
        {tecnologias.map((t, i) => (
          <div key={t.id} className="dex-card" style={{ "--i": i }}>
            <p className="dex-id">Nº {t.id}</p>
            <div className="dex-iconbox">
              <PixelIcon Icon={t.icone} color={t.cor} size={36} />
            </div>
            <p className="dex-name">{t.nome}</p>
            <p className="dex-type">{t.tipo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
//  TELA 6: SAVE (Contato / redes)
// ============================================================
function Save() {
  return (
    <div>
      <SectionTitle>💾 SAVE MENU — Contato</SectionTitle>
      {contatos.map((c) => (
        <a key={c.rede} className="save-card" href={c.link} target="_blank" rel="noreferrer">
          <span className="save-icon">{c.icone}</span>
          <div>
            <p className="save-rede">{c.rede}</p>
            <p className="save-user">{c.user}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

// ============================================================
//  APP PRINCIPAL — controla qual tela aparece
// ============================================================
export default function App() {
  const [tela, setTela] = useState("card");

  const tabs = [
    { id: "card", label: "🧑 Card", comp: <TrainerCard /> },
    { id: "inventory", label: "🎒 Bag", comp: <Inventory /> },
    { id: "mapa", label: "🗺️ Map", comp: <Mapa /> },
    { id: "battle", label: "⚔️ Battle", comp: <Battle /> },
    { id: "pokedex", label: "📟 Dex", comp: <Pokedex /> },
    { id: "save", label: "💾 Save", comp: <Save /> },
  ];

  const ativa = tabs.find((t) => t.id === tela);

  return (
    <div className="tp-app">
      <div className="tp-shell">
        {/* HEADER — key={tela} remonta as pokébolas a cada troca
            de aba, redisparando a animação de giro */}
        <div className="tp-header">
          <span className="pokeball-spin" key={`l-${tela}`}><Pokeball /></span>
          <h1 className="tp-title">TRAINER PROFILE</h1>
          <span className="pokeball-spin" key={`r-${tela}`}><Pokeball /></span>
        </div>

        {/* ABAS (quebram em linhas no celular) */}
        <div className="tp-tabs" role="tablist" aria-label="Seções do Trainer Card">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tela === t.id}
              className={`tp-tab${tela === t.id ? " active" : ""}`}
              onClick={() => setTela(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CONTEÚDO — key={tela} faz a tela remontar e rodar a
            animação de entrada (screenIn) a cada troca */}
        <div className="tp-content" role="tabpanel">
          <div className="screen" key={tela}>{ativa.comp}</div>
        </div>

        {/* RODAPÉ */}
        <div className="tp-footer">
          <a className="tp-back" href="../">
            <Pokeball size={14} /> VOLTAR
          </a>
        </div>
      </div>
    </div>
  );
}
