import { Ornament } from "./Ornament";
import VideoPlayer from "./VideoPlayer";

const PARENT_VIDEO =
  "https://storage.googleapis.com/shl-okr-platform.firebasestorage.app/edictum/marturii-parinti.mp4";

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Comunitate",
    desc: "Familii unite prin aceleași valori, virtuți și convingeri biblice — o societate omogenă cu aceleași standarde morale.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Familie",
    desc: "Părinții sunt primii și cei mai importanți educatori. Școala vine alături de familie ca extensie a autorității părintești.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    label: "Angajament",
    desc: "Contractul semnat nu e o formalitate, ci expresia unei responsabilități comune și a unei unități reale între familie și școală.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    label: "Principii biblice",
    desc: "Abordarea oricărei nelămuriri cu răbdare, ascultând ambele părți înainte de a judeca și căutând pacea și zidirea reciprocă.",
  },
];

export default function ParentVision() {
  return (
    <section className="py-24 lg:py-32 bg-parchment-warm">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Școala & Părinții</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            O comunitate de familii care cresc copiii în aceeași direcție
          </h2>
          <Ornament className="mb-6 [&>svg]:opacity-90" />
          <p className="font-serif italic text-graphite/70 text-lg leading-relaxed">
            Educația adevărată se clădește printr-un parteneriat viu între familie și școală.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-parchment border border-ink/8 p-6 hover:border-gold/50 hover:shadow-soft transition-all group"
            >
              <div className="text-gold mb-4 group-hover:text-gold-deep transition-colors">
                {p.icon}
              </div>
              <div className="w-6 h-px bg-gold/40 mb-3" />
              <h3 className="font-display text-[0.65rem] tracking-[0.28em] uppercase text-ink-deep mb-2">
                {p.label}
              </h3>
              <p className="font-serif text-sm text-graphite/80 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main text — two columns */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 font-serif text-lg text-graphite/85 leading-relaxed">
          <div className="space-y-5">
            <p>
              Ne dorim părinți care înțeleg și îmbrățișează viziunea educației
              clasice creștine, asumându-și împreună cu noi{" "}
              <strong className="text-ink-deep">responsabilitatea formării copiilor lor</strong>{" "}
              înaintea lui Dumnezeu.
            </p>
            <p>
              Dorim ca părinții să crească alături de școală — implicați în
              drumul nostru, bine informați cu privire la scopurile și valorile
              Edictum și{" "}
              <strong className="text-ink-deep">plini de bucurie</strong> pentru
              ceea ce Dumnezeu lucrează în viața copiilor lor.
            </p>
            <p>
              Ne dorim să construim o comunitate de familii unite prin aceleași
              valori, virtuți și convingeri biblice — o societate omogenă de
              părinți care își cresc copiii{" "}
              <strong className="text-ink-deep">într-o direcție comună</strong>,
              cu aceleași standarde morale, aceleași idealuri și aceeași dragoste
              pentru adevăr, frumusețe și bine.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Din acest motiv, părinții semnează un{" "}
              <strong className="text-ink-deep">contract de angajament</strong>,
              nu ca o simplă formalitate administrativă, ci ca expresie a unei
              responsabilități comune și a unei unități reale între familie și
              școală. Acest angajament creează cadrul unei comunități sănătoase,
              coerente și stabile, în care copiii sunt formați într-un mediu
              armonios și consecvent.
            </p>
            <p>
              Ne propunem, de asemenea, să încurajăm părinții să abordeze orice
              nelămurire sau dificultate potrivit{" "}
              <strong className="text-ink-deep">principiilor Scripturii</strong>{" "}
              — cu răbdare, ascultând ambele părți înainte de a judeca și
              căutând mereu pacea, zidirea reciprocă și dragostea creștină.
            </p>
            <blockquote className="border-l-2 border-gold/60 pl-5 py-1">
              <p className="font-serif italic text-graphite/70 leading-relaxed">
                Considerăm părinții primii și cei mai importanți educatori ai
                copiilor lor. Școala nu înlocuiește familia, ci vine alături de
                ea ca o extensie a autorității și responsabilității părintești,
                pentru a sluji împreună la formarea unei generații credincioase
                lui Hristos.
              </p>
            </blockquote>
          </div>
        </div>

        {/* Video */}
        <div className="relative aspect-video border border-gold/30 shadow-column overflow-hidden">
          <VideoPlayer src={PARENT_VIDEO} className="absolute inset-0 w-full h-full" />
        </div>
        <p className="text-center mt-4 text-sm text-ink/55 italic font-serif">
          Mărturii ale părinților din comunitatea Edictum.
        </p>

      </div>
    </section>
  );
}
