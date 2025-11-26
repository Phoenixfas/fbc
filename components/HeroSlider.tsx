'use client'
import { useEffect, useRef } from "react"
import cards from "../data/heroCards"
import HeroCardsImg from "../components/HeroCardsImg"
import HeroCardsVid from "./HeroCardsVid"

export default function HeroSlider({ rev = false, showVids = false }: { rev?: boolean, showVids?: boolean }) {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationFrame: number
    let position = 0
    const speed = 100 // pixels per second
    let lastTime = performance.now()

    const animate = (time: number) => {
      const deltaTime = (time - lastTime) / 1000 // seconds since last frame
      lastTime = time

      position -= speed * deltaTime
      const totalWidth = slider.scrollWidth / 2

      if (position <= -totalWidth) {
        position += totalWidth // loop back seamlessly
      }

      slider.style.transform = `translateX(${position}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex items-center gap-10 ease-linear px-10 py-10"
        style={{ whiteSpace: 'nowrap' }}
      >
        {showVids ?
          <>
            <HeroCardsVid services={cards} />
            <HeroCardsVid services={cards} />
          </> :
          <>
            <HeroCardsImg services={cards} rev={rev} />
            <HeroCardsImg services={cards} rev={rev} />
          </>
        }
      </div>
    </div>
  )
}
