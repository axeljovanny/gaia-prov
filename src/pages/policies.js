import React from "react"


import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import { Policies } from "../components/policies";
import { Navbar } from "../components/navbar";





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
      <Navbar siteTitle="about" />
      <div className="content">
        <Policies></Policies>
        </div>
    </>
  )
};


export default PoliciesPage