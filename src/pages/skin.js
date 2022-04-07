import React from "react"
import { Footer, Navbar, Skin } from "../components";

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

const SkinPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
              query {
                backgroundImage123: file(relativePath: {eq: "fondo4.jpg"}) {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 90
                      layout: CONSTRAINED
                      width: 2000
                      webpOptions: {quality: 90}
                      formats: [AUTO, WEBP, AVIF]
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
          <Skin />
        </div>
        <Footer />
      </div>
    </>
  )
};


export default SkinPage