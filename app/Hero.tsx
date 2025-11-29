import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='relative w-full h-screen'>
            <div className="absolute left-0 top-0 w-full h-full">
                <Image className='relative w-full h-full saturate-[120%] object-cover object-center' src={"/images/cube.png"} alt="cube" fill unoptimized quality={100} />
                <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_top,_#000_10%,_transparent_30%,_transparent_70%,_#000_90%)]"></div>
            </div>

            <div className="absolute left-0 top-0 w-full h-full">
                <div className="absolute left-1/2 top-1/2 -translate-x-[150%] -translate-y-1/2 w-72 h-72 bg-(--primary) rounded-full blur-[150px]"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-(--primary) rounded-full blur-[150px]"></div>
            </div>

            <div className="relative w-full h-full px-5 sm:px-10 md:px-20 pt-40">
                <h1 className="w-fit flex flex-col text-6xl font-bold uppercase mb-5">
                    <span className='relative hero-gradient-text'><Image className='absolute top-0 left-0 -translate-x-full ' src={"/logo/quote.svg"} alt='quotation' width={20 * 1.5} height={13 * 1.5} /> Focus.</span>
                    <span className='relative hero-gradient-text'>Build.</span>
                    <span className='relative hero-gradient-text'>Conquer. <Image className='absolute top-0 right-0 translate-x-full rotate-y-180' src={"/logo/quote.svg"} alt='quotation' width={20 * 1.5} height={13 * 1.5} /> </span>
                </h1>
                <h3 className="max-w-[300px] text-xl text-foreground font-light mb-20">Turning financial confusions lead to strategic decisions.</h3>

                <div className="flex items-end">
                    <h3 className='text-[9rem] leading-26 font-bold hero-gradient-text-2 align-bottom mr-5'>82<span className='text-7xl'>%</span></h3>
                    <p className='max-w-[250px] text-xl text-foreground'>of small businesses fail from poor cash flow</p>
                    <div className="p-1 bg-foreground/10 backdrop-blur-3xl rounded-lg border border-foreground/20">
                        <div className="w-32 p-2 bg-[linear-gradient(-30deg,_#2f3032_40%,_#2f303255_60%)]  rounded-lg">
                            <p className='flex flex-col gap-1 text-base leading-[1.1rem] text-foreground uppercase font-bold'>find your success <span className='text-(--primary) text-2xl'>score</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
