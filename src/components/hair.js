import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { StyledContent, StyledLogoMobileContainer, StyledService, StyledServiceDesc, StyledServiceTittle, StyledServiceHair, StyledServiceNote, StyledWaxing, WaxingUno, WaxingDos, WaxingTres, Container, Item } from "../styles/js/content"


const Hair = ({ children }) => (
    <>
        <StyledLogoMobileContainer>
            <StaticImage
                className="container-logo"
                imgClassName="logo"
                src="../images/logo.png"
                alt="gaia logo skin"
                loading="eager"
                width={500}
                layout="constrained"
                formats={['auto', 'webp', 'avif']}
                quality='80'
            />
            <h1>Gaia Evolution</h1>
            <h2>HAIR CARE</h2>
        </StyledLogoMobileContainer>
        <StyledContent>
            <StyledService>
                <StyledServiceTittle hair>
                    HAIR CUTS
                </StyledServiceTittle>
                <StyledServiceDesc>
                    Include Shampoo service, gentle scalp massage. Blow dry and Styling are not included. Prices are based on hair length, density and haircut selected
                </StyledServiceDesc>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Men’s Haircut</li>
                        <li>Women’s Haircut</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$35 +</li>
                        <li>$35 – 65</li>
                    </ul>
                </StyledServiceHair>

            </StyledService>
            <StyledService>
                <StyledServiceTittle hair>
                    BLOW DRY
                </StyledServiceTittle>
                <StyledServiceDesc>
                    Include shampoo and hair mask that fit your needs. Our prices are based on hair length and density
                </StyledServiceDesc>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Women’s Blow Dry</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$35 – 65</li>
                    </ul>
                </StyledServiceHair>
            </StyledService>
            <StyledService>
                <StyledServiceTittle hair>
                    HAIR TREATMENTS                </StyledServiceTittle>
                <StyledServiceDesc>
                    Selecting the best treatment that fit your needs, Prices are based on treatment.
                </StyledServiceDesc>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Botanical Hair Treatments</li>
                        <li>Gloss Treatment</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$35 up to $55</li>
                        <li>$35+</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceNote>
                    We recommend our deep conditioning treatment packed with amino-acids
                </StyledServiceNote>
            </StyledService>
            <StyledService>
                <StyledServiceTittle hair>
                    COLOR
                </StyledServiceTittle>
                <StyledServiceDesc>
                    Shampoo, conditioning treatment and blow-out style are included. Prices will be determined by your consultation. Color services are provided only by previous consultation and appointment
                </StyledServiceDesc>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Touch-up (1" to 1 1/2" Growth)</li>
                        <li>Single Process Color</li>
                        <li>Double Process Color</li>
                        <li>Full Highlights</li>
                        <li>Full Highlights W/Toner</li>
                        <li>Partial Highlights</li>
                        <li>Partial Highlights W/Toner</li>
                        <li>Balayage/Ombre</li>
                        <li>Toner</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$55 – 65</li>
                        <li>$80+ </li>
                        <li>$120 – 280+</li>
                        <li>$150+</li>
                        <li>$175+</li>
                        <li>$100+</li>
                        <li>$125+</li>
                        <li>$140+</li>
                        <li>$35+</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceNote>
                    *Color Correction Upon Consultation
                </StyledServiceNote>
            </StyledService>

            <StyledService>
                <StyledServiceTittle hair>
                    BRAZILIAN BLOWOUT

                </StyledServiceTittle>
                <StyledServiceDesc>
                    Brazilian eliminates frizz, smoothest, adds shine, locks in color, improves the overall health of the hair, reduces daily styling time. Brazilian Blowout hair treatment consist of liquid keratin formula that bonds to your hair to create a protective layer around each strand.
                </StyledServiceDesc>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Brazilian Blowout</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$200 – 300 +</li>
                    </ul>
                </StyledServiceHair>
            </StyledService>

            <StyledService>
                <StyledServiceTittle m hair>
                    UP-DOS
                </StyledServiceTittle>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Flat Iron</li>
                        <li>Special Occasion</li>
                        <li>Curly Waves</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$25 – 45</li>
                        <li>$45 – 110</li>
                        <li>$35 – 65</li>
                    </ul>
                </StyledServiceHair>
            </StyledService>


            <StyledService>
                <StyledServiceTittle m hair>
                    LASH & BROWS SERVICES
                </StyledServiceTittle>
                <StyledServiceHair m hair service>
                    <ul>
                        <li>Brows Tint</li>
                        <li>Lash Tint</li>
                        <li>Lash & Brows Tint</li>
                        <li>Lash Lift</li>
                        <li>Lash Lift & Tint</li>
                    </ul>
                </StyledServiceHair>
                <StyledServiceHair m hair>
                    <ul>
                        <li>$20</li>
                        <li>$33</li>
                        <li>$50</li>
                        <li>$99</li>
                        <li>$130</li>
                    </ul>
                </StyledServiceHair>
            </StyledService>

            <StyledService>
                <StyledServiceTittle hair>
                    WAXING
                </StyledServiceTittle>
                <StyledServiceDesc>
                    We Use Gentle Soft or Hard Wax for All Skin Types
                </StyledServiceDesc>
                <StyledWaxing>
                    <WaxingUno service>
                        <Container>
                            <Item>
                                <ul>
                                    <li>Eyebrows waxing</li>
                                    <li>Full Leg waxing</li>
                                    <li>Full Arm Waxing</li>
                                    <li>Brazilian Waxin</li>
                                    <li>Full Leg W/Braz</li>
                                    <li>Shoulder Wax</li>
                                    <li>Stomach Waxing</li>
                                    <li>Full Face Waxin</li>
                                </ul>
                            </Item>
                            <Item price>
                                <ul>
                                    <li>$18</li>
                                    <li>$67</li>
                                    <li>$45</li>
                                    <li>$65</li>
                                    <li>$110</li>
                                    <li>$30</li>
                                    <li>$30</li>
                                    <li>$50</li>
                                </ul>
                            </Item>
                        </Container>
                    </WaxingUno>
                    <WaxingDos service>
                        <Container>
                            <Item>
                                <ul>
                                    <li>Upper Lip waxing</li>
                                    <li>Half Leg Waxing</li>
                                    <li>Bikini Waxing</li>
                                    <li>Full Leg W/Bikini Waxing</li>
                                    <li>Back & Shoulder Waxing</li>
                                    <li>Foot or Hand Waxing</li>
                                    <li>Cheeks</li>
                                    <li>Full Cheeks</li>
                                </ul>
                            </Item>
                            <Item price>
                                <ul>
                                    <li>$12</li>
                                    <li>$40</li>
                                    <li>$27</li>
                                    <li>$102</li>
                                    <li>$85</li>
                                    <li>$14</li>
                                    <li>$15</li>
                                    <li>$30</li>
                                </ul>
                            </Item>

                        </Container>
                    </WaxingDos>
                    <WaxingTres service>
                        <Container>
                            <Item>
                                <ul>
                                    <li>Under Arm Waxing</li>
                                    <li>Half Arm Waxing</li>
                                    <li>Extended  Bikini</li>
                                    <li>Back Waxing</li>
                                    <li>Chest Waxing</li>
                                    <li>Chest & Stomach</li>
                                    <li>Neck Waxing</li>
                                    <li>Chin</li>
                                </ul>
                            </Item>
                            <Item price>
                                <ul>
                                    <li>$22</li>
                                    <li>$25</li>
                                    <li>$40</li>
                                    <li>$55</li>
                                    <li>$45</li>
                                    <li>$75</li>
                                    <li>$17</li>
                                    <li>$15</li>
                                </ul>
                            </Item>
                        </Container>

                    </WaxingTres>
                </StyledWaxing>
            </StyledService>

        </StyledContent></>
)


export default Hair