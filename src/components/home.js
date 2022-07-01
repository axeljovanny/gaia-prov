import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useViewportScroll, motion, useTransform } from "framer-motion"
import { Link } from "gatsby"
// Swiper
import SwiperF from "./swiper"
// Style componets
import { BannerProducts, CircleNature, Gift, ImageWedo, ImgHair, ImgSkin, ImgsWedo, LogoPrincipal, PhoneLogo, Scroll, Social, StyledHair, StyledHome, StyledMaps, StyledProducts, StyledSkin, StyledTratamient, StyledWedo, StyledWedoSection, TextHair, TextMaps, TextSkin, TextWedo, TransMap } from "../styles/js/home.js"
// Constantes
import { colors } from "../utils/const"
// SVG
import Loadable from "@loadable/component"
const Phone = Loadable(() => import("../assets/Phone.svg"))
import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { Circle, GEWeb, GEMovil, Skin, Hair, Flecha, Body, Favorite, FavoriteMovil, CTVTS, CircleMovil, ScrollArrow } from "../assets/Home"
// CSS
import "../styles/css/home.css"

const Hero = ({ children }) => (
    <>
        <StyledHome>
            <CircleNature >
                <motion.div
                    className="container"
                    animate={{ rotate: -2160 }}
                    transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
                    whileHover={{ rotate: -4320, speed: 200 }}>
                    <Circle className="circle" fill={colors.green} />
                </motion.div>
                <motion.div
                    className="container"
                    animate={{ rotate: 2160 }}
                    transition={{ repeat: Infinity, duration: 300, ease: "linear" }}
                    whileHover={{ rotate: -4320, speed: 200 }}>
                    <CircleMovil className="circle-movil" fill={colors.green} />
                </motion.div>
            </CircleNature>
            <LogoPrincipal>
                <motion.div
                    className="LogoPrincipal"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay:1 }}>
                    <GEWeb className="logo-web" fill={colors.black} />
                    <GEMovil className="logo-movil" fill={colors.black} />
                </motion.div>
            </LogoPrincipal>
            <Social initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:1.5}}>
                <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                    <FacebookIcon fill={colors.green} className="svgAbout" />
                </a>
                <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                    <InstagramIcon fill={colors.green} className="svgAbout" />
                </a>
                <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                    <MapsIcon fill={colors.green} className="svgAbout" />
                </a>
            </Social>
            <PhoneLogo>
                <motion.a
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                    whileTap={{ scale: 0.9 }} href="tel:773-799-8843">
                    <Phone className="phone" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }}
                    whileTap={{ scale: 0.9 }} href="tel:773-799-8843">
                    <p>773-799-8843</p>
                </motion.a>
            </PhoneLogo>
            <Scroll>
                <ScrollArrow fill={colors.black} className="scroll" />
                <ScrollArrow fill={colors.white} className="scroll-movil" />
            </Scroll>
        </StyledHome >
    </>

)

const Wedo = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1500], [110, -50]);
    const y2 = useTransform(scrollY, [0, 3100], [0, 30]);;

    return (
        <StyledWedoSection>
            <ImageWedo movil initial={{ opacity: 0, y: 10 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y1, top:0, right:0, width: "calc(25% + 2vw)", height: "calc(40% + 2vh)"}}>
                <StaticImage
                    className="HomeWDMovil"
                    imgClassName=""
                    src="../images/Home/PNG/WWDArcoMovil.png"
                    alt="Spa Image"
                    loading="lazy"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </ImageWedo>
            <StyledWedo>
                <TextWedo>
                    <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>What we do?</motion.h1>
                    <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>We are a group of professional Cosmetologists & Estheticians</motion.h2>
                    <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>That are hard working and staying up to date with the latest trends and technology in the beauty industry to bring our clients the best experience possible. Gaia Evolution Spa & Salon was created with the concept of rescue the use of natural & organic sources from our professional lines...</motion.h3>
                    <Link to="/">See More <Flecha className="flecha" stroke={colors.green} /></Link>
                </TextWedo>
                <ImgsWedo>
                    <ImageWedo web initial={{ opacity: 0, y: 10 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y1 }}>
                        <StaticImage
                            className="HomeWD2"
                            imgClassName=""
                            src="../images/Home/PNG/WWDArco.png"
                            alt="Spa Image"
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                    </ImageWedo>
                    <ImageWedo web initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y2 }}>
                        <StaticImage
                            className="HomeWD1"
                            imgClassName=""
                            src="../images/Home/PNG/WWDHoja.png"
                            alt="Spa products"
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                    </ImageWedo>
                </ImgsWedo>
            </StyledWedo>
        </StyledWedoSection>
    )
}
const Skincare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 3100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 3200], [110, -40]);

    return (
        <StyledTratamient>
            <ImageWedo movil
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2, bottom: 0, left: 0, width:"calc(40% + 2vw)", height:"calc(30% + 6vh)"}}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/SkinCareMovil.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageWedo>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1, position: "absolute",width:"90%", top:"5%"}}>
                <Skin className="SkinSvg" fill={colors.green} />
            </motion.div>
            <ImgSkin> 
                <ImageWedo web
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2}}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/SkinCare.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageWedo>
            </ImgSkin>
            <TextSkin>
                <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} >
                    Here at Gaia Evolution our mission is to create and provide healthy, effective skin care and wellness products designed to improve the skin and enhance holistic health, as well as improve the overall lifestyles of our clients by example and education. We work with Aveda and Eminence professional lines to bring that mission into reality by using natural, organic, vegan, and cruelty free products onto your skin.
                </motion.h3>
                <Link to="/skin">Go to Skin Care <Flecha className="flecha" stroke={colors.green} /></Link>
            </TextSkin>
        </StyledTratamient>
    )
}
const Haircare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 4100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 4200], [110, -40]);

    return (
        <>
        <ImageWedo movil
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2, bottom: 0, right: 0, width:"calc(40% + 2vw)", height:"calc(30% + 6vh)"}}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/HairCareMovil.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageWedo>
            <StyledTratamient>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1, position: "absolute",width:"90%", top:"10%"}}>
                    <Hair className="HairSvg" fill={colors.softWhite} />
            </motion.div>
                <TextHair>
                    <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                        Gaia Evolution is an Aveda Exclusive Salon. Aveda is a naturally derived line, some ingredients are Certified Organic, 100% Vegan & Cruelty Free. Its natural components do a fantastic job taking care of the hair integrity and providing incredible results. You will find a wide variety of products for any hair type or concerns. Haircuts and color services are completely customized for each guest through a previous consultation.
                    </motion.h3>
                    <Link to="/hair">Go to Hair Care <Flecha className="flecha" stroke={colors.softWhite} /></Link>
                </TextHair>
            </StyledTratamient>
            <ImgHair>
            <ImageWedo web
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2, bottom: 0, left: 0, width:"calc(40% + 2vw)", height:"calc(30% + 6vh)"}}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/HairCareMovil.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageWedo>
            </ImgHair>
        </>
    )
}
const Bodycare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 6100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 6200], [110, -40]);


    return (

        <StyledTratamient>
             <ImageWedo movil
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2, bottom: 0, left: 0, width:"calc(40% + 2vw)", height:"calc(30% + 6vh)"}}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/BodyCareMovil.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageWedo>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1, position: "absolute",width:"90%", top:"10%"}}>
                <Body className="SkinSvg" fill={colors.green} />
            </motion.div>
            <ImgSkin>
            <ImageWedo web
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2, bottom: 0, left: 0, width:"calc(40% + 2vw)", height:"calc(30% + 6vh)"}}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/BodyCareMovil.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </ImageWedo>
            </ImgSkin>
            <TextSkin>
                <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                    We strive to provide holistic and natural solutions to improve the quality of life and wellbeing in a real and meaningful way. We offer services that will do just that, from reiki, to body wraps, and body detoxification for weight loss and spiritual growth.
                </motion.h3>
                <Link to="/body">Go to Body Care <Flecha className="flecha" stroke={colors.green} /></Link>
            </TextSkin>
        </StyledTratamient>
    )
}
const Products = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 7100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 7200], [110, -70]);

    return (
        <>
            <BannerProducts>
                <motion.div initial={{ opacity: 0 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} style={{ y: y2, x: "48%", alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    <StaticImage
                        className="Favorite"
                        imgClassName=""
                        src="../images/Home/PNG/FPArco.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: .5 }} viewport={{ once: true }} style={{
                    y: y1, x: "-52%", alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"
                }}>
                    <Favorite className="ProductsSvg" fill={colors.softWhite} />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: .5 }} viewport={{ once: true }} style={{ alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} style={{ alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <StaticImage
                    className="Maps"
                    imgClassName=""
                    src="../images/Home/JPG/Mapa.jpg"
                    alt="Gaia Evolution maps"
                    breakpoints={[750, 1080, 1366, 1920]}
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    quality='100'
                />
            </motion.div>
            <TransMap />
            <TextMaps>
                <CTVTS className="CTVTS" fill={colors.green} ></CTVTS>
                {/*  <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</motion.h3> */}
                <Link to="/">Gaia Evolution in Google Maps<Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>
            <TextMaps movil>

                {/* <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</motion.h3> */}
                <Link to="/">Gaia Evolution in Google Maps <Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>

        </StyledMaps>
    );
}

export { Hero, Wedo, Skincare, Haircare, Bodycare, Products, Maps }
