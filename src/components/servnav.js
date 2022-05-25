import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OverlayMenu, StyledHomeReturn, StyledNavbarServ, StyledService, StyledServiceNav, SVG, Text, Overlay, Item, StyledIcons, NavIcon, Line, OverlayFooter, Contacto, Logo } from "../styles/js/servnav"

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"

import Loadable from "@loadable/component"
const Flecha = Loadable(() => import("../assets/Flecha.svg"))
const Linea = Loadable(() => import("../assets/LineaSeleccion.svg"))


const ServiceNav = ({ siteTitle }) => {
    // const [select, setSelect] =useState
    const [toggle, toggleNav] = useState(false);
    return (
        <>
            <StyledServiceNav>
                <StyledHomeReturn>
                    <Link to="/">
                        <Flecha className="flecha"></Flecha>
                        HOME
                    </Link>
                </StyledHomeReturn>
                <StyledNavbarServ>
                    <Text>
                        <StyledService siteTitle="skin" select={siteTitle}>
                            <Link to="/skin">
                                SKIN CARE
                            </Link>
                        </StyledService>
                        <StyledService siteTitle="hair" select={siteTitle}>
                            <Link to="/hair">
                                HAIR CARE
                            </Link>
                        </StyledService>
                        <StyledService siteTitle="body" select={siteTitle}>
                            <Link to="/body">
                                BODY CARE
                            </Link>
                        </StyledService>
                    </Text>
                    <SVG>
                        <Linea className="linea"></Linea>
                    </SVG>

                    <NavIcon onClick={() => toggleNav(!toggle)}>
                        <Line open={toggle} />
                        <Line open={toggle} />
                        <Line open={toggle} />
                    </NavIcon>

                </StyledNavbarServ>
                <Overlay open={toggle}>
                    <StyledIcons open={toggle}>
                        <FacebookIcon fill={colors.white} className="svgAbout" />
                        <InstagramIcon fill={colors.white} className="svgAbout" />
                        <MapsIcon fill={colors.white} className="svgAbout" />
                    </StyledIcons>
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
                            <Link to="/body">
                                BODY CARE
                            </Link>
                        </Item>
                        <Item onClick={() => toggleNav(!toggle)}>
                            <Link to="/">
                                SHOP
                            </Link>
                        </Item>
                        <Item onClick={() => toggleNav(!toggle)}>
                            <Link to="/policies">
                                POLICIES
                            </Link>
                        </Item>
                    </OverlayMenu>
                    <OverlayFooter open={toggle}>
                        <Logo>
                            <StaticImage
                                className="logoFooter"
                                src="../images/logo.png"
                                alt="gaia logo nav"
                                loading="eager"
                                layout="fullWidth"
                                placeholder="blurred"
                                formats={['auto', 'webp', 'avif']}
                                quality={60}
                            />
                        </Logo>
                        <Contacto>
                            <a href="tel:773-799-8843">773-799-8843</a>
                            <a href="mailto:gaiaevolution@icloud.com">
                                gaiaevolution@icloud.com
                            </a>
                            <p> 3143 W. Fullerton Ave. Chicago, IL</p>
                        </Contacto>
                    </OverlayFooter>
                </Overlay>
            </StyledServiceNav>
        </>
    )

}

export { ServiceNav }