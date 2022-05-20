import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledHomeReturn, StyledNavbar, StyledService, Line, NavIcon, StyledServiceNav, StyledServiceContent, StyledServicePage, StyledHome, Text, SVG, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceSwitch, StyledServiceNote, StyledNote, TextTittle } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";


import Loadable from "@loadable/component"
import { SkinService, useSkinService } from "../components/skin";

const Flecha = Loadable(() => import("../assets/Flecha.svg"))
const Linea = Loadable(() => import("../assets/LineaSeleccion.svg"))


const initialTitle = 'GAIA SIGNATURE';

const SkinPage = () => {
  const services = useSkinService()

  const [toggle, toggleNav] = useState(false);
  const [title, setTitle] = useState(initialTitle);

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
      {/* <StyledServiceSwitch></StyledServiceSwitch> */}
      <StyledServiceContent>
        <StyledServiceTittle>
          {services.map(({ node }) => {
            return (
              <>
                {node.subcategory === 'aveda' && (
                  <TextTittle>
                    <button onClick={() => setTitle(node.title)}>
                      {node.title}
                    </button>
                  </TextTittle>)}
              </>
            )
          })}
        </StyledServiceTittle>
        <StyledServiceDesc >
          <SkinService title={title} />
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
      {/* <StyledServiceFooter>
      </StyledServiceFooter> */}
    </StyledServicePage>
  )
};


export default SkinPage
