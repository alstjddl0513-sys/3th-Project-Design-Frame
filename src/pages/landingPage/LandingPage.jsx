import React from 'react';
import { Link } from 'react-router-dom';
import landingBg from '../../assets/landingPage.jpg';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden font-sans">
      {/* 1. BACKGROUND IMAGE (이미지 경로 수정됨) */}
      <div className="absolute inset-0 z-0">
        <img
          src={landingBg}
          className="w-full h-full object-cover grayscale-[0.2] opacity-80"
        />
        {/* 이미지의 독특한 아래에서 위로 보는 투시와 화려한 조명을 위한 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="absolute top-0 left-0 w-full h-full bg-blend-overlay opacity-20" />
      </div>

      {/* 2. LOGO SECTION (이미지 중앙의 Wara 로고) */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-9xl font-black italic tracking-tighter text-white/90 shadow-lg drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
          Wara
        </h1>

        {/* 3. CALL TO ACTION BUTTON (추가된 버튼) */}
        <div className="mt-16 relative">
          {/* 버튼 뒤 은은한 야경과 어우러지는 글로우 효과 */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" />

          <Link
            to="/create"
            className="relative px-12 py-5 rounded-full bg-white text-black text-lg font-black tracking-tight flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out z-20"
          >
            ✉️ 초대장 만들러 가기{' '}
            <span className="text-black/30 font-bold">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
