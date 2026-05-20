import type { Product } from "@/lib/products"

interface Props {
  product: Product
  align?: "left" | "right"
}

export default function SceneText({ product, align = "left" }: Props) {
  const isDark = product.theme === "dark"

  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p
        className={`text-[10px] font-medium tracking-[0.14em] uppercase mb-3 ${
          isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"
        }`}
      >
        {product.label}
      </p>

      <h2
        className={`text-[clamp(1.25rem,2.5vw,2rem)] font-semibold tracking-[-0.025em] leading-[1.1] mb-3 ${
          isDark ? "text-[#f5f5f7]" : "text-[#1d1d1f]"
        }`}
      >
        {product.title}
      </h2>

      <p
        className={`text-[clamp(0.75rem,1.1vw,0.875rem)] leading-relaxed max-w-[220px] ${
          isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"
        } ${align === "right" ? "ml-auto" : ""}`}
      >
        {product.subtitle}
      </p>
    </div>
  )
}
