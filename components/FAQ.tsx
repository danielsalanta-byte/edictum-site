"use client";

import { useState } from "react";
import { Ornament } from "./Ornament";

const items = [
  {
    q: "Școala este acreditată sau autorizată?",
    a: "Școala funcționează legal în baza unei autorizări de funcționare și se află în proces activ de obținere a acreditării internaționale ACCS (Association of Classical Christian Schools).\n\nEste foarte important de clarificat că:\n• școala nu urmărește acreditarea statului român ca model educațional principal;\n• direcția noastră este construirea unei școli clasice creștine după standarde internaționale, nu adaptarea filosofiei școlii la sistemul educațional român de stat.",
  },
  {
    q: "Care este diferența dintre autorizare și acreditare?",
    a: "Acreditarea este un proces diferit și mult mai complex. Ea verifică:\n• filosofia educațională;\n• calitatea academică;\n• cultura școlii;\n• formarea profesorilor;\n• relația cu familiile;\n• consistența curriculumului;\n• dezvoltarea caracterului și a viziunii educaționale;\n• respectarea cerințelor organizației educaționale.\n\nÎn cazul nostru, procesul de acreditare este realizat prin ACCS (Association of Classical Christian Schools) — una dintre cele mai respectate organizații creștine de educație de tip clasic din lume. Am obținut o acreditare internațională provizorie.",
  },
  {
    q: "Ce înseamnă acreditare provizorie ACCS?",
    a: "Acreditarea provizorie înseamnă că:\n• școala a intrat oficial în procesul de acreditare;\n• a fost evaluată inițial;\n• există o recunoaștere a direcției și structurii educaționale;\n• școala este mentorată continuu și evaluată periodic în vederea acreditării complete.",
  },
  {
    q: "De ce nu urmăriți acreditarea statului român?",
    a: "Pentru că dorim să păstrăm:\n• identitatea creștină clară a școlii;\n• libertatea curriculară;\n• modelul clasic de educație;\n• integrarea credinței în toate disciplinele;\n• standardele educației clasice creștine internaționale.",
  },
  {
    q: "Unde va fi locația școlii?",
    a: "Școala este în Cluj-Napoca, în cartierul Andrei Mureșanu, pe strada Moise Nicoară. Pregătim un spațiu accesibil și frumos, croit pentru o învățare așezată.",
  },
  {
    q: "Când vor începe primele clase?",
    a: "Cu ajutorul Domnului, în toamna anului 2026.",
  },
  {
    q: "Ce clase veți avea?",
    a: "Cu ajutorul Domnului, grădiniță, clasa zero (pregătitoare) și clasa întâi. Suntem deschiși la a ne adapta la cererea părinților, deci nu ezitați să vă exprimați interesul chiar dacă copilul dumneavoastră se va afla într-o altă clasă în 2026.",
  },
  {
    q: "Care este acreditarea școlii?",
    a: "Am început demersurile pentru acreditarea oferită de Association of Classical Christian Schools (ACCS) din Statele Unite — recunoscută de U.S. Department of Education și de statele din SUA care permit sau cer acreditare de către o agenție privată.\n\nÎn România, căutăm recunoaștere legală de către Agenția Română de Asigurare a Calității în Învățământul Preuniversitar (ARACIP), prin înscrierea ca „unitate școlară care organizează pe teritoriul României activități de învățământ corespunzătoare unui sistem educațional din altă țară”. Astfel, fișele matricole și diplomele oferite de „Edictum Classical Christian School” vor fi recunoscute în România prin prisma acreditării de către o autoritate recunoscută de ARACIP.",
  },
  {
    q: "Ce curriculum va urma școala?",
    a: "Având în vedere filozofia și pedagogia clasică creștină, vom urma un curriculum similar cu o altă școală din SUA acreditată de ACCS — Logos School, Idaho. Vom folosi și elemente din curriculum-ul foarte detaliat oferit de editura Memoria Press.\n\nDin dorința de a da rădăcini copiilor în țara și cultura noastră, vom balansa această direcție cu studiul aprofundat al limbii, literaturii și istoriei României.",
  },
  {
    q: "În ce limbă se va studia?",
    a: "Studiul se va face bilingv. În limba engleză, cu excepția materiilor unde este practic și de dorit ca studiul să fie în română — limba română, literatura română, istoria României. Dorim ca elevii să fie cufundați în lumea și cultura anglofonă, fără a-i înstrăina de propriile rădăcini, ci dimpotrivă, cultivând o dragoste pentru propria națiune.",
  },
  {
    q: "Care este filozofia voastră asupra disciplinei și formării caracterului?",
    a: "Disciplina la Edictum este înțeleasă ca formare — nu doar corectare. Educația ordonată a inimii și a voinței este la fel de importantă ca instruirea minții. Profesorii lucrează în parteneriat cu părinții (in loco parentis), cultivând virtuți precum răbdarea, sinceritatea, supunerea cu bucurie, hărnicia și curajul.",
  },
  {
    q: "Cum colaborați cu părinții?",
    a: "Considerăm părinții primii și principalii educatori ai copiilor lor. Școala este o extensie a autorității părintești, nu un substitut. Întâlniri regulate, comunicare deschisă, evenimente comune și încurajarea părinților de a citi împreună cu noi marile cărți fac parte din ritmul școlii.",
  },
  {
    q: "Care este atitudinea școlii față de tehnologie?",
    a: "Folosim tehnologia cu atenție, ca pe un instrument, nu ca pe un mediu permanent. În clasele primare, accentul cade pe scris de mână, citit din cărți reale, conversație, memorare și prezența atentă a profesorului — instrumente clasice ale învățării.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-parchment-warm">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Întrebări frecvente</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Răspunsuri pentru părinți
          </h2>
          <Ornament />
        </div>

        <div className="space-y-3">
          {items.map((it, i) => (
            <FAQItem key={i} q={it.q} a={it.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gold/25 bg-parchment">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-parchment-deep/40 transition-colors"
        aria-expanded={open}
      >
        <span className="font-display text-base md:text-lg text-ink leading-snug">
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 border border-gold-deep flex items-center justify-center text-gold-deep transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 1 V11 M1 6 H11" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-ink/80 font-serif text-base md:text-lg leading-relaxed whitespace-pre-line border-t border-gold/15 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}
