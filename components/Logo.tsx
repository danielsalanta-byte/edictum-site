import Image from "next/image";

type LogoVariant = "color" | "light" | "mono";

/**
 * Edictum official horizontal lockup (shield + "EDICTUM CLASSICAL CHRISTIAN SCHOOL").
 * Uses the original brand SVGs verbatim — geometry is never modified.
 *
 *   • color  → full-color: burgundy + ivory shield, burgundy text   (light backgrounds)
 *   • light  → full-color shield, ivory text                         (dark backgrounds)
 *   • mono   → single-color burgundy outline                         (mono / fallback)
 *
 * The horizontal lockup already contains the wordmark — never pair it with extra text.
 */
type LogoProps = {
  variant?: LogoVariant;
  height?: number;
  className?: string;
};

const sources: Record<LogoVariant, string> = {
  color: "/logo-edictum-horizontal.svg",
  light: "/logo-edictum-horizontal-light.svg",
  mono: "/logo-edictum-horizontal-mono.svg",
};

export default function Logo({
  variant = "color",
  height = 56,
  className = "",
}: LogoProps) {
  // Source aspect ratio: 1292 / 630 ≈ 2.05
  const width = Math.round(height * (1292 / 630));
  return (
    <Image
      src={sources[variant]}
      alt="Școala Clasică Creștină Edictum"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}

/**
 * Bare circular seal — used for square contexts (watermark, favicon-style badges).
 * Rendered from the original PNG asset (untouched geometry).
 *
 *   • original → burgundy bg + ivory mark, exact official asset
 *   • ivory    → ivory shape on transparent (CSS mask, used on dark surfaces)
 *   • burgundy → burgundy shape on transparent (CSS mask, used on light surfaces)
 *   • black    → black shape on transparent (CSS mask)
 */
type SealVariant = "original" | "ivory" | "burgundy" | "black";

export function Seal({
  variant = "original",
  size = 64,
  className = "",
}: {
  variant?: SealVariant;
  size?: number;
  className?: string;
}) {
  if (variant === "original") {
    return (
      <Image
        src="/logo-edictum.png"
        alt="Edictum Classical Christian School"
        width={size}
        height={size}
        priority
        className={className}
      />
    );
  }

  const bg =
    variant === "ivory" ? "#F4EFDC" : variant === "black" ? "#000000" : "#7E1A1A";

  return (
    <span
      role="img"
      aria-label="Edictum Classical Christian School"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: bg,
        WebkitMaskImage: "url(/logo-edictum-mask.png)",
        maskImage: "url(/logo-edictum-mask.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
