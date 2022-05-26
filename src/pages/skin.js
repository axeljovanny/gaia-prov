import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle, StyledSVG } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";


import { SkinService, useSkinService } from "../components/skin";
import { ServiceNav } from "../components/servnav";
import { Line } from "../styles/js/servnav";


const initialTitle = 'GAIA SIGNATURE';

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


const SkinPage = () => {
  const services = useSkinService()

  const [title, setTitle] = useState(initialTitle);

  return (
    <StyledServicePage >
      <ServiceNav siteTitle="skin"></ServiceNav>
      <StyledServiceContent>
        <StyledServiceTittle>
          {services.map(({ node }) => {
            return (
              <TextTittle key={node.id}>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ ease: "linear" }}  onClick={() => setTitle(node.title)}>
                  {node.title}
                </motion.button>
              </TextTittle>
            )
          })}
        </StyledServiceTittle>
        <StyledSVG>
        <div>
            <motion.svg
            width="3"
            height="400"
            viewBox="0 0 2 542"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1 0V542"
              stroke="black"
              strokeWidth=".3"
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
        </StyledSVG>
        <StyledServiceDesc>
          <SkinService title={title} />
        </StyledServiceDesc>
        <StyledServicePhoto>
          <StaticImage
            className="container-prueba"
            imgClassName="logo"
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
    </StyledServicePage>
  )
};


export default SkinPage
