"use client"

import { useState } from "react"
import Image from "next/image"
import type { CSSProperties } from "react"
import type { Product } from "@/lib/products"

interface Props {
  product: Product
  containerClassName?: string
  style?: CSSProperties
  priority?: boolean
}

function Fallback({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center rounded-[2rem] border ${
        isDark
          ? "border-[#2a2a2a] bg-gradient-to-b from-[#1a1a1a] to-[#111]"
          : "border-[#d2d2d7] bg-gradient-to-b from-[#fafafa] to-[#efefef]"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-4 ${
          isDark ? "border-[#3d3d3f]" : "border-[#d2d2d7]"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full ${isDark ? "bg-[#3d3d3f]" : "bg-[#d2d2d7]"}`}
        />
      </div>
      <span
        className={`text-[10px] tracking-[0.16em] uppercase font-medium ${
          isDark ? "text-[#6e6e73]" : "text-[#a1a1a6]"
        }`}
      >
        {label}
      </span>
    </div>
  )
}

export default function ProductImage({
  product,
  containerClassName = "",
  style,
  priority = false,
}: Props) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${containerClassName}`} style={style}>
      {hasError ? (
        <Fallback label={product.label} isDark={product.theme === "dark"} />
      ) : (
        <Image
          src={product.image}
          alt={product.label}
          fill
          style={{ objectFit: "contain" }}
          onError={() => setHasError(true)}
          priority={priority}
          sizes="(max-width: 768px) 90vw, 60vw"
        />
      )}
    </div>
  )
}
