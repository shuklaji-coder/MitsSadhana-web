import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TempleGateIntro = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [count, setCount] = useState(5);

  // 5 Second Countdown Timer
  useEffect(() => {
    if (isOpening || count <= 0) return;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleOpen();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [count, isOpening]);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsDone(true);
    }, 1600);
  };

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#0a0401',
          perspective: 1400,
        }}
      >
        {/* Golden Light Burst behind doors when opening */}
        <motion.div
          animate={isOpening ? { opacity: [0, 1, 0], scale: [0.8, 3.5, 4.5] } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFF5D6 0%, #FFD34D 30%, #E8641D 60%, transparent 80%)',
            filter: 'blur(35px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* LEFT DOOR PANEL (Full-frame Carved Wooden Door Left Half) */}
        <motion.div
          animate={isOpening ? { x: '-105%', rotateY: -80, opacity: 0.15 } : { x: '0%', rotateY: 0 }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            borderRight: '3px solid #FFD34D',
            boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.8), 10px 0 30px rgba(0,0,0,0.9)',
            transformOrigin: 'left center',
            zIndex: 2,
            boxSizing: 'border-box',
          }}
        >
          <img
            src="/temple-door.png"
            alt="Real Carved Wooden Temple Door Left"
            style={{
              width: '200%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
              filter: 'brightness(0.9) contrast(1.15)',
            }}
          />

          {/* Shubh (शुभ) Gold Badge */}
          <div
            style={{
              position: 'absolute',
              top: 'clamp(16px, 3vh, 32px)',
              left: 'clamp(16px, 3vw, 32px)',
              fontFamily: '"Rozha One", serif',
              fontSize: 'clamp(16px, 3vw, 24px)',
              color: '#FFD34D',
              textShadow: '0 0 12px rgba(255,211,77,0.9), 0 2px 8px #000',
              border: '1.5px solid #FFD34D',
              padding: '2px 10px',
              borderRadius: 8,
              background: 'rgba(26,13,5,0.8)',
              backdropFilter: 'blur(6px)',
            }}
          >
            शुभ
          </div>
        </motion.div>

        {/* RIGHT DOOR PANEL (Full-frame Carved Wooden Door Right Half) */}
        <motion.div
          animate={isOpening ? { x: '105%', rotateY: 80, opacity: 0.15 } : { x: '0%', rotateY: 0 }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            overflow: 'hidden',
            borderLeft: '3px solid #FFD34D',
            boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.8), -10px 0 30px rgba(0,0,0,0.9)',
            transformOrigin: 'right center',
            zIndex: 2,
            boxSizing: 'border-box',
          }}
        >
          <img
            src="/temple-door.png"
            alt="Real Carved Wooden Temple Door Right"
            style={{
              width: '200%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right center',
              filter: 'brightness(0.9) contrast(1.15)',
            }}
          />

          {/* Labh (लाभ) Gold Badge */}
          <div
            style={{
              position: 'absolute',
              top: 'clamp(16px, 3vh, 32px)',
              right: 'clamp(16px, 3vw, 32px)',
              fontFamily: '"Rozha One", serif',
              fontSize: 'clamp(16px, 3vw, 24px)',
              color: '#FFD34D',
              textShadow: '0 0 12px rgba(255,211,77,0.9), 0 2px 8px #000',
              border: '1.5px solid #FFD34D',
              padding: '2px 10px',
              borderRadius: 8,
              background: 'rgba(26,13,5,0.8)',
              backdropFilter: 'blur(6px)',
            }}
          >
            लाभ
          </div>
        </motion.div>

        {/* ENTER TEMPLE CENTER BUTTON & 5s COUNTER */}
        <AnimatePresence>
          {!isOpening && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 16px',
                maxWidth: '90vw',
              }}
            >
              <div
                style={{
                  fontFamily: '"Rozha One", serif',
                  color: '#FFD34D',
                  fontSize: 'clamp(18px, 4vw, 24px)',
                  letterSpacing: 3,
                  marginBottom: 12,
                  textShadow: '0 0 20px rgba(255,211,77,0.9), 0 4px 12px #000',
                  whiteSpace: 'nowrap',
                }}
              >
                ।। शुभ आगमनम् ।।
              </div>

              {/* Glowing 5s Counter Circle */}
              <div style={{ position: 'relative', width: 60, height: 60, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="animate-halo-pulse" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2.5px solid #FFD34D', background: 'rgba(26,13,5,0.92)', boxShadow: '0 0 25px rgba(255,211,77,0.7)' }} />
                <span style={{ fontFamily: '"Rozha One", serif', fontSize: 26, color: '#FFD34D', zIndex: 2, filter: 'drop-shadow(0 0 10px #FFD34D)' }}>
                  {count}
                </span>
              </div>

              <p style={{ fontSize: 11, color: '#FFD34D', marginBottom: 14, letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase', textShadow: '0 0 10px rgba(255,211,77,0.8), 0 2px 6px #000' }}>
                द्वार स्वतः खुल रहे हैं: <span style={{ fontSize: 14, fontWeight: 700 }}>{count}s</span>
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="gold-primary-button"
                style={{
                  padding: '12px 28px',
                  borderRadius: 999,
                  fontSize: 'clamp(13px, 3.5vw, 16px)',
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  cursor: 'pointer',
                  border: '2px solid #FFD34D',
                  boxShadow: '0 0 40px rgba(232,100,29,0.8), 0 0 70px rgba(255,211,77,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  whiteSpace: 'nowrap',
                }}
              >
                <span>🪔</span>
                <span>प्रवेश करें (Skip Wait)</span>
                <span>🪔</span>
              </motion.button>
              <p style={{ fontSize: 9, color: 'rgba(255,211,77,0.85)', marginTop: 10, letterSpacing: 1.5, textTransform: 'uppercase', textShadow: '0 1px 4px #000' }}>
                Tap anytime to enter immediately
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
