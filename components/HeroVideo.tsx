import VideoPlayer from "./VideoPlayer";

const VIDEO_URL =
  "https://storage.googleapis.com/shl-okr-platform.firebasestorage.app/edictum/film-prezentare.mp4";

export default function HeroVideo() {
  return (
    <div className="relative aspect-video rounded-sm overflow-hidden shadow-column border border-gold/30">
      <VideoPlayer src={VIDEO_URL} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
