import React from "react"
import { Footer, Home, Navbar } from "../components";

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"

const IndexPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "fondo.jpg"}) {
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

      <BgImage image={image} className="mastheadHome">
      </BgImage>
      <div className="content">
        <Navbar />
        <Home />
        <Footer />
      </div>

    </>
  )
};


export default IndexPage