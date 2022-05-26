import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OverlayMenu, StyledHomeReturn, StyledNavbarServ, StyledService, StyledServiceNav, SVG, Text, Overlay, Item, StyledIcons, NavIcon, Line, OverlayFooter, Contacto, Logo } from "../styles/js/servnav"

import { MapsIcon, FacebookIcon, InstagramIcon } from "../images/icons"
import { colors } from "../utils/const"
import { motion } from "framer-motion"

import Loadable from "@loadable/component"
const Flecha = Loadable(() => import("../assets/Flecha.svg"))
/* const Linea = Loadable(() => import("../assets/LineaSeleccion.svg")) */


const draw = {
    hidden: { pathLength: 0 },
    visible: () => {
      return {
        pathLength: 1,
        transition: {
          pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        },
      };
    },
  };


const ServiceNav = ({ siteTitle }) => {
    // const [select, setSelect] =useState
    const [toggle, toggleNav] = useState(false);
    return (
        <>
            <StyledServiceNav>
                <StyledHomeReturn>
                    <Link to="/">
                        <Flecha className="flecha"></Flecha>
                        <motion.p
              /* ANIMACION */

              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "linear" }}
            >
              HOME
            </motion.p>
                    </Link>
                </StyledHomeReturn>
                <StyledNavbarServ>
                    <Text>
                        <StyledService siteTitle="skin" select={siteTitle}>
                            <Link to="/skin">
                            <motion.p
                  /* ANIMACION */

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ ease: "linear" }}
                >
                  SKIN CARE
                </motion.p>
                            </Link>
                        </StyledService>
                        <StyledService siteTitle="hair" select={siteTitle}>
                            <Link to="/hair">
                            <motion.p
                  /* ANIMACION */

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ ease: "linear" }}
                >
                  HAIR CARE
                </motion.p>
                            </Link>
                        </StyledService>
                        <StyledService siteTitle="body" select={siteTitle}>
                            <Link to="/body">
                            <motion.p
                  /* ANIMACION */

                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ ease: "linear" }}
                >
                  BODY CARE
                </motion.p>
                            </Link>
                        </StyledService>
                    </Text>
                    <SVG>
                    <div>
            <motion.svg
            width="1050"
            height="3"
            viewBox="0 0 1010 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 1H1090"
              stroke="black"
              strokeWidth=".2"
              animate={{
                pathLength: [0, 1],
              }}
              transition={{
                times: [0, 1],
                duration: 1
              }}
              variants={{ draw }}
            />
            {<motion.rect />}
          </motion.svg>    
                 </div>
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