import styled from "styled-components"
import { above } from "."


export const StyledHome = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`

    display: flex;
    justify-content: center ;
    align-items: center;
    width: 100vw;
    height: 75vh;
    background: none ;
  `}
`



export const StyledButton = styled.button`
  
  ${above.medium`
      
  `}
  ${above.large`
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin: 0 25px 0 25px;
    justify-content: center ;
    background-color: none;
    border 1px white transparent;
    font-family: 'Montserrat', sans-serif;

  `}
`


export const StyledText = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
  float: right;
  right: 0;
  height: auto;
  text-align:center;
  position: absolute; 
  width: fit-content;
  background: none;
  transform: rotate(90deg) translateY(-110px);
  font-family: 'Montserrat', sans-serif;

  `}
`


export const StyledContentContainer = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
    width: 70%;
    height: 70vh;
    display: flex;
    font-size: 3rem;
    background: none;
    align-items: center;
    justify-content: center ;
    font-family: 'Montserrat', sans-serif;

  `}
`


export const StyledTitleContainer = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
    width: 100%;
    background: none;
    font-size: 1rem;
    height: fit-content;
    align-items: center;
    
    display: list-item flow ;
    justify-content: center ;
    font-family: 'Montserrat', sans-serif;

  `}
`


export const StyledButtonsContainer = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
    width: 100%;
    display: flex ;
    background: none;
    align-items: center;
    height: fit-content ;
    justify-content: center ;
    font-family: 'Montserrat', sans-serif;

  `}
`

