'use client'
// import Image from "next/image";
import { useState, useEffect } from "react"
import style from "../styles/Home.module.css"
// import ServicesCards from "./ServicesCards";
import CircleSvg from "../public/images/svgs/circle_animated.svg"
import services from "@/data/services";

export default function Services() {
  const [serviceActive, setServiceActive] = useState(1);
  // const setService = (n) => {
  //     setServiceActive(n);
  // }

  const [circleVisible, setCircleVisible] = useState(false)
  const [scrollVer, setScrollVer] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => {
      if (serviceActive < services.length) {
        setServiceActive(serviceActive + 1)
      } else {
        setServiceActive(1)
      }
    }, 10000);


    ////////////////////////////////////////////////

    const inView = () => {
      const serviceTop = document.getElementById("serviceTop");
      if (!serviceTop) return false;
      // Get Element height
      const sHeight = serviceTop.clientHeight;
      // get window height
      const windowHeight = window.innerHeight;

      // get number of pixels that the document is scrolled
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollVer(scrollY)

      // get current scroll position (distance from the top of the page to the bottom of the current viewport)
      const scrollPosition = scrollY + windowHeight;

      // get element position (distance from the top of the page to the bottom of the element)
      const elementPosition = serviceTop.getBoundingClientRect().top + scrollY + sHeight + 100;

      // is scroll position greater than element position? (is element in view?)
      if (scrollPosition > elementPosition) {
        return true;
      }

      return false;
    }

    // animateCircle element when it is in view
    const animateCircle = () => {
      if (inView()) {
        setCircleVisible(true)
      }
    }

    // listen for scroll event and call animateCircle function
    document.addEventListener('scroll', animateCircle);

    //remove event listener
    return () => {
      document.removeEventListener('scroll', animateCircle);
      clearTimeout(interval);
    }


  }, [serviceActive, scrollVer]);

  return (
    <div className={style.services}>
      <div className={style.servicesTop} id="serviceTop">
        <div className={style.servicesTop__left}>
          <h1><b className={style.noCircle}>Your Complete Event Support </b><strong className="relative">Provider {circleVisible && <CircleSvg className={`${style.circle}`} />}</strong></h1>
        </div>
        <div className={style.servicesTop__right}>
          <div className={style.servicesTop__right__i}>
            {services.slice(0, services.length / 2).map((service, index) => (
              <p key={index} className={`${style.service} ${serviceActive === Number(service.id) && style.service__active}`} >{service.name}</p>
            ))}
          </div>
          <div className={style.servicesTop__right__i}>
            {services.slice(services.length / 2).map((service, index) => (
              <p key={index} className={`${style.service} ${serviceActive === Number(service.id) && style.service__active}`} >{service.name}</p>
            ))}
          </div>
        </div>
      </div>
      {/* <ServicesCards services={services} serviceActive={serviceActive} /> */}
    </div>
  )
}
