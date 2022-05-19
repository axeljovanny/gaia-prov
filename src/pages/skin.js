import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledHomeReturn, StyledNavbar, StyledService, Line, NavIcon, StyledServiceNav, StyledServiceContent, StyledServiceFooter, StyledServicePage, StyledHome, Text, SVG, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceSwitch, StyledServiceNote, TextTittle, DescTittle, DescText, StyledNote, DescDetails, DescTime, DescPrice, DescBook } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";


import Loadable from "@loadable/component"
import { Skin } from "../components";

const Flecha = Loadable(() => import("../assets/Flecha.svg"))
const Linea = Loadable(() => import("../assets/LineaSeleccion.svg"))





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
            <Linea className="linea"></Linea>
          </SVG>

          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>

        </StyledNavbar>
      </StyledServiceNav>
      <StyledServiceSwitch></StyledServiceSwitch>
      <StyledServiceContent>
        <StyledServiceTittle>
          <Skin />
        </StyledServiceTittle>
        <StyledServiceDesc>
          <DescTittle><p>GAIA EXPRESS</p></DescTittle>
          <DescText><p>Meant to be for someone who is always on the run. This 45 min facial includes deep cleansing soothing mask and hydrating cremes</p></DescText>
          <DescDetails>
            <DescTime>
              45 min
            </DescTime>
            <DescPrice>
              $85
            </DescPrice>
            <DescBook>
              <Link to="/">
                BOOK NOW
                <Flecha className="flecha"></Flecha>
              </Link>
            </DescBook>
          </DescDetails>

        </StyledServiceDesc>
        <StyledServicePhoto>
          <StaticImage
            className="container-prueba"
            // imgClassName="logo"
            src="../images/Fotos/prueba1.jpg"
            alt="imagen de prueba"
            loading="eager"
            layout="constrained"
            formats={['auto', 'webp', 'avif']}
            quality='70'
          />
        </StyledServicePhoto>

      </StyledServiceContent>
      <StyledServiceNote>
        <StyledNote><p>Meant to be for someone who is always on the run. This 45 min facial includes deep cleansing soothing mask and hydrating cremes Meant to be for someone who is always on the run. This 45 min facial includes deep cleansing soothing mask and hydrating cremes</p></StyledNote>
      </StyledServiceNote>
      <StyledServiceFooter>
      </StyledServiceFooter>
    </StyledServicePage>
  )
};


export default SkinPage
