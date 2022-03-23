import styled from "styled-components"
import { above } from "."

export const StyledHome = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
    width: 100%;
    height: 75vh;
    background: none;
  `}
`

export const StyledButton = styled.button`
  
  ${above.medium`
      
  `}
  ${above.large`
    transform: translate(20vw, 50vh); 
    width: 90px;
    height: 35px;
    background-color: none;
    border-radius: 40px;

  `}
`

export const StyledText = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
    diaplay: flex;
    align-items:center;
    justify-content: center;
    float: right;
    right: 10px;
    background: red;

    // transform: rotate(90deg);

  `}
`