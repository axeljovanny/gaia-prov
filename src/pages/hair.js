import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import { Footer, Hair, Navbar } from "../components";

const HairPage = () => {
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
            <Hair />
            <Navbar />
            <Footer />
        </>
    )
};


export default HairPage