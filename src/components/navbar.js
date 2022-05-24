import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StyledLogoContainer, Item, StyledItems, StyledButton, StyledNavbar, Overlay, OverlayMenu, NavIcon, StyledIcons, Line } from "../styles/js/navbar"

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"





const Navbar = ({ siteTitle }) => {
    const [toggle, toggleNav] = useState(false);

    return (
        <>
            <StyledNavbar>
                <StyledItems>
                    <Item>
                        <Link to="/hair">
                            HAIR CARE
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/skin">
                            SKIN CARE
                        </Link>
                    </Item>
                </StyledItems>

                <StyledLogoContainer >
                    <Link to="/">
                        <StaticImage
                            className="logo"
                            src="../images/logo.png"
                            alt="gaia logo nav"
                            loading="eager"
                            width={110}
                            placeholder="blurred"
                            formats={['auto', 'webp', 'avif']}
                            quality={100}

                        />
                    </Link>
                </StyledLogoContainer>

                <StyledItems>
                    <Item>
                        <Link to="/policies">
                            BODY CARE
                        </Link>
                    </Item>
                    <Item>
                        <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631" target="_blank" rel="noreferrer">
                            PRODUCTS
                        </a>
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
                        <Link to="/">
                            HOME
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="/skin">
                            SKIN CARE
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="/hair">
                            HAIR CARE
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <Link to="/policies">
                            POLICIES
                        </Link>
                    </Item>
                    <Item onClick={() => toggleNav(!toggle)}>
                        <a href="https://gaia-evolution-spasalon.square.site/" target="_blank" rel="noreferrer">
                            <StyledButton className="button">
                                BOOK NOW
                            </StyledButton>
                        </a>
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



export { Navbar }