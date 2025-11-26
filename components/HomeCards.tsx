'use client'
import style from "../styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
// import cards from "../data/cards"
import svgRenderComponent from "./svgRenderComponent"
import { useEffect, useState } from "react"
// import blogs from "@/data/blogs"
import useFetch from "@/hooks/useClientFetch"


interface BlogType {
    _id: string;
    title: string;
    image: string;
    snippet: string;
    markdown: string;
    sanitizedHtml: string;
    keywords: string[];
    author: string;
    date: string;
    component: string;
}

export default function HomeCards() {
    const { data: blogs = [], loading } = useFetch('news')

    // const [svg1Active, setSvg1Active] = useState<string[]>([])
    const [svg2Active, setSvg2Active] = useState<string[]>([])

    const handleMouseEnter = (title: string) => {
        // setSvg1Active(svg1Active.filter((item) => item !== title));
        setSvg2Active([...svg2Active, title]);
        // console.log(svg1Active.includes(title), svg1Active, title)
    }
    const handleMouseExit = (title: string) => {
        // setSvg1Active([...svg1Active, title]);
        setSvg2Active(svg2Active.filter((item) => item !== title));
        // console.log(svg1Active.includes(title), svg1Active, title)
    }


    useEffect(() => {
        const target = document.getElementById('target');

        if (!target) return;

        const movingCards: HTMLElement | null = document.getElementById('moving-cards');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && movingCards) {
                    // Initial logging when the component is in view
                    const rect = target.getBoundingClientRect();
                    const distanceFromTop = window.innerHeight - rect.bottom;
                    if (distanceFromTop < 0) {
                        movingCards.style.transform = `translateY(-100%)`;
                    } else {
                        movingCards.style.transform = `translateY(100%)`;
                    }
                    logDistanceFromBottom();
                    // Add a scroll event listener to update the log on scroll
                    window.addEventListener('scroll', logDistanceFromBottom);
                    // console.log("in view");
                } else {
                    window.removeEventListener('scroll', logDistanceFromBottom);
                    // console.log("out of view");
                }
            });
        });

        observer.observe(target);

        // Function to calculate and log the distance
        const logDistanceFromBottom = () => {
            const rect = target.getBoundingClientRect();
            const distanceFromTop = window.innerHeight - rect.bottom;

            // Assuming min_val = 0 and max_val = window.innerHeight
            const percentage = (distanceFromTop / window.innerHeight) * 100 + 15;
            if (movingCards) {
                movingCards.style.transform = `translateX(${-percentage + 20}%)`;
            }
        };

    }, [])


    return (
        <div id="target" className={style.homeCards__cardsHolder}>
            {loading && (
                <div className="w-full h-[500px] flex items-center justify-center">
                    <div className="w-12 h-12 spinner border-[#050752_!important] border-t-[transparent_!important]"></div>
                </div>
            )}
            <div id="moving-cards" className={style.homeCards__cards}>
                {blogs && blogs?.map((card: BlogType, index: number) => (
                    <Link key={index} href={`/blogs/${card._id}`} className={style.homeCards__card_i} >
                        <div className={style.homeCards__card}
                            onMouseEnter={(e) => {
                                const textElement = e.currentTarget.querySelector('#card-text')
                                textElement?.classList.add(style.homeCards__cardTextActive)
                                handleMouseEnter(card.title)
                            }}
                            onMouseLeave={(e) => {
                                handleMouseExit(card.title)
                                const textElement = e.currentTarget.querySelector('#card-text')
                                textElement?.classList.remove(style.homeCards__cardTextActive)
                            }}
                        >
                            <Image src={card.image} alt={card.title} width={300} height={150} priority unoptimized quality={100} />
                            <div className={`${style.homeCards__cardText}`}>
                                {/* {svg1Active.includes(card.title) && svgRenderComponent({ ...card, component: card.component as "Twist" | "Square" | "Shine" | "Line" | "Circle" | "Zigzag" | "S" })} */}
                                {svg2Active.includes(card.title) && svgRenderComponent({ ...card, component: card.component as "Twist" | "Square" | "Shine" | "Line" | "Circle" | "Zigzag" | "S" })}
                                <p id="card-text">{card.title.substring(0, 30) + "..."}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

