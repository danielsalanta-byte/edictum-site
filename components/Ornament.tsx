export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`divider-ornament ${className}`}>
      <svg width="36" height="14" viewBox="0 0 36 14" aria-hidden="true">
        <path
          d="M2 7 H12 M24 7 H34 M14 7 L18 3 L22 7 L18 11 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function ColumnIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect x="6" y="4" width="48" height="6" fill="currentColor" opacity="0.85" />
      <rect x="10" y="10" width="40" height="4" fill="currentColor" opacity="0.6" />
      <rect x="14" y="14" width="32" height="74" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* fluting */}
      <line x1="20" y1="14" x2="20" y2="88" stroke="currentColor" strokeWidth="0.6" />
      <line x1="26" y1="14" x2="26" y2="88" stroke="currentColor" strokeWidth="0.6" />
      <line x1="32" y1="14" x2="32" y2="88" stroke="currentColor" strokeWidth="0.6" />
      <line x1="38" y1="14" x2="38" y2="88" stroke="currentColor" strokeWidth="0.6" />
      <rect x="10" y="88" width="40" height="4" fill="currentColor" opacity="0.6" />
      <rect x="6" y="92" width="48" height="6" fill="currentColor" opacity="0.85" />
    </svg>
  );
}
