import * as React from 'react';

const logoOxe = "/img/logoSemfundo.png";

function Logo({ 
  className = "w-32 h-32", 
  showText = true 
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      
      {/* Rotating Circular Text */}
      {showText && (
        <div className="absolute inset-0 animate-rotate">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path 
              id="circlePath" 
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
              fill="none" 
            />
            <text className="font-logo fill-white uppercase text-[15px] font-black tracking-[0.2em]">
              <textPath href="#circlePath" startOffset="0%">
                ÔXE MAKER 2026 • ÔXE MAKER 2026 • ÔXE MAKER 2026 •
              </textPath>
            </text>
          </svg>
        </div>
      )}

      {/* Central Image */}
      <div className="relative w-2/3 h-2/3 flex items-center justify-center p-2">
        <img 
          src={logoOxe}
          alt="Ôxe Maker"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}

export default Logo;
