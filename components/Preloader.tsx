'use client'
import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
import DisplayLogo from "./DisplayLogo";

export default function Preloader({ children, }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [isMounted])

    return (
        isMounted ? <div className="w-full flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div> : <DisplayLogo />
    )
}
