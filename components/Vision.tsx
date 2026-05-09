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
            <p className="mt-5 text-lg md:text-xl font-serif text-ink/80 leading-relaxed">
              Prin moștenirea educației clasice creștine, dorim să oferim
              copiilor rădăcini adânci în Scriptură, cultură, literatură,
              istorie, logică, retorică și frumusețea lumii create de Dumnezeu.
            </p>
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
