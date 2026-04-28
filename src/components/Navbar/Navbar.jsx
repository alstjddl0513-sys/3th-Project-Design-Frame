export default function Navbar() {
  return (
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
          Home
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
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-tr from-[#ff9a9e] to-[#fad0c4] text-white text-xs font-bold shadow-sm border border-white/50 cursor-pointer hover:scale-105 transition-transform ml-1">
            My
          </div>
        </div>
      </div>
    </nav>
  );
}
