import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default function SharePage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-blue-50 to-pink-50">
      {/* Background Bubbles (Same as above) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm border border-white/50 animate-pulse"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Nav: 커스텀 Navbar 컴포넌트 적용 */}
      <Navbar />

      {/* Main Content: pt-10에서 pt-32로 늘려 네브바와의 간격을 확보했습니다 */}
      <main className="relative z-10 flex flex-col items-center pt-32 pb-20">
        <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-6">
          From 🦄 김민성
        </p>

        {/* Final Card Preview */}
        <div className="w-64 aspect-square bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden mb-12">
          <img
            src="https://path-to-your-card-image.png"
            className="w-full h-full object-contain p-4"
            alt="Final Card"
          />
        </div>

        {/* Share Options Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm px-6 mb-8">
          <button className="flex flex-col items-center justify-center gap-3 p-6 bg-white/40 backdrop-blur-lg border border-white rounded-3xl hover:bg-white/60 transition-all group">
            <span className="text-2xl group-hover:scale-110 transition-transform">
              📝
            </span>
            <span className="text-[11px] font-black">Add a note</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-6 bg-white/40 backdrop-blur-lg border border-white rounded-3xl hover:bg-white/60 transition-all group">
            <span className="text-2xl group-hover:scale-110 transition-transform">
              🔗
            </span>
            <span className="text-[11px] font-black">Copy link</span>
          </button>
        </div>

        {/* RSVP Suggestion Banner */}
        <div className="flex items-center gap-4 bg-white/30 backdrop-blur-md border border-white/50 px-6 py-3 rounded-2xl mb-10">
          <span className="text-lg">❌</span>
          <p className="text-xs font-bold">Want RSVPs?</p>
          <button className="bg-black/5 hover:bg-black/10 px-4 py-1.5 rounded-full text-[10px] font-black transition-colors">
            Create an event
          </button>
        </div>

        {/* Primary Share Button */}
        <button className="w-[80%] max-w-xs bg-black text-white py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 shadow-2xl hover:scale-105 transition-transform active:scale-95">
          🔗 Copy link to share
        </button>
      </main>

      {/* Right Sidebar (Edit Mode) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {['Edit', 'Copy', 'More'].map((label) => (
          <button
            key={label}
            className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
          >
            <div className="w-10 h-10 flex items-center justify-center text-lg">
              ⚙️
            </div>
            <span className="text-[10px] font-black uppercase tracking-tighter">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
