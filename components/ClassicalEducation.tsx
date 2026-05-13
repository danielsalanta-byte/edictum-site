import { Ornament } from "./Ornament";

const principles = [
  {
    title: "Educația Civilizației Occidentale",
    body:
      "Educația clasică creștină a fost educația civilizației creștine occidentale. G.K. Chesterton, C.S. Lewis sau J.R.R. Tolkien sunt printre ultimii beneficiari ai acestei bogate moșteniri.",
  },
  {
    title: "Cultivarea Sufletului",
    body:
      "Educația clasică cultivă în student uneltele învățării pentru a putea ajunge la cunoașterea adevărului, dragostea pentru frumos și dorința pentru bine.",
  },
  {
    title: "Paideia Creștină",
    body:
      "Scopul final al educației clasice creștine este de a-l pregăti pe copil să Îl laude pe Dumnezeu în toate domeniile vieții sale. Elevul este cufundat în învățătura lui Dumnezeu și crește cu o viziune creștină asupra întregii lumi.",
  },
  {
    title: "Marile Cărți și Marile Idei",
    body:
      "Citim literatura clasică. Interacționăm cu marile idei recurente ale trecutului. Studiem istoria și arta de pe o temelie creștină. Nu suntem nici prima generație și nici ultima — dorim să restaurăm o moștenire și să o dăm mai departe.",
  },
  {
    title: "Imaginația Morală",
    body:
      "Copiii nu trebuie doar să cunoască cele zece porunci, ci să iubească binele. Poveștile, povestirile și poeziile ce prezintă imagini corecte și vii ale binelui și răului stârnesc imaginația și le modelează afecțiunea.",
  },
  {
    title: "Trivium",
    body:
      "Trivium se referă la cele trei arte liberale lingvistice: gramatica, logica și retorica. Capacitatea de a înțelege și exprima cuvinte este strâns legată de capacitatea de a gândi.",
  },
  {
    title: "Quadrivium",
    body:
      "Quadrivium reunește cele patru arte liberale matematice: aritmetica, geometria, muzica și astronomia. Ele formează înțelegerea ordinii lumii create — numărul, spațiul, proporția și mișcarea — ca expresie a înțelepciunii lui Dumnezeu.",
  },
  {
    title: "Uneltele Pierdute ale Învățării",
    body:
      "Eseul lui Dorothy Sayers, rostit prima dată la Universitatea Oxford în 1947, a devenit text de referință printre școlile clasice creștine — o redescoperire a meșteșugului învățării.",
  },
];

export default function ClassicalEducation() {
  return (
    <section className="py-14 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Fundamentele formării</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Ce este educația clasică creștină?
          </h2>
          <Ornament className="mb-8" />
          <p className="text-lg font-serif italic text-ink/70">
            Ideile au consecințe. Ideea unei culturi despre educație are mari
            consecințe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="column-card p-5 sm:p-7 rounded-sm"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="text-gold-deep font-display text-xs tracking-[0.28em] uppercase mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl text-ink mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-ink/75 font-serif leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
