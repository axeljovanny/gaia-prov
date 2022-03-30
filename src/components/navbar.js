import React, { useState } from "react"
import { Link } from "gatsby"
import '../styles/css/navbar.css'
import { StaticImage } from "gatsby-plugin-image"
import { StyledLogoContainer, Item, StyledItems, StyledNavbar, Overlay, OverlayMenu, NavIcon, Line, StyledIcons } from "../styles/js/navbar"
import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"


const Navbar = ({ siteTitle }) => {
    const [toggle, toggleNav] = useState(false);

    return (
        <>
            <StyledNavbar>
                <StyledItems>
                    <Item>
                        <Link to="#">
                            SPA
                        </Link>
                    </Item>
                    <Item>
                        <Link to="#">
                            SALON
                        </Link>
                    </Item>
                </StyledItems>

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

                <StyledItems>
                    <Item>
                        <Link to="#">
                            ABOUT
                        </Link>
                    </Item>
                    <Item>
                        <Link to="#">
                            POLICIES
                        </Link>
                    </Item>
                </StyledItems>

                <NavIcon onClick={() => toggleNav(!toggle)}>
                    <Line open={toggle} />
                    <Line open={toggle} />
                    <Line open={toggle} />
                </NavIcon>

            </StyledNavbar>
            <Overlay open={toggle}>
                <OverlayMenu open={toggle}>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="#">
                            SPA
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="#">
                            SALON
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="#">
                            ABOUT
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="#">
                            POLICIES
                        </Link>
                    </Item>
                </OverlayMenu>


                <StyledIcons open={toggle}>
                    <FacebookIcon fill={colors.white} className="svgAbout" />
                    <InstagramIcon fill={colors.white} className="svgAbout" />
                    <MapsIcon fill={colors.white} className="svgAbout" />
                </StyledIcons>
            </Overlay>
        </>
    )

}


export default Navbar