import React from "react"
import { Policies } from "../components";
import { Navbar } from "../components/navbar"

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

const PoliciesPage = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
          query {
            backgroundImage123: file(relativePath: {eq: "fondo3.jpg"}) {
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

  return (
    <>
      <BgImage image={image} className="masthead" />
      <div className="content">
        <Navbar />
        <div style={pageStyles} >
          <Policies />
        </div></div>
    </>
  )
};


export default PoliciesPage