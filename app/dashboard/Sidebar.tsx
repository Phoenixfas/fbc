'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoCaretForward } from 'react-icons/io5'
import { AiFillDashboard } from 'react-icons/ai'
// import { GiNewspaper, GiBarracksTent, GiPublicSpeaker } from 'react-icons/gi'
import { MdArticle } from 'react-icons/md'

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        switch (pathname.split('/')[2]) {
            case undefined:
                setActive('dashboard')
                break
            case 'blog':
                setActive('blog')
                break

            default:
                break
        }
    }, [pathname])
    return (
        <div className={`relative ${isOpen ? "w-72 sidebar" : "w-20"} h-screen m-0 duration-300 rounded-r-md bg-[linear-gradient(to_top_right,_var(--tertiary),_var(--secondary),_var(--primary))] `}>
            <div className='bg-[#4EAEE5] rounded-full absolute right-0 top-20 translate-x-1/2 cursor-pointer w-6 h-6 flex items-center justify-center'>
                <IoCaretForward className={`${isOpen ? "rotate-180" : ""} duration-300`} color='#fff' size={20} onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className='h-28 w-full flex items-start justify-center pt-5'>
                <Image className={`${isOpen ? "w-[100px] h-[100px]" : "w-[50px] h-[50px]"} object-contain duration-300`} src='/logo_white.svg' width={200} height={200} alt="Logo" priority />
            </div>

            <div className='flex flex-col  gap-1 w-full p-4'>
                <Link href='/dashboard' onClick={() => setActive('dashboard')} title="dashboard">
                    <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active === 'dashboard' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                        <AiFillDashboard className={`${isOpen ? '' : 'flex-1'}`} size={20} />
                        {isOpen && <p className='duration-300'>Dashboard</p>}
                    </div>
                </Link>
                <Link href='/dashboard/blog' onClick={() => setActive('blog')} title="blog">
                    <div className={`flex h-12 rounded-lg duration-300 hover:bg-white hover:text-[#050752] ${active === 'blog' ? 'bg-[#050752]' : ''} items-center text-white gap-5 ${isOpen ? "p-4" : ""}`}>
                        <MdArticle className={`${isOpen ? '' : 'flex-1'}`} size={20} />
                        {isOpen && <p className='duration-300'>Blog</p>}
                    </div>
                </Link>


                <hr />




            </div>
        </div>
    )
}
