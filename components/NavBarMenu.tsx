import Link from "next/link"
import style from "../styles/layout.module.css"
import services from "@/data/services"

export default function NavBarMenu() {
  return (
    <div className={style.products__navMenu}>
      <div className={style.navMenu__row}>
        {services && services.slice(0, services.length / 2).map((service) => (
          <Link key={service.id} href={"/"}><p>{service.name}</p></Link>
        ))}
      </div>
      <div className={style.navMenu__row}>
        {services && services.slice(services.length / 2).map((service) => (
          <Link key={service.id} href={"/"}><p>{service.name}</p></Link>
        ))}
      </div>
    </div>
  )
}
