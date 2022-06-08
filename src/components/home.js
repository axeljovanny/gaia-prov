import React from "react"
import "../styles/css/home.css"
import { motion } from "framer-motion"
import { colors } from "../utils/const"
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
            <CircleNature >
                <motion.div  className="container" animate={{rotate:2160}} transition={{repeat:Infinity, duration:300, ease:"linear"}} whileHover={{rotate:4320 ,speed:200}}>
                <Circle className="circle"/>
                </motion.div>
            </CircleNature>
            <LogoPrincipal>
                <motion.h3 initial={{ opacity: 0, y: -10}} animate={{ opacity: 1, y: 0 }} transition={{duration: 2.1,ease:"easeInOut", type:"spring"}}>
                Welcome to
                </motion.h3>
                <motion.div className="LogoPrincipal" initial={{ opacity: 0, y: -10}} animate={{ opacity: 1, y: 0 }} transition={{duration: 2.1,ease:"easeInOut", type:"spring"}}>
                <LogoWeb className="logo-web" />
                <LogoMovil className="logo-movil" />
                </motion.div>
            </LogoPrincipal>
            <Gift>
                <GiftMovil className="gift-movil" />
                <GiftWeb className="gift-web" />
            </Gift>
            <Social>

            </Social>
            <PhoneLogo>
                <Phone className="phone" />
                <motion.a whileHover={{ scale: 1.1, priginX: 0, color:colors.accentBlue}} whileTap={{ scale: 0.9}} href="tel:773-799-8843">773-799-8843</motion.a>
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
