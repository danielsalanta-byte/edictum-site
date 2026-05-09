import Image from "next/image";
import { IMG } from "@/lib/images";
import { Ornament } from "./Ornament";

export default function StudentVision() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-deep text-parchment overflow-hidden">
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
        <div className="text-center mb-12">
          <p className="eyebrow !text-gold-light mb-4">Student Vision</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-parchment mb-6 leading-tight">
            Tinerii pe care dorim să-i formăm
          </h2>
          <Ornament className="mb-2 [&>svg]:text-gold-light" />
        </div>

        <div className="space-y-6 font-serif text-lg md:text-xl text-parchment/90 leading-relaxed">
          <p>
            Ne dorim să dăm absolvenți — bărbați și femei tineri — care
            <strong className="text-parchment"> gândesc limpede</strong> și
            ascultă cu atenție, cu discernământ și înțelegere; care raționează
            convingător și se exprimă cu precizie; care sunt capabili să
            evalueze întreaga lor experiență
            <strong className="text-parchment"> în lumina Scripturii</strong>,
            și fac aceasta cu zel, în supunere bucuroasă față de Dumnezeu.
          </p>
          <p>
            Dorim ca ei să recunoască influențele culturale ca distincte de
            cele biblice, și să nu fie atrași spre rău de cele dintâi. Vrem
            să-i găsim
            <strong className="text-parchment"> bine pregătiți în orice situație</strong>,
            posedând atât informația, cât și înțelepciunea de a o folosi.
          </p>
          <p>
            Dorim ca elevii Edictum să fie
            <strong className="text-parchment"> grațioși în societate și plini de har spiritual</strong>;
            echipați cu uneltele învățării și înțelegându-le; dorind să crească
            în înțelegere, dar conștienți de limitele și nebunia înțelepciunii
            acestei lumi.
          </p>
          <p>
            Vrem să aibă o
            <strong className="text-parchment"> inimă pentru cei pierduți</strong>
            și
            <strong className="text-parchment"> curajul de a-i întoarce</strong>
            pe cei ce se poticnesc spre pierzare; să deosebească religia
            adevărată de cea doar în formă, și să o posede pe cea dintâi —
            cunoscându-L și iubindu-L pe Domnul Isus Hristos.
          </p>
          <p className="font-display italic text-parchment/85 text-base md:text-lg pt-2 border-t border-parchment/20 mt-8">
            Și pe toate acestea le dorim însoțite de smerenie și recunoștință
            față de Dumnezeu.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { t: "Înțelept", d: "Cunoaște adevărul și judecă cu minte limpede, în lumina Scripturii." },
            { t: "Curajos", d: "Trăiește virtuos, slujind cu noblețe morală și inimă pentru cei pierduți." },
            { t: "Articulat", d: "Vorbește frumos, scrie convingător, ascultă cu discernământ." },
          ].map((v) => (
            <div key={v.t} className="border-l-2 border-gold pl-5 py-2">
              <h3 className="font-display tracking-[0.2em] uppercase text-sm text-gold-light mb-2">
                {v.t}
              </h3>
              <p className="text-parchment/80 font-serif">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
