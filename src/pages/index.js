import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { motion } from "framer-motion"
// Componentes
import { Navbar } from "../components/navbar";
import { Bodycare, Haircare, Hero, Maps, Products, Skincare, Wedo } from "../components/home";
import { Footer } from "../components"
// Estilos
import { Gift, StyledHair, StyledSkin } from "../styles/js/home";
import { GiftWeb, GiftMovil, ShopWeb } from "../assets/Home";
// Constantes
import { colors } from "../utils/const"
// CSS
import '../styles/css/home.css'

const IndexPage = () => {

  // graphql Background
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "Backgrounds/Home.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 100
              breakpoints:[750, 1080, 1366, 1920]
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
              webpOptions: {quality: 90}
            )
          }
        }
      }
    `
  )
  const image = getImage(backgroundImage123)

  return (
    <>
      <BgImage image={image} className="mastheadHome">
        <Hero />
      </BgImage>
      <Wedo />
      <StyledSkin>
        <Skincare />
      </StyledSkin>
      <StyledHair>
        <Haircare />
      </StyledHair>
      <StyledSkin>
        <Bodycare />
      </StyledSkin>
      <Products />
      <Maps />
      <Gift initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:1.9}} >
        <motion.a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631"
          whileHover={{ scale: 1.1 }} rel="noreferrer" target="_blank">
          <ShopWeb className="gift-web" fill={colors.green} fill2={colors.softWhite} />
        </motion.a>
        <motion.a href="https://squareup.com/gift/FHH5R6M6H54FS/order"
          whileHover={{ scale: 1.05 }} rel="noreferrer" target="_blank">
          <GiftWeb className="gift-web" fill={colors.green} fill2={colors.softWhite} />
        </motion.a>
          <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631" rel="noreferrer" target="_blank"><ShopWeb className="gift-movil-store" fill={colors.green} fill2={colors.softWhite} /></a>
          <a href="https://squareup.com/gift/FHH5R6M6H54FS/order" rel="noreferrer" target="_blank" ><GiftMovil className="gift-movil" fill={colors.green} fill2={colors.softWhite} /> </a>
      </Gift>
       <Navbar siteTitle="index" />
      <Footer></Footer>
    </>
  )
};

export default IndexPage