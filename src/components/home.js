import React from "react"
import "../styles/css/home.css"
import {useViewportScroll,motion,useTransform} from "framer-motion"
import { colors } from "../utils/const"
import { BannerProducts, CircleNature, Gift, ImgHair, ImgSkin, ImgsWedo, LogoPrincipal, PhoneLogo, Scroll, Social, StyledHair, StyledHome, StyledMaps, StyledProducts, StyledSkin, StyledTratamient, StyledWedo, StyledWedoSection, TextHair, TextMaps, TextSkin, TextWedo, TransMap } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"

import Loadable from "@loadable/component"
const Phone = Loadable(() => import("../assets/Phone.svg"))

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { Link } from "gatsby"
import SwiperF from "./swiper"

import { Circle, GEWeb, GEMovil, Skin, Hair, Flecha, Body, Favorite, FavoriteMovil } from "../assets/Home"


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

const Wedo = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1500], [110, -50]);
    const y2 = useTransform(scrollY, [0, 3100], [0, 30]);;

    return(
    <StyledWedoSection>
        <StyledWedo>
            <TextWedo>
                <motion.h1  initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}}>WHAT WE DO?</motion.h1>
                <motion.h2  initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}}>We are a group of professional Cosmetologists & Estheticians</motion.h2>
                <motion.h3  initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}}>that are hard working and staying up to date with the latest trends and technology in the beauty industry to bring our clients the best experience possible. Gaia Evolution Spa & Salon was created with the concept of rescue the use of natural & organic sources from our professional lines...</motion.h3>
                <Link>SEE MORE <Flecha className="flecha" stroke={colors.green} /></Link>
            </TextWedo>
            <ImgsWedo>
            <motion.div initial={{opacity: 0, y:10 }} animate={{y:0}} whileInView={{opacity: 1}} transition={{ duration: 1}} viewport={{once: true}} style={{ y: y1,x:"80%", alignContent:"center" , display:"flex", alignItems:"center",justifyContent:"center", width:"100%", height:"100%"}}>
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
                </motion.div>
                <motion.div initial={{opacity: 0 }} whileInView={{opacity: 1}} transition={{ duration: 1}} viewport={{once: true}} style={{y: y2, x: -50 , alignContent:"center" , display:"flex", alignItems:"center",justifyContent:"center", width:"100%", height:"100%"}}>
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
            </motion.div>
            </ImgsWedo>
        </StyledWedo>
    </StyledWedoSection>
)
}
const Skincare = ({ children }) => (
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
)
const Haircare = ({ children }) => (
    <>
        <StyledTratamient>
            <Hair className="HairSvg" fill={colors.softWhite} />
            <TextHair>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h3>
                <Link>GO TO SKIN CARE <Flecha className="flecha" stroke={colors.softWhite} /></Link>
            </TextHair>
        </StyledTratamient>
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
    </>
)
const Bodycare = ({ children }) => (
    
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
)
const Products = ({ children }) => {
    return (
        <>
            <BannerProducts>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}} style={{ alignContent:"center" , display:"flex", alignItems:"center",justifyContent:"center"}}>
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
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5, delay: .5}} viewport={{once: true}} style={{ alignContent:"center" , display:"flex", alignItems:"center",justifyContent:"center"}}>
                <Favorite className="ProductsSvg" fill={colors.softWhite} />
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5, delay: .5}} viewport={{once: true}} style={{ alignContent:"center" , display:"flex", alignItems:"center",justifyContent:"center"}}>
                <FavoriteMovil className="ProductsSvgMovil" fill={colors.softWhite} />
                </motion.div>
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
<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}} style={{ alignContent:"center" , display:"flex", alignItems:"center",justifyContent:"center"}}>
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
            </motion.div>
            <TransMap />
            <TextMaps>
                <motion.h2 initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}}>COME TO VISIT THE SPA</motion.h2>
                <motion.h3 initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</motion.h3>
                <Link>GO TO BODY CARE <Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>
            <TextMaps movil>

                <motion.h3 initial={{opacity: 0,}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} viewport={{once: true}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</motion.h3>
                <Link>GO TO BODY CARE <Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>

        </StyledMaps>
    );
}

export { Hero, Wedo, Skincare, Haircare, Bodycare, Products, Maps }
