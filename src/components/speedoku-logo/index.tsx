import {FC} from "react"
import speedokuLogo from "@/assets/img/speedoku-logo.png"
import "./speedoku-logo.css"

/**
 * Component for the SpeedokuRoyale logo.
 *
 * @author Vilhelm
 */
export const SpeedokuLogo:FC = () => (
  <figure className="speedoku-logo">
    <img src={speedokuLogo} width={128 + 64} />
  </figure>
)
