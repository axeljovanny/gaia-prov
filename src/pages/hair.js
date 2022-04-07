import React from "react"
import { Hair, Navbar, Footer } from "../components";

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const pageStyles = {
  flexDirection: 'column',
  width: '100vw',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const HairPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
    query {
      backgroundImage123: file(relativePath: {eq: "fondo2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 2000
            webpOptions: {quality: 90}
            layout: CONSTRAINED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
            `
  )
  const image = getImage(backgroundImage123)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className="masthead"
    >
      <Navbar />
      <div style={pageStyles} >
        <Hair />
      </div>
      <Footer />


    </BackgroundImage>
  )
};

export default HairPage