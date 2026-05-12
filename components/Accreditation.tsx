import { Ornament } from "./Ornament";

export default function Accreditation() {
  return (
    <section className="py-14 lg:py-32 bg-parchment-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Recunoaștere internațională</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            Acreditare Provizorie
          </h2>
          <Ornament className="mb-6" />
          <p className="font-serif italic text-graphite/70 text-lg leading-relaxed">
            Edictum este membră parteneră acreditată provizoriu de{" "}
            <em>Classical Latin School Association</em> — o organizație
            internațională de acreditare pentru școlile clasice creștine.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: context & quote ── */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-gold/50 bg-gold/8 px-4 py-2">
                <span className="text-gold text-xs">◆</span>
                <span className="font-display text-[0.62rem] tracking-[0.24em] uppercase text-gold-deep">
                  Partner Member
                </span>
              </span>
              <span className="inline-flex items-center border border-ink/12 px-4 py-2">
                <span className="font-display text-[0.62rem] tracking-[0.24em] uppercase text-ink/55">
                  20 August 2025
                </span>
              </span>
            </div>

            <div className="flex items-center gap-5 py-6 border-y border-gold/20">
              <div className="shrink-0 w-16 h-16 border border-gold/40 bg-parchment flex items-center justify-center">
                <svg width="44" height="44" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" stroke="rgba(126,26,26,0.55)" strokeWidth="1.5" />
                  <circle cx="32" cy="32" r="22" stroke="rgba(126,26,26,0.25)" strokeWidth="0.8" />
                  <text x="32" y="27" textAnchor="middle" fontSize="11" fill="rgba(126,26,26,0.9)"
                    fontFamily="Georgia, serif" fontWeight="700" letterSpacing="2">CLSA</text>
                  <line x1="16" y1="31" x2="48" y2="31" stroke="rgba(168,133,74,0.4)" strokeWidth="0.8" />
                  <text x="32" y="43" textAnchor="middle" fontSize="6.5" fill="rgba(42,26,26,0.45)"
                    fontFamily="Georgia, serif" fontStyle="italic" letterSpacing="0.3">Est. Louisville, KY</text>
                </svg>
              </div>
              <div>
                <p className="font-display text-[0.65rem] tracking-[0.26em] uppercase text-ink-deep mb-0.5">
                  Classical Latin School Association
                </p>
                <a href="https://www.classicallatin.org" target="_blank" rel="noopener noreferrer"
                  className="font-serif text-xs italic text-gold-deep/80 hover:text-gold-deep transition-colors">
                  www.classicallatin.org
                </a>
              </div>
            </div>

            <div className="space-y-4 font-serif text-graphite/85 leading-relaxed">
              <p>
                Acreditarea Provizorie acordată de CLSA recunoaște angajamentul
                Edictum față de standardele educației clasice creștine și ne
                integrează într-o rețea internațională de școli partenere unite
                prin aceeași viziune, metodologie și dragoste pentru moștenirea
                clasică creștină.
              </p>
              <p className="text-graphite/70">
                CLSA oferă suport pentru formarea cadrelor didactice, resurse
                administrative și conectare cu alte școli partenere la nivel
                național și internațional, pe drumul spre o acreditare completă.
              </p>
            </div>

            <blockquote className="border-l-2 border-gold/60 pl-5 py-1">
              <p className="font-serif italic text-graphite/70 text-sm leading-relaxed">
                „We are pleased to grant you Provisional Accreditation with our
                association. We look forward to walking with you as you progress
                in your journey into a fuller understanding of classical education."
              </p>
              <cite className="not-italic block mt-2 font-display text-[0.58rem] tracking-[0.22em] uppercase text-gold-deep">
                — Kathy Becker · Director of Accreditation, CLSA
              </cite>
            </blockquote>
          </div>

          {/* ── Right: styled letter document ── */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-gold-deep hidden lg:block" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-gold-deep hidden lg:block" />

            {/* Paper */}
            <div className="bg-white border border-ink/10 shadow-column px-5 py-8 sm:px-10 sm:py-12 font-serif text-ink-deep/90 relative overflow-hidden">

              {/* Subtle decorative side pattern (mimics letterhead ornaments) */}
              <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-ink/5 flex flex-col items-center justify-center gap-3 opacity-20 pointer-events-none select-none">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full border border-ink/40" />
                ))}
              </div>

              {/* Letterhead */}
              <div className="text-center mb-8 ml-4">
                {/* CLSA Logo mark */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#7E1A1A] mb-3">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" fill="#7E1A1A" />
                    <text x="18" y="15" textAnchor="middle" fontSize="7" fill="#F6F0DD"
                      fontFamily="Georgia, serif" fontWeight="700" letterSpacing="1">MP</text>
                    <line x1="8" y1="18" x2="28" y2="18" stroke="rgba(246,240,221,0.4)" strokeWidth="0.6" />
                    <text x="18" y="26" textAnchor="middle" fontSize="4.5" fill="rgba(246,240,221,0.7)"
                      fontFamily="Georgia, serif" letterSpacing="0.5">CLASSICAL LATIN</text>
                  </svg>
                </div>
                <p className="italic text-[0.78rem] text-ink/65 tracking-wide">
                  Classical Latin School Association
                </p>
              </div>

              <div className="ml-4 space-y-1 text-[0.75rem] italic text-ink/55 mb-6 leading-relaxed">
                <p>Edictum Classical Christian School</p>
                <p>Asociatia Edictum Dei (CUI 33149786)</p>
                <p>Strada 21 Decembrie 1989 No. 148</p>
                <p>Cluj-Napoca, Cluj, Romania</p>
              </div>

              <p className="ml-4 italic text-[0.78rem] text-ink/50 mb-6">August 20, 2025</p>

              <div className="ml-4 space-y-4 text-[0.8rem] italic text-ink/75 leading-relaxed">
                <p>Greetings,</p>
                <p>
                  It is my privilege to welcome you to the Classical Latin School
                  Association. We have received your application and believe that{" "}
                  <strong className="not-italic font-semibold text-ink/90">
                    Edictum Classical Christian School
                  </strong>
                  , legally represented by Asociatia Edictum Dei (CUI 33149786),
                  located at Strada 21 Decembrie 1989 No. 148, Cluj-Napoca, Cluj,
                  Romania will be an excellent addition to the Classical Latin
                  School Association as a{" "}
                  <strong className="not-italic font-semibold text-ink/90">
                    Partner member
                  </strong>.
                </p>
                <p>
                  We are also pleased to grant you{" "}
                  <strong className="not-italic font-semibold text-[#7E1A1A]">
                    Provisional Accreditation
                  </strong>{" "}
                  with our association. We look forward to walking with you as you
                  progress in your journey into a fuller understanding of classical
                  education.
                </p>
                <p>
                  We invite you to access our website at{" "}
                  <a href="https://www.classicallatin.org" target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic underline underline-offset-2 text-ink/60 hover:text-ink/80 transition-colors">
                    www.classicallatin.org
                  </a>{" "}
                  where you can find teacher and administrative training helps as
                  well as being connected with other schools partnering with us for
                  accreditation nationally and internationally.
                </p>
                <p>Congratulations and welcome to the Classical Latin School Association.</p>
              </div>

              {/* Signature */}
              <div className="ml-4 mt-8 space-y-1">
                <p className="italic text-[0.78rem] text-ink/55">Sincerely,</p>
                <p className="font-display text-2xl text-ink/70 mt-2"
                  style={{ fontFamily: "'Brush Script MT', cursive" }}>
                  Kathy Becker
                </p>
                <p className="italic text-[0.72rem] text-ink/55 leading-snug">
                  Kathy Becker<br />
                  Director of Accreditation<br />
                  Classical Latin School Association
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-ink/8 flex justify-between items-center ml-4">
                <span className="text-[0.6rem] text-ink/35 italic">www.classicallatin.org</span>
                <span className="text-[0.6rem] text-ink/35 italic">Classical Latin School Association</span>
                <span className="text-[0.6rem] text-ink/35 italic">502/855.4824</span>
              </div>
            </div>

            <p className="text-center mt-3 font-display text-[0.55rem] tracking-[0.22em] uppercase text-ink/35">
              Scrisoare oficială · Classical Latin School Association · 20 Aug 2025
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
