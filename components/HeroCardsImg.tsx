'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Card {
  id: string;
  img: string;
}

export default function HeroCardsImg({ services, rev }: { services: Card[], rev: boolean }) {
  const [newServices, setNewServices] = useState<Card[]>([]);
  useEffect(() => {

    if (services && services.length > 0) {
      const repeatedServices = Array(2).fill(rev ? services.reverse() : services).flat();
      setNewServices(repeatedServices);
    }
  }, [services, rev]);
  return (
    newServices.map((service, i) => (
      <div key={i} className={"min-w-[200px] max-w-[200px] h-[300px] sm:min-w-[250px] sm:max-w-[250px] sm:h-[350px] rounded-xl overflow-hidden shadow-[0_7px_20px_#00000088]"}>
        <Image src={service.img} className='w-full h-full object-cover' alt="service" width={150} height={300} />
      </div>
    ))
  )
}
