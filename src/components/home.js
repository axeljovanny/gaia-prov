import React from "react"
import "../styles/css/home.css"
import { motion } from "framer-motion"
import { colors } from "../utils/const"
import { BannerProducts, CircleNature, Gift, ImgHair, ImgSkin, ImgsWedo, LogoPrincipal, PhoneLogo, Scroll, Social, StyledHair, StyledHome, StyledMaps, StyledProducts, StyledSkin, StyledTratamient, StyledWedo, StyledWedoSection, TextHair, TextMaps, TextSkin, TextWedo, TransMap } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"

import Loadable from "@loadable/component"
const Phone = Loadable(() => import("../assets/Phone.svg"))

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { Link } from "gatsby"
import SwiperF from "./swiper"

import { Circle, GEWeb, GEMovil, Skin, Hair, Flecha, Body, Favorite } from "../assets/Home"


const Hero = ({ children }) => (
    <>
        <StyledHome>
            <CircleNature >
                <motion.div className="container" animate={{ rotate: -2160 }} transition={{ repeat: Infinity, duration: 300, ease: "linear" }} whileHover={{ rotate: -4320, speed: 200 }}>
                    <Circle className="circle" fill={colors.green} />
                </motion.div>
            </CircleNature>
            <LogoPrincipal>
                <motion.div className="LogoPrincipal" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.1, ease: "easeInOut", type: "spring" }}>
                    <GEWeb className="logo-web" fill={colors.black} />
                    <GEMovil className="logo-movil" fill={colors.black} />
                </motion.div>
            </LogoPrincipal>
            <Social>
                <div>
                    <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                        <FacebookIcon fill={colors.black} className="svgAbout" />
                    </a>
                    <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                        <InstagramIcon fill={colors.black} className="svgAbout" />
                    </a>
                    <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                        <MapsIcon fill={colors.black} className="svgAbout" />
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
                <Link>SEE MORE <Flecha className="flecha" stroke={colors.green} /></Link>
            </TextWedo>
            <ImgsWedo>
                <StaticImage
                    className="HomeWD2"
                    imgClassName=""
                    src="../images/Home/PNG/WWDArco.png"
                    alt="Spa Image"
                    height={270}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
                <StaticImage
                    className="HomeWD1"
                    imgClassName=""
                    src="../images/Home/PNG/WWDHoja.png"
                    alt="Spa products"
                    height={270}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgsWedo>
        </StyledWedo>
    </StyledWedoSection>
)
const Skincare = ({ children }) => (
    <StyledSkin>
        <StyledTratamient>
            <Skin className="SkinSvg" fill={colors.green} />
            <ImgSkin>
                <StaticImage
                    className="Skin"
                    imgClassName=""
                    src="../images/Home/PNG/SkinCare.png"
                    alt="Spa Image"
                    height={270}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgSkin>
            <TextSkin>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h3>
                <Link>GO TO SKIN CARE <Flecha className="flecha" stroke={colors.green} /></Link>
            </TextSkin>

        </StyledTratamient>
    </StyledSkin>
)
const Haircare = ({ children }) => (
    <StyledHair>
        <StyledTratamient>
            <Hair className="HairSvg" fill={colors.softWhite} />
            <TextHair>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h3>
                <Link>GO TO SKIN CARE <Flecha className="flecha" stroke={colors.softWhite} /></Link>
            </TextHair>
            <ImgHair>
                <StaticImage
                    className="Hair"
                    imgClassName=""
                    src="../images/Home/PNG/HairCare.png"
                    alt="Spa Image"
                    height={270}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgHair>


        </StyledTratamient>
    </StyledHair>
)
const Bodycare = ({ children }) => (
    <StyledSkin>
        <StyledTratamient>
            <Body className="SkinSvg" fill={colors.green} />
            <ImgSkin>
                <StaticImage
                    className="Skin"
                    imgClassName=""
                    src="../images/Home/PNG/BodyCare.png"
                    alt="Spa Image"
                    height={270}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImgSkin>
            <TextSkin>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h3>
                <Link>GO TO BODY CARE <Flecha className="flecha" stroke={colors.green} /></Link>
            </TextSkin>

        </StyledTratamient>
    </StyledSkin>
)
const Products = ({ children }) => {
    return (
        <>
            <BannerProducts>
                <StaticImage
                    className="Favorite"
                    imgClassName=""
                    src="../images/Home/PNG/FPArco.png"
                    alt="Spa Image"
                    height={270}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
                <Favorite className="ProductsSvg" fill={colors.softWhite} />

            </BannerProducts>
            <StyledProducts>
                <SwiperF></SwiperF>
            </StyledProducts>
        </>
    );
}

const Maps = ({ children }) => {
    return (
        <StyledMaps>

            <StaticImage
                className="Maps"
                imgClassName=""
                src="../images/Home/JPG/Mapa.jpg"
                alt="Gaia Evolution maps"
                height={800}
                loading="lazy"
                formats={['auto', 'webp', 'avif']}
                quality='100'
            />

            <TransMap />
            <TextMaps>
                <h2>COME TO VISIT THE SPA</h2>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</h3>
                <Link>GO TO BODY CARE <Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>
            <TextMaps movil>

                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</h3>
                <Link>GO TO BODY CARE <Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>

        </StyledMaps>
    );
}

export { Hero, Wedo, Skincare, Haircare, Bodycare, Products, Maps }
