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



const IndexPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "Backgrounds/Home.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              quality: 70
              placeholder: BLURRED
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
        <GiftWeb className="gift-web" fill={colors.green} fill2={colors.softWhite} />
        <GiftMovil className="gift-movil" fill={colors.green} fill2={colors.softWhite} />
      </Gift>
    </>
  )
};


export default IndexPage