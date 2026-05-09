import Image from "next/image";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { IMG, IMG_ALT } from "@/lib/images";

export const metadata = {
  title: "Scurt Istoric · Școala Edictum",
  description: "Cum a început școala — câteva familii, o viziune, o speranță pentru generațiile de după noi.",
};

export default function Istoric() {
  return (
    <>
      <header className="relative h-[44vh] min-h-[320px] max-h-[520px] overflow-hidden">
        <Image
          src={IMG.archGate}
          alt={IMG_ALT.archGate}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="eyebrow !text-gold-light mb-4">2024 — în continuare</p>
            <h1 className="text-4xl md:text-6xl font-display text-parchment leading-tight">
              Scurt Istoric
            </h1>
          </div>
        </div>
      </header>
    <article className="py-20 lg:py-28 marble-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Link href="/despre" className="eyebrow !text-xs hover:text-ink">← Despre Noi</Link>
        <Ornament className="my-8 justify-start" />

        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          În 2024, câteva familii cu viziuni similare despre educație am
          început să ne întâlnim regulat pentru a ne ruga și plănui o școală
          clasică creștină în Cluj-Napoca. Unii sunt fondatorii Edictum Dei.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          În termeni largi, două lucruri ne-au legat și ne motivează: o
          conștientizare a bogăției moștenirii culturale și teologice a
          civilizației occidentale și dorința arzătoare pentru gloria lui
          Dumnezeu în generațiile de după noi. Cu alte cuvinte, o mulțumire
          pentru trecut și o speranță pentru viitor.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          Suntem părinți și, încredințați fiind că Dumnezeu a lăsat
          responsabilitatea educației tocmai părinților, suntem dornici să ne
          vedem copiii slăvindu-L pe Dumnezeu în toate ariile vieții lor. Dorim
          să îi vedem confruntând și modelând cultura vremurilor și cu inima și
          cu intelectul lor de pe fundamentul solid al Scripturii.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          Foarte curând am început procesul de asociere — și pe termen lung,
          acreditare — cu Association of Classical Christian Schools din
          Statele Unite. După scurt timp am pus pe hârtie mărturisirea noastră
          comună de credință și misiunea și viziunea școlii.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-10">
          Cu acestea și cu alte câteva kilograme de cărți, am pornit încet dar
          sigur spre țelul de a realiza cel puțin două clase primare în toamna
          2025 în Cluj-Napoca. Ne rugăm ca Dumnezeu să își ia toată gloria, iar
          Numele Său să continue să fie lăudat din generație în generație.
        </p>

        <p className="font-display text-base tracking-[0.24em] uppercase text-gold-deep">
          Soli Deo Gloria
        </p>
      </div>
    </article>
    </>
  );
}
