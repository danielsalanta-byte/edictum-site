import Image from "next/image";
import { IMG, IMG_ALT } from "@/lib/images";
import { Ornament } from "./Ornament";

export default function TeacherVision() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/6] overflow-hidden border border-gold/30 shadow-column">
            <Image
              src={IMG.bookshelves}
              alt={IMG_ALT.bookshelves}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-gold-deep hidden lg:block" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-gold-deep hidden lg:block" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Cadrele didactice</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            Profesori pentru generații
          </h2>
          <Ornament className="mb-8 justify-start [&>svg]:opacity-90" />

          <div className="space-y-5 font-serif text-lg text-graphite/85 leading-relaxed">
            <p>
              Ne dorim să cultivăm aceleași virtuți și în rândul corpului nostru
              profesoral. Dorim profesori care își privesc munca nu doar ca pe o
              profesie, ci ca pe o{" "}
              <strong className="text-ink-deep">chemare</strong> — oameni dedicați,
              harnici și excelenți în actul predării, care își iubesc atât elevii,
              cât și disciplinele pe care le predau.
            </p>
            <p>
              Ne dorim cadre didactice care înțeleg profund frumusețea și scopul
              educației clasice creștine: cum prinde ea viață în sala de clasă și
              cum contribuie fiecare lecție la formarea întregului om. Profesori
              animați de o{" "}
              <strong className="text-ink-deep">dorință continuă de a învăța, de a crește</strong>{" "}
              și de a se maturiza intelectual și spiritual, având totodată timpul
              și echilibrul necesare pentru a fi reîmprospătați și întăriți în
              lucrarea lor.
            </p>
            <p>
              Dorim să îi vedem{" "}
              <strong className="text-ink-deep">mentorând generațiile mai tinere de profesori</strong>,
              călăuzind elevii cu înțelepciune și maturizându-se ei înșiși în
              Hristos — crescând în cunoașterea lui Dumnezeu și conducându-și
              propriile familii în credincioșie față de Domnul.
            </p>
            <p>
              În același timp, ne dorim ca Edictum să ofere profesorilor săi o{" "}
              <strong className="text-ink-deep">carieră sustenabilă, demnă și bine răsplătită</strong>,
              astfel încât slujirea lor să poată aduce rod nu doar pentru un
              sezon, ci pentru generații întregi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
