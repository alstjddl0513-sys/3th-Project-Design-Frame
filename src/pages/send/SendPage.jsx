import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default function SendEditPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#e2e8f0]">
      {/* 배경 효과 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-80" />

      {/* 비눗방울 효과 */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm border border-white/50 animate-pulse"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Nav */}
      <Navbar />

      {/* Main Content: pt-10에서 pt-32로 늘려 네브바와의 간격을 확보했습니다 */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-6">
          From 🦄 김민성
        </p>

        {/* Card Preview */}
        <div className="relative group w-72 aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 border-8 border-white">
          <img
            src="https://path-to-your-card-image.png"
            className="w-full h-full object-contain p-4"
            alt="Card"
          />
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2">
            📸 Change image
          </button>
        </div>

        {/* Input Fields */}
        <div className="w-full max-w-md space-y-2 px-6">
          <input
            type="text"
            placeholder="Add a title"
            className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-6 py-4 text-center text-xl font-black placeholder:text-black/20 focus:outline-none focus:bg-white/60 transition-all"
          />
          <textarea
            placeholder="Add a note"
            className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-6 py-4 text-center text-sm font-bold placeholder:text-black/20 focus:outline-none focus:bg-white/40 transition-all h-24 resize-none"
          />
        </div>

        {/* Bottom Actions */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-black text-white px-10 py-3 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-xl">
            Next
          </button>
        </div>
      </main>

      {/* Right Sidebar Tools */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {['Theme', 'Font', 'Effect'].map((tool) => (
          <button
            key={tool}
            className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full bg-white/50 border border-white shadow-sm flex items-center justify-center text-xs">
              ✨
            </div>
            <span className="text-[9px] font-black uppercase tracking-tighter">
              {tool}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
