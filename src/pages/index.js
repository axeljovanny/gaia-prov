import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import { Footer, Home, Navbar } from "../components";
import '../styles/css/navbar.css'

const IndexPage = () => {
  return (
    <>
      <StaticImage
        className="fondo"
        src="../images/fondo.jpg"
        alt="gaia fondo"
        loading="eager"
        layout="fullWidth"
        breakpoints={[750, 1080, 1366, 1920]}
        formats={['auto', 'webp', 'avif']}
        quality='80'
      />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
};


export default IndexPage