import React from 'react';
import Footer from '../../components/Footer/Footer'; // 이전에 만든 푸터 컴포넌트

const events = Array.from({ length: 6 }).map((_, i) => ({
  title: `Event ${i + 1}`,
  location: 'Downtown',
}));

const cities = [
  'San Francisco',
  'Boston',
  'Washington, D.C.',
  'Chicago',
  'London',
  'Miami',
];

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-white z-50">
      <div className="font-bold text-lg">WARA</div>

      <div className="flex items-center gap-3">
        <button className="bg-white/20 px-3 py-1 rounded-full backdrop-blur">
          + Create
        </button>
        <button className="bg-white/20 px-3 py-1 rounded-full backdrop-blur">
          Home
        </button>
        <div className="w-8 h-8 flex items-center justify-center">?</div>
        <div className="w-8 h-8 flex items-center justify-center">🔔</div>{' '}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative h-[45vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
        className="absolute w-full h-full object-cover"
        alt="Hero background"
      />
      {/* 그라데이션을 검은색에서 흰색(to-white)으로 변경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-black text-center px-4">
        <h1 className="text-5xl font-black italic tracking-tighter">explore</h1>
        <p className="text-sm mt-3 font-medium text-black/50">
          Find the best events and the communities behind them
        </p>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-full text-xs font-black hover:opacity-80 transition-all">
          See more on the app
        </button>
      </div>
    </div>
  );
}

function EventCard() {
  return (
    // 배경을 흰색, 테두리를 아주 연하게(border-black/5) 추가
    <div className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all cursor-pointer group">
      {/* 썸네일 영역 배경색 조정 */}
      <div className="h-28 bg-black/5 group-hover:scale-105 transition-transform duration-500" />
      <div className="p-4 text-black">
        <p className="text-sm font-black">Party 제목</p>
        <p className="text-xs text-black/40 mt-1 font-bold">시간 | 장소</p>
      </div>
    </div>
  );
}

function CityColumn({ title }) {
  return (
    <div>
      {/* 제목 텍스트 검은색으로 변경 */}
      <h3 className="text-black mb-5 font-black text-lg tracking-tight">
        {title}
      </h3>
      <div className="space-y-4">
        {events.map((_, i) => (
          <EventCard key={i} />
        ))}
      </div>
    </div>
  );
}

function EventGrid() {
  return (
    <div className="max-w-7xl mx-auto px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <CityColumn title="new york city" />
        <CityColumn title="los angeles" />
        <CityColumn title="san francisco" />
      </div>
    </div>
  );
}

function FeaturedSection() {
  return (
    <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
      {/* LEFT: Banner */}
      <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          className="w-full h-full object-cover"
          alt="Featured city"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h2 className="text-white text-4xl font-black italic tracking-tighter">
            new york city
          </h2>
        </div>
      </div>

      {/* RIGHT: City List */}
      <div className="space-y-2">
        {cities.map((city, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/[0.03] cursor-pointer transition-colors group"
          >
            <div className="w-14 h-14 bg-black/5 rounded-xl overflow-hidden" />
            <span className="text-black/70 group-hover:text-black font-black text-sm transition-colors">
              {city}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    // 메인 배경색을 bg-white로 변경
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <EventGrid />
      <FeaturedSection />
      {/* 앞에서 만든 푸터 컴포넌트 연결 */}
      <Footer />
    </div>
  );
}
