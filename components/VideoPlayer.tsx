"use client";

import { useRef, useState, useEffect, useCallback } from "react";

function fmt(s: number) {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = volume;

    const onMeta = () => setDuration(v.duration);
    const onTime = () => {
      setCurrent(v.currentTime);
      setProgress(v.duration ? v.currentTime / v.duration : 0);
      if (v.buffered.length > 0)
        setBuffered(v.buffered.end(v.buffered.length - 1) / v.duration);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 3000);
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
    resetHideTimer();
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
    if (val === 0) { v.muted = true; setMuted(true); }
    else if (v.muted) { v.muted = false; setMuted(false); }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar || !v.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    resetHideTimer();
  }

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      onMouseMove={resetHideTimer}
      onMouseLeave={() => { if (playing) setShowControls(false); }}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onClick={togglePlay}
      />

      {/* Big play overlay when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          aria-label="Redă filmul"
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-ink-deep/40 hover:bg-ink-deep/50 transition-colors"
        >
          <span className="w-16 h-16 rounded-full bg-ink-deep/70 border-2 border-gold/70 flex items-center justify-center backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold fill-current ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* Controls bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-3 pt-8 pb-2.5 bg-gradient-to-t from-ink-deep/90 via-ink-deep/50 to-transparent transition-opacity duration-300 ${
          showControls || !playing ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress bar */}
        <div
          ref={progressRef}
          className="relative h-1 mb-2.5 cursor-pointer group/bar"
          onClick={seek}
        >
          <div className="absolute inset-0 rounded-full bg-parchment/20" />
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-parchment/30 transition-all"
            style={{ width: `${buffered * 100}%` }}
          />
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-gold transition-all"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow opacity-0 group-hover/bar:opacity-100 transition-opacity"
            style={{ left: `calc(${progress * 100}% - 6px)` }}
          />
        </div>

        {/* Button row */}
        <div className="flex items-center gap-2.5">
          <button onClick={togglePlay} aria-label={playing ? "Pauză" : "Redă"}
            className="text-parchment hover:text-gold transition-colors flex-shrink-0">
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

          <span className="text-parchment/70 text-xs font-mono tabular-nums select-none">
            {fmt(current)} / {fmt(duration)}
          </span>

          <div className="flex-1" />

          <button onClick={toggleMute} aria-label={muted ? "Activează sunetul" : "Dezactivează sunetul"}
            className="text-parchment hover:text-gold transition-colors flex-shrink-0">
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

          <input
            type="range" min={0} max={1} step={0.05}
            value={muted ? 0 : volume}
            onChange={handleVolume}
            aria-label="Volum"
            className="w-18 accent-gold h-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
