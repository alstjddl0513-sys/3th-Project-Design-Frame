import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  const categories = [
    { id: 'search', label: 'Search' },
    { id: 'upcoming', label: 'Upcoming 1' },
    { id: 'hosting', label: 'Hosting 0' },
    { id: 'open', label: 'Open invite 0' },
    { id: 'attended', label: 'Attended 0' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      {/* TOP GRADIENT SECTION */}
      <nav className="fixed top-0 left-0 w-full px-8 py-5 flex justify-between items-center z-50 bg-transparent">
        {/* Logo: 텍스트 로고 */}
        <div className="flex items-center cursor-pointer">
          <span className="text-2xl font-black tracking-tighter text-black">
            wara
          </span>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4">
          {/* Home 버튼 */}
          <button className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-black/5 shadow-sm font-bold text-sm hover:bg-white transition-all">
            + create
          </button>

          {/* 아이콘 그룹: 배경 없이 간격만 유지 */}
          <div className="flex items-center gap-3">
            {[
              { icon: '?', label: 'help' },
              { icon: '🌐', label: 'language' },
              { icon: '🔔', label: 'notifications' },
            ].map((item, i) => (
              <button
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-xl text-black/70"
              >
                {item.icon}
              </button>
            ))}

            {/* User Profile Avatar */}
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ff9a9e] to-[#fad0c4] text-white text-xs font-bold shadow-sm border border-white/50 cursor-pointer hover:scale-105 transition-transform ml-1">
              My
            </div>
          </div>
        </div>
      </nav>

      <div className="relative w-full h-[50vh] flex flex-col justify-end px-12 pb-16">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-purple-200 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-[10%] right-[-5%] w-[50%] h-[70%] bg-blue-200 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[60%] bg-pink-100 rounded-full blur-[150px] opacity-40" />
        </div>

        <div className="relative z-10 space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-black">
            Welcome to Partiful 닉네임!
          </h1>
          <p className="text-black/50 font-medium">
            You have{' '}
            <span className="text-black font-semibold">1 upcoming event</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-12 -mt-8 relative z-20">
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all ${
                cat.id === 'upcoming'
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-black/5 text-black/50 hover:bg-black/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20">
          {/* LEFT SIDE */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="relative group w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-black/5 cursor-pointer bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Event cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <p className="text-xs font-black truncate text-white">
                    고급 프로젝트 - Wara
                  </p>
                  <p className="text-[10px] text-white/70">Hosted by 닉네임</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-black/30 uppercase tracking-widest">
                Your Cards
              </h3>
              <div className="w-48 p-6 rounded-2xl bg-black/[0.03] border border-black/5 flex flex-col items-center text-center gap-4 hover:bg-black/[0.05] transition-colors">
                <div className="text-3xl grayscale-[0.2]">🎴</div>
                <div>
                  <p className="text-xs font-black text-black/80">
                    Create a Digital Card
                  </p>
                  <p className="text-[10px] text-black/40 mt-1">
                    For birthdays, announcements, and more!
                  </p>
                </div>
                <button className="w-full py-2 rounded-full bg-black/5 text-[10px] font-black text-black/70 hover:bg-black/10 transition-all">
                  + New card
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center justify-start pt-20 space-y-6 text-center">
            <div className="text-5xl opacity-30 grayscale-[0.5] animate-bounce">
              😑
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-black text-black/70">
                No mutuals yet
              </h2>
              <p className="text-sm text-black/30">
                Check back here once you go to your first event!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
