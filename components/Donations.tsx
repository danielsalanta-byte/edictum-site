import Image from "next/image";
import { Ornament } from "./Ornament";
import { IMG } from "@/lib/images";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_9B66oI7MN4dC6gr1cO0Fi00";

export default function Donations() {
  return (
    <section id="donatii" className="py-14 lg:py-32 bg-ink text-parchment relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={IMG.fatherChild}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left: description + bank transfer */}
        <div>
          <p className="eyebrow text-gold-light mb-4">Susține Edictum</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-6 text-parchment">
            Susține Școala Edictum
          </h2>
          <Ornament className="mb-6 justify-start [&>svg]:opacity-90" />
          <p className="text-lg font-serif text-parchment/85 leading-relaxed mb-6">
            Prin donația ta contribui la formarea unei generații de copii
            educați în adevăr, frumusețe, caracter și credință. Susține
            dezvoltarea Școlii Clasice Creștine Edictum și ajută-ne să
            construim o instituție educațională solidă pentru anii care vin.
          </p>

          <div className="border border-gold/40 p-6 bg-ink-soft/40 backdrop-blur-sm">
            <h3 className="font-display text-sm tracking-[0.24em] uppercase text-gold-light mb-4">
              Donație prin transfer bancar
            </h3>
            <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 font-serif text-parchment/85">
              <dt className="text-parchment/60">Beneficiar</dt><dd>Asociația Edictum Dei</dd>
              <dt className="text-parchment/60">IBAN</dt><dd className="font-mono text-sm">RO86BRDE130SV00730631300</dd>
              <dt className="text-parchment/60">Monedă</dt><dd>RON</dd>
              <dt className="text-parchment/60">Bancă</dt><dd>B.R.D. – G.S.G.</dd>
              <dt className="text-parchment/60">SWIFT</dt><dd className="font-mono text-sm">BRDEROBU</dd>
            </dl>
          </div>
        </div>

        {/* Right: Stripe donation card */}
        <div className="bg-parchment text-ink p-6 sm:p-10 lg:p-12 border border-gold-deep shadow-column flex flex-col justify-center">
          <h3 className="font-display text-2xl sm:text-3xl mb-3">Donație online</h3>
          <p className="font-serif text-ink/70 leading-relaxed mb-8">
            Plătește securizat cu card bancar, Apple Pay sau Google Pay.
            Vei alege suma direct pe pagina de plată.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Card bancar", "Apple Pay", "Google Pay"].map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2 font-display text-xs tracking-[0.16em] uppercase text-ink/70"
              >
                {m}
              </span>
            ))}
          </div>

          <a
            href={STRIPE_PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold w-full text-center mb-4"
          >
            Donează acum
          </a>

          <p className="text-xs text-ink/45 font-serif italic text-center">
            Plăți procesate securizat prin Stripe · SSL encrypted
          </p>
        </div>
      </div>
    </section>
  );
}
