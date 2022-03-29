import React from "react"
import { Link } from "gatsby"
import "../styles/css/home.css"
import { StaticImage } from "gatsby-plugin-image";
import { StyledTitleContainer, StyledButtonsContainer, StyledText, StyledHome, StyledButton, StyledLogoMobileContainer } from "../styles/js/home.js"


const Home = ({ children }) => (
    <>
        <StyledHome>
            <StyledTitleContainer>
                <StyledLogoMobileContainer>
                    <StaticImage
                        className="container-logo"
                        imgClassName="logo"
                        src="../images/logo.png"
                        alt="gaia logo"
                        loading="eager"
                        layout="constrained"
                        breakpoints={[750, 1080, 1366, 1920]}
                        formats={['auto', 'webp', 'avif']}
                        quality='80'
                    />
                </StyledLogoMobileContainer>
                <h1>Gaia Evolution</h1>
                <h3>Spa & Salon</h3>

                <StyledButtonsContainer>
                    <Link to="/">
                        <StyledButton className="button">
                            Gift Card
                        </StyledButton>
                    </Link>
                    <Link to="/">
                        <StyledButton className="button">
                            AvedaShop
                        </StyledButton>
                    </Link>
                </StyledButtonsContainer>
            </StyledTitleContainer>
            <StyledText>
                NATURAL - ORGANIC - VEGAN - CRUELTYFREE
            </StyledText>
        </StyledHome >
    </>

)


export default Home