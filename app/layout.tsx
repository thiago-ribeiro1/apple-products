import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Apple - Products",
  description:
    "Descubra a linha completa de produtos Apple. iPhone 16 Pro, MacBook Pro com chip M4, iPad Pro, AirPods Pro e Apple Watch Series 10. Tecnologia que muda tudo.",
    icons: {
      icon: "/products/icon.png",   
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
