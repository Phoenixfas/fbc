
import { useEffect, useState } from 'react'

interface Card {
    id: string;
    vid: string;
}

export default function HeroCardsVid({ services }: { services: Card[] }) {
    const [newServices, setNewServices] = useState<Card[]>([]);
    useEffect(() => {

        if (services && services.length > 0) {
            const repeatedServices = Array(2).fill(services).flat();
            setNewServices(repeatedServices);
        }
    }, [services]);
    return (
        newServices.map((service, i) => (
            <div key={i} className={"min-w-[250px] max-w-[250px] h-[350px] rounded-xl overflow-hidden shadow-[0_7px_20px_#00000088]"}>
                <video className='w-full h-full object-cover' autoPlay loop muted playsInline controls={false}>
                    <source src={service.vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        ))
    )
}
