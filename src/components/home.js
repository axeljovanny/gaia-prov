import React from "react"
import { StyledHome, StyledButton, StyledText } from "../styles/js/home.js"

const Home = ({ children }) => (
    <>
        <StyledHome>

           {/*  <StyledButton>
                Buy Now
            </StyledButton> */}
            <StyledText>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </StyledText>
        </StyledHome>
    </>

)


export default Home