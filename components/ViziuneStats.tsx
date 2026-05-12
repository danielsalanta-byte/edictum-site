"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Bar chart: Academic comparison ───────────────────────────────────────────

const academicMetrics = [
  {
    label: "Citire & Înțelegere",
    classical: 88,
    catholic: 74,
    evangelical: 70,
    public: 58,
  },
  {
    label: "Performanță SAT",
    classical: 85,
    catholic: 72,
    evangelical: 68,
    public: 55,
  },
  {
    label: "Gândire Critică",
    classical: 90,
    catholic: 68,
    evangelical: 65,
    public: 52,
  },
  {
    label: "Logică & Argumentare",
    classical: 87,
    catholic: 71,
    evangelical: 67,
    public: 54,
  },
];

const schools = [
  { key: "classical" as const, label: "Clasică Creștină", color: "#7E1A1A" },
  { key: "catholic" as const, label: "Catolică", color: "#8B6B36" },
  { key: "evangelical" as const, label: "Evanghelică", color: "#5C7A5C" },
  { key: "public" as const, label: "Publică", color: "#8B8B8B" },
];

type MetricKey = "classical" | "catholic" | "evangelical" | "public";

function AcademicChart({ inView }: { inView: boolean }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 mb-6">
        {schools.map((s) => (
          <div key={s.key} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: s.color }}
            />
            <span className="text-xs font-sans tracking-wide text-ink/70">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {academicMetrics.map((m) => (
        <div key={m.label}>
          <div className="font-sans text-xs tracking-widest uppercase text-ink/55 mb-3">
            {m.label}
          </div>
          {schools.map((s, si) => {
            const val = m[s.key as MetricKey] as number;
            return (
              <div key={s.key} className="flex items-center gap-3 mb-2">
                <div
                  className="flex-1 h-5 relative overflow-hidden"
                  style={{ background: "rgba(42,26,26,0.07)" }}
                >
                  <div
                    className="h-full flex items-center justify-end pr-2"
                    style={{
                      width: inView ? `${val}%` : "0%",
                      background: s.color,
                      transition: `width 1s ease-out ${si * 120}ms`,
                    }}
                  >
                    {inView && (
                      <span className="text-[11px] text-white/90 font-sans font-medium leading-none">
                        {val}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <p className="text-xs font-sans text-ink/38 italic leading-relaxed pt-2">
        * Valori ilustrative bazate pe studii comparative (ACCS Research Report,
        2020). Scala 0–100 reprezintă percentile relative față de media
        națională.
      </p>
    </div>
  );
}

// ─── Circular stat cards: Learning section ────────────────────────────────────

function CircularStat({
  value,
  label,
  sub,
  inView,
  delay = 0,
}: {
  value: string;
  label: string;
  sub: string;
  inView: boolean;
  delay?: number;
}) {
  return (
    <div
      className="text-center p-5 sm:p-8 border border-gold/25 bg-white/55 backdrop-blur-sm"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      <div className="font-display text-5xl lg:text-6xl text-ink mb-3 leading-none">
        {value}
      </div>
      <div
        className="font-display text-[0.68rem] tracking-[0.28em] uppercase mb-3"
        style={{ color: "#8B6B36" }}
      >
        {label}
      </div>
      <div
        className="w-10 h-px mx-auto mb-4"
        style={{ background: "rgba(168,133,74,0.4)" }}
      />
      <p className="font-serif text-sm text-ink/65 leading-relaxed">{sub}</p>
    </div>
  );
}

// ─── Integration wheel: Faith & Science section ───────────────────────────────

const wheelSubjects = [
  { label: "Teologie",   angle: 0 },
  { label: "Filosofie",  angle: 60 },
  { label: "Știință",    angle: 120 },
  { label: "Matematică", angle: 180 },
  { label: "Literatură", angle: 240 },
  { label: "Istorie",    angle: 300 },
];

function IntegrationWheel({ inView }: { inView: boolean }) {
  const cx = 220, cy = 220, r = 128, ri = 58, nodeR = 40;

  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1) rotate(0deg)" : "scale(0.82) rotate(-8deg)",
        transition: "opacity 1.2s ease-out 300ms, transform 1.2s ease-out 300ms",
      }}
    >
      <svg
        viewBox="0 0 440 440"
        className="w-full max-w-[400px] mx-auto"
        aria-label="Roată de integrare a cunoașterii clasice creștine"
      >
        {/* outer decorative ring — outside the node circles */}
        <circle
          cx={cx}
          cy={cy}
          r={r + nodeR + 14}
          fill="none"
          stroke="rgba(168,133,74,0.15)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* main orbit circle */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(168,133,74,0.28)"
          strokeWidth="1"
        />
        {/* center fill */}
        <circle
          cx={cx}
          cy={cy}
          r={ri}
          fill="rgba(92,20,20,0.20)"
          stroke="rgba(168,133,74,0.55)"
          strokeWidth="1.5"
        />

        {wheelSubjects.map((s) => {
          const rad = ((s.angle - 90) * Math.PI) / 180;
          const xNode = cx + r * Math.cos(rad);
          const yNode = cy + r * Math.sin(rad);
          const xInner = cx + ri * Math.cos(rad);
          const yInner = cy + ri * Math.sin(rad);
          // shorten spoke so it ends at node circle edge
          const xSpoke = xNode - nodeR * Math.cos(rad);
          const ySpoke = yNode - nodeR * Math.sin(rad);

          return (
            <g key={s.label}>
              <line
                x1={xInner}
                y1={yInner}
                x2={xSpoke}
                y2={ySpoke}
                stroke="rgba(168,133,74,0.4)"
                strokeWidth="1"
              />
              {/* node circle */}
              <circle cx={xNode} cy={yNode} r={nodeR} fill="rgba(92,20,20,0.90)" stroke="rgba(168,133,74,0.35)" strokeWidth="1" />
              {/* label inside the circle */}
              <text
                x={xNode}
                y={yNode + 4}
                textAnchor="middle"
                fontSize="10"
                fill="#F6F0DD"
                fontFamily="Georgia, serif"
                fontStyle="italic"
              >
                {s.label}
              </text>
            </g>
          );
        })}

        {/* center cross */}
        <line x1={cx - 18} y1={cy} x2={cx + 18} y2={cy} stroke="rgba(168,133,74,0.7)" strokeWidth="1" />
        <line x1={cx} y1={cy - 24} x2={cx} y2={cy + 24} stroke="rgba(168,133,74,0.7)" strokeWidth="1" />
        <text x={cx} y={cy - 9} textAnchor="middle" fontSize="9" fill="rgba(168,133,74,0.9)" fontFamily="Georgia, serif" fontStyle="italic">
          sub domnia
        </text>
        <text x={cx} y={cy + 9} textAnchor="middle" fontSize="9" fill="rgba(168,133,74,0.9)" fontFamily="Georgia, serif" fontStyle="italic">
          lui Hristos
        </text>
      </svg>

      <p className="text-center font-serif italic text-parchment/55 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
        Toate ariile cunoașterii — integrate într-o singură viziune coerentă
        despre realitate
      </p>
    </div>
  );
}

// ─── Civic engagement progress bars ──────────────────────────────────────────

const civicData = [
  { label: "Educație Clasică Creștină", value: 82, color: "#7E1A1A" },
  { label: "Școlile Catholice", value: 60, color: "#8B6B36" },
  { label: "Școlile Evanghelice", value: 57, color: "#5C7A5C" },
  { label: "Școlile Publice", value: 48, color: "#8B8B8B" },
];

function CivicBars({ inView }: { inView: boolean }) {
  return (
    <div className="space-y-5">
      <p
        className="font-display text-[0.68rem] tracking-[0.28em] uppercase mb-5"
        style={{ color: "#8B6B36" }}
      >
        Indice de implicare civică &amp; morală
      </p>
      {civicData.map((d, i) => (
        <div key={d.label}>
          <div className="flex justify-between mb-1.5">
            <span className="font-sans text-sm text-ink/70 tracking-wide">
              {d.label}
            </span>
            <span
              className="font-display text-sm font-medium"
              style={{ color: d.color }}
            >
              {d.value}%
            </span>
          </div>
          <div
            className="h-3 overflow-hidden"
            style={{ background: "rgba(42,26,26,0.09)" }}
          >
            <div
              className="h-full"
              style={{
                width: inView ? `${d.value}%` : "0%",
                background: d.color,
                transition: `width 1s ease-out ${i * 150}ms`,
              }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs font-sans text-ink/40 italic pt-2 leading-relaxed">
        * Date comparative din studiul ACCS (2020), bazate pe un eșantion de
        ~2.500 absolvenți din SUA.
      </p>
    </div>
  );
}

// ─── Truth · Goodness · Beauty visual ────────────────────────────────────────

const tgbItems = [
  {
    en: "TRUTH",
    ro: "Adevărul",
    desc: "Minți formate să caute și să iubească adevărul obiectiv, ancorat nu în opinii sau tendințe culturale, ci în Dumnezeu Însuși — Sursa oricărei cunoașteri.",
    icon: "✦",
  },
  {
    en: "GOODNESS",
    ro: "Binele",
    desc: "Caractere formate să trăiască virtuos, cu integritate morală și responsabilitate față de Dumnezeu, familie și societate — nu din constrângere, ci din dragoste.",
    icon: "✦",
  },
  {
    en: "BEAUTY",
    ro: "Frumosul",
    desc: "Suflete formate să prețuiască frumosul ca reflecție a gloriei divine — în artă, muzică, literatură și în ordinea lumii create de Dumnezeu.",
    icon: "✦",
  },
];

function TGBVisual({ inView }: { inView: boolean }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
      {tgbItems.map((item, i) => (
        <div
          key={item.en}
          className="border border-gold/35 p-5 sm:p-8 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.9s ease-out ${i * 200}ms, transform 0.9s ease-out ${i * 200}ms`,
          }}
        >
          <div
            className="font-display text-[0.68rem] tracking-[0.32em] uppercase mb-3"
            style={{ color: "#8B6B36" }}
          >
            {item.en}
          </div>
          <div className="font-display text-2xl text-ink-deep mb-4">
            {item.ro}
          </div>
          <div
            className="w-12 h-px mx-auto mb-4"
            style={{ background: "rgba(168,133,74,0.5)" }}
          />
          <p className="font-serif text-sm text-ink/70 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export default function ViziuneStats({
  section,
}: {
  section: "academic" | "learning" | "integration" | "civic" | "tgb";
}) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      {section === "academic" && <AcademicChart inView={inView} />}
      {section === "learning" && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <CircularStat
            value="6,7×"
            label="Cititori constanți"
            sub="Mai predispuși să citească regulat față de absolvenții altor sisteme educaționale — o cultură a lecturii formată de-a lungul anilor de studiu clasic."
            inView={inView}
            delay={0}
          />
          <CircularStat
            value="70%"
            label="Citesc Biblia zilnic"
            sub="Continuă un obicei de lectură a Scripturii dobândit în formarea clasică creștină — cunoașterea Cuvântului ca fundament al vieții."
            inView={inView}
            delay={150}
          />
          <CircularStat
            value="2,6×"
            label="Viață de rugăciune"
            sub="Mai predispuși să aibă o practică consecventă a rugăciunii personale și familiale — credința trăită, nu doar declarată."
            inView={inView}
            delay={300}
          />
        </div>
      )}
      {section === "integration" && <IntegrationWheel inView={inView} />}
      {section === "civic" && <CivicBars inView={inView} />}
      {section === "tgb" && <TGBVisual inView={inView} />}
    </div>
  );
}
