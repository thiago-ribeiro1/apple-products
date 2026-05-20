export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#d2d2d7]/60 bg-white">
      <p className="text-[11px] text-[#6e6e73] tracking-[0.04em]">
        Projeto experimental - portfólio e estudo visual
      </p>

      <div className="flex items-center gap-1 text-[#d2d2d7]">
        {["Next.js", "GSAP", "ScrollTrigger", "Tailwind CSS"].map((tech, i, arr) => (
          <span key={tech} className="flex items-center gap-1">
            <span className="text-[11px] text-[#6e6e73] tracking-[0.02em]">
              {tech}
            </span>
            {i < arr.length - 1 && (
              <span className="text-[#d2d2d7] text-[11px]">·</span>
            )}
          </span>
        ))}
      </div>
    </footer>
  )
}
