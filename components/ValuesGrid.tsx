import { Ornament } from "./Ornament";
import { VALUES } from "@/lib/values";
import ValueIconSvg from "./ValueIcons";

export default function ValuesGrid() {
  return (
    <section id="valori" className="py-24 lg:py-32 bg-parchment-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Cele 10 Valori Fundamentale</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            Zece rădăcini pentru formarea inimii și minții
          </h2>
          <Ornament className="mb-6" />
          <p className="text-lg font-serif italic text-graphite/75">
            Fundamentul caracterului pe care îl cultivăm în fiecare elev Edictum —
            după chipul lui Hristos.
          </p>

          <div className="mt-8 pt-8 border-t border-gold/20 space-y-4 text-left">
            <p className="font-serif text-ink/80 leading-relaxed">
              Cele 10 virtuți ale școlii Edictum sunt studiate și memorate constant
              pe parcursul anilor de formare. Fiecare virtute este repetată timp de{" "}
              <strong>două săptămâni</strong>, atât în engleză, cât și în română,
              pentru a fi înțeleasă și interiorizată.
            </p>
            <p className="font-serif text-ink/75 leading-relaxed">
              Prin această repetiție intenționată, caracterul copiilor este format în
              mod consecvent. Credem că educația adevărată nu înseamnă doar
              informație, ci{" "}
              <strong>formarea inimii și a obiceiurilor</strong>.
            </p>
            <p className="font-serif text-ink/70 leading-relaxed">
              Astfel, copiii învață să trăiască cu disciplină, responsabilitate și
              credincioșie față de Hristos în{" "}
              <span className="font-display text-[0.78rem] tracking-[0.15em] text-gold-deep uppercase">
                Familie · Muncă · Biserică · Societate
              </span>
              .
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {VALUES.map((v) => (
            <article
              key={v.number}
              className="group relative bg-parchment border border-ink/10 p-7 lg:p-8 transition-all hover:border-ink/40 hover:shadow-soft"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border border-gold/40 text-ink-deep group-hover:border-gold transition-colors">
                  <ValueIconSvg name={v.icon} size={36} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-display text-xs tracking-[0.28em] text-gold-deep">
                      {v.number}
                    </span>
                    <h3 className="font-display text-2xl text-ink-deep leading-tight">
                      {v.title}
                      {v.subtitle && (
                        <span className="block text-sm font-serif italic text-graphite/55 mt-0.5">
                          {v.subtitle}
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="font-serif text-graphite/85 leading-relaxed mb-4">
                    {v.description}
                  </p>
                  <blockquote className="border-l-2 border-gold/60 pl-4 py-1">
                    <p className="font-serif italic text-graphite/70 text-sm leading-snug">
                      „{v.verse.text}"
                    </p>
                    <cite className="not-italic block mt-1 font-display text-[0.65rem] tracking-[0.22em] uppercase text-gold-deep">
                      {v.verse.ref}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
