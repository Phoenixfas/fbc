import TwistSvg from "../public/images/svgs/homeC/twist_animated.svg"
import SquareSvg from "../public/images/svgs/homeC/square_animated.svg"
import ShineSvg from "../public/images/svgs/homeC/shine_animated.svg"
import LineSvg from "../public/images/svgs/homeC/lines_animated.svg"
import CircleSvg from "../public/images/svgs/homeC/circle_animated.svg"
import ZigzagSvg from "../public/images/svgs/homeC/zigzag_animated.svg"
import SSvg from "../public/images/svgs/homeC/s_animated.svg"
import { createElement } from "react"


const keysToComponentMap = {
  Twist: TwistSvg,
  Square: SquareSvg,
  Shine: ShineSvg,
  Line: LineSvg,
  Circle: CircleSvg,
  Zigzag: ZigzagSvg,
  S: SSvg,
}


interface SvgRenderConfig {
  component: keyof typeof keysToComponentMap;
}

export default function svgRenderComponent(config: SvgRenderConfig) {
  if (typeof keysToComponentMap[config.component] !== "undefined") {
    return createElement(
      keysToComponentMap[config.component]
    )
  }
}
