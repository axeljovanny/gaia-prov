import React from "react"
import { Footer, Home, Navbar } from "../components";

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

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

  const bgImage = convertToBgImage(image)

  return (
    <>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
        className="masthead"
      >
        <div className="content">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </BackgroundImage>
    </>
  )
};


export default IndexPage