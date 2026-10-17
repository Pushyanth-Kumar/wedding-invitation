
import { site } from "../data/site.config";
import { FallingPetals } from "./Florals";

function BotanicalCanopy() {
  const leaves = Array.from({ length: 20 }, (_, i) => ({
    x: 20 + i * 82,
    y: 24 + (i % 4) * 18,
  }));

  const flowers = Array.from({ length: 12 }, (_, i) => ({
    x: 20 + (i % 6) * 48,
    y: 600 + Math.floor(i / 6) * 125,
  }));

  return (
    <svg
      className="botanical-canopy pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#55794d" />
          <stop offset="100%" stopColor="#0d3024" />
        </linearGradient>

        <linearGradient id="champagneGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff0b5" />
          <stop offset="50%" stopColor="#d6ad51" />
          <stop offset="100%" stopColor="#9b7028" />
        </linearGradient>

        <g id="leafShape">
          <path
            d="M0 0 C-25 -8 -34 -30 -27 -47 C-7 -40 9 -22 0 0Z"
            fill="url(#leafGreen)"
          />
          <path
            d="M0 0 L-25 -42"
            stroke="#d8bd75"
            strokeWidth="1"
          />
        </g>

        <g id="whiteFlower">
          <g fill="#fffaf0" stroke="#d8bd75" strokeWidth="1">
            <ellipse cy="-10" rx="7" ry="12" />
            <ellipse cy="-10" rx="7" ry="12" transform="rotate(60)" />
            <ellipse cy="-10" rx="7" ry="12" transform="rotate(120)" />
            <ellipse cy="-10" rx="7" ry="12" transform="rotate(180)" />
            <ellipse cy="-10" rx="7" ry="12" transform="rotate(240)" />
            <ellipse cy="-10" rx="7" ry="12" transform="rotate(300)" />
          </g>
          <circle r="4.5" fill="#d5a53b" />
        </g>

        <g id="goldBell">
          <path
            d="M-7 0 Q-7 -5 -4 -8 L-4 -18 Q0 -24 4 -18 L4 -8 Q7 -5 7 0Z"
            fill="url(#champagneGold)"
            stroke="#f7e4a5"
            strokeWidth="1.4"
          />
          <path
            d="M-10 0 H10 M-3 -21 Q0 -26 3 -21"
            stroke="#f7e4a5"
            strokeWidth="1.5"
          />
          <circle cy="3" r="2" fill="#805b1b" />
        </g>
      </defs>

      {/* Champagne frame */}
      <rect
        x="2"
        y="2"
        width="1596"
        height="896"
        fill="none"
        stroke="url(#champagneGold)"
        strokeWidth="3"
      />
      <rect
        x="17"
        y="17"
        width="1566"
        height="866"
        rx="3"
        fill="none"
        stroke="#c9a653"
        strokeWidth="1.5"
      />

      {/* Dark green upper corners */}
      <path
        d="M0 0 H350 Q300 66 224 50 Q142 33 95 0Z"
        fill="#103629"
      />
      <path
        d="M1600 0 H1250 Q1300 66 1376 50 Q1458 33 1505 0Z"
        fill="#103629"
      />
      <path
        d="M0 0 H350 Q300 66 224 50 Q142 33 95 0Z"
        fill="none"
        stroke="url(#champagneGold)"
        strokeWidth="4"
      />
      <path
        d="M1600 0 H1250 Q1300 66 1376 50 Q1458 33 1505 0Z"
        fill="none"
        stroke="url(#champagneGold)"
        strokeWidth="4"
      />

      {/* Hanging greenery, blossoms and bells */}
      {leaves.map((leaf, i) => (
        <g key={`top-${i}`}>
          <path
            d={`M${leaf.x} 0 Q${leaf.x - 12} 55 ${leaf.x + 15} ${leaf.y + 48}`}
            fill="none"
            stroke="#bd9547"
            strokeWidth="1.5"
          />
          <use
            href="#leafShape"
            transform={`translate(${leaf.x + 15} ${leaf.y + 45}) rotate(${i % 2 ? 35 : 215}) scale(${i % 3 === 0 ? 1.2 : 0.85})`}
          />
          {i % 3 === 0 && (
            <use
              href="#whiteFlower"
              transform={`translate(${leaf.x + 25} ${leaf.y + 30}) scale(0.9)`}
            />
          )}
          {i % 5 === 1 && (
            <use
              href="#goldBell"
              transform={`translate(${leaf.x + 4} ${leaf.y + 76})`}
            />
          )}
        </g>
      ))}

      {/* Lush left-side botanical arrangement */}
      {flowers.map((flower, i) => (
        <g key={`left-${i}`}>
          <use
            href="#leafShape"
            transform={`translate(${flower.x + 15} ${flower.y}) rotate(${i % 2 ? 45 : 215}) scale(1.3)`}
          />
          <use
            href="#leafShape"
            transform={`translate(${flower.x + 50} ${flower.y + 25}) rotate(${i % 2 ? 220 : 35})`}
          />
          <use
            href="#whiteFlower"
            transform={`translate(${flower.x + 24} ${flower.y + 42}) scale(1.15)`}
          />
        </g>
      ))}

      {/* Mirror the arrangement on the right */}
      <g transform="translate(1600 0) scale(-1 1)">
        {flowers.map((flower, i) => (
          <g key={`right-${i}`}>
            <use
              href="#leafShape"
              transform={`translate(${flower.x + 15} ${flower.y}) rotate(${i % 2 ? 45 : 215}) scale(1.3)`}
            />
            <use
              href="#leafShape"
              transform={`translate(${flower.x + 50} ${flower.y + 25}) rotate(${i % 2 ? 220 : 35})`}
            />
            <use
              href="#whiteFlower"
              transform={`translate(${flower.x + 24} ${flower.y + 42}) scale(1.15)`}
            />
          </g>
        ))}
      </g>

      {/* Deep green lower corners */}
      <path
        d="M0 785 Q125 750 260 900 H0Z"
        fill="#103629"
      />
      <path
        d="M1600 785 Q1475 750 1340 900 H1600Z"
        fill="#103629"
      />
      <path
        d="M0 785 Q125 750 260 900 M1600 785 Q1475 750 1340 900"
        stroke="url(#champagneGold)"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export function Hero() {
  const { couple, displayDate, city, hero } = site;

  return (
    <section
      id="hero"
      className="hero-invitation relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-24 text-center"
    >
      <BotanicalCanopy />
      <FallingPetals />

      <div className="hero-inner relative z-10 flex w-full max-w-5xl flex-col items-center">
        <p className="relative mb-4 font-display text-xs tracking-[0.28em] text-muted uppercase sm:text-sm">
          {hero.kicker}
        </p>

        <div className="gold-divider" aria-hidden="true">
          <span>✿</span>
        </div>

        <h1 className="relative mt-5 font-script text-6xl leading-[1.08] sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block text-accent-deep">
            {couple.partnerA}
          </span>
          <span className="hero-ampersand mx-2">&</span>
          <span className="block text-accent-deep">
            {couple.partnerB}
          </span>
        </h1>

        <div className="gold-divider mt-5" aria-hidden="true">
          <span>✿</span>
        </div>

        <p className="relative mt-4 font-display text-xl text-ink md:text-2xl">
          {displayDate}
        </p>

        <p className="relative mt-1 font-display text-xs tracking-[0.12em] text-muted uppercase sm:text-sm md:text-base">
          {city}
        </p>

        <div className="gold-divider mt-4" aria-hidden="true">
          <span>❧</span>
        </div>

        <a
          href={hero.ctaHref}
          className="hero-cta relative mt-5 inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide"
        >
          {hero.ctaLabel}
          <span className="ml-3" aria-hidden="true">⌄</span>
        </a>
      </div>
    </section>
  );
}
