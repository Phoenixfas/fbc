'use client'
import Link from "next/link"
import style from "../styles/Home.module.css"
import HomeCards from "./HomeCards"
import CurlSvg from "../public/images/svgs/curl_animated.svg"
import BackgroundSvg from "../public/images/svgs/background.svg"
import { useEffect, useState } from "react"

export default function HomeC() {
  const [curlVisible, setCurlVisible] = useState(false)
  const [scrollVer, setScrollVer] = useState(0)

  useEffect(() => {


    ////////////////////////////////////////////////
    const homeCTitle = document.getElementById("homeC-title");
    if (!homeCTitle) return;
    // Get Element height
    const hCHeight = homeCTitle.clientHeight;

    const inView = () => {
      // get window height
      const windowHeight = window.innerHeight;

      // get number of pixels that the document is scrolled
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollVer(scrollY)

      // get current scroll position (distance from the top of the page to the bottom of the current viewport)
      const scrollPosition = scrollY + windowHeight;

      // get element position (distance from the top of the page to the bottom of the element)
      const elementPosition = homeCTitle.getBoundingClientRect().top + scrollY + hCHeight;

      // is scroll position greater than element position? (is element in view?)
      if (scrollPosition > elementPosition) {
        return true;
      }

      return false;
    }

    // animateCurl element when it is in view
    const animateCurl = () => {
      if (inView()) {
        setCurlVisible(true)
      }
    }

    // listen for scroll event and call animateCurl function
    document.addEventListener('scroll', animateCurl);

    //remove event listener
    return () => {
      document.removeEventListener('scroll', animateCurl);
    }


  }, [scrollVer]);


  return (
    <div className={style.homeCards} id="homeCards">
      <BackgroundSvg className={style.background} />
      <div className={style.homeCards__title} id="homeC-title">
        <h1>Our Latest <span>Developments</span></h1>
        {curlVisible && <CurlSvg className={style.curl} />}
      </div>
      <HomeCards />
      <Link href={"/blogs"}><div className={style.moreArticles}>More</div></Link>
    </div>
  )
}



/*

import style from "../styles/Home.module.css"
import HomeCards from "./HomeCards"
import CurlSvg from "../public/images/svgs/curl_animated.svg"
import BackgroundSvg from "../public/images/svgs/background.svg"
import { useEffect, useState } from "react"

export default function HomeC() {
  const [curlVisible, setCurlVisible] = useState(false)
    const [scrollVer, setScrollVer] = useState(0)
    const [scrollOffset, setScrollOffset] = useState(0)
    const [scrollUp, setScrollUp] = useState(false)
    
    useEffect(() => {

      const homeCards_Cards = document.getElementById("homeCards-cards");
        ////////////////////////////////////////////////
        const homeCTitle = document.getElementById("homeC-title");
        // Get Element height
        const hCHeight = homeCTitle.clientHeight;

        const inView = () => {
        // get window height
        const windowHeight = window.innerHeight;

        // get number of pixels that the document is scrolled
        const scrollY = window.scrollY || window.pageYOffset;
        setScrollVer(scrollY)

        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        const scrollPosition = scrollY + windowHeight;

        // get element position (distance from the top of the page to the bottom of the element)
        const elementPosition = homeCTitle.getBoundingClientRect().top + scrollY + hCHeight;

        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition) {
          return true;
        }
        
        return false;
      }

      //get scrolling direction
      let oldScrollY = window.scrollY;
      window.onscroll = (e) => {
        if(oldScrollY < window.scrollY){
            setScrollUp(false)
        } else {
            setScrollUp(true)
        }
        oldScrollY = window.scrollY;
      }

      // animateCurl element when it is in view
      const animateCurl = () => {
        // console.log(scrollOffset)
        if(inView()){
          setCurlVisible(true)
          if(scrollUp){
            // console.log("up")
            setScrollOffset(scrollOffset -= 30)
            homeCards_Cards.style.setProperty("--home-cards-width", -scrollOffset + "px");
          }else{
            // console.log("down")
            setScrollOffset(scrollOffset += 30)
            homeCards_Cards.style.setProperty("--home-cards-width", -scrollOffset + "px");
          }
        }else{
          setScrollOffset(0)
        }
      }

      // listen for scroll event and call animateCurl function
      document.addEventListener('scroll', animateCurl);

      //remove event listener
      return () => {
        document.removeEventListener('scroll', animateCurl);
      }


    }, [scrollVer]);


  return (
    <div className={style.homeCards} id="homeCards">
      <BackgroundSvg className={style.background} />
        <div className={style.homeCards__title} id="homeC-title">
            <h1>Plan and organize <span>anything</span></h1>
            {curlVisible && <CurlSvg className={style.curl} />}
        </div>
        <div className={style.homeCards__cardsHolder}>
            <div id="homeCards-cards" className={style.homeCards__cards}>
                <HomeCards />
                <HomeCards />
            </div>
        </div>
    </div>
  )
}


*/