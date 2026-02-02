"use client";

export default function BeachBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200" />

      {/* Sun */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-80 animate-pulse" />

      {/* Beach split: sand (bottom half) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-100" />

      {/* Ocean layers (middle, animated) */}
      <div className="absolute bottom-1/2 left-0 right-0 h-48 overflow-hidden">
        {/* Wave layer 1 - back */}
        <div className="absolute bottom-0 left-0 right-0 h-full">
          <div className="wave wave-back" />
        </div>

        {/* Wave layer 2 - middle */}
        <div className="absolute bottom-0 left-0 right-0 h-full">
          <div className="wave wave-middle" />
        </div>

        {/* Wave layer 3 - front */}
        <div className="absolute bottom-0 left-0 right-0 h-full">
          <div className="wave wave-front" />
        </div>
      </div>

      {/* Sand texture overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="grain">
            <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <style jsx>{`
        .wave {
          position: absolute;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          transform-origin: center bottom;
        }

        .wave-front {
          background: linear-gradient(180deg,
            rgba(56, 189, 248, 0.9) 0%,
            rgba(14, 165, 233, 0.95) 50%,
            rgba(56, 189, 248, 1) 100%
          );
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          animation: wave 8s ease-in-out infinite;
        }

        .wave-middle {
          background: linear-gradient(180deg,
            rgba(125, 211, 252, 0.8) 0%,
            rgba(56, 189, 248, 0.85) 100%
          );
          border-radius: 55% 45% 0 0 / 100% 100% 0 0;
          animation: wave 10s ease-in-out infinite reverse;
          opacity: 0.8;
          bottom: -10px;
        }

        .wave-back {
          background: linear-gradient(180deg,
            rgba(186, 230, 253, 0.7) 0%,
            rgba(125, 211, 252, 0.75) 100%
          );
          border-radius: 45% 55% 0 0 / 100% 100% 0 0;
          animation: wave 12s ease-in-out infinite;
          opacity: 0.6;
          bottom: -20px;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0) translateY(0) scaleY(1);
          }
          25% {
            transform: translateX(-5%) translateY(-5px) scaleY(1.02);
          }
          50% {
            transform: translateX(-10%) translateY(0) scaleY(1);
          }
          75% {
            transform: translateX(-5%) translateY(5px) scaleY(0.98);
          }
        }
      `}</style>
    </div>
  );
}
