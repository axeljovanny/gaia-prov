import React from "react"
import { graphql, useStaticQuery } from 'gatsby'


import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { motion } from "framer-motion"
import { Gift } from "../styles/js/home"

import { GiftWeb, GiftMovil, ShopWeb } from "../assets/Home";
import { Navbar } from "../components/navbar"
import { Footer } from "../components"
import { Hero } from "../components/home"

// Constantes
import { colors } from "../utils/const"
import { About, HeroAbout } from "../components/about/about"
import AboutGallery from "../components/about/gallery"


const AboutPage = () => {

  // graphql Background
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "Backgrounds/About.jpg"}) {
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
    < >
      <BgImage image={image} className="mastheadHome">
        <HeroAbout />
      </BgImage>
      <About/>
      <AboutGallery/>
      <Gift initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:1.9}} >
        <motion.a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631"
          whileHover={{ scale: 1.1 }} rel="noreferrer" target="_blank">
          <ShopWeb className="gift-web" fill={colors.softWhite} fill2={colors.green} />
        </motion.a>
        <motion.a href="https://squareup.com/gift/FHH5R6M6H54FS/order"
          whileHover={{ scale: 1.05 }} rel="noreferrer" target="_blank">
          <GiftWeb className="gift-web" fill={colors.softWhite} fill2={colors.green} />
        </motion.a>
          <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631" rel="noreferrer" target="_blank"><ShopWeb className="gift-movil-store" fill={colors.softWhite} fill2={colors.green} /></a>
          <a href="https://squareup.com/gift/FHH5R6M6H54FS/order" rel="noreferrer" target="_blank" ><GiftMovil className="gift-movil" fill={colors.green} fill2={colors.softWhite} /> </a>
      </Gift>
       <Navbar siteTitle="about"/>
      <Footer></Footer>
    </>
  )
};

export default AboutPage
