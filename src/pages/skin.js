import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";


import Loadable from "@loadable/component"
import { SkinService, useSkinService } from "../components/skin";
import { ServiceNav } from "../components/navbar";

const Flecha = Loadable(() => import("../assets/Flecha.svg"))


const initialTitle = 'GAIA SIGNATURE';

const SkinPage = () => {
  const services = useSkinService()

  const [toggle, toggleNav] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  return (
    <StyledServicePage >
      <ServiceNav></ServiceNav>

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
