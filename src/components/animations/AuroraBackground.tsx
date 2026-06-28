/**
 * AuroraBackground.tsx
 * ─────────────────────────────────────────────────────────────────
 * The signature visual element of this portfolio.
 *
 * NOT a generic gradient: three overlapping mesh blobs animating
 * independently at different speeds and directions, creating an
 * organic, slow-moving aurora effect. The near-white frosted panel
 * sits on top — so the aurora is a background atmosphere, not the
 * content itself.
 *
 * Performance: pure CSS animation, zero JS on the render path.
 * Reduced motion: all animation removed via @media query.
 * ─────────────────────────────────────────────────────────────────
 */

import { useReducedMotion } from '../../hooks'

interface AuroraBackgroundProps {
  className?: string
  /** Intensity 0–1. Controls blob opacity. Default 0.6 */
  intensity?: number
}

export function AuroraBackground({
  className = '',
  intensity = 0.6,
}: AuroraBackgroundProps) {
  const reduced = useReducedMotion()

  return (
    <div
      className={`aurora-root ${className}`}
      aria-hidden="true"
      style={{ '--aurora-opacity': intensity } as React.CSSProperties}
    >
      {/* Noise texture overlay — kills the "CSS gradient" flatness */}
      <div className="aurora-noise" />

      {/* Three independent blob layers */}
      {!reduced && (
        <>
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </>
      )}

      {/* Static fallback when reduced motion is on */}
      {reduced && <div className="aurora-static" />}

      <style>{`
        .aurora-root {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          background: #050D1A;
        }

        /* SVG noise filter for grain texture */
        .aurora-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 256px 256px;
          z-index: 4;
          pointer-events: none;
          opacity: 0.4;
        }

        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: var(--aurora-opacity, 0.6);
          will-change: transform;
          mix-blend-mode: screen;
        }

        /* Blob 1: mint-teal, large, slow drift NW→SE */
        .aurora-blob-1 {
          width: 70vw;
          height: 60vh;
          background: radial-gradient(ellipse at center,
            #00E5B4 0%,
            #009A78 40%,
            transparent 70%
          );
          top: -10%;
          left: -15%;
          animation: aurora1 18s ease-in-out infinite alternate;
        }

        /* Blob 2: deep teal-blue, medium, faster */
        .aurora-blob-2 {
          width: 55vw;
          height: 50vh;
          background: radial-gradient(ellipse at center,
            #0EA5E9 0%,
            #0369A1 35%,
            transparent 70%
          );
          bottom: -5%;
          right: -10%;
          animation: aurora2 14s ease-in-out infinite alternate;
        }

        /* Blob 3: accent highlight, small, fast */
        .aurora-blob-3 {
          width: 35vw;
          height: 35vh;
          background: radial-gradient(ellipse at center,
            #7FFFDA 0%,
            #00E5B4 30%,
            transparent 70%
          );
          top: 40%;
          left: 45%;
          animation: aurora3 10s ease-in-out infinite alternate;
        }

        @keyframes aurora1 {
          0%   { transform: translate(0,   0)   scale(1);    }
          33%  { transform: translate(8vw, 5vh)  scale(1.08); }
          66%  { transform: translate(4vw, -3vh) scale(0.96); }
          100% { transform: translate(12vw, 8vh) scale(1.12); }
        }

        @keyframes aurora2 {
          0%   { transform: translate(0,   0)    scale(1);    }
          33%  { transform: translate(-6vw, -4vh) scale(1.06); }
          66%  { transform: translate(-10vw, 3vh) scale(0.94); }
          100% { transform: translate(-4vw, -7vh) scale(1.1);  }
        }

        @keyframes aurora3 {
          0%   { transform: translate(0, 0)      scale(1);    }
          50%  { transform: translate(-8vw, 6vh)  scale(1.15); }
          100% { transform: translate(4vw, -5vh)  scale(0.9);  }
        }

        /* Static fallback */
        .aurora-static {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 30% 40%,
            rgb(0 229 180 / 0.15) 0%,
            transparent 60%
          ),
          radial-gradient(
            ellipse at 70% 60%,
            rgb(14 165 233 / 0.1) 0%,
            transparent 60%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-blob { animation: none; }
        }
      `}</style>
    </div>
  )
}
