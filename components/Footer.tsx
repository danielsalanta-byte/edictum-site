import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Logo variant="light" height={64} />
          <p className="mt-4 text-parchment/70 text-sm leading-relaxed">
            O educație creștină și clasică pentru formarea minții, caracterului
            și sufletului.
          </p>
        </div>

        <div>
          <h4 className="text-parchment font-display text-xs tracking-[0.28em] uppercase mb-4">
            Navigare
          </h4>
          <ul className="space-y-2 text-sm text-parchment/75">
            <li><Link href="/#viziune" className="hover:text-gold-light">Viziune</Link></li>
            <li><Link href="/#educatie-clasica" className="hover:text-gold-light">Educație Clasică</Link></li>
            <li><Link href="/#programe" className="hover:text-gold-light">Programe</Link></li>
            <li><Link href="/despre" className="hover:text-gold-light">Despre Noi</Link></li>
            <li><Link href="/marturisire" className="hover:text-gold-light">Mărturisirea de Credință</Link></li>
            <li><Link href="/istoric" className="hover:text-gold-light">Scurt Istoric</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-parchment font-display text-xs tracking-[0.28em] uppercase mb-4">
            Acțiuni
          </h4>
          <ul className="space-y-2 text-sm text-parchment/75">
            <li><a href="https://docs.google.com/forms/d/1of3U8goeGRYF_YbFOi021UvvoCN4zFMbmx2YDlFFQv8/edit" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">Înscrieri Grădiniță</a></li>
            <li><a href="https://docs.google.com/forms/d/1hzGUirg6ihRLtwu7fAWemHYFT7Bz3oPDpyd1tzr5Jnw/edit" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">Înscrieri Clasa Pregătitoare</a></li>
            <li><Link href="/#donatii" className="hover:text-gold-light">Donează</Link></li>
            <li><Link href="/#contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-parchment font-display text-xs tracking-[0.28em] uppercase mb-4">
            Contact & Locație
          </h4>
          <p className="text-sm text-parchment/75 leading-relaxed">
            Cluj-Napoca,<br />
            Cartier Andrei Mureșanu,<br />
            Str. Moise Nicoară
          </p>
          <p className="mt-3 text-sm text-parchment/75">
            <a href="mailto:contact@scoalaedictum.ro" className="hover:text-gold-light">
              contact@scoalaedictum.ro
            </a>
          </p>

          <h4 className="text-parchment font-display text-xs tracking-[0.28em] uppercase mt-6 mb-3">
            Resurse externe
          </h4>
          <ul className="space-y-1 text-sm text-parchment/75">
            <li><a href="https://classicalchristian.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">Association of Classical Christian Schools</a></li>
            <li><a href="https://classicalchristian.org/repairing-the-ruins/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">Conferința „Repairing the Ruins”</a></li>
            <li><a href="https://classicaldifference.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">Revista „Classical Difference”</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-parchment/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-parchment/55 font-display tracking-[0.18em] uppercase">
          <span>© {new Date().getFullYear()} Asociația Edictum Dei</span>
          <span>Soli Deo Gloria</span>
        </div>
      </div>
    </footer>
  );
}
