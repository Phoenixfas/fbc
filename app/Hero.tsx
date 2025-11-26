import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='relative w-full h-screen'>
            <div className="absolute left-0 top-0 w-full h-full">
                <Image className='relative w-full h-full saturate-200 object-cover object-center' src={"/images/cube.png"} alt="cube" fill unoptimized quality={100} />
                <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_top,_#000_10%,_transparent_30%,_transparent_70%,_#000_90%)]"></div>
            </div>
        </div>
    )
}
