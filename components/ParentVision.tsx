import { Ornament } from "./Ornament";
import VideoPlayer from "./VideoPlayer";

const PARENT_VIDEO =
  "https://storage.googleapis.com/shl-okr-platform.firebasestorage.app/edictum/marturii-parinti.mp4";

export default function ParentVision() {
  return (
    <section className="py-24 lg:py-32 bg-parchment-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="eyebrow mb-4">Părinții</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            Părinți, parteneri de legământ
          </h2>
          <Ornament className="mb-8 justify-start [&>svg]:opacity-90" />

          <div className="space-y-5 font-serif text-lg text-graphite/85 leading-relaxed">
            <p>
              Ne dorim să cultivăm în părinți un
              <strong className="text-ink-deep"> simț al responsabilității pentru școală</strong>
              și să-i știm bine informați cu privire la scopurile abordării
              noastre clasice și centrate pe Hristos.
            </p>
            <p>
              Dorim ca părinții să
              <strong className="text-ink-deep"> crească împreună cu școala</strong>:
              implicați în drumul nostru și entuziaști pentru ceea ce
              Dumnezeu lucrează în viața copiilor lor.
            </p>
            <p>
              Ne propunem să-i ajutăm să
              <strong className="text-ink-deep"> urmeze principii biblice</strong>
              atunci când abordează nemulțumiri sau preocupări — înclinați să
              asculte ambele părți înainte de a judeca, și gata să îmbrățișeze
              îndemnul Scripturii de a se încuraja unii pe alții la dragoste și
              fapte bune.
            </p>
          </div>

          <p className="mt-8 font-display italic text-ink-deep/80 text-base border-l-2 border-gold pl-5">
            Considerăm părinții primii și principalii educatori ai copiilor
            lor — școala este extensia autorității părintești, nu un substitut.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/6] border border-gold/30 shadow-column overflow-hidden">
            <VideoPlayer
              src={PARENT_VIDEO}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 border-r-2 border-t-2 border-gold-deep hidden lg:block" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-gold-deep hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
