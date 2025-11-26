'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

export default function FloatingBtns() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setToggle(true)
            } else
                setToggle(false)
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }

    }, []);
    return (
        <div className='fixed bottom-5 right-0 p-2 px-5 flex items-center gap-2 z-[9999999] rounded-l-full bg-white shadow-lg overflow-hidden'>
            <p className={`text-black pr-2 ${toggle ? 'hidden' : 'block'} duration-300 overflow-hidden`}>Follow Us</p>
            <Link href={'https://www.linkedin.com/company/impact-makers-events'} target='_blank' className='text-secondary hover:scale-110 duration-300'>
                <FaLinkedin className='text-3xl text-primary' />
            </Link>
            <Link href={'https://wa.me/+971547114951'} target='_blank' className='text-secondary hover:scale-110 duration-300'>
                <FaWhatsappSquare className='text-3xl text-green-400' />
            </Link>
        </div>
    )
}
