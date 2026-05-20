export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-5 bg-white/75 backdrop-blur-xl border-b border-[#d2d2d7]/20">
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-full bg-[#1d1d1f]" />
        <span className="text-[13px] font-semibold text-[#1d1d1f] tracking-tight">
          apple
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {["iPhone", "MacBook", "iPad", "AirPods", "Watch"].map((item) => (
          <span
            key={item}
            className="text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] tracking-[0.02em] cursor-pointer transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </nav>

      <div className="w-5 h-5 md:hidden flex flex-col justify-center gap-[5px] cursor-pointer">
        <span className="block h-[1.5px] w-full bg-[#1d1d1f] rounded-full" />
        <span className="block h-[1.5px] w-3/4 bg-[#1d1d1f] rounded-full" />
      </div>
    </header>
  )
}
