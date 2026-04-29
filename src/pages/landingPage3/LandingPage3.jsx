import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  { category:'생일파티', title:'Birthday Bash', sub:'You are invited!', date:'SAT · JUN 14', icon:'🎂',
    bg:'linear-gradient(145deg,#1a0533 0%,#2d1054 50%,#1e0a3c 100%)',
    accent:'#d8b4fe', tag:'rgba(216,180,254,0.15)', stars:['#d8b4fe','#c084fc','#a855f7'] },
  { category:'결혼', title:'We Said Yes', sub:'Join us for our wedding', date:'SUN · SEP 21', icon:'💍',
    bg:'linear-gradient(145deg,#0c1a2e 0%,#162840 50%,#0a1520 100%)',
    accent:'#93c5fd', tag:'rgba(147,197,253,0.12)', stars:['#bfdbfe','#93c5fd','#60a5fa'] },
  { category:'친목', title:"Let's Party", sub:'Good vibes only', date:'FRI · AUG 2', icon:'🔥',
    bg:'linear-gradient(145deg,#1a0020 0%,#2d0035 50%,#1a0028 100%)',
    accent:'#f0abfc', tag:'rgba(240,171,252,0.12)', stars:['#f0abfc','#e879f9','#d946ef'] },
  { category:'공부', title:'Study Jam', sub:"Let's grind together", date:'MON · JUL 7', icon:'📚',
    bg:'linear-gradient(145deg,#061a30 0%,#0c2540 50%,#051520 100%)',
    accent:'#7dd3fc', tag:'rgba(125,211,252,0.12)', stars:['#bae6fd','#7dd3fc','#38bdf8'] },
  { category:'생일파티', title:'Turn Up', sub:"It's my birthday!", date:'SAT · MAY 17', icon:'🌈',
    bg:'linear-gradient(145deg,#200020 0%,#350035 50%,#180018 100%)',
    accent:'#f9a8d4', tag:'rgba(249,168,212,0.12)', stars:['#fbcfe8','#f9a8d4','#f472b6'] },
  { category:'결혼', title:'Forever Starts', sub:'Our happily ever after', date:'SAT · OCT 4', icon:'🌸',
    bg:'linear-gradient(145deg,#1a0f2e 0%,#2a1a45 50%,#150c24 100%)',
    accent:'#c4b5fd', tag:'rgba(196,181,253,0.12)', stars:['#ddd6fe','#c4b5fd','#a78bfa'] },
  { category:'친목', title:'Rooftop Vibes', sub:'Summer night hangout', date:'FRI · JUL 25', icon:'🏖️',
    bg:'linear-gradient(145deg,#1a1000 0%,#2d1c00 50%,#1a0e00 100%)',
    accent:'#fcd34d', tag:'rgba(252,211,77,0.12)', stars:['#fde68a','#fcd34d','#fbbf24'] },
  { category:'공부', title:'Hackathon', sub:'48hrs of building', date:'SAT · NOV 8', icon:'💻',
    bg:'linear-gradient(145deg,#001a1a 0%,#002b28 50%,#001515 100%)',
    accent:'#5eead4', tag:'rgba(94,234,212,0.12)', stars:['#99f6e4','#5eead4','#2dd4bf'] },
  { category:'친목', title:'Game Night', sub:'Bring your A-game', date:'SUN · AUG 17', icon:'🎮',
    bg:'linear-gradient(145deg,#001a10 0%,#002b1a 50%,#001510 100%)',
    accent:'#86efac', tag:'rgba(134,239,172,0.12)', stars:['#bbf7d0','#86efac','#4ade80'] },
  { category:'생일파티', title:'Milestone 30', sub:'Thirty & thriving', date:'SAT · DEC 6', icon:'🚀',
    bg:'linear-gradient(145deg,#0f0a1e 0%,#1a1030 50%,#0a0818 100%)',
    accent:'#fbbf24', tag:'rgba(251,191,36,0.12)', stars:['#fde68a','#fbbf24','#f59e0b'] },
];

const starPositions = [[15,20],[80,60],[60,15],[90,80],[30,85]];
const starSizes = [2,1.5,2.5,1,2];

const colorMap = {
  '#ffffff': (a) => `rgba(255,255,255,${a})`,
  '#c4b5fd': (a) => `rgba(196,181,253,${a})`,
  '#93c5fd': (a) => `rgba(147,197,253,${a})`,
  '#ddd6fe': (a) => `rgba(221,214,254,${a})`,
};

function useStarCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let stars = [], shoots = [], nebulas = [];
    let W, H, t = 0;

    const rand = (a, b) => a + Math.random() * (b - a);

    function resize() {
      W = canvas.width  = window.innerWidth  * devicePixelRatio;
      H = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width  = window.innerWidth  + 'px';
      canvas.style.height = window.innerHeight + 'px';
      init();
    }

    function init() {
      stars = [];
      for (let i = 0; i < 220; i++) {
        stars.push({
          x: rand(0, W), y: rand(0, H),
          r: rand(0.3, 1.8) * devicePixelRatio,
          base: rand(0.05, 0.7),
          speed: rand(0.4, 1.8),
          phase: rand(0, Math.PI * 2),
          color: ['#ffffff','#c4b5fd','#93c5fd','#ddd6fe'][Math.floor(rand(0, 4))],
        });
      }

      nebulas = [
        { x: W * 0.5,  y: H * 0.1,  rx: W * 0.45, ry: H * 0.35, color: 'rgba(139,92,246,' },
        { x: W * 0.85, y: H * 0.75, rx: W * 0.3,  ry: H * 0.28, color: 'rgba(96,165,250,' },
        { x: W * 0.1,  y: H * 0.85, rx: W * 0.25, ry: H * 0.22, color: 'rgba(167,139,250,' },
      ];

      shoots = [];
    }

    function spawnShoot() {
      if (shoots.length < 3 && Math.random() < 0.008) {
        const angle = rand(20, 50) * Math.PI / 180;
        shoots.push({
          x: rand(W * 0.1, W * 0.9),
          y: rand(0, H * 0.4),
          vx: Math.cos(angle) * 12 * devicePixelRatio,
          vy: Math.sin(angle) * 12 * devicePixelRatio,
          len: rand(80, 160) * devicePixelRatio,
          life: 1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, '#0d0b1e');
      bg.addColorStop(0.5, '#0a0818');
      bg.addColorStop(1, '#080614');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      nebulas.forEach(n => {
        const maxR = Math.max(n.rx, n.ry);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
        g.addColorStop(0,   n.color + '0.18)');
        g.addColorStop(0.5, n.color + '0.07)');
        g.addColorStop(1,   n.color + '0)');
        ctx.save();
        ctx.translate(n.x, n.y);
        ctx.scale(n.rx / maxR, n.ry / maxR);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, maxR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      stars.forEach(s => {
        const alpha = s.base + (1 - s.base) * 0.5 * (1 + Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        if (s.r > 1.2) {
          ctx.shadowBlur  = 6 * devicePixelRatio;
          ctx.shadowColor = s.color;
        }
        ctx.fillStyle = colorMap[s.color]
          ? colorMap[s.color](alpha)
          : `rgba(255,255,255,${alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (s.r > 1.3 && alpha > 0.5) {
          const cross = s.r * 3;
          ctx.strokeStyle = s.color === '#c4b5fd'
            ? 'rgba(196,181,253,0.3)'
            : 'rgba(255,255,255,0.15)';
          ctx.lineWidth = 0.5 * devicePixelRatio;
          ctx.beginPath();
          ctx.moveTo(s.x - cross, s.y); ctx.lineTo(s.x + cross, s.y);
          ctx.moveTo(s.x, s.y - cross); ctx.lineTo(s.x, s.y + cross);
          ctx.stroke();
        }
      });

      spawnShoot();
      shoots = shoots.filter(sh => sh.life > 0);
      shoots.forEach(sh => {
        const angle = Math.atan2(sh.vy, sh.vx);
        const tail = {
          x: sh.x - Math.cos(angle) * sh.len,
          y: sh.y - Math.sin(angle) * sh.len,
        };
        const g = ctx.createLinearGradient(tail.x, tail.y, sh.x, sh.y);
        g.addColorStop(0, 'rgba(255,255,255,0)');
        g.addColorStop(1, `rgba(255,255,255,${sh.life * 0.9})`);
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(sh.x, sh.y);
        ctx.strokeStyle = g;
        ctx.lineWidth   = 1.5 * devicePixelRatio;
        ctx.stroke();
        sh.x    += sh.vx;
        sh.y    += sh.vy;
        sh.life -= 0.03;
      });

      t += 0.012;
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);
}

export default function LandingPage3() {
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);

  useStarCanvas(canvasRef);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 250, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .wara-page {
          font-family: 'Outfit', sans-serif;
          background: #0a0818;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .wara-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .wara-inner {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px 80px;
          position: relative;
          z-index: 1;
        }

        @keyframes waraTwinkle {
          0%, 100% { opacity: var(--min, 0.1); transform: scale(1); }
          50%       { opacity: var(--max, 0.8); transform: scale(1.3); }
        }

        .wara-hero {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 64px;
          animation: waraUp 1s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes waraUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wara-badge {
          display: inline-block;
          border: 0.5px solid rgba(167,139,250,0.4);
          background: rgba(167,139,250,0.08);
          border-radius: 20px;
          padding: 5px 16px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #c4b5fd;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }

        .wara-logo-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 12px;
        }

        .wara-logo-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(ellipse, rgba(167,139,250,0.4) 0%, transparent 70%);
          pointer-events: none;
          animation: waraPulse 3s ease-in-out infinite;
        }

        @keyframes waraPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.1); opacity: 1; }
        }

        .wara-logo {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 700;
          font-size: 100px;
          line-height: 1;
          background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 30%, #60a5fa 70%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          letter-spacing: -3px;
        }

        .wara-hero-sub {
          font-size: 18px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.3px;
          margin-top: 8px;
        }

        .wara-section-label {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 28px;
          animation: waraUp 1s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }

        .wara-section-label h2 {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          margin-bottom: 4px;
        }

        .wara-section-label p {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.3px;
        }

        .wara-scroll-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1100px;
          animation: waraUp 1s 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }

        .wara-cards-scroll {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 24px 12px 40px;
          scrollbar-width: none;
        }

        .wara-cards-scroll::-webkit-scrollbar { display: none; }

        .wara-arr {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 0.5px solid rgba(167,139,250,0.3);
          color: #c4b5fd;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          backdrop-filter: blur(12px);
          transition: background 0.2s, transform 0.2s;
        }

        .wara-arr:hover {
          background: rgba(167,139,250,0.15);
          transform: translateY(-50%) scale(1.1);
        }

        .wara-arr-l { left: -6px; }
        .wara-arr-r { right: -6px; }

        .wara-card {
          flex: 0 0 220px;
          height: 320px;
          border-radius: 22px;
          scroll-snap-align: start;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px 18px;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
          transform: perspective(800px) rotateY(-3deg) rotateX(1.5deg);
          box-shadow: 4px 8px 32px rgba(0,0,0,0.5), inset 0 0.5px 0 rgba(255,255,255,0.1);
        }

        .wara-card:hover {
          transform: perspective(800px) rotateY(0deg) rotateX(0deg) translateY(-10px) scale(1.04);
          box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 40px rgba(167,139,250,0.15);
        }

        .wara-card-glass {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
          pointer-events: none;
          border: 0.5px solid rgba(255,255,255,0.15);
        }

        .wara-card::after {
          content: '';
          position: absolute;
          top: -80%;
          left: -40%;
          width: 50%;
          height: 220%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          transform: skewX(-15deg);
          transition: left 0.6s ease;
          pointer-events: none;
        }

        .wara-card:hover::after { left: 120%; }

        .wara-card-star-dot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
          pointer-events: none;
        }

        .wara-card-tag {
          display: inline-block;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 0.5px solid rgba(255,255,255,0.2);
          position: relative;
          z-index: 1;
        }

        .wara-card-icon {
          font-size: 32px;
          display: block;
          margin: 12px 0 8px;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
        }

        .wara-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          position: relative;
          z-index: 1;
          margin-bottom: 4px;
        }

        .wara-card-sub {
          font-size: 11px;
          font-weight: 300;
          opacity: 0.65;
          position: relative;
          z-index: 1;
        }

        .wara-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .wara-card-date {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          opacity: 0.85;
        }

        .wara-card-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          border: 0.5px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          backdrop-filter: blur(8px);
        }

        .wara-cta-wrap {
          position: relative;
          z-index: 1;
          margin-top: 40px;
          text-align: center;
          animation: waraUp 1s 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }

        .wara-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 36px;
          background: linear-gradient(135deg, rgba(139,92,246,0.9), rgba(96,165,250,0.9));
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.3px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(139,92,246,0.4), 0 0 0 0.5px rgba(167,139,250,0.3);
        }

        .wara-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          border-radius: 50px;
        }

        .wara-cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 16px 48px rgba(139,92,246,0.5), 0 0 0 0.5px rgba(167,139,250,0.4);
        }

        .wara-cta-sub {
          margin-top: 12px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.3px;
        }
      `}</style>

      <div className="wara-page">
        {/* Canvas 별 배경 */}
        <canvas ref={canvasRef} className="wara-canvas" />

        <div className="wara-inner">
          {/* Hero */}
          <div className="wara-hero">
            <div className="wara-badge">✦ 초대장 플랫폼</div>
            <div className="wara-logo-wrap">
              <div className="wara-logo-glow" />
              <h1 className="wara-logo">Wara</h1>
            </div>
            <p className="wara-hero-sub">순간을 담아 별이 되는 초대장</p>
          </div>

          {/* Section Label */}
          <div className="wara-section-label">
            <h2>Trending Templates</h2>
            <p>완벽한 초대장을 만들어보세요 · 무료로 · 언제나</p>
          </div>

          {/* Cards */}
          <div className="wara-scroll-wrapper">
            <button className="wara-arr wara-arr-l" onClick={() => scroll(-1)}>←</button>

            <div className="wara-cards-scroll" ref={scrollRef}>
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="wara-card"
                  style={{ background: card.bg }}
                >
                  <div className="wara-card-glass" />

                  {starPositions.map((pos, i) => (
                    <div
                      key={i}
                      className="wara-card-star-dot"
                      style={{
                        left: `${pos[0]}%`,
                        top: `${pos[1]}%`,
                        width: `${starSizes[i]}px`,
                        height: `${starSizes[i]}px`,
                        background: card.stars[i % 3],
                        animation: `waraTwinkle ${2 + i * 0.4}s ease-in-out infinite ${i * 0.3}s`,
                      }}
                    />
                  ))}

                  <div>
                    <span
                      className="wara-card-tag"
                      style={{ background: card.tag, color: card.accent }}
                    >
                      {card.category}
                    </span>
                    <span className="wara-card-icon">{card.icon}</span>
                    <div className="wara-card-title" style={{ color: card.accent }}>
                      {card.title}
                    </div>
                    <div className="wara-card-sub" style={{ color: card.accent }}>
                      {card.sub}
                    </div>
                  </div>

                  <div className="wara-card-bottom">
                    <span className="wara-card-date" style={{ color: card.accent }}>
                      {card.date}
                    </span>
                    <div className="wara-card-arrow" style={{ color: card.accent }}>→</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="wara-arr wara-arr-r" onClick={() => scroll(1)}>→</button>
          </div>

          {/* CTA */}
          <div className="wara-cta-wrap">
            <Link to="/create" className="wara-cta-btn">
              ✉️ 초대장 만들러 가기 →
            </Link>
            <p className="wara-cta-sub">회원가입 없이 무료로 시작하세요</p>
          </div>
        </div>
      </div>
    </>
  );
}
