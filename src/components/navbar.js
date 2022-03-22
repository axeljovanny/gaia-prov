import React from "react"
import { Items, StyledLeft, StyledLogo, StyledNavbar, StyledRight } from "../styles/js/navbar"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Navbar = ({ children }) => (
    <>
        <StyledNavbar>
            <StyledLeft>
                <Items>
                    <il>SPA</il>
                    <il>SALON</il>
                </Items>
            </StyledLeft>

            <StyledLogo>
                <Link to="/404">
                    <StaticImage
                        src="../images/logo.png"
                        alt="gaia logo"
                        placeholder="blurred"
                        layout="fixed"
                        formats={['auto', 'webp', 'avif']}
                        width={100}
                        height={100}
                    />
                </Link>
            </StyledLogo>

            <StyledRight>
                <Items>
                    <il>ABOUT</il>
                    <il>POLICIES</il>
                </Items>
            </StyledRight>

        </StyledNavbar>
    </>

)


export default Navbar