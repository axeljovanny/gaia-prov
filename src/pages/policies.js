import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import { Footer, Navbar, Policies } from "../components";
import '../styles/css/navbar.css'

const PoliciesPage = () => {
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
            <Policies />
            <Footer />
        </>
    )
};


export default PoliciesPage