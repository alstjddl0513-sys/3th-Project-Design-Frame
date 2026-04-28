import React from 'react';

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden relative">
      {/* 1. BACKGROUND EFFECTS (라이트 모드용 은은한 효과) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[120px]" />
      </div>

      {/* 2. NAV BAR */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-5 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="text-2xl font-black italic tracking-tighter">
          partiful
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-black/5 px-5 py-2 rounded-full text-xs font-black hover:bg-black/10 transition-all">
            + Create
          </button>
          <button className="bg-black/5 px-5 py-2 rounded-full text-xs font-black hover:bg-black/10 transition-all">
            Home
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-200 border border-black/5 cursor-pointer" />
        </div>
      </nav>

      {/* 3. MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-12 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20">
        {/* LEFT SIDE: Info & List */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-black tracking-tight leading-tight text-black">
              고급 프로젝트-Wara <span className="block">😎</span>
            </h1>

            <div className="space-y-1 font-bold">
              <p className="text-2xl">Friday, May 1</p>
              <p className="text-black/40 text-xl font-medium">
                5:30pm – 10:00pm
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {['📅', '📍', '🔔', '···'].map((emoji, i) => (
              <button
                key={i}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-black/5 border border-black/5 hover:bg-black/10 transition-all text-xl"
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Host & Location Info */}
          <div className="space-y-6 pt-4 border-t border-black/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm shadow-lg">
                KE
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-black/30 font-black">
                  Hosted by
                </p>
                <p className="font-black text-lg">Kang Esther 👑</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-black/80 font-bold">
                <span className="text-2xl">📍</span>
                <span>Seoul</span>
              </div>
              <div className="p-5 rounded-2xl bg-black/[0.03] border border-black/5 text-sm font-medium italic text-black/60">
                "고급 프로젝트 파이팅~"
              </div>
            </div>
          </div>

          {/* Guest List Section */}
          <div className="space-y-5 pt-6 border-t border-black/5">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-black/30">
                Guest List
              </h3>
              <button className="text-[11px] font-black px-4 py-1.5 bg-black/5 rounded-full hover:bg-black/10 transition-all">
                View all
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {['👤', '장', 'Y', 'KH', '박', '이'].map((guest, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-black text-xs ${i === 0 ? 'bg-yellow-400' : 'bg-black text-white'}`}
                >
                  {guest}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-black/5 border-2 border-white flex items-center justify-center text-[11px] font-black text-black/30 shadow-sm">
                +2
              </div>
            </div>
            <p className="text-xs font-black text-black/20">
              7 Going · 1 Maybe
            </p>
          </div>

          {/* Photo Album Section (위치 변경: 게스트 리스트 아래) */}
          <div className="space-y-5 pt-10 border-t border-black/5">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-black/30">
                Photo Album
              </h3>
              <button className="text-[11px] font-black px-4 py-1.5 bg-black/5 rounded-full hover:bg-black/10 transition-all">
                Copy link
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-black/5 overflow-hidden border border-black/5 shadow-sm group"
                >
                  <img
                    src={`https://picsum.photos/300/300?random=${i + 10}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="album"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs font-black text-black/20">29 photos</p>
          </div>
        </div>

        {/* RIGHT SIDE: RSVP Image & Interaction */}
        <div className="flex flex-col items-center">
          <div className="sticky top-32 w-full space-y-12">
            {/* Main Event Image */}
            <div className="relative group aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 bg-black/5">
              <img
                src="https://images.unsplash.com/photo-1514525253361-bee243870eb2?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover"
                alt="Event"
              />
              <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-black px-6 py-2.5 rounded-full text-[11px] font-black shadow-xl hover:scale-105 transition-all">
                Click to change
              </button>
            </div>

            {/* RSVP Interaction */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative flex items-center justify-center">
                {/* 글로우 효과 조정 (라이트 모드) */}
                <div className="absolute inset-0 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <button className="relative w-28 h-28 rounded-full bg-white border-[6px] border-black/5 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group">
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    ❤️
                  </span>
                  <span className="text-[11px] font-black mt-2 text-black/40">
                    Going
                  </span>
                </button>
                <button className="absolute -right-16 w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-xl hover:bg-black/10 transition-colors">
                  ✈️
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
