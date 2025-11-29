'use client'
import { useState, useEffect, useMemo } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function TabsBar() {
    const tabs = useMemo(() => [
        { id: 0, content: 'ABOUT', pathname: '#about' },
        { id: 1, content: 'SERVICES', pathname: '#services' },
        { id: 2, content: 'OUR CLIENTS', pathname: '#clients' },
        { id: 3, content: 'BLOGS', pathname: '#blogs' },
    ], [])

    const [scrollY, setScrollY] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div className={`fixed ${screenWidth >= 1280 && window.scrollY < document.body.offsetHeight - window.innerHeight - 400 && scrollY > 100 ? 'bottom-5' : 'bottom-0 translate-y-full'} left-1/2 -translate-x-1/2 z-[999999] flex items-center gap-1 rounded-xl bg-background p-[3px] duration-300`}>
            <div className={`py-2 px-4 h-[45px] flex items-center justify-center rounded-[10px] bg-black text-lg font-light text-foreground/50 hover:text-foreground text-nowrap cursor-pointer duration-500`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <FaArrowUp />
            </div>
            {tabs.map((tab, index) => (
                <Link key={index} href={tab.pathname} className={`py-2 px-4 rounded-[10px] hover:bg-(--primary) text-lg font-light border border-foreground/20 hover:border-(--primary) text-foreground text-nowrap duration-500`}>
                    {tab.content}
                </Link>
            ))}
            <Link href="#request-a-quote" className={`py-2 px-4 rounded-[10px] bg-(--primary) text-lg font-light border border-(--primary) text-foreground hover:shadow-[0_0_10px_var(--primary)] text-nowrap duration-500`}>
                REQUEST A QUOTE
            </Link>
        </div>
        // Tab with glass effect
        // <div className={`fixed ${scrollDirection === 'down' ? 'bottom-0 translate-y-full' : 'bottom-5'} left-1/2 -translate-x-1/2 z-[999999] flex items-center gap-2 rounded-full p-1 border border-[#d1d5db55] shadow-[0px_0px_4px_#fff,_0px_0px_7px_#000] bg-white bg-opacity-30 backdrop-blur-md duration-300`}>
        //     {tabs.map((tab, index) => (
        //         <Link key={index} href={"/" + tab.pathname} className={`py-2 px-5 rounded-full ${activeTab === tab.id && "bg-primary text-tertiary shadow-[0px_0px_2px_#000000]"} hover:bg-primary hover:text-white ${tab.id === 0 ? "text-2xl" : "text-base"} duration-300`}>
        //             {tab.content}
        //         </Link>
        //     ))}
        // </div>
    )
}
