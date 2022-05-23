import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";


import Loadable from "@loadable/component"
import { HairService, useHairService } from "../components/hair";
import { ServiceNav } from "../components/navbar";

const Flecha = Loadable(() => import("../assets/Flecha.svg"))


const initialTitle = 'HAIR CUTS';

const HairPage = () => {
  const hairServices = useHairService()
  // console.log(hairServices);

  const [toggle, toggleNav] = useState(false);
  const [type, setType] = useState(initialTitle);

  const result = hairServices.map(({ node }) => node.type)
  const sort = result.filter((item,
    index) => result.indexOf(item) === index);

  // console.log(sort);


  return (
    <StyledServicePage >
      <ServiceNav></ServiceNav>
      {/* <StyledServiceSwitch></StyledServiceSwitch> */}
      <StyledServiceContent>
        <StyledServiceTittle>
          {sort.map((data) => {
            return (
              <>
                <TextTittle>
                  <button onClick={() => setType(data)}>
                    {data}
                  </button>
                </TextTittle>
              </>
            )
          })}
        </StyledServiceTittle>
        <StyledServiceDesc >
          <HairService type={type} />
          <Link to="/">
            BOOK NOW
            <Flecha className="flecha"></Flecha>
          </Link>
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


export default HairPage
