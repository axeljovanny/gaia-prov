import { Link } from "gatsby";
import React, { useState } from "react"
import { StyledServiceContent, StyledServicePage, StyledServiceTittle, StyledServiceDesc, StyledServicePhoto, StyledServiceNote, StyledNote, TextTittle } from "../styles/js/skin";
import '../styles/css/services.css'
import { StaticImage } from "gatsby-plugin-image";


import Loadable from "@loadable/component"
import { BodyService, useBodyService } from "../components/body";
import { ServiceNav } from "../components/servnav";

const Flecha = Loadable(() => import("../assets/Flecha.svg"))


const initialTitle = 'SPECIAL';

const BodyPage = () => {
    const bodyServices = useBodyService()

    const [type, setType] = useState(initialTitle);

    const result = bodyServices.map(({ node }) => node.type)
    const sort = result.filter((item,
        index) => result.indexOf(item) === index);

    // console.log(sort);


    return (
        <StyledServicePage >
            <ServiceNav></ServiceNav>
            <StyledServiceContent>
                <StyledServiceTittle>
                    {sort.map((data) => {
                        return (
                            <TextTittle key={data}>
                                <button onClick={() => setType(data)}>
                                    {data}
                                </button>
                            </TextTittle>
                        )
                    })}
                </StyledServiceTittle>
                <StyledServiceDesc >
                    <BodyService type={type} />
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
                <StyledNote><p>All facial treatments are customized to treat individual skin care needs and include skin analysis, cleansing, exfoliation, and treatment mask, and are completed with the application of serums, moisturizers and/or sun protection. A skin care prescription will be designed and recommended to help maintain the health and integrity of the skin. Add on service are included on the 1.5hr and 2hr services</p></StyledNote>
                <StyledNote><p> © Gaia Evolution Spa & Salon  2022  |  Lucky Ducky Studio</p></StyledNote>
            </StyledServiceNote>
            {/* <StyledServiceFooter>
      </StyledServiceFooter> */}
        </StyledServicePage>
    )
};


export default BodyPage
