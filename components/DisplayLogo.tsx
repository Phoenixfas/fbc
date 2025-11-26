import Image from 'next/image'
import React from 'react'

export default function DisplayLogo() {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-[99999999999999] bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))]'>
            <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center rounded-full overflow-hidden">
                <Image src={"/logo_t_white.svg"} alt="logo" width={200} height={200} className="absolute w-[150px] h-[150px] object-contain animate-[spin_7s_linear_infinite_reverse]" />
                <Image src={"/logo_g_white.svg"} alt="logo" width={200} height={200} className="w-[150px] h-[150px] object-contain" />
            </div>
        </div>
    )
}
