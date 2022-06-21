import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { colors } from "../utils/const"
import { motion } from "framer-motion"



import { Navbar } from "../components/navbar";
import { Bodycare, Haircare, Hero, Maps, Products, Skincare, Wedo } from "../components/home";
import '../styles/css/home.css'
import { Gift, StyledHair, StyledSkin } from "../styles/js/home";
import { GiftWeb, GiftMovil } from "../assets/Home";
import { Footer } from "../components"



const IndexPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "Backgrounds/Home.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              quality: 70
              placeholder: BLURRED
              breakpoints:[750, 1080, 1366, 1920]
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
              webpOptions: {quality: 70}
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
      <Navbar />
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
      <Gift>
        <motion.a href="https://squareup.com/gift/FHH5R6M6H54FS/order" whileHover={{ scale: 1.1 }} style={{ display: "flex", justifyContent: "flex-end" }}>
          <GiftWeb className="gift-web" fill={colors.green} fill2={colors.softWhite} />
        </motion.a>
        <motion.a href="https://squareup.com/gift/FHH5R6M6H54FS/order" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <GiftMovil className="gift-movil" fill={colors.green} fill2={colors.softWhite} />
        </motion.a>

      </Gift>
      <Footer></Footer>
    </>
  )
};


export default IndexPage