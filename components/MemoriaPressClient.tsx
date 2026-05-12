"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Discipline card with staggered fade ─────────────────────────────────────

const disciplines = [
  { icon: "I", label: "Literatura Clasică", desc: "Homer, Virgiliu, Dante, Shakespeare — marii autori care au format civilizația occidentală, citiți în original sau în traduceri fidele." },
  { icon: "II", label: "Limba Latină", desc: "Fundația gramaticii, logicii și gândirii precise. Latina deschide accesul la rădăcinile culturii și ale limbajului teologic creștin." },
  { icon: "III", label: "Istoria Occidentală", desc: "De la Grecia antică la Reformă și modernitate — istoria ca providență divină, nu ca simplu șir de fapte." },
  { icon: "IV", label: "Logică & Retorică", desc: "Arta de a gândi corect și de a vorbi frumos. Elevii învață să construiască argumente valide și să comunice cu claritate și convingere." },
  { icon: "V", label: "Studiul Scripturii", desc: "Biblia ca centru al formării — nu ca disciplină izolată, ci ca lumina în care toate celelalte cunoștințe sunt înțelese și integrate." },
  { icon: "VI", label: "Gramatică & Compoziție", desc: "Stăpânirea limbii ca instrument al gândirii clare. Elevii scriu cu precizie, eleganță și substanță — nu pentru note, ci pentru formare." },
  { icon: "VII", label: "Matematică Riguroasă", desc: "Matematica reflectă ordinea creației lui Dumnezeu. Abordarea clasică pune accent pe înțelegere profundă, nu pe memorare mecanică." },
  { icon: "VIII", label: "Memorare & Recitare", desc: "Memorarea nu este un exercițiu mecanic, ci un act de interiorizare. Poezia, Scriptura și pasajele clasice devin parte din sufletul elevului." },
  { icon: "IX", label: "Formare Morală & Spirituală", desc: "Caracterul creștin este scopul central al educației. Toate disciplinele sunt integrate într-o viziune morală coerentă, ancorată în Hristos." },
  { icon: "X", label: "Istoria Artei & Muzicii", desc: "Frumosul ca oglindă a lui Dumnezeu. Elevii sunt formați să aprecieze și să creeze frumusețe — în artă, muzică, arhitectură și poezie." },
];

export function DisciplinesGrid() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
      {disciplines.map((d, i) => (
        <div
          key={d.label}
          className="border border-gold/30 bg-parchment/80 backdrop-blur-sm p-5 hover:border-gold/60 transition-colors duration-300 group"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.7s ease-out ${i * 60}ms, transform 0.7s ease-out ${i * 60}ms`,
          }}
        >
          <div className="font-display text-[0.6rem] tracking-[0.3em] uppercase text-gold-deep mb-3 opacity-80">
            {d.icon}
          </div>
          <h3 className="font-display text-sm text-ink-deep mb-2 leading-snug group-hover:text-gold-deep transition-colors">
            {d.label}
          </h3>
          <p className="font-serif text-[0.78rem] text-ink/65 leading-relaxed">{d.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Teacher virtue pillars ───────────────────────────────────────────────────

const virtues = [
  { latin: "AMOR DEI", ro: "Dragostea față de Dumnezeu", desc: "Fundamentul oricărui act educațional autentic. Un profesor care Îl iubește pe Dumnezeu transmite mai mult decât cunoștințe — transmite o orientare a sufletului." },
  { latin: "AMOR VERITATIS", ro: "Dragostea față de Adevăr", desc: "Integritatea intelectuală ca virtute cardinală. Profesorul formează elevi care nu acceptă superficialitatea, ci caută adevărul cu curaj și consecvență." },
  { latin: "AMOR PUERORUM", ro: "Dragostea față de Copii", desc: "Nu o sentimentalitate ieftină, ci o iubire răbdătoare, care formează, corectează și înalță. Profesorul creștin privește în fiecare elev chipul lui Dumnezeu." },
  { latin: "PATIENTIA", ro: "Răbdare și Perseverență", desc: "Formarea caracterului este un proces lent. Profesorul clasic creștin lucrează pentru generații, nu pentru semestre — cu răbdare, consecvență și viziune." },
  { latin: "HUMILITAS", ro: "Smerenie Intelectuală", desc: "Recunoașterea că profesorul însuși este un elev al adevărului. Educația clasică creștină formează educatori care continuă ei înșiși să crească." },
  { latin: "EXEMPLUM", ro: "Puterea Exemplului", desc: "Caracterul profesorului este cel mai puternic curriculum. Elevii imită ceea ce văd. Un profesor virtuos este cel mai eficient instrument pedagogic." },
];

export function VirtuePillars() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {virtues.map((v, i) => (
        <div
          key={v.latin}
          className="p-8 border border-gold/25 bg-ink-deep/45 backdrop-blur-sm hover:bg-ink-deep/60 transition-colors duration-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.85s ease-out ${i * 100}ms, transform 0.85s ease-out ${i * 100}ms`,
          }}
        >
          <div className="font-display text-[0.6rem] tracking-[0.35em] uppercase text-gold mb-2">{v.latin}</div>
          <h3 className="font-display text-xl text-parchment mb-4 leading-snug">{v.ro}</h3>
          <div className="w-8 h-px mb-4" style={{ background: "rgba(168,133,74,0.45)" }} />
          <p className="font-serif text-sm text-parchment/65 leading-relaxed">{v.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ─── YouTube video preview cards ──────────────────────────────────────────────

const ytVideos = [
  {
    title: "What is Classical Christian Education?",
    desc: "O introducere completă în principiile și filosofia educației clasice creștine.",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@MemoriaPress",
    tag: "Educație clasică",
  },
  {
    title: "Teacher Formation Series",
    desc: "Seria dedicată formării profesorilor clasici creștini — caracter, metodă și misiune.",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@MemoriaPress",
    tag: "Teacher Training",
  },
  {
    title: "Latin in the Classical Classroom",
    desc: "De ce latina este fundamentul educației clasice și cum este predată în școlile Memoria Press.",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@MemoriaPress",
    tag: "Latina",
  },
];

export function YouTubeCards() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {ytVideos.map((v, i) => (
        <a
          key={v.title}
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-gold/25 bg-ink-deep/40 overflow-hidden hover:border-gold/50 transition-all duration-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.8s ease-out ${i * 120}ms, transform 0.8s ease-out ${i * 120}ms`,
          }}
        >
          {/* thumbnail placeholder */}
          <div className="relative aspect-video bg-ink-deep/70 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 to-ink-deep/80" />
            <div className="relative z-10 w-14 h-14 rounded-full bg-crimson/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="absolute top-3 left-3 bg-gold/90 px-2 py-0.5">
              <span className="font-display text-[0.55rem] tracking-widest uppercase text-ink-deep">{v.tag}</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-display text-sm text-parchment mb-2 leading-snug group-hover:text-gold transition-colors">
              {v.title}
            </h4>
            <p className="font-serif text-[0.78rem] text-parchment/55 leading-relaxed">{v.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-gold text-[0.7rem] font-display tracking-wider uppercase">
              <span>Watch on YouTube</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

// ─── Hero stat counters ───────────────────────────────────────────────────────

const heroFacts = [
  { num: "30+", label: "ani de excelență\nacademică" },
  { num: "K–12", label: "curriculum complet\nde la grădiniță la liceu" },
  { num: "100+", label: "titluri publicate\nde referință" },
  { num: "∞", label: "generații formate\nîn adevăr și frumos" },
];

export function HeroFacts({ dark = false }: { dark?: boolean }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/20 border border-gold/22"
      style={{ background: dark ? "rgba(18,10,10,0.55)" : "rgba(246,240,221,0.55)" }}
    >
      {heroFacts.map((s, i) => (
        <div
          key={s.num}
          className="px-6 py-7 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.8s ease-out ${i * 100}ms`,
          }}
        >
          <div className={`font-display text-3xl md:text-4xl mb-2 leading-none ${dark ? "text-gold-light" : "text-crimson"}`}>
            {s.num}
          </div>
          <div className={`font-sans text-[0.65rem] tracking-widest uppercase whitespace-pre-line leading-relaxed ${dark ? "text-parchment/55" : "text-ink/55"}`}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.9s ease-out ${delay}ms, transform 0.9s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
