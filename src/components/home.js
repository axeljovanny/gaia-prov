import React from "react"
import "../styles/css/home.css"
import { useViewportScroll, motion, useTransform } from "framer-motion"
import { colors } from "../utils/const"
import { BannerProducts, CircleNature, Gift, ImgHair, ImgSkin, ImgsWedo, LogoPrincipal, PhoneLogo, Scroll, Social, StyledHair, StyledHome, StyledMaps, StyledProducts, StyledSkin, StyledTratamient, StyledWedo, StyledWedoSection, TextHair, TextMaps, TextSkin, TextWedo, TransMap } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"

import Loadable from "@loadable/component"
const Phone = Loadable(() => import("../assets/Phone.svg"))

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { Link } from "gatsby"
import SwiperF from "./swiper"

import { Circle, GEWeb, GEMovil, Skin, Hair, Flecha, Body, Favorite, FavoriteMovil, CTVTS } from "../assets/Home"
import { unstable_renderSubtreeIntoContainer } from "react-dom"


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
                <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                    <FacebookIcon fill={colors.black} className="svgAbout" />
                </a>
                <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                    <InstagramIcon fill={colors.black} className="svgAbout" />
                </a>
                <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                    <MapsIcon fill={colors.black} className="svgAbout" />
                </a>
            </Social>
            <PhoneLogo>
                <motion.a whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} whileTap={{ scale: 0.9 }} href="tel:773-799-8843"><Phone className="phone" /></motion.a>
                <motion.a whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} whileTap={{ scale: 0.9 }} href="tel:773-799-8843"><p>773-799-8843</p></motion.a>
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

    return (
        <StyledWedoSection>
            <StyledWedo>
                <TextWedo>
                    <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>What we do?</motion.h1>
                    <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>We are a group of professional Cosmetologists & Estheticians</motion.h2>
                    <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>That are hard working and staying up to date with the latest trends and technology in the beauty industry to bring our clients the best experience possible. Gaia Evolution Spa & Salon was created with the concept of rescue the use of natural & organic sources from our professional lines...</motion.h3>
                    <Link>See more <Flecha className="flecha" stroke={colors.green} /></Link>
                </TextWedo>
                <ImgsWedo>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y1, x: "80%", alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <StaticImage
                            className="HomeWD2"
                            imgClassName=""
                            src="../images/Home/PNG/WWDArco.png"
                            alt="Spa Image"
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                            breakpoints={[750, 1080, 1366, 1920]}
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} style={{ y: y2, x: -50, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <StaticImage
                            className="HomeWD1"
                            imgClassName=""
                            src="../images/Home/PNG/WWDHoja.png"
                            alt="Spa products"
                            breakpoints={[750, 1080, 1366, 1920]}
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
const Skincare = ({ children }) => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 3100], [0, 30]);;
    const y2 = useTransform(scrollY, [0, 3200], [110, -40]);

    return (
        <StyledTratamient>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                style={{ y: y1, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", position: "absolute" }}>
                <Skin className="SkinSvg" fill={colors.green} />
            </motion.div>
            <ImgSkin>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    style={{ y: y2, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
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
                </motion.div>
            </ImgSkin>
            <TextSkin>
                <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</motion.h3>
                <Link>Go to Skin care <Flecha className="flecha" stroke={colors.green} /></Link>
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
            <StyledTratamient>
                <motion.div initial={{ opacity: 0 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} style={{ y: y1, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", position: "absolute" }}>
                    <Hair className="HairSvg" fill={colors.softWhite} />
                </motion.div>
                <TextHair>
                    <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</motion.h3>
                    <Link>Go to Hair care <Flecha className="flecha" stroke={colors.softWhite} /></Link>
                </TextHair>
            </StyledTratamient>
            <ImgHair>
                <motion.div initial={{ opacity: 0 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} style={{ y: y2, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    <StaticImage
                        className="Hair"
                        imgClassName=""
                        src="../images/Home/PNG/HairCare.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </motion.div>
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
            <motion.div initial={{ opacity: 0 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} style={{ y: y1, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", position: "absolute" }}>
                <Body className="SkinSvg" fill={colors.green} />
            </motion.div>
            <ImgSkin>
                <motion.div initial={{ opacity: 0 }} animate={{ y: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} style={{ y: y2, alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    <StaticImage
                        className="Skin"
                        imgClassName=""
                        src="../images/Home/PNG/BodyCare.png"
                        alt="Spa Image"
                        breakpoints={[750, 1080, 1366, 1920]}
                        loading="lazy"
                        formats={['auto', 'webp', 'avif']}
                        quality='100'
                    />
                </motion.div>
            </ImgSkin>
            <TextSkin>
                <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</motion.h3>
                <Link>Go to Body care <Flecha className="flecha" stroke={colors.green} /></Link>
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
                    y: y1, x
                        : "-52%", alignContent: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"
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
                <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</motion.h3>
                <Link>Gaia Evolution in Google Maps<Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>
            <TextMaps movil>

                <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. standard dummy text ever since the 1500s, when an unknown printer took.</motion.h3>
                <Link>Gaia Evolution in Google Maps <Flecha className="flecha" stroke={colors.green} /></Link>

            </TextMaps>

        </StyledMaps>
    );
}

export { Hero, Wedo, Skincare, Haircare, Bodycare, Products, Maps }
