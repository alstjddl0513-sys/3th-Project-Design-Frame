import { Link } from 'react-router-dom';

export default function NavigatePage() {
  const menus = [
    { name: 'Create', path: '/create', desc: '초대장 생성 화면' },
    { name: 'Explore', path: '/explore', desc: '전체 이벤트 탐색' },
    { name: 'Draft', path: '/draft', desc: '초대장 생성 완료' },
    { name: 'Home', path: '/home', desc: '대시보드' },
    { name: 'Invite', path: '/invite', desc: '게스트 초대장 상세' },
    { name: 'Send', path: '/send', desc: '초대장 보내기' },
    { name: 'Share', path: '/share', desc: '초대장 보내기 완료 및 링크 공유' },
    { name: 'Landing', path: '/landing', desc: '랜딩페이지' },
        { name: 'Landing', path: '/landing2', desc: '랜딩페이지' },
  ];

  return (
    <div className="p-8 font-mono bg-white min-h-screen text-sm">
      <h1 className="text-xl font-bold mb-6 border-b pb-2 text-gray-800">
        INDEX{' '}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            to={menu.path}
            className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors group"
          >
            <div>
              <span className="font-bold text-blue-600 group-hover:underline">
                {menu.name}
              </span>
              <code className="ml-2 text-xs text-gray-400 bg-gray-50 px-1 rounded">
                {menu.path}
              </code>
              <p className="text-[11px] text-gray-500 mt-1">{menu.desc}</p>
            </div>
            <span className="text-gray-300 group-hover:text-blue-500">→</span>
          </Link>
        ))}
      </div>

      <footer className="mt-10 pt-4 border-t text-[10px] text-gray-400">
        고급 프로젝트 - Developer Navigation Page
      </footer>
    </div>
  );
}
