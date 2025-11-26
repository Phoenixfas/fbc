'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const tabs = useMemo(() => [
        { id: 0, content: 'ABOUT', pathname: 'about' },
        { id: 1, content: 'SERVICES', pathname: 'services' },
        { id: 2, content: 'OUR CLIENTS', pathname: 'clients' },
        { id: 3, content: 'BLOGS', pathname: 'blogs' },
    ], [])
    const [scrollY, setScrollY] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

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
        <>
            <div className={`fixed ${screenWidth >= 1280 && scrollY > 100 ? "-translate-y-full" : ""} top-0 left-0 w-full flex justify-between items-center gap-10 px-5 sm:px-10 md:px-20 py-4 sm:py-7 text-lg text-nowrap font-normal border-b border-background ${drawerOpen ? "bg-foreground" : "bg-black"} z-99999 duration-500`}>
                <Link href="/" className='flex-1 h-[50px] flex'>
                    <Image src="/logo/full_o.svg" alt="Foundation Business Consulting" width={200} height={50} className='object-contain' />
                </Link>
                <div className='hidden xl:flex flex-1 items-center justify-center gap-8'>
                    <Link href="/" className='text-white hover:text-(--primary) duration-500'>ABOUT</Link>
                    <Link href="/" className='text-white hover:text-(--primary) duration-500'>SERVICES</Link>
                    <Link href="/" className='text-white hover:text-(--primary) duration-500'>OUR CLIENTS</Link>
                    <Link href="/" className='text-white hover:text-(--primary) duration-500'>BLOGS</Link>
                </div>
                <div className='hidden xl:flex flex-1 items-center justify-end gap-3'>
                    <Link href="/" className='text-white px-5 py-3 border border-background rounded-xl hover:bg-(--primary) hover:border-(--primary) hover:shadow-[0_0_10px_var(--primary)] duration-500'>CONTACT US</Link>
                    <Link href="/" className='text-white px-5 py-3 border border-background rounded-xl bg-background hover:bg-(--primary) hover:border-(--primary) hover:shadow-[0_0_10px_var(--primary)] duration-500'>REQUEST A QUOTE</Link>
                </div>
                <div className={`flex xl:hidden p-2 rounded-xl items-center justify-center cursor-pointer ${drawerOpen ? "bg-background/20 text-black" : "bg-background text-foreground"} hover:border-(--primary) duration-500`} onClick={() => setDrawerOpen(!drawerOpen)}>
                    {drawerOpen ? <IoClose className="text-3xl" /> : <HiOutlineMenuAlt3 className="text-3xl" />}
                </div>
            </div>
            <div className={`fixed top-0 left-0 ${drawerOpen ? "translate-y-0" : "-translate-y-full"} w-full h-full bg-foreground z-99998 duration-500`}>
                <div className={`relative flex items-center gap-1 rounded-xl bg-background p-[3px] duration-300`}>
                    {tabs.map((tab, index) => (
                        <Link key={index} href={"/" + tab.pathname} className={`py-2 px-4 rounded-[10px] hover:bg-(--primary) text-lg font-light border border-foreground/20 hover:border-(--primary) text-foreground text-nowrap duration-500`}>
                            {tab.content}
                        </Link>
                    ))}
                    <Link href="/request-a-quote" className={`py-2 px-4 rounded-[10px] bg-(--primary) text-lg font-light border border-(--primary) text-foreground hover:shadow-[0_0_10px_var(--primary)] text-nowrap duration-500`}>
                        REQUEST A QUOTE
                    </Link>
                </div>
            </div>
        </>
    )
}
