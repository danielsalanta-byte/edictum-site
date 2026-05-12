import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { IMG, IMG_ALT } from "@/lib/images";
import {
  DisciplinesGrid,
  VirtuePillars,
  YouTubeCards,
  HeroFacts,
  FadeIn,
} from "@/components/MemoriaPressClient";

export const metadata: Metadata = {
  title: "Curriculum Memoria Press · Educație Clasică · Edictum",
  description:
    "Memoria Press — unul dintre cele mai solide curricule de educație clasică creștină din lume. Descoperă viziunea, disciplinele și formarea profesorilor clasici creștini.",
};

export default function MemoriaPressPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO — cinematic dark
      ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <Image
          src="/memoria-hero.png"
          alt="Echipa Memoria Press în discuție academică, cărți și tablouri clasice în fundal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/60" />
        <div className="absolute inset-0 opacity-[0.04] seal-watermark" />

        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 lg:px-10 pb-16 pt-40 text-center">
          {/* eyebrow */}
          <p className="eyebrow !text-gold-light mb-5 tracking-[0.35em]">
            Curriculum Clasic Creștin
          </p>

          {/* wordmark */}
          <div className="mb-3">
            <span className="font-display text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] text-parchment leading-none tracking-wide">
              Memoria
            </span>
            <span className="font-display text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] text-gold leading-none tracking-wide ml-4">
              Press
            </span>
          </div>

          <Ornament className="mb-8 [&>svg]:text-gold-light" />

          <div className="max-w-3xl mx-auto space-y-5 mb-14">
            <p className="text-xl md:text-2xl font-serif italic text-parchment/90 leading-relaxed">
              O viziune completă asupra formării omului — construită pe adevăr,
              disciplină intelectuală, frumusețe și caracter creștin.
            </p>
            <p className="text-base font-serif text-parchment/68 leading-relaxed">
              Unul dintre cele mai solide, coerente și apreciate modele de
              educație clasică creștină din lume. Nu o colecție de manuale —
              ci o cale spre formarea omului întreg.
            </p>
          </div>

          <HeroFacts dark />

          <div className="mt-8 mb-0 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.memoriapress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Vizitează Memoria Press
            </a>
            <Link href="/educatie-clasica" className="btn btn-ghost !text-parchment !border-parchment/30 hover:!border-gold">
              ← Înapoi la Viziune
            </Link>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════════════
          S1 — What is Memoria Press (light)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 marble-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* image */}
            <FadeIn delay={0}>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden border border-gold/25">
                  <Image
                    src={IMG.bookshelves}
                    alt={IMG_ALT.bookshelves}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
                    <p className="font-serif italic text-parchment text-base leading-snug">
                      „Nu o colecție de manuale, ci o viziune completă<br />asupra formării omului."
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-gold-deep hidden lg:block" />
                <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-gold-deep hidden lg:block" />
              </div>
            </FadeIn>

            {/* text */}
            <FadeIn delay={150}>
              <p className="eyebrow mb-4">Ce este Memoria Press</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
                O viziune,
                <br />
                nu un curriculum
              </h2>
              <Ornament className="mb-8 justify-start" />

              <p className="text-lg font-serif text-ink/85 leading-relaxed mb-5">
                Curriculumul Memoria Press reprezintă astăzi unul dintre cele mai
                solide, coerente și apreciate modele de educație clasică creștină
                din lume. Nu este doar o colecție de manuale sau un set de lecții
                bine organizate, ci{" "}
                <strong>o viziune completă asupra formării omului</strong> —
                construită pe adevăr, disciplină intelectuală, frumusețe și
                formarea caracterului creștin.
              </p>
              <p className="text-lg font-serif text-ink/80 leading-relaxed mb-5">
                În ultimele decenii, Memoria Press s-a remarcat prin rezultate
                academice excepționale și prin capacitatea rară de a readuce în
                educație ceea ce lumea modernă a pierdut: rigoarea, ordinea,
                dragostea pentru cărți bune și{" "}
                <strong>formarea sufletului împreună cu formarea minții</strong>.
              </p>
              <p className="text-base font-serif text-ink/72 leading-relaxed mb-8">
                Copiii nu sunt tratați ca niște consumatori de informație, ci ca
                ființe create după chipul lui Dumnezeu, chemate să crească în
                înțelepciune, virtute și discernământ. Fiecare etapă este
                construită gradual, cu o atenție remarcabilă la dezvoltarea
                naturală a copilului.
              </p>

              <a
                href="https://www.memoriapress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Descoperă Memoria Press →
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S2 — Why Classical Christian Education (dark quote strip)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-graphite text-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] seal-watermark" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <FadeIn>
            <p className="eyebrow !text-gold-light mb-6">De ce educație clasică creștină</p>
            <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-parchment/90 leading-relaxed mb-8">
              „În timp ce multe curricule moderne urmăresc doar performanța
              imediată sau adaptarea rapidă la tendințele culturale, Memoria
              Press construiește{" "}
              <span className="text-gold-light not-italic font-display">
                fundații durabile pentru întreaga viață.
              </span>"
            </blockquote>
            <div className="w-16 h-px mx-auto mb-6" style={{ background: "rgba(168,133,74,0.5)" }} />
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: "✦", title: "Rigoare Intelectuală", desc: "Gandire profundă, nu memorare superficială. Elevii clasici știu să pună întrebări, să argumenteze și să distingă adevărul de opinie." },
                { icon: "✦", title: "Caracter Creștin", desc: "Educația nu este neutră. Memoria Press formează în mod deliberat caracter creștin — virtute, integritate, responsabilitate și smerenie." },
                { icon: "✦", title: "Moștenire Civilizațională", desc: "Elevii sunt introduși în cel mai bogat patrimoniu cultural al omenirii — literatura, filosofia, arta și teologia creștinătății occidentale." },
              ].map((item) => (
                <div key={item.title} className="border border-gold/25 p-7 text-left">
                  <div className="text-gold text-xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-lg text-parchment mb-3">{item.title}</h3>
                  <p className="font-serif text-sm text-parchment/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S3 — Subjects & Formation (light)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-parchment-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Disciplinele curriculumului</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
              Zece discipline clasice,
              <br />
              o singură viziune
            </h2>
            <Ornament className="mb-6" />
            <p className="text-lg font-serif italic text-ink/72 leading-relaxed">
              Curriculum-ul Memoria Press integrează toate domeniile cunoașterii
              într-o viziune coerentă despre realitate, ancorată în Hristos ca
              fundament al oricărei cunoașteri.
            </p>
          </div>

          <DisciplinesGrid />

          {/* sub-quote */}
          <FadeIn delay={100}>
            <blockquote className="mt-16 border-l-4 border-gold pl-8 max-w-3xl mx-auto">
              <p className="font-serif italic text-xl md:text-2xl text-ink/82 leading-relaxed mb-4">
                „Această abordare produce nu doar elevi bine pregătiți academic,
                ci oameni capabili să gândească clar, să vorbească frumos, să
                judece drept și să iubească adevărul."
              </p>
              <cite className="eyebrow text-gold-deep not-italic">— Memoria Press Philosophy</cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S4 — Teacher Training (dark, cinematic)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-ink-deep text-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] seal-watermark" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow !text-gold-light mb-4">Formarea profesorilor</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-parchment mb-6 leading-tight">
              Formarea Profesorilor
              <br />
              <span className="text-gold-light">& Caracterul Creștin</span>
            </h2>
            <Ornament className="mb-6 [&>svg]:text-gold-light" />
            <p className="text-lg font-serif italic text-parchment/78 leading-relaxed">
              Memoria Press nu se concentrează exclusiv pe elevi, ci investește
              masiv în pregătirea cadrelor didactice. Profesorul nu este un
              furnizor de informație —{" "}
              <strong className="text-parchment">ci un formator de suflete.</strong>
            </p>
          </div>

          {/* two-column feature */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <FadeIn delay={0}>
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/25">
                <Image
                  src={IMG.teacherBoard}
                  alt={IMG_ALT.teacherBoard}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="font-display text-[0.6rem] tracking-[0.35em] uppercase text-gold mb-2">Misiunea profesorului clasic</div>
                  <p className="font-serif italic text-parchment text-sm leading-relaxed">
                    „Cel mai important atribut al unui cadru didactic nu este
                    performanța tehnică sau carisma — ci caracterul creștin."
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-6 pt-2">
                <p className="text-lg font-serif text-parchment/85 leading-relaxed">
                  Fie că este vorba despre grădiniță, școală primară sau liceu,
                  Memoria Press oferă o structură continuă de instruire și formare
                  pentru profesori. Curriculumul nu presupune doar „predare", ci
                  formarea unui educator care înțelege{" "}
                  <strong className="text-parchment">misiunea sacră a educației creștine.</strong>
                </p>
                <p className="text-base font-serif text-parchment/75 leading-relaxed">
                  Un profesor poate învăța metode pedagogice. Poate învăța
                  organizare, evaluare și managementul clasei. Dar ceea ce nu
                  poate fi falsificat este dragostea autentică pentru Dumnezeu,
                  pentru adevăr și pentru copii.
                </p>
                <p className="text-base font-serif text-parchment/70 leading-relaxed">
                  Un profesor creștin adevărat transmite mai mult decât cunoștințe
                  — transmite o moștenire. Profesorii devin parte din construcția
                  unei civilizații creștine, din restaurarea unei culturi a
                  binelui, adevărului și frumosului.
                </p>

                {/* resource links */}
                <div className="space-y-3 pt-2">
                  {[
                    { label: "Teacher Training Resources", sub: "memoriapress.com/teacher-training", url: "https://www.memoriapress.com" },
                    { label: "Podcast & Webinars", sub: "Formare continuă pentru profesori clasici", url: "https://www.memoriapress.com" },
                    { label: "Online Courses", sub: "Classical Teacher Magazine & cursuri online", url: "https://www.memoriapress.com" },
                  ].map((r) => (
                    <a
                      key={r.label}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 border border-gold/20 hover:border-gold/45 transition-colors group"
                    >
                      <span className="text-gold mt-0.5 flex-shrink-0">◆</span>
                      <div>
                        <div className="font-display text-sm text-parchment group-hover:text-gold transition-colors">{r.label}</div>
                        <div className="font-sans text-[0.7rem] text-parchment/45 mt-0.5 tracking-wide">{r.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* virtue pillars */}
          <div className="mb-4">
            <FadeIn>
              <h3 className="font-display text-2xl text-parchment text-center mb-3">
                Cele șase virtuți ale profesorului clasic creștin
              </h3>
              <p className="text-center font-serif italic text-parchment/58 text-sm mb-10">
                Memoria Press formează educatori care înțeleg că lucrează pentru generații, nu doar pentru semestre.
              </p>
            </FadeIn>
            <VirtuePillars />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S5 — Legacy & Civilization Building (light)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 marble-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn delay={0}>
              <p className="eyebrow mb-4">Moștenire & Civilizație</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
                Construim o civilizație,
                <br />
                nu o generație
              </h2>
              <Ornament className="mb-8 justify-start" />

              <p className="text-lg font-serif text-ink/85 leading-relaxed mb-5">
                Aceasta este una dintre cele mai profunde contribuții ale
                curriculumului Memoria Press: formează educatori care înțeleg că
                lucrează pentru generații, nu doar pentru semestre. Profesorii
                devin parte din construcția unei civilizații creștine, din
                restaurarea unei culturi a binelui, adevărului și frumosului.
              </p>
              <p className="text-base font-serif text-ink/72 leading-relaxed mb-5">
                G.K. Chesterton, C.S. Lewis, J.R.R. Tolkien — toți sunt
                produsele acestei mari tradiții clasice creștine. Memoria Press
                nu inventează o nouă metodă; ea restaurează și transmite ceea
                ce a format civilizația occidentală timp de două milenii.
              </p>
              <p className="text-base font-serif text-ink/68 leading-relaxed mb-8">
                Într-o epocă a fragmentării, relativismului și uitării, educația
                clasică creștină este un act de rezistență profundă și de speranță
                activă — o afirmare că adevărul, binele și frumosul există, și
                că pot fi dobândite și transmise.
              </p>

              <ul className="space-y-3">
                {[
                  "Transmiterea moștenirii creștine din generație în generație",
                  "Formarea de lideri cu caracter și viziune creștină",
                  "Restaurarea culturii frumosului, ordinii și adevărului",
                  "Construirea familiilor, comunităților și societăților sănătoase",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-serif text-ink/80">
                    <span className="text-gold-deep mt-1 flex-shrink-0 text-sm">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Memoria Press brand panel */}
            <FadeIn delay={200}>
              <div className="flex flex-col gap-5 h-full">
                {/* Main brand block */}
                <div className="flex-1 bg-ink-deep border border-gold/30 flex flex-col items-center justify-center py-16 px-10 relative overflow-hidden">
                  {/* subtle background texture */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #F6F0DD 0, #F6F0DD 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px"
                  }} />
                  {/* corner ornaments */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-l border-t border-gold/40" />
                  <div className="absolute top-4 right-4 w-10 h-10 border-r border-t border-gold/40" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 border-l border-b border-gold/40" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-r border-b border-gold/40" />

                  {/* Torch SVG icon */}
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="mb-6 opacity-90">
                    <path d="M26 4 C20 8 16 14 17 20 C18 26 22 28 22 34 L30 34 C30 28 34 26 35 20 C36 14 32 8 26 4Z" fill="rgba(168,133,74,0.25)" stroke="rgba(168,133,74,0.8)" strokeWidth="1.2"/>
                    <path d="M26 4 C23 9 21 13 22 18 C23 23 26 25 26 25 C26 25 29 23 30 18 C31 13 29 9 26 4Z" fill="rgba(168,133,74,0.45)"/>
                    <line x1="22" y1="34" x2="20" y2="48" stroke="rgba(168,133,74,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="30" y1="34" x2="32" y2="48" stroke="rgba(168,133,74,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="20" y1="48" x2="32" y2="48" stroke="rgba(168,133,74,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="21" y1="40" x2="31" y2="40" stroke="rgba(168,133,74,0.4)" strokeWidth="1"/>
                  </svg>

                  {/* Brand name */}
                  <p className="font-display text-[0.6rem] tracking-[0.45em] uppercase text-gold mb-3 relative z-10">
                    Est. 1952 · Louisville, Kentucky
                  </p>
                  <div className="relative z-10 text-center">
                    <div className="font-display text-4xl md:text-5xl text-parchment leading-none tracking-wide mb-1">
                      Memoria
                    </div>
                    <div className="font-display text-4xl md:text-5xl text-gold leading-none tracking-wide">
                      Press
                    </div>
                  </div>

                  <div className="w-16 h-px bg-gold/50 my-6 relative z-10" />

                  <p className="font-serif italic text-parchment/65 text-sm text-center leading-relaxed max-w-xs relative z-10">
                    Classical Christian Curriculum
                    <br />
                    <span className="text-gold/70 not-italic font-display text-[0.6rem] tracking-[0.3em] uppercase">
                      Clasici · Caracter · Hristos
                    </span>
                  </p>
                </div>

                {/* Bottom detail strip */}
                <div className="bg-ink-deep/8 border border-gold/20 px-8 py-6 flex items-center justify-between gap-4">
                  {[
                    { num: "70+", label: "ani de curriculum" },
                    { num: "K–12", label: "grade complete" },
                    { num: "1000+", label: "titluri publicate" },
                  ].map((s) => (
                    <div key={s.label} className="text-center flex-1">
                      <div className="font-display text-xl text-gold-deep leading-none mb-1">{s.num}</div>
                      <div className="font-sans text-[0.6rem] tracking-widest uppercase text-ink/50 leading-relaxed">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S6 — Watch & Learn / YouTube (dark)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-graphite text-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] seal-watermark" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow !text-gold-light mb-4">Watch &amp; Learn</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-parchment mb-6 leading-tight">
                Explorează lumea educației
                <br />
                clasice creștine
              </h2>
              <Ornament className="mb-6 [&>svg]:text-gold-light" />
              <p className="text-lg font-serif italic text-parchment/72 leading-relaxed">
                Canalul YouTube al Memoria Press este o resursă extraordinară de
                formare — pentru profesori, părinți și toți cei pasionați de
                educația clasică creștină.
              </p>
            </div>
          </FadeIn>

          <YouTubeCards />

          {/* YouTube CTA */}
          <FadeIn delay={300}>
            <div className="mt-10 text-center">
              <a
                href="https://www.youtube.com/@MemoriaPress"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-parchment hover:border-gold hover:bg-gold/10 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <span className="font-display text-sm tracking-[0.2em] uppercase">Urmărește pe YouTube</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S7 — Resources & Social Media (light)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-parchment-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow mb-4">Resurse & Comunitate</p>
              <h2 className="text-3xl md:text-4xl font-display mb-6">
                Explorează, urmărește
                <br />
                și alătură-te comunității
              </h2>
              <Ornament className="mb-4" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Website */}
            <FadeIn delay={0}>
              <a
                href="https://www.memoriapress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full border border-gold/30 bg-white/60 backdrop-blur-sm p-7 hover:border-gold/60 hover:bg-white/80 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-5 group-hover:border-gold transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-deep" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-ink-deep mb-2 group-hover:text-gold-deep transition-colors">Website Oficial</h3>
                <p className="font-serif text-sm text-ink/65 leading-relaxed flex-1">
                  Curriculum complet, cărți, resurse pentru profesori și părinți, articole și ghiduri de implementare.
                </p>
                <div className="mt-5 font-display text-[0.65rem] tracking-[0.25em] uppercase text-gold-deep flex items-center gap-2">
                  memoriapress.com
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </a>
            </FadeIn>

            {/* YouTube */}
            <FadeIn delay={80}>
              <a
                href="https://www.youtube.com/@MemoriaPress"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full border border-gold/30 bg-white/60 backdrop-blur-sm p-7 hover:border-red-400/60 hover:bg-white/80 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-5 group-hover:border-red-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-ink-deep mb-2 group-hover:text-red-600 transition-colors">YouTube</h3>
                <p className="font-serif text-sm text-ink/65 leading-relaxed flex-1">
                  Conferințe, lecții demonstrative, formare pentru profesori, interviews și resurse video premium.
                </p>
                <div className="mt-5 font-display text-[0.65rem] tracking-[0.25em] uppercase text-red-500 flex items-center gap-2">
                  @MemoriaPress
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </a>
            </FadeIn>

            {/* Facebook */}
            <FadeIn delay={160}>
              <a
                href="https://www.facebook.com/memoriapress"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full border border-gold/30 bg-white/60 backdrop-blur-sm p-7 hover:border-blue-400/60 hover:bg-white/80 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-5 group-hover:border-blue-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-ink-deep mb-2 group-hover:text-blue-600 transition-colors">Facebook</h3>
                <p className="font-serif text-sm text-ink/65 leading-relaxed flex-1">
                  Comunitate activă de profesori și părinți. Articole, resurse zilnice și actualizări despre educația clasică.
                </p>
                <div className="mt-5 font-display text-[0.65rem] tracking-[0.25em] uppercase text-blue-600 flex items-center gap-2">
                  /memoriapress
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </a>
            </FadeIn>

            {/* Instagram */}
            <FadeIn delay={240}>
              <a
                href="https://www.instagram.com/memoriapress/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full border border-gold/30 bg-white/60 backdrop-blur-sm p-7 hover:border-pink-400/60 hover:bg-white/80 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-5 group-hover:border-pink-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-ink-deep mb-2 group-hover:text-pink-500 transition-colors">Instagram</h3>
                <p className="font-serif text-sm text-ink/65 leading-relaxed flex-1">
                  Imagini inspiraționale din clasele Memoria Press, citate clasice și momente de formare autentică.
                </p>
                <div className="mt-5 font-display text-[0.65rem] tracking-[0.25em] uppercase text-pink-500 flex items-center gap-2">
                  @memoriapress
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Classical Teacher Magazine highlight */}
          <FadeIn delay={200}>
            <div className="mt-10 border border-gold/35 bg-white/40 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="eyebrow mb-3">Publicație de referință</div>
                <h3 className="font-display text-2xl text-ink-deep mb-4">
                  The Classical Teacher Magazine
                </h3>
                <p className="font-serif text-ink/75 leading-relaxed mb-6">
                  Revista oficială a Memoria Press — articole despre filosofia
                  educației clasice, metode de predare, recenzii de cărți și
                  interviuri cu educatori clasici creștini din întreaga lume.
                </p>
                <a
                  href="https://www.memoriapress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Citește The Classical Teacher →
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
                <Image src={IMG.manuscriptDesk} alt={IMG_ALT.manuscriptDesk} fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          S8 — Final CTA (cinematic dark)
      ════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <Image
          src={IMG.clujPanorama}
          alt={IMG_ALT.clujPanorama}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-deep/75" />
        <div className="absolute inset-0 opacity-[0.05] seal-watermark" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <p className="eyebrow !text-gold-light mb-6">O invitație</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-parchment mb-8 leading-tight">
              Formăm o generație care va
              <br />
              <span className="text-gold-light">iubi binele, adevărul și frumosul.</span>
            </h2>
            <Ornament className="mb-10 [&>svg]:text-gold-light" />

            <p className="text-xl font-serif italic text-parchment/85 leading-relaxed mb-5 max-w-2xl mx-auto">
              Edictum se alătură viziunii Memoria Press de a restaura educația
              clasică creștină în România — formând elevi care să gândească clar,
              să trăiască virtuos și să servească generațiile viitoare.
            </p>
            <p className="text-base font-serif text-parchment/65 leading-relaxed mb-12 max-w-2xl mx-auto">
              Alătură-te acestei mișcări. Fiecare copil educat în adevăr, frumos
              și bine este o piatră la fundația civilizației creștine de mâine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.memoriapress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Descoperă Memoria Press
              </a>
              <Link href="/#programe" className="btn btn-ghost !text-parchment !border-parchment/30 hover:!border-gold">
                Înscrie-ți copilul la Edictum
              </Link>
              <Link href="/educatie-clasica" className="btn btn-ghost !text-parchment/70 !border-parchment/20 hover:!border-parchment/50">
                ← Viziunea Edictum
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
