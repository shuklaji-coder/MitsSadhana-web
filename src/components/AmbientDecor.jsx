import React, { useMemo } from 'react';

const COLORS = ['#FFD34D', '#FF9E2C', '#FFF8E1', '#E8641D'];

export const FloatingPetals = ({ count = 12, color }) => {
  const petals = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 8 + Math.random() * 10,
    duration: 9 + Math.random() * 10,
    delay: -(Math.random() * 18),
    opacity: 0.25 + Math.random() * 0.5,
    rotate: Math.random() * 90,
    bg: color || COLORS[i % COLORS.length],
  })), [count, color]);

  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none', zIndex:5 }}>
      {petals.map(p => (
        <span
          key={p.id}
          className="animate-petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.bg,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const Diya = ({ size = 28, style }) => (
  <div
    style={{
      position:'relative',
      width:size,
      height:size * 0.6,
      ...style,
    }}
  >
    <div
      style={{
        position:'absolute',
        bottom:0,
        left:'50%',
        transform:'translateX(-50%)',
        width:size,
        height:size * 0.45,
        borderRadius:'50% 50% 40% 40% / 60% 60% 40% 40%',
        background:'linear-gradient(to bottom,#7A3B0E,#4A2206)',
        boxShadow:'0 4px 12px rgba(0,0,0,0.5), inset 0 -2px 6px rgba(0,0,0,0.6)',
      }}
    />
    <div
      className="animate-diya"
      style={{
        position:'absolute',
        bottom:size * 0.35,
        left:'50%',
        transform:'translateX(-50%)',
        width:size * 0.32,
        height:size * 0.55,
        borderRadius:'50% 50% 30% 30% / 70% 70% 30% 30%',
        background:'radial-gradient(circle at 50% 70%, #FFF8E1 0%, #FFB74D 45%, #FF6D00 75%, rgba(232,100,29,0.2) 100%)',
      }}
    />
    <div
      className="animate-halo-pulse"
      style={{
        position:'absolute',
        bottom:size * 0.2,
        left:'50%',
        transform:'translateX(-50%)',
        width:size * 0.9,
        height:size * 0.5,
        borderRadius:'50%',
        background:'radial-gradient(circle, rgba(255,179,74,0.55) 0%, transparent 70%)',
        filter:'blur(4px)',
      }}
    />
  </div>
);

export const OmSvg = ({ size = 200, style }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} style={style} fill="none" stroke="#FFD34D" strokeWidth="0.6">
    <circle cx="50" cy="50" r="48" strokeDasharray="3 5" opacity="0.5" />
    <circle cx="50" cy="50" r="40" opacity="0.7" />
    <path d="M50 4 L53 36 L84 44 L53 52 L50 84 L47 52 L16 44 L47 36 Z" opacity="0.9" />
    <path d="M50 24 C40 34 40 66 50 76 C60 66 60 34 50 24 Z" opacity="0.8" />
    <circle cx="50" cy="50" r="12" opacity="0.9" />
  </svg>
);
