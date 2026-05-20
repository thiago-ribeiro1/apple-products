import { Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductScrollytelling from "@/components/ProductScrollytellingNoSSR"

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Suspense fallback={null}>
        <ProductScrollytelling />
      </Suspense>
      <Footer />
    </main>
  )
}
