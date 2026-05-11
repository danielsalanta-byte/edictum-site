import { Ornament } from "./Ornament";
import VideoPlayer from "./VideoPlayer";

const PARENT_VIDEO =
  "https://storage.googleapis.com/shl-okr-platform.firebasestorage.app/edictum/marturii-parinti.mp4";

export default function ParentVision() {
  return (
    <section className="py-24 lg:py-32 bg-parchment-warm">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Părinții</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 leading-tight">
            Părinți, parteneri de legământ
          </h2>
          <Ornament className="[&>svg]:opacity-90" />
        </div>

        {/* Text columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 font-serif text-lg text-graphite/85 leading-relaxed">
          <div className="space-y-5">
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
          </div>
          <div className="space-y-5">
            <p>
              Ne propunem să-i ajutăm să
              <strong className="text-ink-deep"> urmeze principii biblice</strong>
              atunci când abordează nemulțumiri sau preocupări — înclinați să
              asculte ambele părți înainte de a judeca, și gata să îmbrățișeze
              îndemnul Scripturii de a se încuraja unii pe alții la dragoste și
              fapte bune.
            </p>
            <p className="font-display italic text-ink-deep/80 text-base border-l-2 border-gold pl-5">
              Considerăm părinții primii și principalii educatori ai copiilor
              lor — școala este extensia autorității părintești, nu un substitut.
            </p>
          </div>
        </div>

        {/* Video — full width, 16:9 */}
        <div className="relative aspect-video border border-gold/30 shadow-column overflow-hidden">
          <VideoPlayer src={PARENT_VIDEO} className="absolute inset-0 w-full h-full" />
        </div>
        <p className="text-center mt-4 text-sm text-ink/55 italic font-serif">
          Mărturii ale părinților din comunitatea Edictum.
        </p>

      </div>
    </section>
  );
}
