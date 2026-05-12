"use client";
import { useState } from "react";
import { Ornament } from "./Ornament";

// ─── Data ────────────────────────────────────────────────────────────────────

const LOVES = [
  {
    id: "aproapele",
    short: "Aproapele",
    title: "Dragoste pentru Aproapele",
    pos: "s1" as const,
    description:
      "Prin ucenicie și fapte de slujire, elevii învață să contribuie la comunitățile din care fac parte, cultivând relații marcate de smerenie, har și dragoste asemenea lui Hristos.",
    results: [
      "Manifestă o inimă gata de slujire, luând inițiativa de a răspunde nevoilor celor din familie, biserică, școală și comunitate.",
      "Aplică principiile biblice ale smereniei, compasiunii și împăcării, tratându-i pe ceilalți cu respect și cinstind autoritatea.",
      "Construiesc relații autentice, întărind legăturile familiale, cultivând prietenii și promovând unitatea în comunitatea școlii.",
      "Știu să conducă și să urmeze cu înțelepciune, înțelegând când să slujească, când să conducă și cum să colaboreze pentru binele comun.",
    ],
  },
  {
    id: "dumnezeu",
    short: "Dumnezeu",
    title: "Dragoste pentru Dumnezeu",
    pos: "s2" as const,
    description:
      "Printr-o încredere neclintită în adevărul și puterea Scripturii, elevii sunt încurajați să dezvolte o credință personală în Isus Hristos, din care izvorăște o viziune biblică asupra lumii și o viață așezată în mod corect înaintea lui Dumnezeu.",
    results: [
      "Manifestă o credință personală în Isus Hristos, crescând activ în relația cu El prin rugăciune, închinare și studiul Scripturii.",
      "Aplică o perspectivă biblică în învățare, în luarea deciziilor și în viața de zi cu zi, recunoscându-L pe Hristos ca fundament al întregului adevăr.",
      "Trăiesc cu har și smerenie, practicând pocăința, iertarea și împăcarea în relațiile cu ceilalți.",
      "Caută să-L glorifice pe Dumnezeu în toate lucrurile, cinstindu-L prin excelență academică, slujire și caracter.",
    ],
  },
  {
    id: "creativitate",
    short: "Creativitate",
    title: "Dragoste pentru Creativitate",
    pos: "s3" as const,
    description:
      "Prin exprimare creativă și explorare, elevii reflectă natura lui Dumnezeu ca Creator suprem, cultivând imaginația, inovația și dragostea pentru frumusețe în toate domeniile vieții.",
    results: [
      "Manifestă apreciere pentru frumusețe, excelență și măiestrie în artă, literatură și lumea creată de Dumnezeu.",
      "Aplică gândirea creativă și inovația în rezolvarea problemelor, comunicare și exprimare artistică.",
      "Se implică în activități creative cu sens, folosindu-și imaginația și abilitățile pentru a da viață adevărului și binelui.",
      "Integrează creativitatea în viața personală și profesională, folosindu-și darurile pentru a inspira, a inova și a contribui la înflorirea oamenilor și a societății.",
    ],
  },
  {
    id: "invatare",
    short: "Învățare",
    title: "Dragoste pentru Învățare",
    pos: "s4" as const,
    description:
      "Printr-o pedagogie clasică riguroasă, elevii își dezvoltă curiozitatea intelectuală și o minte disciplinată, cultivând o dragoste pentru învățare care durează întreaga viață, în căutarea adevărului și a înțelepciunii.",
    results: [
      "Manifestă o dragoste continuă pentru învățare, abordând cunoașterea cu curiozitate, perseverență și smerenie.",
      "Aplică gândirea critică și raționamentul logic, evaluând ideile printr-o perspectivă biblică și participând la discuții semnificative.",
      "Comunică eficient în vorbire și în scris, exprimând idei și argumente clare, bine fundamentate și convingătoare.",
      "Dezvoltă competență în diverse discipline prin studiu independent, realizând conexiuni între domenii și producând lucrări de calitate.",
    ],
  },
  {
    id: "crestere",
    short: "Creștere",
    title: "Dragoste pentru Creștere",
    pos: "s5" as const,
    description:
      "Prin disciplină, perseverență și o viață bine rânduită, elevii își dezvoltă rezistența fizică, cultivă obiceiuri sănătoase și învață să întâmpine provocările cu curaj și curiozitate.",
    results: [
      "Manifestă responsabilitate față de propriul trup, practicând disciplina, rezistența și grija pentru sănătatea fizică.",
      "Aplică hărnicia și perseverența, formând obiceiuri care dezvoltă reziliența, responsabilitatea și excelența.",
      "Trăiesc în echilibru, gestionând cu înțelepciune și intenționalitate studiul, credința, relațiile și starea de bine.",
      "Întâmpină provocările cu curaj și dorință de a învăța, văzând dificultățile ca oportunități de creștere și maturizare.",
    ],
  },
  {
    id: "virtute",
    short: "Virtute",
    title: "Dragoste pentru Virtute",
    pos: "s6" as const,
    description:
      "Prin căutarea înțelepciunii și a excelenței morale, elevii își formează disciplina și tăria de caracter necesare pentru a trăi cu stăpânire de sine, echilibru și har.",
    results: [
      "Manifestă autocontrol și maturitate, răspunzând provocărilor cu răbdare, disciplină și încredere.",
      "Aplică înțelepciunea și discernământul moral, luând decizii etice întemeiate pe adevărul biblic.",
      "Trăiesc cu integritate și smerenie, tratându-i pe ceilalți cu onoare și acționând cu curaj în situații dificile.",
      "Reflectă har în vorbire și comportament, păstrându-și cumpătul și arătând bunătate chiar și în momente de presiune.",
    ],
  },
];

// ─── Shield SVG icons ─────────────────────────────────────────────────────────

function IconAproapele({ sel }: { sel: boolean }) {
  const c = sel ? "#F6F0DD" : "#7E1A1A";
  return (
    <g transform="translate(50,60)">
      <path d="M0 10 C0 10 -16-2 -16-11 C-16-20 -7-23 0-13 C7-23 16-20 16-11 C16-2 0 10 0 10Z" fill={c} opacity="0.9" />
      <circle cx="-9" cy="-21" r="5" fill="none" stroke={c} strokeWidth="2" />
      <circle cx="9" cy="-21" r="5" fill="none" stroke={c} strokeWidth="2" />
    </g>
  );
}

function IconDumnezeu({ sel }: { sel: boolean }) {
  const c = sel ? "#F6F0DD" : "#7E1A1A";
  return (
    <g transform="translate(50,60)" stroke={c} strokeWidth="2.5" strokeLinecap="round" fill="none">
      <line x1="0" y1="-22" x2="0" y2="18" />
      <line x1="-15" y1="-6" x2="15" y2="-6" />
      <rect x="-11" y="-22" width="22" height="16" rx="2" fill={c} opacity="0.15" stroke={c} strokeWidth="1.5" />
    </g>
  );
}

function IconCreativitate({ sel }: { sel: boolean }) {
  const c = sel ? "#F6F0DD" : "#7E1A1A";
  return (
    <g transform="translate(50,60)" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none">
      <path d="M-12-2 Q-16-22 0-26 Q16-22 12-2 Z" />
      <line x1="-8" y1="-22" x2="-8" y2="4" strokeWidth="1.2" />
      <line x1="0" y1="-26" x2="0" y2="4" strokeWidth="1.2" />
      <line x1="8" y1="-22" x2="8" y2="4" strokeWidth="1.2" />
      <line x1="-14" y1="4" x2="14" y2="4" strokeWidth="2.5" />
      <rect x="-5" y="4" width="10" height="8" rx="1" fill={c} opacity="0.3" />
    </g>
  );
}

function IconInvatare({ sel }: { sel: boolean }) {
  const c = sel ? "#F6F0DD" : "#7E1A1A";
  return (
    <g transform="translate(50,60)" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none">
      <rect x="-16" y="-20" width="32" height="26" rx="3" fill={c} opacity="0.12" />
      <line x1="-10" y1="-10" x2="10" y2="-10" />
      <line x1="-10" y1="-3" x2="10" y2="-3" />
      <line x1="-10" y1="4" x2="5" y2="4" />
      <circle cx="10" cy="14" r="5" fill={c} opacity="0.2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="7" y1="14" x2="13" y2="14" />
    </g>
  );
}

function IconCrestere({ sel }: { sel: boolean }) {
  const c = sel ? "#F6F0DD" : "#7E1A1A";
  return (
    <g transform="translate(50,60)" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none">
      <circle cx="0" cy="-20" r="5" fill={c} opacity="0.25" />
      <line x1="0" y1="-15" x2="0" y2="2" />
      <line x1="-12" y1="-6" x2="0" y2="0" />
      <line x1="12" y1="-6" x2="0" y2="0" />
      <line x1="0" y1="2" x2="-8" y2="18" />
      <line x1="0" y1="2" x2="8" y2="18" />
      <path d="M-18-2 Q-22-14 -12-18 Q-4-20 -4-10" fill={c} opacity="0.2" />
      <path d="M18-2 Q22-14 12-18 Q4-20 4-10" fill={c} opacity="0.2" />
    </g>
  );
}

function IconVirtute({ sel }: { sel: boolean }) {
  const c = sel ? "#F6F0DD" : "#7E1A1A";
  return (
    <g transform="translate(50,60)" stroke={c} strokeWidth="1.5" fill="none">
      <circle cx="0" cy="0" r="16" opacity="0.2" fill={c} />
      <circle cx="0" cy="0" r="6" fill={c} opacity="0.3" />
      <path d="M0-22 L3-3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3-3Z" fill={c} opacity="0.85" />
      <circle cx="0" cy="0" r="3" fill={sel ? "#7E1A1A" : "#F6F0DD"} />
    </g>
  );
}

const ICONS: Record<string, (sel: boolean) => JSX.Element> = {
  aproapele: (s) => <IconAproapele sel={s} />,
  dumnezeu: (s) => <IconDumnezeu sel={s} />,
  creativitate: (s) => <IconCreativitate sel={s} />,
  invatare: (s) => <IconInvatare sel={s} />,
  crestere: (s) => <IconCrestere sel={s} />,
  virtute: (s) => <IconVirtute sel={s} />,
};

// ─── Grid area → connector line endpoint (%) ──────────────────────────────────
// Container is 4-col × 3-row grid, center spans col2-3 of row2
const LINE_ENDS: Record<string, [number, number]> = {
  s1: [31, 17],
  s2: [69, 17],
  s3: [10, 50],
  s4: [90, 50],
  s5: [31, 83],
  s6: [69, 83],
};

// ─── Shield card ──────────────────────────────────────────────────────────────

function ShieldCard({
  love,
  selected,
  onClick,
}: {
  love: (typeof LOVES)[0];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 focus:outline-none"
      style={{ gridArea: love.pos }}
      aria-pressed={selected}
    >
      <div
        className="relative transition-transform duration-300 group-hover:scale-110"
        style={{ width: "clamp(60px, 9vw, 88px)" }}
      >
        <svg
          viewBox="0 0 100 118"
          className="w-full drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield fill */}
          <path
            d="M50 4 L96 20 L96 66 Q96 92 50 114 Q4 92 4 66 L4 20 Z"
            fill={selected ? "#7E1A1A" : "rgba(246,240,221,0.95)"}
            className="transition-colors duration-300"
          />
          {/* Gold border */}
          <path
            d="M50 4 L96 20 L96 66 Q96 92 50 114 Q4 92 4 66 L4 20 Z"
            fill="none"
            stroke={selected ? "rgba(168,133,74,0.7)" : "rgba(168,133,74,0.5)"}
            strokeWidth="1.8"
          />
          {/* Inner decorative border */}
          <path
            d="M50 14 L86 27 L86 65 Q86 86 50 104 Q14 86 14 65 L14 27 Z"
            fill="none"
            stroke={selected ? "rgba(246,240,221,0.2)" : "rgba(168,133,74,0.2)"}
            strokeWidth="0.8"
          />
          {/* Icon */}
          {ICONS[love.id]?.(selected)}
        </svg>
      </div>
      <span
        className={`font-display text-[0.55rem] tracking-[0.2em] uppercase text-center leading-tight transition-colors duration-300 ${
          selected ? "text-crimson" : "text-ink/65 group-hover:text-ink"
        }`}
        style={{ maxWidth: "clamp(56px, 8vw, 80px)" }}
      >
        {love.short}
      </span>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SixLoves() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = LOVES.find((l) => l.id === selected) ?? null;

  return (
    <section className="py-24 lg:py-32 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Cele șase iubiri</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            Cele șase iubiri
            <br />
            ale elevului Edictum
          </h2>
          <Ornament className="mb-6" />
          <p className="font-serif italic text-ink/65 leading-relaxed">
            Apasă pe oricare iubire pentru a descoperi descrierea și roadele urmărite.
          </p>
        </div>

        {/* Hub + Detail panel */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center">
          {/* ── Hub diagram ── */}
          <div className="w-full lg:w-auto flex-shrink-0 flex justify-center">
            <div
              className="relative"
              style={{
                display: "grid",
                gridTemplateAreas: `
                  ". s1 s2 ."
                  "s3 ce ce s4"
                  ". s5 s6 ."
                `,
                gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                gridTemplateRows: "auto auto auto",
                gap: "clamp(8px, 2vw, 20px)",
                width: "clamp(280px, 50vw, 440px)",
              }}
            >
              {/* Connector lines SVG overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {Object.entries(LINE_ENDS).map(([pos, [x, y]]) => (
                  <line
                    key={pos}
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="rgba(168,133,74,0.3)"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                ))}
              </svg>

              {/* Shield cards */}
              {LOVES.map((love) => (
                <ShieldCard
                  key={love.id}
                  love={love}
                  selected={selected === love.id}
                  onClick={() => setSelected(selected === love.id ? null : love.id)}
                />
              ))}

              {/* Center emblem */}
              <div
                className="flex flex-col items-center justify-center"
                style={{ gridArea: "ce" }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 border border-gold/45 flex items-center justify-center bg-parchment-warm/80">
                  <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12">
                    {/* Edictum cross monogram */}
                    <line x1="30" y1="6" x2="30" y2="54" stroke="rgba(168,133,74,0.7)" strokeWidth="1.2" />
                    <line x1="6" y1="30" x2="54" y2="30" stroke="rgba(168,133,74,0.7)" strokeWidth="1.2" />
                    <circle cx="30" cy="30" r="10" fill="none" stroke="rgba(126,26,26,0.5)" strokeWidth="1.2" />
                    <circle cx="30" cy="30" r="18" fill="none" stroke="rgba(168,133,74,0.25)" strokeWidth="0.8" strokeDasharray="2 3" />
                    <text x="30" y="34" textAnchor="middle" fontSize="8" fontFamily="Georgia, serif" fill="rgba(126,26,26,0.75)" fontStyle="italic">
                      Edictum
                    </text>
                  </svg>
                </div>
                <p className="font-display text-[0.5rem] tracking-[0.22em] uppercase text-gold-deep mt-1.5 opacity-70">
                  6 iubiri
                </p>
              </div>
            </div>
          </div>

          {/* ── Detail panel ── */}
          <div
            className="flex-1 min-h-[320px] w-full transition-all duration-500"
            style={{ opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(12px)" }}
          >
            {active ? (
              <div className="border border-gold/30 bg-parchment-warm/60 p-7 md:p-9 h-full">
                {/* Love label */}
                <p className="eyebrow mb-2">Iubire</p>
                <h3 className="font-display text-2xl md:text-3xl text-ink-deep mb-4 leading-snug">
                  {active.title}
                </h3>
                <div className="w-10 h-px mb-5" style={{ background: "rgba(168,133,74,0.5)" }} />

                {/* Description */}
                <p className="font-serif text-ink/80 leading-relaxed mb-7">
                  {active.description}
                </p>

                {/* Results */}
                <p className="font-display text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep mb-4">
                  Rezultate urmărite
                </p>
                <ul className="space-y-3">
                  {active.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 font-serif text-sm text-ink/75 leading-relaxed">
                      <span className="text-gold-deep mt-0.5 flex-shrink-0 text-xs">◆</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="border border-gold/15 bg-parchment-warm/30 p-7 md:p-9 h-full flex flex-col items-center justify-center text-center">
                <div className="text-gold/30 text-4xl mb-4">✦</div>
                <p className="font-serif italic text-ink/38 text-sm leading-relaxed max-w-xs">
                  Selectează una dintre cele șase iubiri pentru a descoperi descrierea și roadele urmărite în formarea elevului Edictum.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
