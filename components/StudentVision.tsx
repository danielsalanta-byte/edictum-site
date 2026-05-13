import Image from "next/image";
import { IMG } from "@/lib/images";
import { Ornament } from "./Ornament";

const verticals = [
  {
    label: "Familia",
    desc: "Tineri care întemeiază familii devreme și cu responsabilitate, transmiţând moștenirea credinței din generație în generație.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Munca",
    desc: "Urmărind excelența și credincioșia în orice chemare, lucrând ca înaintea lui Dumnezeu, nu doar a oamenilor.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="17" />
        <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
      </svg>
    ),
  },
  {
    label: "Biserica",
    desc: "Slujind cu devotament în trupul lui Hristos, edificând comunitatea credincioșilor și hrănindu-se din Cuvânt și sacramente.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="7" />
        <line x1="9.5" y1="4.5" x2="14.5" y2="4.5" />
        <path d="M5 10h14l1 11H4L5 10z" />
        <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      </svg>
    ),
  },
  {
    label: "Societatea",
    desc: "Implicați activ în extinderea hotarelor Împărăției lui Dumnezeu, spre binele aproapelui și spre slava lui Dumnezeu.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function StudentVision() {
  return (
    <section className="relative py-14 lg:py-32 bg-ink-deep text-parchment overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={IMG.girlReading}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/90 to-ink-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/70 via-transparent to-ink-deep" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow !text-gold-light mb-4">Viziunea noastră despre absolvent</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-parchment mb-6 leading-tight">
            Tinerii pe care dorim<br />să-i formăm
          </h2>
          <Ornament className="mb-2 [&>svg]:text-gold-light" />
        </div>

        {/* Body paragraphs */}
        <div className="space-y-6 font-serif text-base sm:text-lg md:text-xl text-parchment/88 leading-relaxed">
          <p>
            Ne dorim să formăm absolvenți — tineri bărbați și femei — care{" "}
            <strong className="text-parchment">gândesc limpede</strong>, ascultă
            cu atenție și privesc lumea cu discernământ și înțelegere. Tineri
            capabili să raționeze cu claritate, să vorbească cu precizie și să
            își așeze întreaga viață sub{" "}
            <strong className="text-parchment">autoritatea Scripturii</strong>,
            slujindu-L pe Dumnezeu cu bucurie, zel și credincioșie.
          </p>
          <p>
            Dorim ca ei să poată deosebi influențele culturii de adevărul biblic,
            fără a fi purtați de curentele vremii sau modelați de spiritul acestei
            lumi. Vrem să fie oameni{" "}
            <strong className="text-parchment">bine pregătiți pentru orice chemare</strong>{" "}
            și orice responsabilitate, având nu doar cunoștință, ci și
            înțelepciunea de a folosi drept ceea ce au învățat.
          </p>
          <p>
            Ne dorim ca elevii Edictum să fie{" "}
            <strong className="text-parchment">oameni cultivați și plini de har</strong>{" "}
            — echipați cu instrumentele învățării, iubitori de adevăr și dornici
            să crească în înțelegere, dar totodată conștienți de limitele și
            deșertăciunea înțelepciunii desprinse de Dumnezeu.
          </p>
        </div>

        {/* Closing line */}
        <p className="mt-10 pt-8 border-t border-parchment/15 font-serif italic text-parchment/70 text-base md:text-lg leading-relaxed text-center">
          Și dorim ca toate acestea să fie însoțite de smerenie, recunoștință și
          o dependență sinceră de harul lui Dumnezeu, înțelegând că orice
          adevărată înțelepciune, virtute și rod bun vin de la El.
        </p>

        {/* Four verticals */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <p className="eyebrow !text-gold-light mb-2">Cele patru mari verticale ale vieții</p>
            <div className="w-12 h-px mx-auto" style={{ background: "rgba(168,133,74,0.4)" }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {verticals.map((v) => (
              <div
                key={v.label}
                className="border border-gold/22 bg-ink-deep/60 backdrop-blur-sm p-6 hover:border-gold/45 transition-colors duration-300 group"
              >
                <div className="text-gold mb-4 group-hover:text-gold-light transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-display text-[0.72rem] tracking-[0.28em] uppercase text-gold mb-3">
                  {v.label}
                </h3>
                <div className="w-6 h-px mb-3" style={{ background: "rgba(168,133,74,0.35)" }} />
                <p className="font-serif text-sm text-parchment/68 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
