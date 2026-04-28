import { useState } from 'react';

export default function EventEditor() {
  const [data, setData] = useState({
    title: 'Untitled Event',
    description: '',
  });

  const [rsvp, setRsvp] = useState(null);

  // 사진의 폼 항목 스타일을 재현한 컴포넌트
  const FormRow = ({ icon, label, right }) => (
    <div className="flex items-center justify-between py-5 px-2 hover:bg-black/2 cursor-pointer transition-colors group">
      <div className="flex items-center gap-4">
        {/* 아이콘: 더 작고 차분한 색상 */}
        <span className="text-xl grayscale opacity-60 group-hover:opacity-100 transition-opacity">
          {icon}
        </span>
        {/* 텍스트: 사진처럼 옅은 회색의 폰트 */}
        <span className="text-lg font-medium text-black/40 group-hover:text-black/60 transition-colors">
          {label}
        </span>
      </div>
      {right && <div className="ml-auto">{right}</div>}
    </div>
  );

  return (
    <div className="min-h-screen p-8 flex justify-center items-start font-sans text-black">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-16">
        {/* LEFT COLUMN: Input Form */}
        <div className="space-y-10">
          {/* Title Area */}
          <div className="space-y-4">
            <h1
              className="text-7xl font-bold tracking-tight text-black outline-none"
              contentEditable
              spellCheck="false"
            >
              {data.title}
            </h1>
            {/* Tags: 사진처럼 배경색이 아주 연한 둥근 캡슐 */}
            <div className="flex gap-2 flex-wrap">
              {[
                'Classic',
                'Eclectic',
                'Fancy',
                'Literary',
                'Digital',
                'Elegant',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full bg-[#E8E8E8] text-sm font-bold text-black/60 cursor-pointer hover:bg-[#DDD] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Main Container Card: 더 큰 라운드와 투명도 조절 */}
          <div className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/40 shadow-sm p-2">
            {/* Date Block: 사진처럼 큼직한 텍스트 */}
            <div className="p-6 pt-8">
              <div className="text-3xl text-black/40 font-bold mb-1">
                Set a date...
              </div>
              <div className="text-[15px] text-pink-500 font-bold cursor-pointer hover:underline">
                Can't decide when? Poll your guests →
              </div>
            </div>

            {/* Form Rows: 구분선 없이 간결하게 (사진 스타일) */}
            <div className="px-6 space-y-1">
              <FormRow
                icon="👑"
                label="Hosted by 김민성"
                right={
                  <button className="px-4 py-1.5 rounded-full bg-black/5 text-xs font-bold hover:bg-black/10">
                    + Add cohosts
                  </button>
                }
              />
              <FormRow icon="📍" label="Location" />
              <FormRow icon="👥" label="Unlimited spots" />
              <FormRow icon="💰" label="Cost per person" />
            </div>

            {/* Action Buttons: 작고 둥근 버튼들 */}
            <div className="px-6 py-6 flex gap-2 flex-wrap">
              {['Link', 'Playlist', 'Registry', 'Dress code'].map((item) => (
                <button
                  key={item}
                  className="px-4 py-1.5 rounded-full bg-black/5 text-sm font-bold text-black/70 hover:bg-black/10 transition-colors"
                >
                  + {item}
                </button>
              ))}
              <button className="text-sm text-black/40 font-bold px-2 hover:text-black/60 transition-colors">
                Show more
              </button>
            </div>

            {/* Description: 경계선 없는 입력창 */}
            <div className="px-6 pb-8">
              <textarea
                placeholder="Add a description of your event"
                className="w-full bg-transparent outline-none resize-none text-xl text-black/60 placeholder:text-black/20 font-medium"
                rows={3}
              />
            </div>

            {/* Footer Section */}
            <div className="p-8 bg-black/1.5 flex justify-center items-center gap-3 border-t border-black/5 rounded-b-[2.5rem]">
              <span className="text-black/30 font-bold text-sm">
                More to say?
              </span>
              <button className="px-6 py-2.5 rounded-full bg-black/5 font-bold text-sm hover:bg-black/10 transition-all">
                + New section
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Preview & RSVP (기존 스타일 유지하며 간격 조정) */}
        <div className="space-y-10 sticky top-12">
          <div className="relative group shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden aspect-square bg-white border-[6px] border-white">
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
              alt="Party"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            <button className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-2 font-black shadow-xl hover:scale-105 transition-all">
              ✏️ Edit
            </button>
          </div>

          <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/40 shadow-sm">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2 font-bold text-black/60 text-lg">
                ⚙️ RSVP Options
              </div>
              <div className="bg-white/80 px-4 py-1.5 rounded-xl text-[13px] font-black flex items-center gap-2 shadow-sm border border-black/5 cursor-pointer">
                ✅ Icons <span className="text-[10px] opacity-30">▼</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { id: 'going', label: 'Going', icon: '✓' },
                { id: 'maybe', label: 'Maybe', icon: '?' },
                { id: 'cant', label: "Can't Go", icon: '✕' },
              ].map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => setRsvp(item.id)}
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl transition-all
                      ${
                        rsvp === item.id
                          ? 'bg-linear-to-br from-white to-[#EEE] shadow-inner scale-95 ring-4 ring-white'
                          : 'bg-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1'
                      }`}
                  >
                    <span className="opacity-20 font-light">{item.icon}</span>
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

      {/* Save Button */}
      <button className="fixed bottom-10 right-10 bg-black text-white px-12 py-4 rounded-full font-black shadow-2xl hover:scale-105 active:scale-95 transition-all z-50">
        초안 저장 버튼
      </button>
    </div>
  );
}
