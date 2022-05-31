import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle, StyledSVG, StyledServiceMobileContent, StyledService, DescBook } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { colors } from "../utils/const";
import '../styles/css/skin.css'

import { BodyMobileService, BodyService, useBodyService } from "../components/body";
import { ServiceNav } from "../components/servnav";


const initialTitle = 'SPECIAL';

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

const BodyPage = () => {
  const bodyServices = useBodyService()

  const [type, setType] = useState(initialTitle);

  const result = bodyServices.map(({ node }) => node.type)
  const sort = result.filter((item,
    index) => result.indexOf(item) === index);

  // console.log(sort);


  return (
    <StyledServicePage >
      <ServiceNav siteTitle="body"></ServiceNav>
      <StyledServiceContent>
        <StyledServiceTittle>
          {sort.map((data) => {
            return (
              <TextTittle key={data}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                  <motion.button whileHover={{ scale: 1.1, color: colors.accentBlue }} whileTap={{ scale: 0.9 }} transition={{ ease: "linear" }} onClick={() => setType(data)}>
                    {data}
                  </motion.button>
                </motion.div>
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
        <StyledServiceDesc >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }}>
            <BodyService type={type} />
          </motion.div>
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
      <StyledServiceMobileContent>
        <StyledService>
          <h1>Body care</h1>
          <h2>Services</h2>
          <a href="https://squareup.com/appointments/book/18a837f7-27d0-4fb3-9184-eed5ec31a526/9XWS7XZK8MK0T/services" target="_blank" rel="noreferrer">
            <DescBook>BOOK NOW</DescBook>
          </a>
        </StyledService>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }}>
          <BodyMobileService />
        </motion.div>
      </StyledServiceMobileContent>
      <StyledServiceNote>
        <StyledNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .5, ease: "backInOut" }}></motion.p></StyledNote>
        <StyledNote><motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.3, delay: .9, ease: "backInOut" }}> © Gaia Evolution Spa & Salon  {(new Date().getFullYear())} | <a href="https://luckyducky.studio/" rel="noreferrer" target="_blank">Lucky Ducky Studio</a></motion.p></StyledNote></StyledServiceNote>
      {/* <StyledServiceFooter>
      </StyledServiceFooter> */}
    </StyledServicePage>
  )
};


export default BodyPage
