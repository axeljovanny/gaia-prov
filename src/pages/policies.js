import React from "react"
import { Navbar, Policies } from "../components";

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

const PoliciesPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
          query {
            backgroundImage123: file(relativePath: {eq: "fondov.jpg"}) {
              childImageSharp {
                gatsbyImageData(
                  quality: 70
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
        <Policies />
      </div>

    </BackgroundImage>
  )
};


export default PoliciesPage