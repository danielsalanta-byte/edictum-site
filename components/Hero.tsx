import Image from "next/image";
import Link from "next/link";
import { Ornament } from "./Ornament";
import { IMG } from "@/lib/images";
import { Seal } from "./Logo";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative marble-bg overflow-hidden">
      {/* classical architecture backdrop, faded into parchment */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={IMG.oxfordCourt}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-parchment/85 via-parchment/90 to-parchment" />
      </div>

      {/* Seal watermark behind the headline */}
      <div className="absolute inset-x-0 top-12 flex justify-center pointer-events-none opacity-[0.07]">
        <Seal variant="burgundy" size={640} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <p className="eyebrow mb-6">Cluj-Napoca · Toamna 2025</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] mb-6 text-ink">
            Școala Clasică Creștină
            <br />
            <span className="text-gold-deep">Edictum</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-ink/75 max-w-3xl mx-auto leading-relaxed">
            O educație creștină și clasică pentru formarea minții, caracterului
            și sufletului.
          </p>

          <Ornament className="my-10" />

          <blockquote className="text-base md:text-lg font-serif italic text-ink/65 max-w-2xl mx-auto">
            „Educația nu este o materie, și nu se ocupă de materii, ci este un
            transfer al unui mod de viață.”
            <cite className="block mt-2 not-italic text-sm font-display tracking-[0.2em] uppercase text-gold-deep">
              — G.K. Chesterton
            </cite>
          </blockquote>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/1hzGUirg6ihRLtwu7fAWemHYFT7Bz3oPDpyd1tzr5Jnw/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Înscriere clasa pregătitoare
            </a>
            <a
              href="https://docs.google.com/forms/d/1of3U8goeGRYF_YbFOi021UvvoCN4zFMbmx2YDlFFQv8/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Înscriere grădiniță
            </a>
            <Link href="/#donatii" className="btn btn-gold">
              Donează
            </Link>
          </div>
        </div>

        {/* video */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-in">
          <HeroVideo />
          <p className="text-center mt-4 text-sm text-ink/55 italic font-serif">
            Ideile au consecințe. Urmărește video-ul pentru a afla despre
            educația ce a construit Occidentul.
          </p>
        </div>
      </div>
    </section>
  );
}
