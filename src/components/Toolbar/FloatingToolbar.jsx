export default function FloatingToolbar() {
  const Item = ({ icon, label }) => (
    <div className="flex flex-col items-center gap-1 cursor-pointer group">
      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition">
        {icon}
      </div>
      <span className="text-xs text-black/60">{label}</span>
    </div>
  );

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-xl p-4 rounded-2xl border border-white/40 shadow-lg flex flex-col gap-4">
      <Item icon="🎨" label="Theme" />
      <Item icon="✨" label="Effect" />
      <Item icon="⚙️" label="Settings" />
      <Item icon="👁️" label="Preview" />
    </div>
  );
}
