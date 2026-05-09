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
            Profesori chemați la vocație
          </h2>
          <Ornament className="mb-8 justify-start [&>svg]:opacity-90" />

          <div className="space-y-5 font-serif text-lg text-graphite/85 leading-relaxed">
            <p>
              Ne dorim să cultivăm aceleași calități în corpul didactic. Dorim
              ca profesorii noștri să fie
              <strong className="text-ink-deep"> profesioniști și sârguincioși</strong>
              în munca lor, înzestrați în actul predării, iubindu-și elevii și
              disciplinele.
            </p>
            <p>
              Ne dorim ca ei să înțeleagă limpede educația clasică creștină —
              cum funcționează în clasa lor și cum se înscrie munca lor în
              întreg; să poarte o
              <strong className="text-ink-deep"> foame de o viață pentru a învăța și a crește</strong>;
              și să aibă răgazul de a fi reîmprospătați și înnoiți.
            </p>
            <p>
              Ne dorim să-i vedem
              <strong className="text-ink-deep"> mentorându-și colegii mai noi</strong>
              și fiind sfătuitori academici pentru elevi; maturizându-se în
              Hristos, crescând în cunoașterea lui Dumnezeu, cu proprii lor
              copii umblând cu Domnul.
            </p>
            <p>
              Pe lângă acestea, dorim ca poziția lor să le permită o carieră
              sustenabilă și bine remunerată la Edictum — pentru ca slujirea
              lor să rodească peste generații.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
