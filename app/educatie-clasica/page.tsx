import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { IMG, IMG_ALT } from "@/lib/images";
import ViziuneStats from "@/components/ViziuneStats";

export const metadata: Metadata = {
  title: "Rezultatele Educației Clasice Creștine · Educație Clasică · Edictum",
  description:
    "Studii comparative despre impactul educației clasice creștine asupra vieții academice, spirituale, familiale și civice a absolvenților. Edictum Cluj-Napoca.",
};

// ─── Hero stat strip ──────────────────────────────────────────────────────────

const heroStats = [
  { num: "Top 15%", label: "rezultate academice\nla nivel federal" },
  { num: "6,7×", label: "mai predispuși\nla lectură constantă" },
  { num: "25%", label: "implicare civică\nmai mare" },
  { num: "<1%", label: "rată a divorțului\nla absolvenți" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EducatieClasicaPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO — cinematic dark section
      ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[94vh] flex flex-col justify-end overflow-hidden">
        <Image
          src={IMG.classroomQuiet}
          alt={IMG_ALT.classroomQuiet}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* layered overlays */}
        <div className="absolute inset-0 bg-ink-deep/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-deep/25 to-ink-deep/92" />
        {/* faint seal watermark */}
        <div className="absolute inset-0 opacity-[0.04] seal-watermark" />

        {/* content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-10 pb-0 pt-36 text-center">
          <p className="eyebrow !text-gold-light mb-6">
            Rezultatele educației clasice creștine
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-display text-parchment leading-tight mb-8">
            Educația care formează
            <br />
            nu doar minți strălucite,
            <br />
            ci oameni întregi.
          </h1>
          <Ornament className="mb-10 [&>svg]:text-gold-light" />

          <div className="max-w-3xl mx-auto space-y-5 mb-16">
            <p className="text-xl font-serif italic text-parchment/90 leading-relaxed">
              Educația nu este neutră. Fiecare școală formează o anumită viziune
              despre lume, despre om, despre adevăr și despre sensul vieții.
            </p>
            <p className="text-lg font-serif text-parchment/78 leading-relaxed">
              Educația clasică creștină urmărește mai mult decât performanță
              academică. Ea formează caracter, disciplină, discernământ, iubire
              pentru adevăr și responsabilitate înaintea lui Dumnezeu și a
              societății.
            </p>
            <p className="text-base font-serif text-parchment/65 leading-relaxed">
              Unul dintre cele mai ample studii realizate în Statele Unite — pe
              aproximativ 2.500 de absolvenți cu vârste între 25 și 44 de ani —
              evidențiază diferențe semnificative între educația clasică creștină
              și celelalte modele educaționale moderne.
            </p>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/20 border border-gold/22 bg-ink-deep/55 backdrop-blur-sm">
            {heroStats.map((s) => (
              <div key={s.num} className="px-6 py-7 text-center">
                <div className="font-display text-3xl md:text-4xl text-gold-light mb-2 leading-none">
                  {s.num}
                </div>
                <div className="font-sans text-[0.68rem] tracking-widest uppercase text-parchment/55 whitespace-pre-line leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom fade into next section */}
        <div className="relative h-20 bg-gradient-to-t from-parchment to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECȚIUNEA 1 — Excelență academică
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 marble-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* text column */}
            <div>
              <p className="eyebrow mb-4">Excelență academică</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
                Excelență academică
                <br />
                și gândire profundă
              </h2>
              <Ornament className="mb-8 justify-start" />

              <p className="text-lg font-serif text-ink/85 leading-relaxed mb-5">
                Educația clasică creștină formează elevi capabili să gândească
                profund, să analizeze idei complexe și să exprime clar adevărul.
                Spre deosebire de modelele educaționale moderne orientate
                predominant spre memorare rapidă și performanță superficială,
                modelul clasic dezvoltă disciplina intelectuală și înțelegerea
                reală.
              </p>
              <p className="text-lg font-serif text-ink/80 leading-relaxed mb-5">
                Studiile arată rezultate cu aproximativ{" "}
                <strong>20% mai mari</strong> față de școlile publice la
                examenele standardizate pentru admiterea la universitate, iar
                media școlilor clasice creștine se află în{" "}
                <strong>top 15%</strong> la nivel federal în SUA.
              </p>
              <p className="text-base font-serif text-ink/72 leading-relaxed mb-7">
                Această diferență nu apare întâmplător. Educația clasică îi
                învață pe elevi să citească texte dificile, să argumenteze logic,
                să identifice erorile de gândire și să iubească adevărul. În
                locul unei educații fragmentate și superficiale, elevii sunt
                formați să privească lumea coerent, integrând cunoașterea
                într-o viziune creștină despre realitate.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Citirea și înțelegerea textelor dificile",
                  "Argumentare logică și retorică",
                  "Identificarea erorilor de gândire",
                  "Concentrare și perseverență intelectuală",
                  "Integrarea cunoașterii într-o viziune coerentă",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80 font-serif">
                    <span className="text-gold-deep mt-1 flex-shrink-0 text-sm">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* chart column */}
            <div className="pt-2">
              <ViziuneStats section="academic" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECȚIUNEA 2 — Dragoste pentru învățare
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-parchment-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow mb-4">Dragostea pentru adevăr</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
              Oameni care iubesc adevărul
              <br />
              și învățarea
            </h2>
            <Ornament className="mb-6" />
            <p className="text-lg font-serif italic text-ink/72 leading-relaxed">
              Educația clasică creștină nu urmărește doar acumularea de
              informații, ci cultivarea unei iubiri autentice pentru adevăr,
              frumusețe și cunoaștere. Absolvenții acestui model educațional
              dezvoltă o relație profundă cu lectura și cu învățarea continuă.
            </p>
          </div>

          {/* animated stat cards */}
          <ViziuneStats section="learning" />

          {/* prose + image grid */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg font-serif text-ink/80 leading-relaxed mb-5">
                Această diferență reflectă ceva mai profund decât simpla
                performanță academică — ea reflectă formarea unui om capabil să
                caute adevărul, să gândească critic și să pună întrebări
                profunde, neacceptând superficialitatea culturală modernă.
              </p>
              <p className="text-base font-serif text-ink/70 leading-relaxed">
                Într-o cultură dominată de consum rapid și atenție fragmentată,
                educația clasică dezvoltă capacitatea rară de concentrare,
                reflecție și contemplare — o comoară invizibilă, dar de
                nepretuit, pe care o purtăm toată viața.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
              <Image
                src={IMG.classroomEdictum2}
                alt={IMG_ALT.classroomEdictum2}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* pull quote */}
          <blockquote className="mt-20 border-l-4 border-gold pl-8 max-w-3xl mx-auto">
            <p className="font-serif italic text-2xl md:text-3xl text-ink/82 leading-relaxed mb-4">
              „Scopul educației nu este să umpli o găleată, ci să aprinzi un foc."
            </p>
            <cite className="eyebrow text-gold-deep not-italic">— W.B. Yeats</cite>
          </blockquote>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECȚIUNEA 3 — Credință și știință
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-graphite text-parchment overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.04] seal-watermark scale-150" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* text */}
            <div>
              <p className="eyebrow !text-gold-light mb-4">
                Credință și știință
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-parchment mb-6 leading-tight">
                Credință și știință
                <br />
                integrate
              </h2>
              <Ornament className="mb-8 justify-start [&>svg]:text-gold-light" />

              <p className="text-lg font-serif text-parchment/85 leading-relaxed mb-5">
                Educația modernă separă adesea credința de cunoaștere, prezentând
                știința și creștinismul ca domenii aflate în conflict. Educația
                clasică creștină respinge această fragmentare artificială și
                prezintă realitatea în unitatea sa profundă.
              </p>
              <p className="text-lg font-serif text-parchment/78 leading-relaxed mb-5">
                Peste <strong className="text-parchment">70%</strong> dintre
                absolvenții educației clasice creștine consideră că știința și
                creștinismul sunt compatibile — și reușesc să studieze știința
                fără a adopta automat ideologii materialiste sau perspective care
                contrazic Scriptura.
              </p>
              <p className="text-base font-serif text-parchment/65 leading-relaxed mb-8">
                În educația clasică, matematica reflectă ordinea lui Dumnezeu,
                știința descoperă structura creației, literatura explorează
                natura umană, istoria arată providența divină, iar filosofia
                caută adevărul. Totul este integrat într-o viziune coerentă
                despre lume.
              </p>

              <div className="border border-gold/30 bg-ink-deep/45 backdrop-blur-sm p-6">
                <div className="font-display text-5xl text-gold-light mb-2 leading-none">
                  70%+
                </div>
                <div className="font-sans text-xs tracking-widest uppercase text-parchment/55 leading-relaxed">
                  Absolvenți care consideră știința și creștinismul compatibile
                </div>
              </div>
            </div>

            {/* SVG integration wheel */}
            <ViziuneStats section="integration" />
          </div>

          {/* contrast boxes */}
          <div className="mt-20 grid md:grid-cols-2 gap-6">
            <div className="p-8 border border-gold/28 bg-ink-deep/50">
              <h3 className="font-display text-xl text-gold-light mb-5">
                Educația clasică creștină
              </h3>
              <ul className="space-y-3">
                {[
                  "Credință și rațiune — integrate, nu în conflict",
                  "Adevăr obiectiv ancorat în Scriptură și Creație",
                  "Știința ca descoperire a ordinii lui Dumnezeu",
                  "O viziune coerentă și unitară despre realitate",
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-serif text-parchment/80 leading-relaxed">
                    <span className="text-gold-light flex-shrink-0 mt-1">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border border-parchment/10 bg-parchment/5">
              <h3 className="font-display text-xl text-parchment/45 mb-5">
                Educația modernă secularizată
              </h3>
              <ul className="space-y-3">
                {[
                  "Credință și știință — separate sau în opoziție",
                  "Adevăr relativ, dependent de epocă și cultură",
                  "Știința ca singură sursă legitimă a cunoașterii",
                  "O viziune fragmentată, fără fundament transcendent",
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-serif text-parchment/40 leading-relaxed">
                    <span className="text-parchment/28 flex-shrink-0 mt-1">◇</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECȚIUNEA 4 — Responsabilitate și societate
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 marble-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* image with quote overlay */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/25">
                <Image
                  src={IMG.sfMihailCluj}
                  alt={IMG_ALT.sfMihailCluj}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/75 via-ink-deep/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <blockquote>
                    <p className="font-serif italic text-lg md:text-xl text-parchment leading-snug">
                      „Adevărul implică responsabilitate.
                      <br />
                      Cunoașterea fără caracter este periculoasă."
                    </p>
                  </blockquote>
                </div>
              </div>
              {/* corner ornaments */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-gold-deep hidden lg:block" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-gold-deep hidden lg:block" />
            </div>

            {/* text + bars */}
            <div>
              <p className="eyebrow mb-4">Responsabilitate și cetățenie</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
                Responsabilitate morală
                <br />
                și implicare în societate
              </h2>
              <Ornament className="mb-8 justify-start" />

              <p className="text-lg font-serif text-ink/85 leading-relaxed mb-5">
                Educația clasică creștină formează oameni care înțeleg că
                adevărul implică responsabilitate. Absolvenții acestui model
                educațional manifestă un simț civic și moral semnificativ mai
                puternic decât absolvenții altor sisteme educaționale.
              </p>
              <p className="text-base font-serif text-ink/72 leading-relaxed mb-5">
                Studiile arată că aceștia sunt mai predispuși să apere adevărul,
                să ia atitudine în fața nedreptății, să se implice în comunitate
                și să slujească societatea. Nivelul de implicare este cu
                aproximativ <strong>25% mai mare</strong> față de absolvenții
                altor sisteme educaționale.
              </p>
              <p className="text-base font-serif text-ink/68 leading-relaxed mb-10">
                Educația clasică nu produce indivizi pasivi sau preocupați
                exclusiv de succes personal. Ea formează oameni capabili să
                conducă, să construiască, să slujească și să influențeze
                cultura prin adevăr și caracter.
              </p>

              <ViziuneStats section="civic" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECȚIUNEA 5 — Familii stabile
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-ink-deep text-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] seal-watermark" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow !text-gold-light mb-4">Roade în viața de familie</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-parchment mb-6 leading-tight">
              Familii stabile
              <br />
              și sănătoase
            </h2>
            <Ornament className="mb-6 [&>svg]:text-gold-light" />
            <p className="text-lg font-serif italic text-parchment/78 leading-relaxed">
              Rezultatele educației clasice creștine se reflectă nu doar în
              performanță academică, ci și în viața familială a absolvenților —
              acolo unde formarea caracterului este pusă cu adevărat la
              încercare.
            </p>
          </div>

          {/* stat cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                stat: "<1%",
                label: "Rată a divorțului",
                desc: "Față de o medie națională de 39–50% în Statele Unite — o diferență remarcabilă care reflectă maturitatea morală și angajamentul față de legământul căsătoriei.",
              },
              {
                stat: "0%",
                label: "Concubinaj",
                desc: "Niciunul dintre absolvenții analizați nu trăia în concubinaj — un indicator clar al valorilor dobândite în procesul de formare clasică creștină.",
              },
              {
                stat: "3,3×",
                label: "Rugăciune în familie",
                desc: "Mai predispuși să ducă mai departe obiceiurile spirituale în propriile familii, transmițând moștenirea credinței din generație în generație.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-gold/25 p-8 text-center"
              >
                <div className="font-display text-5xl lg:text-6xl text-gold-light mb-3 leading-none">
                  {item.stat}
                </div>
                <div className="eyebrow !text-gold mb-4">{item.label}</div>
                <div
                  className="w-10 h-px mx-auto mb-4"
                  style={{ background: "rgba(168,133,74,0.4)" }}
                />
                <p className="font-serif text-parchment/68 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* prose + images */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <p className="text-lg font-serif text-parchment/78 leading-relaxed">
              Aceste rezultate nu sunt accidentale. Educația clasică creștină
              cultivă responsabilitate, fidelitate, maturitate, autocontrol și
              respect pentru familie. Ea formează o înțelegere profundă a
              legământului și a responsabilității față de generațiile viitoare.
              Într-o cultură marcată de instabilitate relațională și
              individualism, absolvenții educației clasice creștine construiesc
              familii sănătoase și durabile — transmițând moștenirea credinței
              din generație în generație.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden border border-gold/20">
                <Image
                  src={IMG.classroomEdictum}
                  alt={IMG_ALT.classroomEdictum}
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-gold/20">
                <Image
                  src={IMG.candlelight}
                  alt={IMG_ALT.candlelight}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECȚIUNEA FINALĂ — Formarea omului întreg
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 marble-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow mb-4">Concluzie</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
            Formarea omului întreg
          </h2>
          <Ornament className="mb-10" />

          <p className="text-xl font-serif italic text-ink/80 leading-relaxed mb-6 max-w-3xl mx-auto">
            Scopul educației nu este doar succesul profesional. Scopul adevăratei
            educații este formarea omului întreg.
          </p>
          <p className="text-lg font-serif text-ink/73 leading-relaxed mb-6 max-w-3xl mx-auto">
            Educația clasică creștină urmărește dezvoltarea unei minți
            disciplinate, a unui caracter virtuos, a unei gândiri profunde, a
            unei credințe mature și a unei responsabilități reale față de
            Dumnezeu, familie și societate.
          </p>
          <p className="text-base font-serif text-ink/65 leading-relaxed mb-14 max-w-3xl mx-auto">
            În centrul acestui model educațional se află convingerea că adevărul,
            binele și frumosul nu sunt concepte relative, ci realități obiective
            ancorate în Dumnezeu. Aceasta este diferența dintre simpla instruire
            și adevărata formare.
          </p>

          {/* Truth · Goodness · Beauty */}
          <ViziuneStats section="tgb" />

          {/* final cinematic image */}
          <div className="mt-20 relative aspect-[21/9] overflow-hidden border border-gold/25">
            <Image
              src={IMG.oldLibrary}
              alt={IMG_ALT.oldLibrary}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink-deep/68" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <blockquote className="max-w-3xl">
                <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-parchment leading-relaxed mb-6">
                  „Educația nu este o materie, și nu se ocupă de materii, ci este
                  un transfer al unui mod de viață."
                </p>
                <cite className="eyebrow !text-gold-light not-italic">
                  — G.K. Chesterton
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Memoria Press teaser */}
          <div className="mt-20 border border-gold/35 bg-parchment/60 p-8 md:p-12 text-center">
            <p className="eyebrow mb-3">Curriculum recomandat</p>
            <h3 className="font-display text-2xl md:text-3xl text-ink-deep mb-4">
              Descoperiți Curriculumul{" "}
              <span className="text-gold-deep">Memoria Press</span>
            </h3>
            <Ornament className="mb-6" />
            <p className="font-serif text-ink/75 leading-relaxed mb-8 max-w-2xl mx-auto">
              Unul dintre cele mai solide curricule de educație clasică creștină
              din lume — cu discipline integrate, formare pentru profesori și o
              viziune completă despre formarea omului întreg.
            </p>
            <Link href="/educatie-clasica/memoria-press" className="btn btn-primary">
              Explorează Memoria Press →
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#programe" className="btn btn-primary">
              Înscrie-ți copilul
            </Link>
            <Link href="/despre" className="btn btn-ghost">
              Despre Edictum
            </Link>
            <Link href="/" className="btn btn-ghost">
              ← Înapoi la pagina principală
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
