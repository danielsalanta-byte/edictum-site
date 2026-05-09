import Image from "next/image";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { IMG, IMG_ALT } from "@/lib/images";

export const metadata = {
  title: "Despre Noi · Școala Edictum",
  description:
    "Familii cu o viziune comună despre educație, recunoștință față de moștenirea civilizației occidentale și dorință arzătoare pentru gloria lui Dumnezeu.",
};

export default function Despre() {
  return (
    <>
      <header className="relative h-[48vh] min-h-[360px] max-h-[560px] overflow-hidden">
        <Image
          src={IMG.cambridgeFacade}
          alt={IMG_ALT.cambridgeFacade}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="eyebrow !text-gold-light mb-4">Despre instituție</p>
            <h1 className="text-4xl md:text-6xl font-display text-parchment leading-tight">
              Despre Noi
            </h1>
          </div>
        </div>
      </header>
    <article className="py-20 lg:py-28 marble-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Link href="/" className="eyebrow !text-xs hover:text-ink">
          ← Înapoi la prima pagină
        </Link>
        <Ornament className="my-8 justify-start" />

        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          În 2024, câteva familii cu viziuni similare despre educație am
          început să ne întâlnim regulat pentru a ne ruga și plănui o școală
          clasică creștină în Cluj-Napoca. Unii dintre noi sunt fondatorii
          Edictum Dei.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          În termeni largi, două lucruri ne-au legat și ne motivează:
          o conștientizare a bogăției moștenirii culturale și teologice a
          civilizației occidentale, și dorința arzătoare pentru gloria lui
          Dumnezeu în generațiile de după noi. Cu alte cuvinte: o mulțumire
          pentru trecut și o speranță pentru viitor.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-6">
          Suntem părinți și, încredințați fiind că Dumnezeu a lăsat
          responsabilitatea educației tocmai părinților, suntem dornici să ne
          vedem copiii slăvindu-L pe Dumnezeu în toate ariile vieții lor. Dorim
          să îi vedem confruntând și modelând cultura vremurilor — cu inima și
          cu intelectul — de pe fundamentul solid al Scripturii.
        </p>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-10">
          Foarte curând am început procesul de asociere — și, pe termen lung,
          acreditare — cu Association of Classical Christian Schools din Statele
          Unite. După scurt timp am pus pe hârtie mărturisirea noastră comună
          de credință și misiunea și viziunea școlii. Cu acestea, și cu alte
          câteva kilograme de cărți, am pornit încet dar sigur spre țelul de a
          realiza cel puțin două clase primare în toamna 2025 în Cluj-Napoca.
        </p>

        <p className="font-display text-base tracking-[0.2em] uppercase text-gold-deep">
          Ne rugăm ca Dumnezeu să își ia toată gloria, iar Numele Său să
          continue să fie lăudat din generație în generație.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link href="/marturisire" className="btn btn-ghost">
            Mărturisirea de Credință
          </Link>
          <Link href="/istoric" className="btn btn-ghost">
            Scurt Istoric
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
