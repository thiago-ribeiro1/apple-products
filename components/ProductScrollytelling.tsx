"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProductImage from "./ProductImage"
import SceneText from "./SceneText"
import { products } from "@/lib/products"

gsap.registerPlugin(ScrollTrigger)

export default function ProductScrollytelling() {
  // ── Containers refs ────────────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null)
  const darkOverlayRef = useRef<HTMLDivElement>(null)

  // ── Cenas refs ─────────────────────────────────────────────────────
  const introRef = useRef<HTMLDivElement>(null)

  const iphoneRef = useRef<HTMLDivElement>(null)
  const iphoneTextRef = useRef<HTMLDivElement>(null)

  const macbookRef = useRef<HTMLDivElement>(null)
  const macbookTextRef = useRef<HTMLDivElement>(null)

  const ipadRef = useRef<HTMLDivElement>(null)
  const ipadTextRef = useRef<HTMLDivElement>(null)

  const airpodsRef = useRef<HTMLDivElement>(null)
  const airpodsTextRef = useRef<HTMLDivElement>(null)

  const watchRef = useRef<HTMLDivElement>(null)
  const watchTextRef = useRef<HTMLDivElement>(null)

  const finaleRef = useRef<HTMLDivElement>(null)

  // ── Dados dos produtos ────────────────────────────────────────────────────────
  const iphone = products.find((p) => p.id === "iphone")!
  const macbook = products.find((p) => p.id === "macbook")!
  const ipad = products.find((p) => p.id === "ipad")!
  const airpods = products.find((p) => p.id === "airpods")!
  const watch = products.find((p) => p.id === "apple-watch")!

  // ── Configuração do GSAP ──────────────────────────────────────────────────────
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Estados iniciais ocultos (síncronos antes do primeiro render) ──────────
      gsap.set(iphoneRef.current, { opacity: 0, scale: 0.65, filter: "blur(14px)" })
      gsap.set(macbookRef.current, { opacity: 0, scale: 0.78, y: 55 })
      gsap.set(ipadRef.current, { opacity: 0, scale: 0.72, x: 70 })
      gsap.set(airpodsRef.current, { opacity: 0, scale: 0.88, y: -28 })
      gsap.set(watchRef.current, { opacity: 0, scale: 0.52, rotate: -9 })
      gsap.set(
        [
          iphoneTextRef.current,
          macbookTextRef.current,
          ipadTextRef.current,
          airpodsTextRef.current,
          watchTextRef.current,
        ],
        { opacity: 0 }
      )
      gsap.set(darkOverlayRef.current, { opacity: 0 })
      gsap.set(finaleRef.current, { opacity: 0 })

      const mm = gsap.matchMedia()

      // ── Timeline desktop ──────────────────────────────────────────────────────
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        })

        // INTRO → SAÍDA
        tl.to(introRef.current, {
          opacity: 0,
          y: -60,
          duration: 1,
          ease: "power2.inOut",
        })

        // IPHONE → ENTRADA
        .to(
          iphoneRef.current,
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
          "-=0.4"
        )
        .to(iphoneTextRef.current, { opacity: 1, duration: 0.7 }, "-=0.7")

        // IPHONE → PAUSA (deriva sutil)
        .to(iphoneRef.current, { y: -30, rotate: 2.5, duration: 2, ease: "none" })

        // IPHONE → SAÍDA
        .to(iphoneTextRef.current, { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(
          iphoneRef.current,
          { opacity: 0, scale: 0.5, x: "-38%", duration: 0.9, ease: "power2.in" },
          "-=0.35"
        )

        // MACBOOK → ENTRADA
        .to(
          macbookRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "-=0.45"
        )
        .to(macbookTextRef.current, { opacity: 1, duration: 0.7 }, "-=0.7")

        // MACBOOK → PAUSA
        .to(macbookRef.current, { y: -20, duration: 2, ease: "none" })

        // MACBOOK → SAÍDA
        .to(macbookTextRef.current, { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(
          macbookRef.current,
          { opacity: 0, scale: 0.7, y: 40, duration: 0.9, ease: "power2.in" },
          "-=0.35"
        )

        // IPAD → ENTRADA
        .to(
          ipadRef.current,
          { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power2.out" },
          "-=0.45"
        )
        .to(ipadTextRef.current, { opacity: 1, duration: 0.7 }, "-=0.7")

        // IPAD → PAUSA
        .to(ipadRef.current, { y: -24, duration: 2, ease: "none" })

        // IPAD → SAÍDA  +  fundo escuro entra
        .to(ipadTextRef.current, { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(
          ipadRef.current,
          { opacity: 0, scale: 1.4, duration: 0.9, ease: "power2.in" },
          "-=0.35"
        )
        .to(darkOverlayRef.current, { opacity: 1, duration: 0.9 }, "-=0.65")

        // AIRPODS → ENTRADA
        .to(
          airpodsRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "-=0.45"
        )
        .to(airpodsTextRef.current, { opacity: 1, duration: 0.7 }, "-=0.7")

        // AIRPODS → PAUSA
        .to(airpodsRef.current, { y: -18, duration: 2, ease: "none" })

        // AIRPODS → SAÍDA
        .to(airpodsTextRef.current, { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(
          airpodsRef.current,
          { opacity: 0, scale: 0.38, duration: 0.9, ease: "power2.in" },
          "-=0.35"
        )

        // WATCH → ENTRADA
        .to(
          watchRef.current,
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power2.out" },
          "-=0.45"
        )
        .to(watchTextRef.current, { opacity: 1, duration: 0.7 }, "-=0.7")

        // WATCH → PAUSA (rotação lenta)
        .to(watchRef.current, { rotate: 5, duration: 2, ease: "none" })

        // WATCH → SAÍDA  +  fundo clareia  +  FINALE
        .to(watchTextRef.current, { opacity: 0, duration: 0.5 }, "-=0.6")
        .to(darkOverlayRef.current, { opacity: 0, duration: 0.85 }, "-=0.35")
        .to(
          watchRef.current,
          { opacity: 0, scale: 2.4, duration: 0.9, ease: "power2.in" },
          "-=0.7"
        )
        .to(
          finaleRef.current,
          { opacity: 1, duration: 1.1, ease: "power2.out" },
          "-=0.3"
        )
      })

      // ── Timeline mobile (simplificada) ────────────────────────────────────────
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.6,
            invalidateOnRefresh: true,
          },
        })

        tl.to(introRef.current, { opacity: 0, y: -40, duration: 0.8 })

          .to(
            iphoneRef.current,
            { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
            "-=0.2"
          )
          .to(iphoneTextRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
          .to({}, { duration: 1.5 })
          .to(iphoneTextRef.current, { opacity: 0, duration: 0.4 })
          .to(iphoneRef.current, { opacity: 0, scale: 0.6, duration: 0.7 }, "-=0.3")

          .to(macbookRef.current, { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.3")
          .to(macbookTextRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
          .to({}, { duration: 1.5 })
          .to(macbookTextRef.current, { opacity: 0, duration: 0.4 })
          .to(macbookRef.current, { opacity: 0, scale: 0.6, duration: 0.7 }, "-=0.3")

          .to(ipadRef.current, { opacity: 1, scale: 1, x: 0, duration: 1 }, "-=0.3")
          .to(ipadTextRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
          .to({}, { duration: 1.5 })
          .to(ipadTextRef.current, { opacity: 0, duration: 0.4 })
          .to(ipadRef.current, { opacity: 0, scale: 0.6, duration: 0.7 }, "-=0.3")
          .to(darkOverlayRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")

          .to(airpodsRef.current, { opacity: 1, scale: 1, y: 0, duration: 1 }, "-=0.3")
          .to(airpodsTextRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
          .to({}, { duration: 1.5 })
          .to(airpodsTextRef.current, { opacity: 0, duration: 0.4 })
          .to(airpodsRef.current, { opacity: 0, scale: 0.6, duration: 0.7 }, "-=0.3")

          .to(watchRef.current, { opacity: 1, scale: 1, rotate: 0, duration: 1 }, "-=0.3")
          .to(watchTextRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
          .to({}, { duration: 1.5 })
          .to(watchTextRef.current, { opacity: 0, duration: 0.4 })
          .to(darkOverlayRef.current, { opacity: 0, duration: 0.5 }, "-=0.2")
          .to(watchRef.current, { opacity: 0, scale: 0.6, duration: 0.7 }, "-=0.4")
          .to(finaleRef.current, { opacity: 1, duration: 0.9 })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // ── Renderização ──────────────────────────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative" style={{ height: "800vh" }}>
      {/* ── Área fixa da viewport ─────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Sobreposição escura - cobre tudo abaixo das cenas AirPods/Watch */}
        <div
          ref={darkOverlayRef}
          className="absolute inset-0 bg-[#0a0a0a] z-10 pointer-events-none"
        />

        {/* ══ INTRO ═══════════════════════════════════════════════════════════ */}
        <div
          ref={introRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
        >
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6e6e73] mb-8">
            A linha completa
          </p>

          <h1 className="text-[clamp(2.8rem,8vw,8.5rem)] font-semibold text-[#1d1d1f] tracking-[-0.035em] leading-[1.02] text-center">
            Tecnologia que
            <br />
            muda tudo
          </h1>

          <p className="mt-6 text-[clamp(0.8rem,1.4vw,1.05rem)] text-[#6e6e73] text-center max-w-sm leading-relaxed">
            Cinco produtos únicos
            <br />
            Juntos, entregam uma experiência completa
          </p>

          <div className="mt-16 flex flex-col items-center gap-2.5 animate-scroll-hint">
            <span className="text-[10px] text-[#a1a1a6] tracking-[0.14em] uppercase">
              Scroll
            </span>
            <svg
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 0v18M1 11l6 7 6-7"
                stroke="#a1a1a6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ══ IPHONE ══════════════════════════════════════════════════════════ */}
        <div
          ref={iphoneRef}
          className="absolute inset-0 z-30 flex items-center justify-center pb-[25%] md:pb-0"
        >
          <ProductImage
            product={iphone}
            priority
            containerClassName="relative h-[60vh] md:h-[68vh] max-h-[620px]"
            style={{ aspectRatio: iphone.aspectRatio }}
          />
        </div>
        <div
          ref={iphoneTextRef}
          className="absolute z-40 bottom-[10%] left-[6%] md:bottom-[16%] md:left-[8%] max-w-[240px]"
        >
          <SceneText product={iphone} align="left" />
        </div>

        {/* ══ MACBOOK ═════════════════════════════════════════════════════════ */}
        <div
          ref={macbookRef}
          className="absolute inset-0 z-30 flex items-center justify-center"
        >
          <ProductImage
            product={macbook}
            containerClassName="relative w-[85vw] md:w-[680px] max-w-[820px]"
            style={{ aspectRatio: macbook.aspectRatio }}
          />
        </div>
        <div
          ref={macbookTextRef}
          className="absolute z-40 bottom-[10%] right-[6%] md:bottom-[16%] md:right-[8%] max-w-[240px]"
        >
          <SceneText product={macbook} align="right" />
        </div>

        {/* ══ IPAD ════════════════════════════════════════════════════════════ */}
        <div
          ref={ipadRef}
          className="absolute inset-0 z-30 flex items-center justify-center pb-[25%] md:pb-0"
        >
          <ProductImage
            product={ipad}
            containerClassName="relative h-[64vh] md:h-[72vh] max-h-[680px]"
            style={{ aspectRatio: ipad.aspectRatio }}
          />
        </div>
        <div
          ref={ipadTextRef}
          className="absolute z-40 bottom-[10%] left-[6%] md:bottom-[16%] md:left-[8%] max-w-[240px]"
        >
          <SceneText product={ipad} align="left" />
        </div>

        {/* ══ AIRPODS ═════════════════════════════════════════════════════════ */}
        <div
          ref={airpodsRef}
          className="absolute inset-0 z-30 flex items-center justify-center"
        >
          <ProductImage
            product={airpods}
            containerClassName="relative h-[52vh] md:h-[58vh] max-h-[540px]"
            style={{ aspectRatio: airpods.aspectRatio }}
          />
        </div>
        <div
          ref={airpodsTextRef}
          className="absolute z-40 bottom-[10%] right-[6%] md:bottom-[16%] md:right-[8%] max-w-[240px]"
        >
          <SceneText product={airpods} align="right" />
        </div>

        {/* ══ APPLE WATCH ═════════════════════════════════════════════════════ */}
        <div
          ref={watchRef}
          className="absolute inset-0 z-30 flex items-center justify-center"
        >
          <ProductImage
            product={watch}
            containerClassName="relative h-[52vh] md:h-[58vh] max-h-[540px]"
            style={{ aspectRatio: watch.aspectRatio }}
          />
        </div>
        <div
          ref={watchTextRef}
          className="absolute z-40 bottom-[10%] left-[6%] md:bottom-[16%] md:left-[8%] max-w-[240px]"
        >
          <SceneText product={watch} align="left" />
        </div>

        {/* ══ FINALE ══════════════════════════════════════════════════════════ */}
        <div
          ref={finaleRef}
          className="absolute inset-0 z-50 bg-[#f5f5f5] flex flex-col items-center justify-center px-6 md:px-12 pt-20"
        >
          {/* Composição dos produtos - escala em vw para não transbordar */}
          <div className="flex items-end justify-center gap-[2vw] mb-[6vh] w-full max-w-3xl">
            {/* Watch - bem à esquerda, pequeno */}
            <div className="flex-shrink-0 flex items-end">
              <ProductImage
                product={watch}
                containerClassName="relative"
                style={{ width: "6.5vw", minWidth: "40px", maxWidth: "88px", aspectRatio: watch.aspectRatio }}
              />
            </div>

            {/* iPad - à esquerda, médio */}
            <div className="flex-shrink-0 flex items-end">
              <ProductImage
                product={ipad}
                containerClassName="relative"
                style={{ height: "13vw", minHeight: "80px", maxHeight: "170px", aspectRatio: ipad.aspectRatio }}
              />
            </div>

            {/* MacBook - centralizado, grande e dominante */}
            <div className="flex-shrink-0 flex items-end">
              <ProductImage
                product={macbook}
                containerClassName="relative"
                style={{ width: "26vw", minWidth: "140px", maxWidth: "340px", aspectRatio: macbook.aspectRatio }}
              />
            </div>

            {/* iPhone - à direita, médio */}
            <div className="flex-shrink-0 flex items-end">
              <ProductImage
                product={iphone}
                containerClassName="relative"
                style={{ height: "13vw", minHeight: "80px", maxHeight: "170px", aspectRatio: iphone.aspectRatio }}
              />
            </div>

            {/* AirPods - bem à direita, pequeno */}
            <div className="flex-shrink-0 flex items-end">
              <ProductImage
                product={airpods}
                containerClassName="relative"
                style={{ width: "6.5vw", minWidth: "40px", maxWidth: "88px", aspectRatio: airpods.aspectRatio }}
              />
            </div>
          </div>

          {/* Texto final */}
          <h2 className="text-[clamp(2rem,5.5vw,5.5rem)] font-semibold text-[#1d1d1f] tracking-[-0.035em] text-center leading-[1.04] mb-5">
            Cinco produtos
            <br />
            Uma só ideia
          </h2>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-9 py-3.5 bg-[#1d1d1f] text-white text-[13px] font-medium tracking-[0.02em] rounded-full hover:bg-[#3d3d3f] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Descobrir todos os produtos
          </button>
        </div>
      </div>
    </div>
  )
}
