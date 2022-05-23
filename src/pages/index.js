import React from "react"
import { Footer, Home } from "../components";
import { Navbar } from "../components/navbar"


import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const IndexPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "Backgrounds/Home.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
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
      <div className="content">
        <BgImage image={image} className="mastheadHome">
        </BgImage>
        <Navbar />
        <Home />
      </div>
      <Footer />


    </>
  )
};


export default IndexPage