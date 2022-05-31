import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StyledLogoContainer, StyledItems, StyledNavbar, ItemNav } from "../styles/js/navbar"
import { OverlayMenu, Overlay, Item, StyledIcons, NavIcon, Line, OverlayFooter, Contacto, Logo } from "../styles/js/servnav"

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"





const Navbar = ({ siteTitle }) => {
    const [toggle, toggleNav] = useState(false);

    return (
        <>
            <StyledNavbar>
                <StyledItems>
                    <ItemNav>
                        <Link to="/hair">
                            HAIR CARE
                        </Link>
                    </ItemNav>
                    <ItemNav>
                        <Link to="/skin">
                            SKIN CARE
                        </Link>
                    </ItemNav>
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
                    <ItemNav>
                        <Link to="/body">
                            BODY CARE
                        </Link>
                    </ItemNav>
                    <ItemNav>
                        <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631" target="_blank" rel="noreferrer">
                            PRODUCTS
                        </a>
                    </ItemNav>
                </StyledItems>

                <NavIcon onClick={() => toggleNav(!toggle)}>
                    <Line open={toggle} />
                    <Line open={toggle} />
                    <Line open={toggle} />
                </NavIcon>

            </StyledNavbar>
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
        </>
    )

}



export { Navbar }