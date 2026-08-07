/**
 * Rehlah — premium vector artwork for the mobile experience.
 *
 * DESIGN SYSTEM (do not break):
 *  - Every scene shares one 320x290 viewBox and one `Stage` backdrop.
 *  - Content is laid out in three strict horizontal bands so nothing can
 *    ever collide: top chip band (y 12-60), hero band (y 76-212),
 *    bottom chip band (y 228-276).
 *  - Colours come from design tokens only. Motion is CSS-driven, so
 *    prefers-reduced-motion is respected globally.
 */
import { type SVGProps, type ReactNode } from "react";
import { REHLAH_SYMBOL_URL } from "./brand";

const P = "var(--primary)";
const PD = "var(--primary-deep)";
const A = "var(--accent)";
const W = "var(--wellness)";
const S = "var(--surface)";
const B = "var(--border)";
const MU = "var(--muted-foreground)";

type ArtProps = SVGProps<SVGSVGElement>;

/* ── Brand mark (fallback vector; prefer <BrandSymbol/> from brand.tsx) ── */
export function RehlahMark({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Rehlah" {...rest}>
      <path d="M8 8h30a8 8 0 0 1 8 8v0a38 38 0 0 1-38 38h0V8Z" fill={A} opacity="0" />
      <path
        d="M60 6c0 30 24 54 54 54-30 0-54 24-54 54 0-30-24-54-54-54 30 0 54-24 54-54Z"
        fill={P}
        opacity="0.9"
      />
    </svg>
  );
}

/* ── Shared scene chrome ──────────────────────────────────── */
function Scene({ children, ...rest }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 290" fill="none" aria-hidden focusable="false" {...rest}>
      <defs>
        <linearGradient id="skStage" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor={P} stopOpacity="0.10" />
          <stop offset="55%" stopColor={W} stopOpacity="0.06" />
          <stop offset="100%" stopColor={A} stopOpacity="0.10" />
        </linearGradient>
        <radialGradient id="skGlow" cx="0.5" cy="0.46" r="0.58">
          <stop offset="0%" stopColor={S} stopOpacity="0.95" />
          <stop offset="100%" stopColor={S} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skCard" x1="0.1" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor={S} />
          <stop offset="100%" stopColor={S} stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="skBar" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={P} />
          <stop offset="100%" stopColor={W} />
        </linearGradient>
        <linearGradient id="skWarm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={A} />
          <stop offset="100%" stopColor={A} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="skDeep" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor={P} />
          <stop offset="100%" stopColor={PD} />
        </linearGradient>
        <pattern id="skDots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill={PD} opacity="0.10" />
        </pattern>
        <filter id="skShadow" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor={PD} floodOpacity="0.14" />
        </filter>
        <filter id="skSoft" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor={PD} floodOpacity="0.10" />
        </filter>
        <clipPath id="skClip">
          <rect x="8" y="6" width="304" height="278" rx="46" />
        </clipPath>
      </defs>

      {/* stage */}
      <g clipPath="url(#skClip)">
        <rect x="8" y="6" width="304" height="278" rx="46" fill="url(#skStage)" />
        <rect x="8" y="6" width="304" height="278" fill="url(#skDots)" />
        <ellipse cx="160" cy="144" rx="128" ry="112" fill="url(#skGlow)" />
        <circle cx="160" cy="144" r="104" stroke={P} strokeOpacity="0.12" strokeWidth="1" />
        <circle
          cx="160"
          cy="144"
          r="84"
          stroke={P}
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 9"
          strokeLinecap="round"
        />
        {children}
      </g>
      <rect x="8" y="6" width="304" height="278" rx="46" stroke={P} strokeOpacity="0.14" />
    </svg>
  );
}

/** Top chip band — y 28..72 (inside the stage corner radius) */
function ChipTop({ x = 30, children }: { x?: number; children: ReactNode }) {
  return (
    <g transform={`translate(${x} 28)`}>
      <g filter="url(#skSoft)" className="animate-float">{children}</g>
    </g>
  );
}

/** Bottom chip band — y 222..266 (inside the stage corner radius) */
function ChipBottom({ x = 30, children }: { x?: number; children: ReactNode }) {
  return (
    <g transform={`translate(${x} 222)`}>
      <g filter="url(#skSoft)" className="animate-float">{children}</g>
    </g>
  );
}

/** A 44px-tall pill card used in both chip bands. */
function PillCard({ w = 132, tint = P, glyph }: { w?: number; tint?: string; glyph: ReactNode }) {
  return (
    <>
      <rect width={w} height="44" rx="18" fill="url(#skCard)" stroke={B} />
      <circle cx="24" cy="22" r="13" fill={tint} opacity="0.16" />
      {glyph}
      <rect x="46" y="14" width={w - 68} height="6" rx="3" fill={PD} opacity="0.32" />
      <rect x="46" y="26" width={(w - 68) * 0.6} height="5" rx="2.5" fill={B} />
    </>
  );
}

/* 1 — Welcome to Rehlah (brand bloom) */
export function ArtWelcome(props: ArtProps) {
  return (
    <Scene {...props}>
      <ChipTop x={30}>
        <PillCard
          w={128}
          tint={W}
          glyph={<path d="M19 22l3.5 3.5L30 18" stroke={W} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
        />
      </ChipTop>

      {/* hero band: the official Rehlah symbol, held in a brand plate */}
      <g transform="translate(160 146)">
        <g className="animate-float">
        <g filter="url(#skShadow)">
          <circle r="66" fill={S} stroke={B} />
        </g>
        <circle r="54" stroke={P} strokeOpacity="0.16" fill="none" />
        <image href={REHLAH_SYMBOL_URL} x="-40" y="-40" width="80" height="80" preserveAspectRatio="xMidYMid meet" />
        <circle cx="47" cy="-47" r="6" fill={A} />
        <circle cx="-49" cy="45" r="4.5" fill={W} />
        </g>
      </g>

      <ChipBottom x={154}>
        <PillCard
          w={132}
          tint={A}
          glyph={<path d="M24 15v8l5 3" stroke={A} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
        />
      </ChipBottom>
    </Scene>
  );
}

/* 2 — Child progress tracking */
export function ArtProgress(props: ArtProps) {
  const R = 54;
  const C = 2 * Math.PI * R;
  return (
    <Scene {...props}>
      <ChipTop x={150}>
        <PillCard
          w={136}
          tint={A}
          glyph={<path d="M17 27c4-2 5-9 9-11s6 5 9 1" stroke={A} strokeWidth="2.6" strokeLinecap="round" fill="none" />}
        />
      </ChipTop>

      <g transform="translate(160 146)">
        <g filter="url(#skShadow)">
          <circle r={R + 18} fill={S} stroke={B} />
        </g>
        <circle r={R} stroke={B} strokeWidth="13" fill="none" />
        <circle
          r={R}
          stroke="url(#skBar)"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={C}
          strokeDashoffset={C * 0.28}
          transform="rotate(-90)"
        />
        <circle cx="0" cy={-R} r="5.5" fill={S} stroke={P} strokeWidth="2.5" />
        <text textAnchor="middle" y="2" fontSize="30" fontWeight="700" fill={PD} letterSpacing="-1">
          72%
        </text>
        <text textAnchor="middle" y="22" fontSize="9" fontWeight="600" fill={MU} letterSpacing="1.8">
          GOALS
        </text>
      </g>

      <ChipBottom x={30}>
        <g>
          <rect width="132" height="44" rx="18" fill="url(#skCard)" stroke={B} />
          {[16, 26, 14, 30, 20, 34, 24].map((h, i) => (
            <g key={i}>
              <rect x={16 + i * 15} y={8} width="7" height="28" rx="3.5" fill={B} opacity="0.6" />
              <rect x={16 + i * 15} y={36 - h} width="7" height={h} rx="3.5" fill={i === 5 ? A : P} opacity={i === 5 ? 1 : 0.5} />
            </g>
          ))}
        </g>
      </ChipBottom>
    </Scene>
  );
}

/* 3 — Appointment management */
export function ArtSchedule(props: ArtProps) {
  return (
    <Scene {...props}>
      <ChipTop x={30}>
        <PillCard
          w={128}
          tint={W}
          glyph={
            <path
              d="M24 15a6 6 0 0 1 6 6v4l1.6 2.4H16.4L18 25v-4a6 6 0 0 1 6-6Z"
              fill={W}
              opacity="0.85"
            />
          }
        />
      </ChipTop>

      {/* calendar card, centred in hero band */}
      <g className="animate-float" filter="url(#skShadow)">
        <rect x="82" y="76" width="156" height="136" rx="26" fill="url(#skCard)" stroke={B} />
        <path d="M82 102a26 26 0 0 1 26-26h104a26 26 0 0 1 26 26v2H82v-2Z" fill={P} opacity="0.12" />
        <rect x="104" y="88" width="30" height="5" rx="2.5" fill={PD} opacity="0.35" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={102 + i * 24} y={114} width="12" height="4" rx="2" fill={B} />
        ))}
        {Array.from({ length: 15 }).map((_, i) => {
          const col = i % 5;
          const row = Math.floor(i / 5);
          const on = i === 7;
          const dim = i === 3 || i === 11;
          return (
            <rect
              key={i}
              x={100 + col * 24}
              y={128 + row * 24}
              width="16"
              height="16"
              rx="6"
              fill={on ? P : dim ? A : B}
              opacity={on ? 1 : dim ? 0.6 : 0.6}
            />
          );
        })}
        <circle cx="108" cy="136" r="2.4" fill={S} />
      </g>

      <ChipBottom x={154}>
        <PillCard
          w={132}
          tint={P}
          glyph={<path d="M24 15v8l5 3" stroke={P} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
        />
      </ChipBottom>
    </Scene>
  );
}

/* 4 — Reports & assessments */
export function ArtDocuments(props: ArtProps) {
  return (
    <Scene {...props}>
      <ChipTop x={154}>
        <PillCard
          w={132}
          tint={A}
          glyph={<path d="M19 22l3.5 3.5L30 18" stroke={A} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
        />
      </ChipTop>

      {/* stacked report sheets, hero band */}
      <g transform="rotate(-6 160 144)" opacity="0.5" filter="url(#skSoft)">
        <rect x="96" y="80" width="128" height="128" rx="24" fill="url(#skCard)" stroke={B} />
      </g>
      <g transform="rotate(-2.5 160 144)" opacity="0.8" filter="url(#skSoft)">
        <rect x="98" y="78" width="128" height="130" rx="24" fill="url(#skCard)" stroke={B} />
      </g>
      <g className="animate-float" filter="url(#skShadow)">
        <rect x="94" y="76" width="132" height="136" rx="24" fill="url(#skCard)" stroke={B} />
        <circle cx="116" cy="100" r="10" fill={P} opacity="0.14" />
        <path d="M112 100l3 3 5.5-6" stroke={P} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="132" y="94" width="52" height="6" rx="3" fill={PD} opacity="0.35" />
        <rect x="132" y="105" width="30" height="5" rx="2.5" fill={B} />
        <rect x="110" y="126" width="100" height="46" rx="14" fill={P} opacity="0.07" />
        <path
          d="M120 160c9-3 12-18 20-20s11 11 18 3 11-14 16-15"
          stroke="url(#skBar)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="110" y="184" width="60" height="6" rx="3" fill={B} />
        <rect x="178" y="182" width="32" height="10" rx="5" fill={A} opacity="0.8" />
      </g>

      <ChipBottom x={30}>
        <PillCard
          w={132}
          tint={W}
          glyph={<path d="M24 14v12M18 20l6 6 6-6" stroke={W} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
        />
      </ChipBottom>
    </Scene>
  );
}

/* 5 — Get started (guardian & child) */
export function ArtJourney(props: ArtProps) {
  return (
    <Scene {...props}>
      <ChipTop x={30}>
        <PillCard
          w={130}
          tint={P}
          glyph={<path d="M18 22h12M24 16v12" stroke={P} strokeWidth="2.6" strokeLinecap="round" />}
        />
      </ChipTop>

      <g transform="translate(0 -6)">
        {/* ground */}
        <ellipse cx="160" cy="208" rx="96" ry="13" fill={P} opacity="0.10" />
        {/* guardian */}
        <g filter="url(#skSoft)">
          <path d="M108 204c0-20 12-34 28-34s28 14 28 34v4h-56v-4Z" fill="url(#skDeep)" />
          <circle cx="136" cy="140" r="22" fill="url(#skDeep)" />
          <path d="M136 118a22 22 0 0 1 21 16c-14 5-28 5-42 0a22 22 0 0 1 21-16Z" fill={S} opacity="0.14" />
          <path d="M162 186c8-4 14-11 16-19" stroke={S} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
        </g>
        {/* child */}
        <g filter="url(#skSoft)">
          <path d="M174 208c0-14 8-24 19-24s19 10 19 24h-38Z" fill="url(#skWarm)" />
          <circle cx="193" cy="166" r="15" fill="url(#skWarm)" />
          <path d="M180 194c-5-3-8-8-9-14" stroke={A} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>
      </g>

      <ChipBottom x={154}>
        <PillCard
          w={132}
          tint={W}
          glyph={<path d="M19 22l3.5 3.5L30 18" stroke={W} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />}
        />
      </ChipBottom>
    </Scene>
  );
}

/* Auth hero — calm clinical vitals band */
export function ArtAuth(props: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" fill="none" aria-hidden focusable="false" {...props}>
      <defs>
        <linearGradient id="authLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={P} stopOpacity="0" />
          <stop offset="24%" stopColor={P} stopOpacity="0.75" />
          <stop offset="76%" stopColor={W} stopOpacity="0.75" />
          <stop offset="100%" stopColor={W} stopOpacity="0" />
        </linearGradient>
        <radialGradient id="authG" cx="0.5" cy="0.7" r="0.7">
          <stop offset="0%" stopColor={P} stopOpacity="0.18" />
          <stop offset="100%" stopColor={W} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="86" rx="150" ry="58" fill="url(#authG)" />
      <path
        d="M6 76h58l12-24 17 50 16-36 13 20h70l11-22 15 34 12-22h64"
        stroke="url(#authLine)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="160" cy="76" r="4.5" fill={A} />
    </svg>
  );
}

/* 6 — Care team circle (onboarding step 1: welcome) */
export function ArtCare(props: ArtProps) {
  const people = [
    { a: -90, tint: P, glyph: "M0-4a5 5 0 1 1 0 10" },
    { a: -18, tint: A, glyph: "" },
    { a: 54, tint: W, glyph: "" },
    { a: 126, tint: PD, glyph: "" },
    { a: 198, tint: A, glyph: "" },
  ];
  return (
    <Scene {...props}>
      <ChipTop x={26}>
        <PillCard
          w={126}
          tint={P}
          glyph={<path d="M18 26c0-4 3-7 6-7s6 3 6 7M24 12a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" stroke={P} strokeWidth="2.2" fill="none" strokeLinecap="round" />}
        />
      </ChipTop>

      <g transform="translate(160 144)">
        {/* orbit */}
        <circle r="72" stroke={P} strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="3 8" fill="none" />
        {/* centre child card */}
        <g filter="url(#skShadow)">
          <circle r="46" fill="url(#skDeep)" />
        </g>
        <circle cx="0" cy="-10" r="14" fill={S} opacity="0.92" />
        <path d="M-19 22c0-12 8-20 19-20s19 8 19 20Z" fill={S} opacity="0.92" />
        {/* orbiting specialists */}
        {people.map((pn, i) => {
          const rad = (pn.a * Math.PI) / 180;
          const x = Math.cos(rad) * 72;
          const y = Math.sin(rad) * 72;
          return (
            <g key={i} transform={`translate(${x} ${y})`} filter="url(#skSoft)">
              <circle r="20" fill={S} stroke={B} />
              <circle cy="-4" r="6" fill={pn.tint} opacity="0.85" />
              <path d="M-9 11c0-6 4-10 9-10s9 4 9 10Z" fill={pn.tint} opacity="0.5" />
            </g>
          );
        })}
      </g>

      <ChipBottom x={158}>
        <PillCard
          w={128}
          tint={W}
          glyph={<path d="M17 21l5 5 9-10" stroke={W} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
        />
      </ChipBottom>
    </Scene>
  );
}

/* 7 — OTP / secure verification hero */
export function ArtVerify(props: ArtProps) {
  return (
    <svg viewBox="0 0 320 172" fill="none" aria-hidden focusable="false" {...props}>
      <defs>
        <radialGradient id="vfG" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor={P} stopOpacity="0.18" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vfDeep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={P} />
          <stop offset="100%" stopColor={PD} />
        </linearGradient>
        <filter id="vfShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor={PD} floodOpacity="0.18" />
        </filter>
      </defs>
      <ellipse cx="160" cy="92" rx="140" ry="72" fill="url(#vfG)" />
      <circle cx="160" cy="86" r="66" stroke={P} strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 9" fill="none" />

      {/* phone */}
      <g className="animate-float" filter="url(#vfShadow)">
        <rect x="126" y="26" width="68" height="122" rx="18" fill={S} stroke={B} />
        <rect x="150" y="34" width="20" height="4" rx="2" fill={B} />
        <rect x="136" y="52" width="48" height="26" rx="9" fill={P} opacity="0.10" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={139 + i * 11} y={58} width="8" height="14" rx="3" fill={i < 2 ? P : B} opacity={i < 2 ? 1 : 0.7} />
        ))}
        <rect x="136" y="88" width="48" height="5" rx="2.5" fill={B} />
        <rect x="136" y="99" width="32" height="5" rx="2.5" fill={B} />
        <rect x="136" y="118" width="48" height="16" rx="8" fill="url(#vfDeep)" />
      </g>

      {/* shield badge */}
      <g transform="translate(214 54)" filter="url(#vfShadow)">
        <path d="M0-24 22-14v16C22 14 12 22 0 26-12 22-22 14-22 2v-16L0-24Z" fill={S} stroke={B} />
        <path d="M-9 1l6 6 12-13" stroke={P} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* sms bubble */}
      <g transform="translate(70 96)" filter="url(#vfShadow)">
        <rect x="-44" y="-20" width="88" height="40" rx="16" fill={S} stroke={B} />
        <circle cx="-24" cy="0" r="10" fill={A} opacity="0.24" />
        <path d="M-30 -3l6 5 6-5" stroke={A} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="-8" y="-7" width="42" height="5" rx="2.5" fill={PD} opacity="0.3" />
        <rect x="-8" y="3" width="26" height="5" rx="2.5" fill={B} />
      </g>
    </svg>
  );
}

/* 8 — Celebration / success hero */
export function ArtCelebrate(props: ArtProps) {
  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden focusable="false" {...props}>
      <defs>
        <radialGradient id="clG" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor={P} stopOpacity="0.20" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="clDeep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={P} />
          <stop offset="100%" stopColor={PD} />
        </linearGradient>
        <filter id="clShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor={PD} floodOpacity="0.22" />
        </filter>
      </defs>
      <ellipse cx="160" cy="104" rx="150" ry="86" fill="url(#clG)" />
      <circle cx="160" cy="100" r="82" stroke={P} strokeOpacity="0.14" fill="none" />
      <circle cx="160" cy="100" r="64" stroke={P} strokeOpacity="0.2" strokeDasharray="2 9" fill="none" />

      {[
        [56, 40, A], [252, 44, W], [82, 156, W], [246, 150, A], [160, 16, P], [40, 104, P], [280, 100, PD],
      ].map(([x, y, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r={i % 2 ? 4 : 6} fill={c as string} opacity="0.55" className="animate-float" />
      ))}
      {[
        [96, 62, -22], [224, 68, 18], [104, 138, 26], [214, 132, -14],
      ].map(([x, y, r], i) => (
        <rect key={i} x={x as number} y={y as number} width="14" height="5" rx="2.5" fill={i % 2 ? A : W} opacity="0.6" transform={`rotate(${r} ${x} ${y})`} />
      ))}

      <g transform="translate(160 100)" filter="url(#clShadow)">
        <circle r="46" fill="url(#clDeep)" />
        <path d="M-18 2l12 12 24-26" stroke={S} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="tick-in" />
      </g>
    </svg>
  );
}

/* 9 — Booking confirmed hero (calendar + tick) */
export function ArtBooked(props: ArtProps) {
  return (
    <svg viewBox="0 0 320 190" fill="none" aria-hidden focusable="false" {...props}>
      <defs>
        <radialGradient id="bkG" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor={W} stopOpacity="0.18" />
          <stop offset="100%" stopColor={W} stopOpacity="0" />
        </radialGradient>
        <filter id="bkShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor={PD} floodOpacity="0.18" />
        </filter>
      </defs>
      <ellipse cx="160" cy="100" rx="146" ry="80" fill="url(#bkG)" />
      <g className="animate-float" filter="url(#bkShadow)">
        <rect x="104" y="30" width="112" height="120" rx="26" fill={S} stroke={B} />
        <path d="M104 56a26 26 0 0 1 26-26h60a26 26 0 0 1 26 26v4H104v-4Z" fill={P} opacity="0.14" />
        <rect x="126" y="42" width="24" height="5" rx="2.5" fill={PD} opacity="0.34" />
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const on = i === 5;
          return (
            <rect key={i} x={122 + col * 20} y={74 + row * 20} width="13" height="13" rx="5" fill={on ? P : B} opacity={on ? 1 : 0.55} />
          );
        })}
      </g>
      <g transform="translate(214 132)" filter="url(#bkShadow)">
        <circle r="28" fill={P} />
        <path d="M-11 1l7 7 14-16" stroke={S} strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" fill="none" className="tick-in" />
      </g>
      <g transform="translate(74 74)" filter="url(#bkShadow)">
        <rect x="-38" y="-18" width="76" height="36" rx="15" fill={S} stroke={B} />
        <circle cx="-20" cy="0" r="9" fill={A} opacity="0.3" />
        <path d="M-20 -5v5l3 2" stroke={A} strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <rect x="-6" y="-6" width="36" height="5" rx="2.5" fill={PD} opacity="0.3" />
        <rect x="-6" y="3" width="22" height="4" rx="2" fill={B} />
      </g>
    </svg>
  );
}
