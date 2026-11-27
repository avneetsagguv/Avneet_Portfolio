import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isRolling, setIsRolling] = useState(false);
  const [diceValue, setDiceValue] = useState(1);

  const tiles = [
    { num: 1, label: 'About', path: '/about', colorClass: 'bg-primary-magenta text-white hover:bg-white hover:text-primary-magenta', icon: '?', style: { left: '14%', top: '82%', transform: 'translate(-50%, -50%) rotate(-4deg)' }, shapeClass: 'aspect-square rounded-sm w-24 md:w-36' },
    { num: 2, label: 'CASE\nSTUDIES', path: '/case-studies', colorClass: 'bg-accent-mint text-deep-maroon hover:bg-white hover:text-accent-mint', icon: '★', style: { left: '41%', top: '87%', transform: 'translate(-50%, -50%) rotate(2deg)' }, shapeClass: 'aspect-video rounded-xl w-32 md:w-48 h-20 md:h-28' },
    { num: 3, label: 'Skills', path: '/skills', colorClass: 'bg-primary-blue text-white hover:bg-white hover:text-primary-blue', icon: '+', style: { left: '68%', top: '78%', transform: 'translate(-50%, -50%) rotate(-2deg)' }, shapeClass: 'aspect-square rounded-3xl w-24 md:w-36' },
    { num: 4, label: 'Contact', path: '/contact', colorClass: 'bg-accent-yellow text-deep-maroon hover:bg-white hover:text-accent-yellow', icon: '@', style: { left: '85%', top: '46%', transform: 'translate(-50%, -50%) rotate(4deg)' }, shapeClass: 'aspect-square rounded-full w-24 md:w-36' },
  ];

  const fillerTiles = [
    // Between Tile 1 and Tile 2
    { style: { left: '25%', top: '85%', transform: 'translate(-50%, -50%)' }, shapeClass: 'w-9 h-9 md:w-14 md:h-14 bg-white border-4 border-deep-maroon rounded-full shadow-[2px_2px_0_0_#7A1224]' },
    { style: { left: '33%', top: '86%', transform: 'translate(-50%, -50%) rotate(12deg)' }, shapeClass: 'w-7 h-7 md:w-10 md:h-10 bg-accent-yellow border-3 border-deep-maroon rounded-sm shadow-[2px_2px_0_0_#7A1224]' },
    // Between Tile 2 and Tile 3
    { style: { left: '52%', top: '85%', transform: 'translate(-50%, -50%) rotate(6deg)' }, shapeClass: 'w-12 h-6 md:w-16 md:h-8 bg-primary-magenta border-3 border-deep-maroon rounded-full shadow-[2px_2px_0_0_#7A1224]' },
    { style: { left: '60%', top: '82%', transform: 'translate(-50%, -50%) rotate(-3deg)' }, shapeClass: 'w-8 h-8 md:w-12 md:h-12 bg-white border-3 border-deep-maroon rounded-sm shadow-[2px_2px_0_0_#7A1224]' },
    // Between Tile 3 and Tile 4
    { style: { left: '71%', top: '87%', transform: 'translate(-50%, -50%) rotate(15deg)' }, shapeClass: 'w-4 h-6 md:w-5 md:h-7 bg-primary-magenta/80 clip-path-triangle' },
    { style: { left: '76%', top: '66%', transform: 'translate(-50%, -50%)' }, shapeClass: 'w-6 h-6 md:w-8 md:h-8 bg-accent-mint border-3 border-deep-maroon rounded-full shadow-[2px_2px_0_0_#7A1224]' },
    { style: { left: '80%', top: '56%', transform: 'translate(-50%, -50%) rotate(-12deg)' }, shapeClass: 'w-9 h-9 md:w-12 md:h-12 bg-primary-blue border-3 border-deep-maroon rounded-sm shadow-[2px_2px_0_0_#7A1224]' },
    { style: { left: '82%', top: '65%', transform: 'translate(-50%, -50%) rotate(30deg)' }, shapeClass: 'w-5 h-5 md:w-6 md:h-6 bg-accent-mint/70 border border-deep-maroon/50 rounded-sm' },
  ];

  const handleTileClick = (tile) => {
    if (isRolling) return;
    setIsRolling(true);

    let rolls = 0;
    const maxRolls = 8;
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rolls++;

      if (rolls >= maxRolls) {
        clearInterval(interval);
        setDiceValue(tile.num);
        setTimeout(() => {
          navigate(tile.path);
        }, 600);
      }
    }, 100);
  };

  const getDiceFace = (value) => {
    const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return faces[value - 1] || '⚀';
  };

  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-bg-cream relative">
      
      {/* SVG Board Game Track */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.12)]">
        {/* Soft warm board track */}
        <path
          d="M 6 82 Q 38 88, 66 80 Q 86 65, 86 28"
          fill="none"
          stroke="#E6D3B6"
          strokeWidth="18"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Dashed blue trail */}
        <path
          d="M 6 82 Q 38 88, 66 80 Q 86 65, 86 28"
          fill="none"
          stroke="#2F5FCB"
          strokeWidth="6"
          strokeDasharray="14 14"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Decorative scrap and question mark matching Image 1 */}
      <div 
        className="absolute z-10 pointer-events-none select-none font-press-start text-3xl md:text-5xl text-deep-maroon/50"
        style={{ left: '26%', top: '35%', transform: 'rotate(5deg)' }}
      >
        ?
      </div>
      <div 
        className="absolute z-10 pointer-events-none select-none w-4 h-4 md:w-6 md:h-6 bg-accent-yellow/80 rotate-45 border border-deep-maroon/30"
        style={{ left: '15%', top: '44%' }}
      />

      {/* Filler Tiles along the path */}
      {fillerTiles.map((ft, idx) => (
        <div key={`ft-${idx}`} className={`absolute z-10 ${ft.shapeClass}`} style={ft.style} />
      ))}

      {/* Header Text Area - Avneet Saggu with Capital Initials */}
      <div 
        className="absolute z-20 pointer-events-none"
        style={{ left: '5%', top: '6%', transform: 'rotate(-1.5deg)' }}
      >
        <div className="bg-white border-4 md:border-[5px] border-deep-maroon p-6 md:p-8 shadow-[8px_8px_0_0_#2F5FCB] inline-block pointer-events-auto rounded-2xl md:rounded-3xl max-w-[280px] md:max-w-md">
          <h1 className="text-3xl md:text-5xl text-deep-maroon leading-tight font-press-start tracking-wider">
            Avneet<br />Saggu
          </h1>
        </div>
      </div>

      {/* Interactive Main Tiles */}
      {tiles.map((tile) => (
        <button
          key={tile.num}
          onClick={() => handleTileClick(tile)}
          className={`
            absolute z-20 font-press-start border-4 border-deep-maroon
            shadow-[6px_6px_0_0_#7A1224] transition-all hover:scale-105 hover:brightness-110
            active:shadow-none active:translate-y-[6px] active:translate-x-[6px]
            flex flex-col items-center justify-center p-2 md:p-4
            ${tile.colorClass} ${tile.shapeClass}
          `}
          style={tile.style}
        >
          {tile.num === 4 && (
            <div className="absolute top-2 left-3 font-press-start text-[6px] text-deep-maroon select-none opacity-80 pointer-events-none">✦</div>
          )}
          <div className="text-[8px] md:text-sm mb-1 opacity-90 absolute top-2 left-2">{tile.num}.</div>
          <div className="text-xl md:text-4xl mb-1">{tile.icon}</div>
          <span className="text-[7px] md:text-xs text-center leading-tight whitespace-pre-line px-1">{tile.label.toUpperCase()}</span>
        </button>
      ))}

      {/* Start Token (Dice Icon) sitting near Tile 1 */}
      <div 
        className="absolute z-30 text-4xl md:text-5xl animate-bounce drop-shadow-[4px_4px_0_rgba(122,18,36,0.3)] pointer-events-none" 
        style={{ left: '8%', top: '74%', transform: 'rotate(-10deg)' }}
      >
        🎲
      </div>

      {/* Global Dice Roll Overlay */}
      {isRolling && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-cream/90 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="text-[10rem] md:text-[15rem] text-primary-magenta animate-bounce drop-shadow-[8px_8px_0_rgba(122,18,36,0.5)] leading-none">
              {getDiceFace(diceValue)}
            </div>
            <p className="font-press-start text-deep-maroon mt-4 text-lg md:text-2xl animate-pulse">ROLLING...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
