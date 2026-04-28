import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { label: 'Help', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Get the app ↗', href: '#' },
  ];

  const socialIcons = [
    { id: 'instagram', icon: '📸', href: '#' },
    { id: 'twitter', icon: '🐦', href: '#' },
    { id: 'tiktok', icon: '🎵', href: '#' },
  ];

  return (
    <footer className="w-full mt-40 py-12 border-t border-black/5 flex flex-col items-center gap-4 bg-white">
      {/* 2. 로고 섹션 */}
      <div className="flex items-center">
        <span className="text-xl font-black italic tracking-tighter text-black/70">
          로고 WARA
        </span>
      </div>

      {/* 1. 상단 버튼 섹션 */}
      <div className="flex gap-3 mb-1">
        <button className="px-5 py-2 rounded-full border border-black/10 text-[13px] font-black hover:bg-black/5 transition-all flex items-center gap-2 text-black/80">
          🌐 Explore events
        </button>
        <button className="px-5 py-2 rounded-full bg-black text-white text-[13px] font-black hover:opacity-80 transition-all">
          ⊕ Create a free event
        </button>
      </div>

      {/* 3. 주요 링크 섹션 */}
      <nav className="flex gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[12px] font-bold text-black/40 hover:text-black transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* 4. 소셜 미디어 아이콘 섹션 */}
      <div className="flex gap-5 pt-1">
        {socialIcons.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="text-lg grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
