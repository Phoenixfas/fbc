import style from "../styles/Home.module.css"
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import ShineSvg from "../public/images/svgs/shine_animated.svg"
// import Shine2Svg from "../public/images/svgs/shine2_animated.svg"
// import Shine3Svg from "../public/images/svgs/shine3_animated.svg"
// import ReactPlayer from "react-player"

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
}

// services type
interface Service {
    id: string;
    name: string;
    snippet: string;
}

export default function ServicesCards({ serviceActive, services }: { serviceActive: number, services: Service[] }) {
    // const [shine, setShine] = useState(false)
    // const [hasWindow, setHasWindow] = useState(false);
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         setHasWindow(true);
    //     }
    // }, []);


    return (
        <div className={style.servicesBottom}>
            {services && services.map((service, index) => (
                <AnimatePresence key={index}>
                    {serviceActive === Number(service.id) && (
                        <motion.div variants={variants} initial={"hidden"} animate={"visible"} exit={"hidden"} className={`${style.services__cards} ${serviceActive === Number(service.id) && style.service__visible}`} >
                            {/* {hasWindow && <ReactPlayer url={"/videos/services/port.mov"} className={style.services__video}  />} */}
                            <video src="/videos/service_vid.MOV" className={style.services__video} autoPlay loop muted playsInline></video>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, type: "spring", stiffness: 100 }}
                                className={style.services__content}
                            // onMouseEnter={() => setShine(true)}
                            // onMouseLeave={() => setShine(false)}
                            >
                                {/* <ShineSvg className={style.shine} /> */}
                                <p>{service.snippet}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}
        </div>
    )
}
