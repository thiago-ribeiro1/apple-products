"use client"

import dynamic from "next/dynamic"

const ProductScrollytelling = dynamic(
  () => import("./ProductScrollytelling"),
  { ssr: false } 
)

export default ProductScrollytelling
