"use client";

import { useState } from "react";
import Image from "next/image";
import { Ornament } from "./Ornament";
import { IMG } from "@/lib/images";

const presets = [50, 100, 250, 500];

export default function Donations() {
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState<string>("");
  const [recurring, setRecurring] = useState<boolean>(false);
  const [method, setMethod] = useState<"card" | "applepay" | "googlepay" | "transfer">("card");
  const [done, setDone] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const finalAmount = custom ? Number(custom) : amount;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // PLACEHOLDER: Integrare reală cu Stripe / Netopia / EuPlătesc / PlatiOnline
    // ============================================================
    // 1. Trimite { amount: finalAmount, currency: 'RON', method, recurring, email }
    //    către endpoint-ul backend care creează un PaymentIntent / sesiune de plată.
    // 2. Pentru Apple Pay / Google Pay, folosește Stripe PaymentRequest API
    //    sau echivalentul oferit de procesatorul ales.
    // 3. La succes — confirmă plata și trimite email de mulțumire automat.
    // ============================================================
    setDone(true);
  }

  return (
    <section id="donatii" className="py-14 lg:py-32 bg-ink text-parchment relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={IMG.fatherChild}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div>
          <p className="eyebrow text-gold-light mb-4">Susține Edictum</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-6 text-parchment">
            Susține Școala Edictum
          </h2>
          <Ornament className="mb-6 justify-start [&>svg]:opacity-90" />
          <p className="text-lg font-serif text-parchment/85 leading-relaxed mb-6">
            Prin donația ta contribui la formarea unei generații de copii
            educați în adevăr, frumusețe, caracter și credință. Susține
            dezvoltarea Școlii Clasice Creștine Edictum și ajută-ne să
            construim o instituție educațională solidă pentru anii care vin.
          </p>

          <div className="border border-gold/40 p-6 bg-ink-soft/40 backdrop-blur-sm">
            <h3 className="font-display text-sm tracking-[0.24em] uppercase text-gold-light mb-4">
              Donație prin transfer bancar
            </h3>
            <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 font-serif text-parchment/85">
              <dt className="text-parchment/60">Beneficiar</dt><dd>Asociația Edictum Dei</dd>
              <dt className="text-parchment/60">IBAN</dt><dd className="font-mono text-sm">RO86BRDE130SV00730631300</dd>
              <dt className="text-parchment/60">Monedă</dt><dd>RON</dd>
              <dt className="text-parchment/60">Bancă</dt><dd>B.R.D. – G.S.G.</dd>
              <dt className="text-parchment/60">SWIFT</dt><dd className="font-mono text-sm">BRDEROBU</dd>
            </dl>
          </div>
        </div>

        {done ? (
          <div className="bg-parchment text-ink p-6 sm:p-10 lg:p-12 border border-gold-deep flex flex-col justify-center text-center">
            <div className="text-gold-deep mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 24 L22 32 L36 16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-display text-2xl mb-3">Mulțumim din inimă!</h3>
            <p className="font-serif text-ink/80 mb-2">
              Donația ta de <strong>{finalAmount} RON</strong>
              {recurring && " (lunară)"} a fost înregistrată.
            </p>
            <p className="font-serif text-ink/70 text-sm">
              Un email de confirmare va fi trimis la <strong>{email || "adresa ta"}</strong>.
              <br />Soli Deo Gloria.
            </p>
            <button
              onClick={() => { setDone(false); setCustom(""); setEmail(""); }}
              className="btn btn-ghost mt-6 self-center"
            >
              Donează din nou
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="bg-parchment text-ink p-5 sm:p-8 lg:p-10 border border-gold-deep shadow-column"
          >
            <h3 className="font-display text-2xl mb-6">Donație rapidă</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {presets.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => { setAmount(p); setCustom(""); }}
                  className={`py-3 font-display text-sm tracking-wider border transition ${
                    !custom && amount === p
                      ? "bg-ink text-parchment border-ink"
                      : "border-ink/30 hover:border-ink"
                  }`}
                >
                  {p} RON
                </button>
              ))}
            </div>

            <input
              type="number"
              min="1"
              placeholder="Sumă personalizată (RON)"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="w-full px-4 py-3 border border-ink/25 bg-transparent font-serif mb-5 focus:outline-none focus:border-gold-deep"
            />

            <label className="flex items-center gap-3 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
                className="w-4 h-4 accent-gold-deep"
              />
              <span className="font-serif text-ink/85">Donație recurentă lunară</span>
            </label>

            <div className="mb-5">
              <label className="block eyebrow mb-2 !text-xs">Email pentru confirmare</label>
              <input
                type="email"
                required
                placeholder="email@exemplu.ro"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-ink/25 bg-transparent font-serif focus:outline-none focus:border-gold-deep"
              />
            </div>

            <div className="mb-6">
              <p className="eyebrow mb-3 !text-xs">Metodă de plată</p>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { id: "card", label: "Card bancar" },
                  { id: "applepay", label: "Apple Pay" },
                  { id: "googlepay", label: "Google Pay" },
                  { id: "transfer", label: "Transfer bancar" },
                ] as const).map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`py-3 px-4 font-display text-xs tracking-[0.18em] uppercase border transition ${
                      method === m.id
                        ? "bg-ink text-parchment border-ink"
                        : "border-ink/25 hover:border-ink"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-gold w-full" disabled={!finalAmount}>
              Donează {finalAmount > 0 ? `${finalAmount} RON` : ""}
              {recurring && finalAmount > 0 ? " · lunar" : ""}
            </button>

            <p className="mt-4 text-xs text-ink/55 font-serif italic text-center">
              Plățile sunt procesate securizat. Integrare cu Stripe / Netopia /
              EuPlătesc disponibilă la activarea cheilor API.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
