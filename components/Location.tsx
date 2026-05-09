"use client";

import { useRef, useState, useEffect } from "react";
import { Ornament } from "./Ornament";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = volume;
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>) {
    const v = videoRef.current;
    if (!v) return;
    const val = parseFloat(e.target.value);
    v.volume = val;
    setVolume(val);
    if (val === 0) {
      v.muted = true;
      setMuted(true);
    } else if (v.muted) {
      v.muted = false;
      setMuted(false);
    }
  }

  return (
    <div className="relative aspect-[16/10] border border-gold/30 shadow-column overflow-hidden group">
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/shl-okr-platform.firebasestorage.app/edictum/film-prezentare.mp4"
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play overlay when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          aria-label="Redă filmul"
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-ink-deep/40 transition-opacity hover:bg-ink-deep/50"
        >
          <span className="w-20 h-20 rounded-full bg-ink-deep/70 border-2 border-gold/70 flex items-center justify-center backdrop-blur-sm">
            {/* Play triangle */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold fill-current ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* Controls bar — always visible on hover when playing, always visible when paused */}
      <div
        className={`absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-gradient-to-t from-ink-deep/80 to-transparent transition-opacity ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pauză" : "Redă"}
          className="text-parchment hover:text-gold transition-colors flex-shrink-0"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mute */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Activează sunetul" : "Dezactivează sunetul"}
          className="text-parchment hover:text-gold transition-colors flex-shrink-0"
        >
          {muted || volume === 0 ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>

        {/* Volume slider */}
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={muted ? 0 : volume}
          onChange={handleVolume}
          aria-label="Volum"
          className="w-24 accent-gold h-1 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function Location() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Strada+Moise+Nicoara+Cluj-Napoca";
  const embed =
    "https://www.google.com/maps?q=Strada%20Moise%20Nicoara%20Cluj-Napoca&output=embed";

  return (
    <section id="locatie" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow mb-4">Locație</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Cluj-Napoca · Andrei Mureșanu
          </h2>
          <Ornament className="mb-6 justify-start [&>svg]:opacity-80" />
          <p className="text-lg font-serif text-ink/80 leading-relaxed mb-6">
            Școala este localizată în Cluj-Napoca, în cartierul Andrei
            Mureșanu, pe strada Moise Nicoară — un cartier liniștit, cu istorie
            și cu acces facil din toate zonele orașului.
          </p>
          <p className="text-base font-serif text-ink/70 leading-relaxed mb-8">
            Pregătim un spațiu accesibil, frumos, croit pentru o învățare așezată:
            săli luminoase, bibliotecă, curte și locuri pentru lectură și
            discuții socratice.
          </p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Vezi locația pe hartă
          </a>
        </div>

        <div className="grid gap-4">
          <VideoPlayer />
          <div className="relative aspect-[16/10] border border-gold/30 shadow-column overflow-hidden">
            <iframe
              src={embed}
              title="Locația Școlii Edictum"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
