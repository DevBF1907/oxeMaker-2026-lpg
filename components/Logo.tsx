import * as React from "react";

function Logo({ className = "w-56 h-56", showText = true }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      
      {showText && (
        <div className="absolute inset-0 animate-rotate">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              id="circlePath"
              d="M 100,100 m -100,0 a 100,80 0 1,1 160,0 a 100,80 0 1,1 -160,0"
              fill="none"
            />
            <text className="font-logo fill-white uppercase text-[14px] font-black tracking-[0.2em]">
              <textPath href="#circlePath">
                ÔXE MAKER 2026 • ÔXE MAKER 2026 • ÔXE MAKER 2026 •
              </textPath>
            </text>
          </svg>
        </div>
      )}

      <img
        src="/logo.png"
        alt="Ôxe Maker"
        className="relative z-10 w-3/4 h-3/4 object-contain"
      />
    </div>
  );
}

export default Logo;
