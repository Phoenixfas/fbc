'use client'
import style from "../styles/layout.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTiktok, FaInstagram, FaPinterest, FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import { useMutation } from "@apollo/client"
// import {ADD_SUBSCRIBER} from "../graphql/mutations/subscriberMutations"

export default function Footer() {
  // const [email, setEmail] = useState("")
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const p = pathname.split('/')[1] || ''

  useEffect(() => {
    if (p === 'dashboard') {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }, [p])
  // const [addSubscriber] = useMutation(ADD_SUBSCRIBER, {
  //     variables: { email },
  // })

  // const ValidateEmail = () => {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //     return (true)
  //   }
  //   alert("You have entered an invalid email address!")
  //   return (false)
  // }

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (email === "") {
  //     alert("Please fill in all fields")
  //   }
  //   if (ValidateEmail()) {
  //     // addSubscriber(email)
  //     setEmail("")
  //     alert("You have successfuly subscribed to our daily newsletter")
  //   }
  // }


  // const [scrollVer, setScrollVer] = useState(0)

  // useEffect(() => {
  // Set the footer-bottom height based on the top-footer
  // const footer = document.getElementById("footer")
  // const footerTop = document.getElementById("footer-top");
  // const footerBottom = document.getElementById("footer-bottom");
  // if (!footerTop || !footerBottom) return;
  // const footerTopHeight = footerTop.clientHeight / 1.3;
  // const footerHeight = footerTop.clientHeight + footerTop.clientHeight / 1.3;
  // footer.style.height = footerHeight + "px";
  // footerBottom.style.setProperty("--bottom-height", footerTopHeight + "px");


  ////////////////////////////////////////////////////////////////////////////////////
  ///// STAGGER EFFECT//////
  // Get Element height
  // if (!footer) return;
  // const fHeight = footer.clientHeight;

  // const inView = () => {
  //   // get window height
  //   const windowHeight = window.innerHeight;

  //   // get number of pixels that the document is scrolled
  //   const scrollY = window.scrollY || window.pageYOffset;
  //   setScrollVer(scrollY)

  //   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  //   const scrollPosition = scrollY + windowHeight;

  //   // get element position (distance from the top of the page to the bottom of the element)
  //   const elementPosition = footer.getBoundingClientRect().top + scrollY + fHeight / 1.5;

  //   // is scroll position greater than element position? (is element in view?)
  //   if (scrollPosition > elementPosition) {
  //     return true;
  //   }

  //   return false;
  // }

  // animate element when it is in view
  // const animate = () => {
  //   if (inView()) {
  //     // footerTop.classList.add(style.float)
  //   } else {
  //     // footerTop.classList.remove(style.float)
  //   }
  // }

  // listen for scroll event and call animate function
  // document.addEventListener('scroll', animate);

  // //remove event listener
  // return () => {
  //   document.removeEventListener('scroll', animate);
  // }

  // }, [scrollVer]);


  if (isActive) return (
    <div className={style.footer} id="footer" >
      <motion.div
        id={"footer-top"}
        className={`${style.footer__innerTop} ${style.float}`}
      // initial={{y: -50}}
      // animate={{y: 0}}
      // transition={{repeatType: "loop", type: "spring", stiffness: 150, duration: 3, delay: 3}}
      >
        <div className={style.footerRow}>
          <h2>Contact info</h2>
          <p>We ensure that every moment is important and unforgettable.</p>
          <div className={style.footerRow__info}>
            <FaMapMarkerAlt size={25} color={"#6FCDE3"} />
            <Link href={"https://maps.app.goo.gl/VF2witAnBVbPsY8RA"} target="_blank" rel="noreferrer">
              <p>Barsha Heights - Dubai - UAE</p>
            </Link>
          </div>
          <div className={style.footerRow__info}>
            <FaEnvelope size={25} color={"#6FCDE3"} />
            <Link href={"mailto:sales@impactmakersevents.com"} target="_blank" rel="noreferrer">
              <p className="break-words text-wrap">sales@impactmakersevents.com</p>
            </Link>
          </div>
          <div className={style.footerRow__info}>
            <FaMobileAlt size={25} color={"#6FCDE3"} />
            <Link href={"tel:+971547114951"} target="_blank" rel="noreferrer">
              <p>+971547114951</p>
            </Link>
          </div>
          <div className={style.footerRow__info}>
            <FaPhoneAlt size={25} color={"#6FCDE3"} />
            <Link href={"tel:+971547114951"} target="_blank" rel="noreferrer">
              <p>+971547114951</p>
            </Link>
          </div>
        </div>
        <div className={style.footerRow}>
          <h2>Quick Links</h2>
          <p><Link href={"/"}>Home</Link></p>
          <p><Link href={"/about-us"}>About Us</Link></p>
          <p><Link href={"/services"}>Services</Link></p>
          <p><Link href={"/blogs"}>Blogs</Link></p>
          <p><Link href={"/contact"}>Contact Us</Link></p>
        </div>
        <div className={style.footerRow}>
          <h2>Business hour</h2>
          <p>Our support available to help you 24 hours a day, six days a week.</p>
          <p>Monday to Saturday, 24 hours. Sunday - closed</p>
        </div>
        <div className={style.footerRow}>
          <h2>Some of Our Services</h2>
          <p>Booth Fabrication</p>
          <p>Event Management</p>
          <p>Event Organizing</p>
          <p>Gifts & Branding</p>
        </div>
      </motion.div>
      <div className={style.footer__innerBottom} id={"footer-bottom"}>
        <div className={style.footerBottom}>
          <Link href={"/"} target="_blank" rel="noreferrer">
            <div className={style.footerBottom__icon}>
              <FaFacebookF size={25} color={"#fff"} />
            </div>
          </Link>
          <Link href={"/"} target="_blank" rel="noreferrer">
            <div className={style.footerBottom__icon}>
              <FaTiktok size={25} color={"#fff"} />
            </div>
          </Link>
          <Link href={"/"} target="_blank" rel="noreferrer">
            <div className={style.footerBottom__icon}>
              <FaYoutube size={25} color={"#fff"} />
            </div>
          </Link>
          <Link href={"/"} target="_blank" rel="noreferrer">
            <div className={style.footerBottom__icon}>
              <FaLinkedinIn size={25} color={"#fff"} />
            </div>
          </Link>
          <Link href={"/"} target="_blank" rel="noreferrer">
            <div className={style.footerBottom__icon}>
              <FaPinterest size={25} color={"#fff"} />
            </div>
          </Link>
          <Link href={"/"} target="_blank" rel="noreferrer">
            <div className={style.footerBottom__icon}>
              <FaInstagram size={25} color={"#fff"} />
            </div>
          </Link>
        </div>
        <div className={style.footer_copy}>
          <p>&copy;2025 Impact Makers Events. All Rights Reserved.</p>
          {/* <p style={{ width: "100%", margin: "0", padding: "5px", backgroundColor: "#ccc", textAlign: "center" }}>Designed and developed by <span style={{ color: "green" }}><Link href={"https://fasika.vercel.app"} target="_blank" rel="noreferrer">Fasika</Link></span></p> */}
        </div>
      </div>
    </div>
  )
}
