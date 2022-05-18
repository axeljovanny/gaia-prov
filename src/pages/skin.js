import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledHomeReturn, StyledNavbar, StyledService, Line, NavIcon, StyledServiceNav, StyledServiceContent, StyledServiceFooter, StyledServicePage, StyledHome, Text, SVG } from "../styles/js/skin";
import '../styles/css/services.css'
import Loadable from "@loadable/component"


const Flecha = Loadable(() => import("../assets/Flecha.svg"))





const SkinPage = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <StyledServicePage >
      <StyledServiceNav>
        <StyledHome>
          <StyledHomeReturn>
            <Link to="/">
              <Flecha className="flecha"></Flecha>
              HOME
            </Link>
          </StyledHomeReturn>
        </StyledHome>
        <StyledNavbar>
          <Text><StyledService>
            <Link to="/skin">
              SKIN CARE
            </Link>

          </StyledService>
            <StyledService>
              <Link to="/hair">
                HAIR CARE
              </Link>

            </StyledService>
            <StyledService>
              <Link to="/body">
                BODY CARE
              </Link>

            </StyledService></Text>
          <SVG>
            {/* <Linea className="linea"></Linea> */}
          </SVG>



          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>

        </StyledNavbar>
      </StyledServiceNav>
      <StyledServiceContent></StyledServiceContent>
      <StyledServiceFooter></StyledServiceFooter>
    </StyledServicePage>
  )
};


export default SkinPage
