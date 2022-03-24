import React from "react"
import "../styles/css/home.css"

import { StyledContentContainer, StyledTitleContainer, StyledButtonsContainer, StyledText, StyledHome, StyledButton } from "../styles/js/home.js"

const Home = ({ children }) => (
    <>
        <StyledHome>
            <StyledContentContainer>
                <StyledTitleContainer>

                    <p className="title-gaia-evo">Gaia Evolution</p>
                    <p className="sub-gaia-evo" >Spa & Salon</p>

                    <StyledButtonsContainer>

                        <StyledButton className="button">
                            Gift Card
                        </StyledButton>
                        <StyledButton className="button">
                            AvedaShop
                        </StyledButton>
                    </StyledButtonsContainer>
                </StyledTitleContainer>


            </StyledContentContainer>
            <StyledText>
                NATURAL - ORGANIC - VEGAN - CRUELTYFREE
            </StyledText>



        </StyledHome >
    </>

)


export default Home