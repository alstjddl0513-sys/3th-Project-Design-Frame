import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    id: 1,
    category: '생일파티',
    title: '🎂 Birthday Bash',
    subtitle: 'You are invited!',
    date: 'SAT · JUN 14',
    bg: 'linear-gradient(135deg, #ff6fd8, #ff9a3c, #ffd700)',
    accent: '#fff',
    textColor: '#1a0030',
    tagBg: 'rgba(255,255,255,0.3)',
    decoration: '🎉',
    pattern: 'confetti',
  },
  {
    id: 2,
    category: '결혼',
    title: '💍 We Said Yes',
    subtitle: 'Join us for our wedding',
    date: 'SUN · SEP 21',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    accent: '#c9a96e',
    textColor: '#f5e6c8',
    tagBg: 'rgba(201,169,110,0.2)',
    decoration: '✨',
    pattern: 'elegant',
  },
  {
    id: 3,
    category: '친목',
    title: '🔥 Let\'s Party',
    subtitle: 'Good vibes only',
    date: 'FRI · AUG 2',
    bg: 'linear-gradient(135deg, #0d0d0d, #1a0533, #330066)',
    accent: '#ff00ff',
    textColor: '#ffffff',
    tagBg: 'rgba(255,0,255,0.2)',
    decoration: '⚡',
    pattern: 'neon',
  },
  {
    id: 4,
    category: '공부',
    title: '📚 Study Jam',
    subtitle: 'Let\'s grind together',
    date: 'MON · JUL 7',
    bg: 'linear-gradient(135deg, #e8f4ff, #c5e3ff, #a8d5ff)',
    accent: '#1d6fa4',
    textColor: '#0a3d62',
    tagBg: 'rgba(29,111,164,0.15)',
    decoration: '🧠',
    pattern: 'minimal',
  },
  {
    id: 5,
    category: '생일파티',
    title: '🌈 Turn Up',
    subtitle: 'It\'s my birthday!',
    date: 'SAT · MAY 17',
    bg: 'linear-gradient(135deg, #ff9a9e, #fecfef, #ffecd2)',
    accent: '#c44569',
    textColor: '#3d0015',
    tagBg: 'rgba(196,69,105,0.15)',
    decoration: '🎀',
    pattern: 'pastel',
  },
  {
    id: 6,
    category: '결혼',
    title: '🌸 Forever Starts',
    subtitle: 'Our happily ever after',
    date: 'SAT · OCT 4',
    bg: 'linear-gradient(135deg, #f8e1f4, #fce4ec, #fff9c4)',
    accent: '#ad1457',
    textColor: '#4a0028',
    tagBg: 'rgba(173,20,87,0.1)',
    decoration: '🕊️',
    pattern: 'floral',
  },
  {
    id: 7,
    category: '친목',
    title: '🏖️ Rooftop Vibes',
    subtitle: 'Summer night hangout',
    date: 'FRI · JUL 25',
    bg: 'linear-gradient(135deg, #f7971e, #ffd200, #ff6b6b)',
    accent: '#fff',
    textColor: '#1a0000',
    tagBg: 'rgba(255,255,255,0.25)',
    decoration: '🌅',
    pattern: 'summer',
  },
  {
    id: 8,
    category: '공부',
    title: '🎯 Hackathon',
    subtitle: '48hrs of building',
    date: 'SAT · NOV 8',
    bg: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    accent: '#00f5d4',
    textColor: '#e0fff8',
    tagBg: 'rgba(0,245,212,0.15)',
    decoration: '💻',
    pattern: 'tech',
  },
  {
    id: 9,
    category: '친목',
    title: '🍕 Game Night',
    subtitle: 'Bring your A-game',
    date: 'SUN · AUG 17',
    bg: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    accent: '#003d1f',
    textColor: '#001a0d',
    tagBg: 'rgba(0,61,31,0.15)',
    decoration: '🎮',
    pattern: 'fun',
  },
  {
    id: 10,
    category: '생일파티',
    title: '🚀 Milestone 30',
    subtitle: 'Thirty & thriving',
    date: 'SAT · DEC 6',
    bg: 'linear-gradient(135deg, #141e30, #243b55)',
    accent: '#f5a623',
    textColor: '#fff8e7',
    tagBg: 'rgba(245,166,35,0.2)',
    decoration: '🥂',
    pattern: 'luxury',
  },
];

export default function LandingPage2() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&family=DM+Sans:wght@300;400;500;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .landing {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #fefefe 0%, #e8f4ff 30%, #f0e8ff 60%, #e8fff6 100%);
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0 60px;
        }

        /* ── HERO ── */
        .landing-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 48px;
        }

        .landing-logo {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 900;
          font-size: 96px;
          letter-spacing: -4px;
          background: linear-gradient(135deg, #a78bfa, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: logoFade 3.5s ease-in-out forwards;
          filter: drop-shadow(0 0 30px rgba(167,139,250,0.3));
        }

        .landing-subtitle {
          font-size: 14px;
          color: #8b8fa8;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-top: 8px;
          animation: logoFade 3.5s ease-in-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes logoFade {
          0%   { opacity: 0; transform: translateY(10px) scale(0.95); }
          30%  { opacity: 1; transform: translateY(0) scale(1); }
          75%  { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-8px) scale(1.02); }
        }

        /* ── CARDS SECTION ── */
        .cards-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: cardsReveal 0.8s ease-out forwards;
          animation-delay: 3.8s;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes cardsReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        .cards-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .cards-header h2 {
          font-size: 22px;
          font-weight: 700;
          color: #1e1b2e;
          margin-bottom: 4px;
        }

        .cards-header p {
          font-size: 13px;
          color: #a0a4b8;
          letter-spacing: 0.5px;
        }

        /* ── SCROLL ROW ── */
        .scroll-wrapper {
          position: relative;
          width: 100%;
          max-width: 1100px;
          padding: 0 20px;
        }

        .cards-scroll {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 20px 8px 32px;
          scrollbar-width: none;
        }

        .cards-scroll::-webkit-scrollbar { display: none; }

        /* ── ARROW BUTTONS ── */
        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          border: 0.5px solid rgba(167,139,250,0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: transform 0.2s, box-shadow 0.2s;
          z-index: 10;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        .arrow-btn:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(167,139,250,0.25);
        }

        .arrow-left  { left: -4px; }
        .arrow-right { right: -4px; }

        /* ── INVITE CARD ── */
        .invite-card {
          flex: 0 0 240px;
          height: 340px;
          border-radius: 24px;
          padding: 24px 20px;
          cursor: pointer;
          scroll-snap-align: start;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;

          /* 3D effect */
          transform: perspective(800px) rotateY(-4deg) rotateX(2deg);
          box-shadow:
            6px 6px 0px rgba(0,0,0,0.15),
            12px 12px 32px rgba(0,0,0,0.15);
        }

        .invite-card:hover {
          transform: perspective(800px) rotateY(0deg) rotateX(0deg) translateY(-8px) scale(1.03);
          box-shadow:
            0px 0px 0px rgba(0,0,0,0),
            20px 28px 48px rgba(0,0,0,0.2);
        }

        .invite-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%);
          pointer-events: none;
          border-radius: 24px;
        }

        /* shine stripe */
        .invite-card::after {
          content: '';
          position: absolute;
          top: -60%;
          left: -30%;
          width: 60%;
          height: 200%;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
          transform: skewX(-15deg);
          pointer-events: none;
          transition: left 0.5s ease;
        }

        .invite-card:hover::after {
          left: 110%;
        }

        .card-top {}

        .card-category {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 16px;
          backdrop-filter: blur(8px);
        }

        .card-deco-icon {
          font-size: 36px;
          display: block;
          margin-bottom: 10px;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .card-subtitle {
          font-size: 12px;
          opacity: 0.75;
          font-weight: 300;
          letter-spacing: 0.3px;
        }

        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-date {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          opacity: 0.85;
        }

        .card-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
        }

        /* ── CTA ── */
        .cta-wrap {
          margin-top: 36px;
          text-align: center;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(167,139,250,0.35);
        }

        .cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 32px rgba(167,139,250,0.45);
        }

        .cta-btn:active { transform: scale(0.97); }
      `}</style>

      <div className="landing">
        {/* Hero */}
        <div className="landing-hero">
          <h1 className="landing-logo">Wara</h1>
          <p className="landing-subtitle">초대장 플랫폼</p>
        </div>

        {/* Cards */}
        <div className="cards-section">
          <div className="cards-header">
            <h2>Trending Templates</h2>
            <p>완벽한 초대장을 만들어보세요. 무료로, 언제나.</p>
          </div>

          <div className="scroll-wrapper">
            <button className="arrow-btn arrow-left" onClick={() => scroll(-1)}>←</button>

            <div className="cards-scroll" ref={scrollRef}>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="invite-card"
                  style={{ background: card.bg }}
                >
                  <div className="card-top">
                    <span
                      className="card-category"
                      style={{ background: card.tagBg, color: card.accent }}
                    >
                      {card.category}
                    </span>
                    <span className="card-deco-icon">{card.decoration}</span>
                    <div className="card-title" style={{ color: card.textColor }}>
                      {card.title}
                    </div>
                    <div className="card-subtitle" style={{ color: card.textColor }}>
                      {card.subtitle}
                    </div>
                  </div>

                  <div className="card-bottom">
                    <span className="card-date" style={{ color: card.accent }}>
                      {card.date}
                    </span>
                    <div className="card-arrow" style={{ color: card.accent }}>→</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="arrow-btn arrow-right" onClick={() => scroll(1)}>→</button>
          </div>

          <div className="cta-wrap">
            <Link to="/create" className="cta-btn">
              ✉️ 초대장 만들러 가기 →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
