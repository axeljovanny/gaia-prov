import React from "react"
import { Link } from "gatsby"
import '../styles/css/navbar.css'
import { StaticImage } from "gatsby-plugin-image"
import { StyledLogoContainer, ItemLeft, ItemRight, StyledLeft, StyledLogo, StyledNavbar, StyledRight } from "../styles/js/navbar"


const Navbar = ({ children }) => (
    <>
        <StyledNavbar>
            <StyledLeft>

                <ItemLeft>
                    <Link to="#">
                        SPA
                    </Link>
                </ItemLeft>

                <ItemLeft>
                    <Link to="#">
                        SALON
                    </Link>
                </ItemLeft>
            </StyledLeft>

            <StyledLogoContainer >
                    <Link to="/">
                        <StaticImage
                            className="logo"
                            src="../images/logo.png"
                            alt="gaia logo"
                            placeholder="blurred"
                            formats={['auto', 'webp', 'avif']}




                        />
                    </Link>
            </StyledLogoContainer>

            <StyledRight>
                <ItemRight>
                    <Link to="#">
                        ABOUT
                    </Link>
                </ItemRight>
                <ItemRight>
                    <Link to="#">
                        POLICIES
                    </Link>
                </ItemRight>
            </StyledRight>

        </StyledNavbar>
    </>

)


export default Navbar