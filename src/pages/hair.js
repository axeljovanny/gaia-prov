import React from "react"
import { Hair, Navbar, Footer } from "../components";

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"

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
            formats: [AUTO]
          )
        }
      }
    }
            `
  )
  const image = getImage(backgroundImage123)

  return (
    <>
      <BgImage image={image} className="masthead" />
      <div className="content">
        <Navbar />
        <div style={pageStyles} >
          <Hair />
        </div>
        <Footer />
      </div>
    </>



  )
};

export default HairPage