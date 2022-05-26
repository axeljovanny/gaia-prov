import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle, StyledSVG } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import Loadable from "@loadable/component"
import { HairService, useHairService } from "../components/hair";
import { ServiceNav } from "../components/servnav";

const Flecha = Loadable(() => import("../assets/Flecha.svg"))


const initialTitle = 'HAIR CUTS';

const HairPage = () => {
  const hairServices = useHairService()
  // console.log(hairServices);

  const [type, setType] = useState(initialTitle);

  const result = hairServices.map(({ node }) => node.type)
  const sort = result.filter((item,
    index) => result.indexOf(item) === index);

  // console.log(sort);


  return (
    <StyledServicePage siteTitle="hair">
      <ServiceNav siteTitle="hair"></ServiceNav>
      <StyledServiceContent>
        <StyledServiceTittle>
          {sort.map((data) => {
            return (
              <TextTittle key={data}>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ ease: "linear" }} onClick={() => setType(data)}>
                  {data}
                </motion.button>
              </TextTittle>
            )
          })}
        </StyledServiceTittle>
        <StyledSVG>
        </StyledSVG>
        <StyledServiceDesc >
          <HairService type={type} />
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
        <StyledNote><p> © Gaia Evolution Spa & Salon  {(new Date().getFullYear())} | <a href="https://luckyducky.studio/" rel="noreferrer" target="_blank">Lucky Ducky Studio</a></p></StyledNote>
      </StyledServiceNote>
      {/* <StyledServiceFooter>
      </StyledServiceFooter> */}
    </StyledServicePage>
  )
};


export default HairPage
