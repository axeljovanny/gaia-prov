import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { useCycle } from "framer-motion"
// Estilos
import { StyledLogoContainer, StyledItems, StyledNavbar, ItemNav, LineHome } from "../styles/js/navbar"
import { Overlay } from "../styles/js/servnav"
// SVG
import Loadable from "@loadable/component"
const Logow = Loadable(() => import("../assets/logo.svg"))
//Constantes
import { colors } from "../utils/const"

// NAV
import { MenuToggle } from "./nav/MenuToggle";
import { Navigation } from "./nav/Navigation";
import "./nav/styles.css";




const Navbar = ({ siteTitle }) => {
    const [toggle, toggleNav] = useState(false);

    return (
        <>
            <StyledNavbar>
                <StyledItems>
                    <ItemNav 
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} 
                    whileTap={{ scale: 0.9 }}>
                        <Link to="/hair"> HAIR CARE </Link>
                    </ItemNav>
                    <ItemNav 
                    whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} 
                    whileTap={{ scale: 0.9 }}>
                        <Link to="/skin"> SKIN CARE </Link>
                    </ItemNav>
                </StyledItems>

                <StyledLogoContainer>
                    <Link to="/">
                        <Logow className="logo" />
                    </Link>
                </StyledLogoContainer>

                <StyledItems>
                    <ItemNav 
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} 
                        whileTap={{ scale: 0.9 }}>                            
                        <Link to="/body"> BODY CARE </Link>
                    </ItemNav>
                    <ItemNav 
                        whileHover={{ scale: 1.1, priginX: 0, color: colors.accentBlue }} 
                        whileTap={{ scale: 0.9 }}>                            
                        <Link to="/about"> ABOUT US </Link>
                    </ItemNav>
                </StyledItems>
            </StyledNavbar>
            <IconNav/>            
        </>
    )

}


const IconNav = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
  
    return (
      <Overlay
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}>
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation open={isOpen}/>
      </Overlay>
    );
  };


export { Navbar, IconNav }