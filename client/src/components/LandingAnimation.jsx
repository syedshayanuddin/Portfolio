import { useState, useEffect } from 'react';

function LandingAnimation({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Animation sequence
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for fade out
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center transition-opacity duration-800 ${!show ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
      </div>

      {/* Name animation */}
      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold text-white animate-name-reveal">
          SHAYAN
        </h1>
        <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-4 animate-line-expand"></div>
      </div>
    </div>
  );
}

export default LandingAnimation;
