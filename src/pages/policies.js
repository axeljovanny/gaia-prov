import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import { Navbar, Policies } from "../components";
import '../styles/css/navbar.css'

const pageStyles = {
    flexDirection: 'column',
    width: '100vw',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const PoliciesPage = () => {
    return (
        < >
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
            <div style={pageStyles} >
                <Policies />
            </div>

        </>
    )
};


export default PoliciesPage