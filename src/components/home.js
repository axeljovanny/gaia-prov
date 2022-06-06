import React from "react"
import "../styles/css/home.css"
import { CircleNature, Gift, LogoPrincipal, PhoneLogo, Scroll, Social, StyledHome } from "../styles/js/home.js"
import Loadable from "@loadable/component"
const LogoWeb = Loadable(() => import("../assets/GEWeb.svg"))
const LogoMovil = Loadable(() => import("../assets/GEMovil.svg"))
const Phone = Loadable(() => import("../assets/Phone.svg"))
const GiftWeb = Loadable(() => import("../assets/BuyAGiftCardTrazo.svg"))
const GiftMovil = Loadable(() => import("../assets/GiftMovil.svg"))
const Circle = Loadable(() => import("../assets/NOVC.svg"))



const Hero = ({ children }) => (
    <>
        <StyledHome>
            <CircleNature>
                <Circle className="circle" />
            </CircleNature>
            <LogoPrincipal>
                <h3>Welcome to</h3>
                <LogoWeb className="logo-web" />
                <LogoMovil className="logo-movil" />
            </LogoPrincipal>
            <Gift>
                <GiftMovil className="gift-movil" />
                <GiftWeb className="gift-web" />
            </Gift>
            <Social>

            </Social>
            <PhoneLogo>
                <Phone className="phone" />
                <a href="tel:773-799-8843">773-799-8843</a>
            </PhoneLogo>
            <Scroll>

            </Scroll>
        </StyledHome >
    </>

)

const Wedo = ({ children }) => (
    <></>
)

export { Hero, Wedo }
