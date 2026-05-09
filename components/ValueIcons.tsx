import type { ValueIcon } from "@/lib/values";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const map: Record<ValueIcon, React.ReactNode> = {
  // Open scroll / book — Truth
  scroll: (
    <>
      <path d="M8 8 H32 a4 4 0 0 1 4 4 V36 a4 4 0 0 1 -4 4 H8 V8 Z" {...stroke} />
      <path d="M36 12 a4 4 0 0 1 4 4 V40 a4 4 0 0 0 -4 -4" {...stroke} />
      <line x1="14" y1="16" x2="28" y2="16" {...stroke} />
      <line x1="14" y1="22" x2="28" y2="22" {...stroke} />
      <line x1="14" y1="28" x2="24" y2="28" {...stroke} />
    </>
  ),
  // Two hands clasped — Respect
  hands: (
    <>
      <path d="M12 18 V30 a6 6 0 0 0 6 6 H30 a6 6 0 0 0 6 -6 V18" {...stroke} />
      <path d="M16 18 V12 a3 3 0 0 1 6 0 V20" {...stroke} />
      <path d="M22 20 V10 a3 3 0 0 1 6 0 V18" {...stroke} />
      <path d="M28 18 V12 a3 3 0 0 1 6 0 V22" {...stroke} />
    </>
  ),
  // Wheat sheaf — Diligence
  wheat: (
    <>
      <line x1="24" y1="8" x2="24" y2="40" {...stroke} />
      <path d="M24 14 q-6 0 -8 6 q6 -1 8 -3" {...stroke} />
      <path d="M24 14 q6 0 8 6 q-6 -1 -8 -3" {...stroke} />
      <path d="M24 22 q-6 0 -8 6 q6 -1 8 -3" {...stroke} />
      <path d="M24 22 q6 0 8 6 q-6 -1 -8 -3" {...stroke} />
      <path d="M24 30 q-6 0 -8 6 q6 -1 8 -3" {...stroke} />
      <path d="M24 30 q6 0 8 6 q-6 -1 -8 -3" {...stroke} />
    </>
  ),
  // Anchor — Self-control
  anchor: (
    <>
      <circle cx="24" cy="11" r="3" {...stroke} />
      <line x1="24" y1="14" x2="24" y2="38" {...stroke} />
      <line x1="18" y1="20" x2="30" y2="20" {...stroke} />
      <path d="M12 30 a12 12 0 0 0 24 0" {...stroke} />
      <line x1="11" y1="29" x2="14" y2="32" {...stroke} />
      <line x1="37" y1="29" x2="34" y2="32" {...stroke} />
    </>
  ),
  // Hourglass — Patience
  hourglass: (
    <>
      <line x1="12" y1="8" x2="36" y2="8" {...stroke} />
      <line x1="12" y1="40" x2="36" y2="40" {...stroke} />
      <path d="M14 8 V14 L24 24 L14 34 V40" {...stroke} />
      <path d="M34 8 V14 L24 24 L34 34 V40" {...stroke} />
    </>
  ),
  // Chalice — Thanksgiving
  chalice: (
    <>
      <path d="M14 12 H34 V18 a10 10 0 0 1 -10 10 a10 10 0 0 1 -10 -10 V12 Z" {...stroke} />
      <line x1="24" y1="28" x2="24" y2="38" {...stroke} />
      <line x1="16" y1="40" x2="32" y2="40" {...stroke} />
    </>
  ),
  // Dove — Kindness
  dove: (
    <>
      <path d="M10 28 q4 -10 14 -10 q8 0 12 4 l-4 6 q-2 4 -8 4 H14 a4 4 0 0 1 -4 -4 Z" {...stroke} />
      <circle cx="32" cy="22" r="0.8" fill="currentColor" stroke="none" />
      <path d="M36 22 H42" {...stroke} />
      <path d="M22 18 q-2 -4 0 -8" {...stroke} />
      <path d="M16 28 q-4 4 -2 10" {...stroke} />
    </>
  ),
  // Sunburst — Joy
  sun: (
    <>
      <circle cx="24" cy="24" r="6" {...stroke} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 8;
        const x1 = 24 + Math.cos(a) * 11;
        const y1 = 24 + Math.sin(a) * 11;
        const x2 = 24 + Math.cos(a) * 17;
        const y2 = 24 + Math.sin(a) * 17;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} {...stroke} />;
      })}
    </>
  ),
  // Shield with cross — Courage
  shield: (
    <>
      <path d="M12 10 L24 7 L36 10 V22 Q36 32, 24 40 Q12 32, 12 22 Z" {...stroke} />
      <line x1="24" y1="14" x2="24" y2="32" {...stroke} />
      <line x1="18" y1="22" x2="30" y2="22" {...stroke} />
    </>
  ),
  // Crown / radiant star — Glory
  crown: (
    <>
      <path d="M10 32 L14 16 L20 24 L24 12 L28 24 L34 16 L38 32 Z" {...stroke} />
      <line x1="10" y1="36" x2="38" y2="36" {...stroke} />
      <circle cx="14" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="24" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="34" cy="16" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function ValueIconSvg({
  name,
  size = 48,
  className = "",
}: {
  name: ValueIcon;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      className={className}
    >
      {map[name]}
    </svg>
  );
}
