import Image from "next/image";
import { IMG } from "@/lib/images";
import { Ornament } from "./Ornament";

const stages = [
  {
    title: "Grădinița — Grupa Mică",
    subtitle: null,
    stage: "Etapa Pre-Gramaticii",
    range: "3 – 4 ani",
    desc: "Primii pași în lumea școlii se fac prin joacă, povești și explorare senzorială. Copilul tău este primit într-un mediu ocrotitor unde curiozitatea este hrănită și bunătatea lui Dumnezeu se reflectă în ritmurile zilnice.",
    img: IMG.childBook,
    stageColor: "text-gold",
  },
  {
    title: "Grădinița — Grupa Mijlocie",
    subtitle: null,
    stage: "Etapa Pre-Gramaticii",
    range: "4 – 5 ani",
    desc: "Copiii își extind limbajul, explorează lumea prin activități creative și dezvoltă primele abilități sociale. Fiecare zi aduce noi descoperiri ancorate în bucuria credinței, a comunității și a ordinii frumoase a creației.",
    img: IMG.grupaMijlocie,
    stageColor: "text-gold",
  },
  {
    title: "Grădinița — Grupa Mare",
    subtitle: null,
    stage: "Etapa Pre-Gramaticii",
    range: "5 – 6 ani",
    desc: "Pregătirea pentru școală se face firesc, prin joacă structurată, exerciții de preascris și precitit, matematică intuitivă și imersie în limba engleză. Copiii cresc în autonomie, curiozitate și dragoste pentru adevăr.",
    img: IMG.childWriting,
    stageColor: "text-gold",
  },
  {
    title: "Clasa Pregătitoare",
    subtitle: null,
    stage: "Etapa Pre-Gramaticii",
    range: "6 – 7 ani",
    desc: "Primele deprinderi de citit, calcul și rutine școlare prind contur printr-o îndrumare constantă și încurajatoare. Copiii cresc în plăcerea de a învăța, știind că sunt cunoscuți, iubiți și creați cu un scop.",
    img: IMG.classroomEdictum2,
    stageColor: "text-gold",
  },
  {
    title: "Ciclul Primar Mic",
    subtitle: null,
    stage: "Etapa Gramaticii",
    range: "Clasele 1 – 3",
    desc: "Competențele academice de bază cresc pe măsură ce învățarea devine captivantă și semnificativă. Copilul tău începe să își construiască independența, descoperind adevărul, frumosul și ordinea în lumea creată de Dumnezeu.",
    img: IMG.classroomEdictum,
    stageColor: "text-gold-light",
  },
  {
    title: "Ciclul Primar Mare",
    subtitle: null,
    stage: "Etapa Gramaticii",
    range: "Clasele 4 – 6",
    desc: "Înțelegerea se adâncește pe măsură ce așteptările și responsabilitățile cresc. Profesorii îl ajută pe copilul tău să dezvolte obiceiuri solide, perseverență și o conștiință tot mai clară a legăturii dintre cunoaștere, credință și viață.",
    img: IMG.cicluPrimarMare,
    stageColor: "text-gold-light",
  },
  {
    title: "Gimnaziu",
    subtitle: null,
    stage: "Etapa Logicii",
    range: "Clasele 7 – 8",
    desc: "Întrebările și dezbaterile joacă un rol tot mai important în clasă. Adolescentul tău este ghidat să gândească cu rigurozitate, să caute adevărul lui Dumnezeu și să se implice în dialog cu smerenie și respect.",
    img: IMG.gimnaziu,
    stageColor: "text-gold",
  },
  {
    title: "Liceu",
    subtitle: null,
    stage: "Etapa Retoricii",
    range: "Clasele 9 – 12",
    desc: "Ideile sunt formate prin scriere, dezbatere și prezentare. Până la absolvire, elevul tău este pregătit să comunice cu claritate, convingere și un scop centrat pe Hristos, gata să influențeze lumea din jurul lui.",
    img: IMG.liceu,
    stageColor: "text-gold-light",
  },
];

export default function ProgramStages() {
  return (
    <section className="pt-10 lg:pt-16 pb-16 lg:pb-32 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Etapele formării</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            De la grădiniță până la liceu
          </h2>
          <Ornament className="mb-6" />
        </div>

        {/* English Language Section */}
        <div className="mb-12 border border-gold/25 bg-parchment-warm/60 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex items-center gap-3 mb-8">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gold-deep">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12h20M12 2c-3 3-4.5 6-4.5 10s1.5 7 4.5 10M12 2c3 3 4.5 6 4.5 10s-1.5 7-4.5 10" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <p className="font-display text-[0.62rem] tracking-[0.28em] uppercase text-gold-deep">Predare în Limba Engleză</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-deep">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c-3 3-4.5 6-4.5 10s1.5 7 4.5 10M12 2c3 3 4.5 6 4.5 10s-1.5 7-4.5 10"/>
                </svg>
              </div>
              <h4 className="font-display text-sm text-ink-deep leading-snug">De la Grădiniță până la Clasa a XII-a</h4>
              <p className="font-serif text-xs text-graphite/75 leading-relaxed">Copiii studiază în limba engleză pe întreaga durată a formării lor academice, având acces direct la o bogată moștenire culturală și intelectuală și fiind pregătiți să se miște cu încredere într-o lume globală.</p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-deep">
                  <path d="M4 20h4V10H4v10zM10 20h4V4h-4v16zM16 20h4v-8h-4v8z"/>
                </svg>
              </div>
              <h4 className="font-display text-sm text-ink-deep leading-snug">Tranziție Bilingvă în Anii Mici</h4>
              <p className="font-serif text-xs text-graphite/75 leading-relaxed">În primii ani — Grupa Mică, Mijlocie, Mare și Clasa Pregătitoare — procesul de învățare se desfășoară bilingv, oferind copiilor o familiarizare naturală și echilibrată cu limba engleză.</p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-deep">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4 className="font-display text-sm text-ink-deep leading-snug">Disciplinele Predate în Engleză</h4>
              <p className="font-serif text-xs text-graphite/75 leading-relaxed">Materiile sunt predate în engleză, astfel că elevii învață natural să gândească, să comunice și să studieze prin această limbă — nu doar să o vorbească.</p>
            </div>

            {/* Pillar 4 */}
            <div className="space-y-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-deep">
                  <path d="M12 22V12M12 12C12 7 7 4 2 4M12 12c0-5 5-8 10-8M12 12c-3 0-6 1-8 3M12 12c3 0 6 1 8 3"/>
                </svg>
              </div>
              <h4 className="font-display text-sm text-ink-deep leading-snug">Rădăcini Românești</h4>
              <p className="font-serif text-xs text-graphite/75 leading-relaxed">Limba română, istoria, geografia și literatura română rămân priorități. Elevii sunt pregătiți riguros pentru Bacalaureatul în română și formați să-și iubească țara.</p>
            </div>
          </div>
        </div>

        {/* Trivium Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-0 border border-gold/25">
            {/* Gramatica */}
            <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-gold/25">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display text-[0.58rem] tracking-[0.28em] uppercase text-gold-deep bg-gold/10 border border-gold/30 px-3 py-1.5">
                  I
                </span>
                <h3 className="font-display text-xl text-ink-deep">Etapa Gramaticii</h3>
              </div>
              <p className="font-serif text-graphite/80 text-sm leading-relaxed">
                Etapa temeliei — „gramatica lucrurilor". Nu se referă doar la reguli de limbă,
                ci la înțelegerea elementelor fundamentale ale fiecărei discipline. Elevul adună
                cu bucurie cunoștințe, vocabular și ordine, construind fundația pe care va putea
                gândi mai târziu.
              </p>
            </div>
            {/* Logica */}
            <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-gold/25">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display text-[0.58rem] tracking-[0.28em] uppercase text-gold-deep bg-gold/10 border border-gold/30 px-3 py-1.5">
                  II
                </span>
                <h3 className="font-display text-xl text-ink-deep">Etapa Logicii</h3>
              </div>
              <p className="font-serif text-graphite/80 text-sm leading-relaxed">
                Momentul în care elevul începe să cerceteze relațiile dintre lucruri. Nu mai
                întreabă doar „ce?", ci „de ce?" și „cum?". El caută cauze, conexiuni și
                coerență între idei, comparând, argumentând și observând structura internă a
                fiecărei discipline.
              </p>
            </div>
            {/* Retorica */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display text-[0.58rem] tracking-[0.28em] uppercase text-gold-deep bg-gold/10 border border-gold/30 px-3 py-1.5">
                  III
                </span>
                <h3 className="font-display text-xl text-ink-deep">Etapa Retoricii</h3>
              </div>
              <p className="font-serif text-graphite/80 text-sm leading-relaxed">
                Maturizarea relației elevului cu disciplinele studiate. Adevărul înțeles și
                ordonat este exprimat cu claritate, frumusețe și convingere. Elevul folosește
                disciplinele ca instrumente pentru a sluji adevărul, cultura și aproapele său,
                dezvoltând o voce proprie ancorată în credința creștină.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500 shadow-soft hover:shadow-column"
            >
              {/* Background image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/50 to-ink-deep/20" />

                {/* Stage badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-display text-[0.55rem] tracking-[0.28em] uppercase border border-gold/50 bg-ink-deep/60 backdrop-blur-sm px-3 py-1.5 text-gold">
                    {s.stage}
                  </span>
                </div>

                {/* Title + range over image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg text-parchment leading-tight mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                    {s.title}
                  </h3>
                  {s.subtitle && (
                    <p className="font-serif italic text-gold/80 text-xs mb-1">{s.subtitle}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-gold/70" />
                    <p className={`font-display text-[0.62rem] tracking-[0.2em] uppercase ${s.stageColor}`}>
                      {s.range}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 bg-parchment group-hover:bg-parchment-warm transition-colors duration-300">
                <p className="font-serif text-sm text-graphite/80 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 font-serif italic text-ink/45 text-sm">
          Etapele corespund metodologiei clasice: Gramatică · Logică · Retorică — formate după natura și vârsta copilului.
        </p>
      </div>
    </section>
  );
}
