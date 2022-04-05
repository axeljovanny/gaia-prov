import React from "react"
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
                        alt="gaia logo home"
                        loading="eager"
                        width={500}
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        quality='80'
                    />
                </StyledLogoMobileContainer>
                <h3>Welcome to</h3>
                <h1>Gaia Evolution</h1>
                <h3>Spa & Salon</h3>

                <StyledButtonsContainer>
                    <a href="https://squareup.com/gift/FHH5R6M6H54FS/order" target="_blank" rel="noreferrer" >
                        <StyledButton className="button">
                            Gift Card
                        </StyledButton>
                    </a>
                    <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=38631" target="_blank" rel="noreferrer">
                        <StyledButton className="button">
                            Aveda Shop
                        </StyledButton>
                    </a>
                </StyledButtonsContainer>
            </StyledTitleContainer>
            <StyledText>
                NATURAL - ORGANIC - VEGAN - CRUELTYFREE
            </StyledText>
        </StyledHome >
    </>

)


export default Home