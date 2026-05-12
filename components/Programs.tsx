import Image from "next/image";
import { Ornament } from "./Ornament";
import { IMG, IMG_ALT } from "@/lib/images";

const programs = [
  {
    name: "Grădiniță",
    age: "3 – 4 ani",
    desc:
      "Un început blând și frumos: rutine ordonate, povești formatoare, joc cu sens, limba engleză cufundată natural în viața de zi cu zi și primele rădăcini ale virtuții creștine.",
    cta: "Înscrieri grădiniță",
    href: "https://docs.google.com/forms/d/1of3U8goeGRYF_YbFOi021UvvoCN4zFMbmx2YDlFFQv8/edit",
    image: IMG.childBook,
    alt: IMG_ALT.childBook,
  },
  {
    name: "Clasa pregătitoare",
    age: "6 – 7 ani",
    desc:
      "Primii pași în Trivium: fonetică, scriere, matematică, povestire clasică, latină și engleză. Studiu bilingv, curriculum inspirat din ACCS și Memoria Press, cu rădăcini românești.",
    cta: "Înscrieri clasa pregătitoare",
    href: "https://docs.google.com/forms/d/1hzGUirg6ihRLtwu7fAWemHYFT7Bz3oPDpyd1tzr5Jnw/edit",
    image: IMG.childWriting,
    alt: IMG_ALT.childWriting,
  },
];

export default function Programs() {
  return (
    <section id="programe" className="py-14 lg:py-32 bg-parchment-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Programele noastre</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Înscrieri 2026 – 2027
          </h2>
          <Ornament className="mb-6" />
          <p className="text-lg font-serif italic text-ink/70">
            Cu ajutorul Domnului, începem în toamna anului 2026, în Cluj-Napoca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((p) => (
            <div
              key={p.name}
              className="group relative bg-parchment border border-gold/30 shadow-soft overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-parchment via-parchment/15 to-transparent" />
              </div>
              <div className="h-1 bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep" />
              <div className="p-6 sm:p-8 lg:p-12 flex-1 flex flex-col">
                <p className="eyebrow mb-3">{p.age}</p>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink mb-5">
                  {p.name}
                </h3>
                <p className="text-ink/75 font-serif text-lg leading-relaxed mb-8 flex-1">
                  {p.desc}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary self-start"
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
