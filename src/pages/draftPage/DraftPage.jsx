import { useState } from 'react';

export default function DraftPage() {
  const [rsvp, setRsvp] = useState(null);

  return (
    <div className="min-h-screen p-8 flex justify-center items-start font-sans text-black pt-28">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
        {/* LEFT COLUMN: Event Info & Activity */}
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-7xl font-bold tracking-tight">
              Untitled Event
            </h1>

            <div className="space-y-1">
              <p className="text-3xl font-semibold text-black/80">
                Wednesday, Apr 29
              </p>
              <p className="text-xl text-black/40">7:00pm</p>
            </div>

            {/* Quick Actions (Calendar, Notify, etc) */}
            <div className="flex gap-3">
              {['📅', '🔔', '···'].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Host & Location Info */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3 text-black/50 font-bold">
              <span>👑</span> Hosted by
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-400 to-purple-400 border-2 border-white shadow-sm flex items-center justify-center text-white text-xs">
                김
              </div>
              <span className="font-bold">김민성</span>
            </div>
            <div className="flex items-center gap-3 text-black/70 font-medium">
              <span className="grayscale opacity-50">📍</span> No Location Set
            </div>
          </div>

          {/* Photo Album Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Photo Album</h2>
              <button className="px-4 py-1.5 rounded-full bg-black/5 text-sm font-bold flex items-center gap-2 hover:bg-black/10">
                🔗 Copy link
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center gap-2 py-8 rounded-3xl bg-black/3 border-2 border-dashed border-black/5 hover:bg-black/5 transition-all">
                <span className="text-xl">📷</span>
                <span className="text-sm font-bold opacity-60">Camera</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 py-8 rounded-3xl bg-black/3 border-2 border-dashed border-black/5 hover:bg-black/5 transition-all">
                <span className="text-xl">🏞️</span>
                <span className="text-sm font-bold opacity-60">Upload</span>
              </button>
            </div>
          </div>

          {/* Activity Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Activity</h2>
            <div className="flex items-center gap-3 p-4 bg-black/3 rounded-2xl border border-black/5">
              <div className="w-8 h-8 rounded-full bg-linear-to-tr from-blue-400 to-purple-400 flex items-center justify-center text-[10px] text-white font-bold">
                김
              </div>
              <input
                type="text"
                placeholder="Add a comment"
                className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-black/20"
              />
              <div className="flex gap-2 opacity-40">
                <span className="cursor-pointer">GIF</span>
                <span className="cursor-pointer">🖼️</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Image & RSVP */}
        <div className="space-y-12">
          {/* Main Cover Image */}
          <div className="shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden aspect-square bg-white">
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
              alt="Party"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RSVP Selection: 사진처럼 공중에 뜬 원형 버튼들 */}
          <div className="flex justify-around items-center px-4">
            {[
              {
                id: 'going',
                label: 'Going',
                icon: '✓',
                color: 'from-blue-50 to-white',
              },
              {
                id: 'maybe',
                label: 'Maybe',
                icon: '?',
                color: 'from-purple-50 to-white',
              },
              {
                id: 'cant',
                label: "Can't Go",
                icon: '✕',
                color: 'from-pink-50 to-white',
              },
            ].map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-4">
                <button
                  onClick={() => setRsvp(item.id)}
                  className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl transition-all relative
                    ${
                      rsvp === item.id
                        ? 'scale-90 shadow-inner'
                        : 'bg-white shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-2'
                    }`}
                >
                  {/* 사진 속의 은은한 그라데이션 배경 효과 */}
                  <div
                    className={`absolute inset-0 rounded-full bg-linear-to-br ${item.color} opacity-40`}
                  />
                  <span className="relative z-10 font-light opacity-80">
                    {item.icon}
                  </span>
                </button>
                <span className="text-[13px] font-black text-black/30 uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
