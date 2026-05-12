import Image from "next/image";
import { Ornament } from "./Ornament";
import { IMG, IMG_ALT } from "@/lib/images";

export default function Vision() {
  return (
    <section id="viziune" className="bg-parchment-warm">
      {/* Editorial banner photo */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={IMG.oldLibrary}
          alt={IMG_ALT.oldLibrary}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/50 via-ink-deep/20 to-parchment-warm" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/30 to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Ornament className="[&>svg]:text-gold-light [&>svg]:opacity-80" />
        </div>
      </div>

      {/* Content */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-4">Viziunea noastră</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
              Viziunea noastră clasică creștină
            </h2>
            <Ornament className="mb-8 justify-start [&>svg]:opacity-90" />
            <p className="text-lg md:text-xl font-serif text-ink/85 leading-relaxed">
              Școala Clasică Creștină Edictum există pentru a forma copii care
              iubesc adevărul, binele și frumosul, sub domnia lui Hristos.
              Credem că educația nu este doar transmitere de informații, ci
              formarea unei vieți întregi: minte disciplinată, inimă ordonată,
              caracter virtuos și imaginație morală.
            </p>

            <div className="mt-8 pt-8 border-t border-gold/20 space-y-5">
              {/* Trivium */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-[0.58rem] tracking-[0.32em] uppercase text-gold-deep">Trivium</span>
                  <div className="flex-1 h-px bg-gold/20" />
                </div>
                <p className="font-serif text-[0.82rem] text-ink/58 italic leading-relaxed mb-3">
                  Artele lingvistice ale minții — cuvântul ca instrument al gândirii clare.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Gramatică", sub: "a ști" },
                    { name: "Logică", sub: "a judeca" },
                    { name: "Retorică", sub: "a exprima" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center gap-2 px-3 py-2 border border-gold/30 bg-gold/5">
                      <span className="text-gold/50 text-[7px]">✦</span>
                      <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-ink-deep">{d.name}</span>
                      <span className="font-serif text-[0.68rem] italic text-ink/40">{d.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quadrivium */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-[0.58rem] tracking-[0.32em] uppercase text-gold-deep">Quadrivium</span>
                  <div className="flex-1 h-px bg-gold/20" />
                </div>
                <p className="font-serif text-[0.82rem] text-ink/58 italic leading-relaxed mb-3">
                  Artele matematice ale realității — ordinea lumii create de Dumnezeu.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Aritmetică", sub: "numărul" },
                    { name: "Geometrie", sub: "spațiul" },
                    { name: "Muzică", sub: "proporția" },
                    { name: "Astronomie", sub: "fizică & științele naturii" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center gap-2 px-3 py-2 border border-gold/30 bg-gold/5">
                      <span className="text-gold/50 text-[7px]">✦</span>
                      <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-ink-deep">{d.name}</span>
                      <span className="font-serif text-[0.68rem] italic text-ink/40">{d.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 shadow-column">
              <Image
                src={IMG.cambridgeFacade}
                alt={IMG_ALT.cambridgeFacade}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-gold-deep hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-r-2 border-t-2 border-gold-deep hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
