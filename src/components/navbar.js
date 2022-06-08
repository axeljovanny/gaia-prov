import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StyledLogoContainer, StyledItems, StyledNavbar, ItemNav, LineHome } from "../styles/js/navbar"
import { OverlayMenu, Overlay, Item, StyledIcons, NavIcon, Line, OverlayFooter, Contacto, Logo } from "../styles/js/servnav"
import { motion } from "framer-motion"

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"





const Navbar = ({ siteTitle }) => {
    const [toggle, toggleNav] = useState(false);

    return (
        <>
            <StyledNavbar>
                <StyledItems>
                    <ItemNav>
                        <motion.p whileHover={{scale: 1.1, priginX: 0}} whileTap={{ scale: 0.9}}>
                        <Link to="/hair">
                           <motion.a whileHover={{color:colors.accentBlue}}> HAIR CARE </motion.a>
                        </Link>
                        </motion.p>
                    </ItemNav>
                    <ItemNav>
                        <motion.p whileHover={{ scale: 1.1, priginX: 0}} whileTap={{ scale: 0.9}}>
                        <Link to="/skin">
                        <motion.a whileHover={{color:colors.accentBlue}}>SKIN CARE</motion.a>
                        </Link>
                        </motion.p>
                    </ItemNav>
                </StyledItems>

                <StyledLogoContainer >
                    <Link to="/">
                        <div className="logonav">
                        <StaticImage
                            className="logo"
                            src="../images/logo.png"
                            alt="gaia logo nav"
                            loading="eager"
                            width={110}
                            placeholder="blurred"
                            formats={['auto', 'webp', 'avif']}
                            quality={100}/>
                        </div>
                    </Link>
                </StyledLogoContainer>

                <StyledItems>
                    <ItemNav>
                        <motion.p whileHover={{ scale: 1.1, priginX: 0}} whileTap={{ scale: 0.9}}>
                        <Link to="/body">
                        <motion.a whileHover={{color:colors.accentBlue}}> BODY CARE </motion.a>
                        </Link>
                        </motion.p>
                    </ItemNav>
                    <ItemNav>
                        <motion.a whileHover={{scale:1.1,priginX: 0,color:colors.accentBlue}} href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631" target="_blank" rel="noreferrer">
                            PRODUCTS
                        </motion.a>
                    </ItemNav>
                </StyledItems>

                <NavIcon onClick={() => toggleNav(!toggle)}>
                    <LineHome open={toggle} />
                    <LineHome open={toggle} />
                    <LineHome open={toggle} />
                </NavIcon>

            </StyledNavbar>
            <Overlay open={toggle}>
                <StyledIcons open={toggle}>
                    <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                        <FacebookIcon fill={colors.white} className="svgAbout" />
                    </a>
                    <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">

                        <InstagramIcon fill={colors.white} className="svgAbout" />
                    </a>
                    <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                        <MapsIcon fill={colors.white} className="svgAbout" />
                    </a>
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
                            width={110}
                            layout="constrained"
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