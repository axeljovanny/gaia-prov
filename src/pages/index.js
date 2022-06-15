import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"




import { Footer } from "../components";
import { Navbar } from "../components/navbar";
import { Bodycare, Haircare, Hero, Products, Skincare, Wedo } from "../components/home";
import '../styles/css/home.css'


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
      <Skincare />
      <Haircare />
      <Bodycare />
      <Products />
      {/* <Footer /> */}
    </>
  )
};


export default IndexPage