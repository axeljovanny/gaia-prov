import React from "react"
import "../styles/css/home.css"
import { motion } from "framer-motion"
import { colors } from "../utils/const"
import { CircleNature, Gallery, Gift, ImgsWedo, LogoPrincipal, PhoneLogo, ProductContainer, Rectangulo, Rectangulo2, RectanguloProd, Scroll, Social, StyledHome, StyledProducts, StyledWedo, StyledWedoSection, TextWedo } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"

import Loadable from "@loadable/component"
const LogoWeb = Loadable(() => import("../assets/GEWeb.svg"))
const LogoMovil = Loadable(() => import("../assets/GEMovil.svg"))
const Phone = Loadable(() => import("../assets/Phone.svg"))
const GiftWeb = Loadable(() => import("../assets/BuyAGiftCardTrazo.svg"))
const GiftMovil = Loadable(() => import("../assets/GiftMovil.svg"))
const Circle = Loadable(() => import("../assets/NOVC.svg"))
const Flecha = Loadable(() => import("../assets/arrow.svg"))

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { Link } from "gatsby"


const Hero = ({ children }) => (
    <>
        <StyledHome>
            <CircleNature >
                <motion.div className="container" animate={{ rotate: -2160 }} transition={{ repeat: Infinity, duration: 300, ease: "linear" }} whileHover={{ rotate: -4320, speed: 200 }}>
                    <Circle className="circle" />
                </motion.div>
            </CircleNature>
            <LogoPrincipal>
                <motion.div className="LogoPrincipal" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.1, ease: "easeInOut", type: "spring" }}>
                    <LogoWeb className="logo-web" />
                    <LogoMovil className="logo-movil" />
                </motion.div>
            </LogoPrincipal>
            <Gift>
                <GiftMovil className="gift-movil" />
                <GiftWeb className="gift-web" />
            </Gift>
            <Social>
                <div>
                    <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                        <FacebookIcon fill={colors.softBlack} className="svgAbout" />
                    </a>
                    <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                        <InstagramIcon fill={colors.softBlack} className="svgAbout" />
                    </a>
                    <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                        <MapsIcon fill={colors.softBlack} className="svgAbout" />
                    </a>
                </div>
            </Social>
            <PhoneLogo>
                <Phone className="phone" />
                <motion.a whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} whileTap={{ scale: 0.9 }} href="tel:773-799-8843">773-799-8843</motion.a>
            </PhoneLogo>
            <Scroll>

            </Scroll>
        </StyledHome >
    </>

)

const Wedo = ({ children }) => (
    <StyledWedoSection>
        <StyledWedo>
            <TextWedo>
                <h1>WHAT WE DO?</h1>
                <h2>We are a group of professional Cosmetologists & Estheticians</h2>
                <h3>that are hard working and staying up to date with the latest trends and technology in the beauty industry to bring our clients the best experience possible. Gaia Evolution Spa & Salon was created with the concept of rescue the use of natural & organic sources from our professional lines...</h3>
                <Link>SEE MORE <Flecha className="flecha" /></Link>
            </TextWedo>
            <ImgsWedo></ImgsWedo>
        </StyledWedo>
    </StyledWedoSection>
)
const Products = ({ children }) => (
    <StyledProducts>
        <Gallery>
            <ProductContainer>
                <RectanguloProd>
                    <Rectangulo />
                    <StaticImage
                        className="contProduct"
                        imgClassName="imgProduct"
                        src="../images/Products/PNG/Cherry.png"
                        alt="producto"
                        height={320}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                    <Rectangulo2 />
                </RectanguloProd>
            </ProductContainer>
            <ProductContainer>
                <RectanguloProd>
                    <Rectangulo />
                    <StaticImage
                        className="contProduct"
                        imgClassName="imgProduct"
                        src="../images/Products/PNG/ShampureG.png"
                        alt="producto"
                        height={320}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                    <Rectangulo2 />
                </RectanguloProd>
            </ProductContainer>
            <ProductContainer>
                <RectanguloProd>
                    <Rectangulo />
                    <StaticImage
                        className="contProduct"
                        imgClassName="imgProduct"
                        src="../images/Products/PNG/Invati.png"
                        alt="producto"
                        height={320}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                    <Rectangulo2 />
                </RectanguloProd>
            </ProductContainer>
        </Gallery>
    </StyledProducts>
)

export { Hero, Wedo, Products }
