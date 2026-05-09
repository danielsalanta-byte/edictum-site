import Image from "next/image";
import Link from "next/link";
import { Ornament } from "@/components/Ornament";
import { IMG, IMG_ALT } from "@/lib/images";

export const metadata = {
  title: "Mărturisirea de Credință · Școala Edictum",
  description: "Fundamentul credinței creștine al Edictum Classical Christian School.",
};

const articles = [
  "Credem în Dumnezeu Tatăl Atotputernic, Făcătorul cerului și al pământului; și în Isus Hristos, singurul Său Fiu, Domnul nostru. Isus Hristos a fost zămislit de Duhul Sfânt și s-a născut din fecioara Maria. A pătimit sub Ponțiu Pilat, a fost răstignit, a murit și a fost îngropat. S-a coborât în locuința morților și a treia zi a înviat din morți. S-a înălțat la Cer, unde șade la dreapta lui Dumnezeu Tatăl Atotputernic. Din Cer va veni din nou pe pământ pentru a judeca viii și morții. Credem în Duhul Sfânt, în sfânta biserică universală, în părtășia tuturor sfinților adevărați, în iertarea păcatelor, în învierea trupului și în darul vieții veșnice. (Crezul Apostolic)",
  "Credem că Dumnezeu Se revelează prin crearea, păstrarea și guvernarea universului.",
  "Credem că Dumnezeu Se face cunoscut mai clar și mai deplin prin Scripturi, care sunt singurul Cuvânt inerant și infailibil al lui Dumnezeu, regula noastră ultimă și finală de autoritate pentru credință și practică. Aceste Scripturi sunt alcătuite din 66 de cărți, de la Geneza la Apocalipsa, a căror autoritate nu depinde de mărturia vreunui om sau a vreunei biserici, și toate trebuie primite ca fiind Cuvântul lui Dumnezeu.",
  "Credem că există un singur Dumnezeu viu și adevărat, etern existent în trei Persoane de o singură putere, substanță și eternitate — Tatăl, Fiul și Duhul Sfânt. El este perfect înțelept, izvorul tuturor lucrurilor bune. El este atotputernic, omniprezent și atotștiutor. În toate lucrurile, El nu este limitat de nimic altceva decât de propria Sa natură și caracter.",
  "Credem că Dumnezeul pe care Îl slujim este sfânt, drept, bun, iubitor și plin de milă. El este Creatorul, Susținătorul și Guvernatorul a tot ce a fost făcut.",
  "Credem în adevărata divinitate și deplina umanitate a Domnului nostru Isus Hristos, astfel încât două naturi distincte — divină și umană — au fost unite inseparabil într-o singură persoană, fără convertire, compoziție sau confuzie. Credem în nașterea Sa din fecioară, în viața Sa fără păcat, în minunile Sale, în moartea Sa substitutivă și ispășitoare prin sângele Său vărsat, în învierea Sa trupească, în înălțarea Sa la dreapta Tatălui și în întoarcerea Sa personală în putere și slavă.",
  "Credem că Adam a fost făcut din țărâna pământului și format după chipul și asemănarea lui Dumnezeu, care era bună, dreaptă și sfântă. Din cauza păcatului lui Adam, toată omenirea se află într-o stare de rebeliune împotriva lui Dumnezeu. Pentru mântuirea unor astfel de oameni pierduți și păcătoși, nașterea din nou prin Duhul Sfânt este absolut necesară.",
  "Credem că mântuirea este prin har și numai prin credință, iar credința fără fapte este moartă. Credem că Dumnezeu îi îndreptățește în mod liber pe ai Săi, nu prin infuzarea neprihănirii în ei, ci prin iertarea păcatelor lor și prin socotirea și acceptarea persoanelor lor ca fiind neprihănite, numai de dragul lui Isus Hristos.",
  "Credem în lucrarea prezentă a Duhului Sfânt, prin a cărui locuire interioară creștinul este capabil să ducă o viață evlavioasă, așa cum Duhul lui Hristos din noi ne face capabili să facem în mod liber și cu bucurie ceea ce voia lui Dumnezeu revelată în Scriptură cere să fie făcut.",
  "Credem că faptele bune sunt doar acelea care izvorăsc din credința adevărată, se conformează Cuvântului lui Dumnezeu și sunt făcute pentru gloria Lui.",
  "Credem că Dumnezeu a rânduit o zi în care va judeca lumea în neprihănire prin Isus Hristos. Credem în învierea atât a celor mântuiți, cât și a celor pierduți; cei care sunt mântuiți la învierea vieții, iar cei care sunt pierduți la învierea osândei.",
  "Credem în unitatea spirituală a tuturor credincioșilor în Domnul nostru Isus Hristos. Toți cei care sunt uniți cu Hristos ca și Cap al Bisericii sunt uniți unii cu alții în dragoste și au comuniune în darurile și harurile fiecăruia.",
  "Credem că Dumnezeu a definit căsătoria ca fiind legământul pe viață între un bărbat și o femeie, și că toate formele de activitate sexuală în afara căsătoriei sunt păcat.",
  "Credem că Dumnezeu creează în mod imuabil fiecare persoană pentru a reflecta imaginea Sa ca bărbat sau femeie.",
];

export default function Marturisire() {
  return (
    <>
      <header className="relative h-[44vh] min-h-[320px] max-h-[520px] overflow-hidden">
        <Image
          src={IMG.manuscriptDesk}
          alt={IMG_ALT.manuscriptDesk}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
            <p className="eyebrow !text-gold-light mb-4">Fundament</p>
            <h1 className="text-4xl md:text-6xl font-display text-parchment leading-tight">
              Mărturisirea de Credință
            </h1>
            <p className="mt-3 font-display text-xs tracking-[0.24em] uppercase text-gold-light">
              Adoptată la 24 octombrie 2024
            </p>
          </div>
        </div>
      </header>
    <article className="py-20 lg:py-28 marble-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Link href="/despre" className="eyebrow !text-xs hover:text-ink">
          ← Despre Noi
        </Link>
        <Ornament className="my-10 justify-start" />

        <h2 className="font-display text-xl mb-4">Prefață</h2>
        <p className="text-lg font-serif text-ink/85 leading-relaxed mb-10">
          Următorul text reprezintă fundamentul credinței creștine al Edictum
          Classical Christian School. Acestea sunt elementele cheie ale
          creștinismului protestant, care vor fi predate și aplicate în mod
          asumat în diferite moduri în toate clasele.
        </p>

        <h2 className="font-display text-xl mb-6">Mărturisire</h2>
        <ol className="space-y-6">
          {articles.map((a, i) => (
            <li key={i} className="flex gap-5">
              <span className="font-display text-gold-deep text-sm pt-2 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-ink/85 leading-relaxed">{a}</p>
            </li>
          ))}
        </ol>
      </div>
    </article>
    </>
  );
}
