import React from "react"
import "../styles/css/home.css"
import { StyledTitleContainer, StyledSocialContainer, StyledHome, StyledLeftContainer, StyledRightContainer, StyledSocialMedia, StyledCircle } from "../styles/js/home.js"
// import GE from '../images/Elementos/GE.svg'
// import Circle from '../images/Elementos/NOVC.svg'
import { FacebookIcon, InstagramIcon, MapsIcon } from "../images/icons";
import { StyledSocialItem } from "../styles/js/footer"
import { colors } from "../utils/const"




const Home = ({ children }) => (
    <>
        <StyledHome>
            <StyledLeftContainer>
                <StyledCircle>
                    {/* <Circle /> */}
                </StyledCircle>
                <StyledSocialMedia>
                    <StyledSocialContainer>
                        <StyledSocialItem>
                            <a href="https://www.facebook.com/GaiaEvolutionGroup/" rel="noreferrer" target="_blank">
                                <FacebookIcon fill={colors.black} className="svgAbout" />
                            </a>
                        </StyledSocialItem>
                        <StyledSocialItem>
                            <a href="https://www.instagram.com/gaiaevolution/" rel="noreferrer" target="_blank">
                                <InstagramIcon fill={colors.black} className="svgAbout" />
                            </a>
                        </StyledSocialItem>
                        <StyledSocialItem>
                            <a href="https://www.google.com/maps/place/Gaia+Evolution+Spa+and+Salon/@41.9245235,-87.7068398,19z/data=!3m2!4b1!5s0x880fcd657178d7e3:0x4804758ad15f5cf!4m5!3m4!1s0x880fcd65725634f9:0xf6193b2710f612ea!8m2!3d41.9245235!4d-87.7062926" rel="noreferrer" target="_blank">
                                <MapsIcon fill={colors.black} className="svgAbout" />
                            </a>
                        </StyledSocialItem>
                    </StyledSocialContainer>
                </StyledSocialMedia>
            </StyledLeftContainer>
            <StyledTitleContainer>
                <h3>WELCOME TO</h3>
                {/* <GE /> */}
            </StyledTitleContainer>
            <StyledRightContainer>

            </StyledRightContainer>
        </StyledHome >
    </>

)


export default Home