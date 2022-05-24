import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";


import Loadable from "@loadable/component"
import { SkinService, useSkinService } from "../components/skin";
import { ServiceNav } from "../components/servnav";

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
        <StyledNote><p>All facial treatments are customized to treat individual skin care needs and include skin analysis, cleansing, exfoliation, and treatment mask, and are completed with the application of serums, moisturizers and/or sun protection. A skin care prescription will be designed and recommended to help maintain the health and integrity of the skin. Add on service are included on the 1.5hr and 2hr services</p></StyledNote>
      </StyledServiceNote>
      {/* <StyledServiceFooter>
      </StyledServiceFooter> */}
    </StyledServicePage>
  )
};


export default SkinPage
