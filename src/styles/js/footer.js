import styled from "styled-components"
import { above } from "."

export const StyledFooter = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: 8vh;
  bottom: 0;
  left: 0;
  background: none;

  `}
`

export const StyledContainer = styled.div`
  
${above.medium`
      
`}
${above.large`
display:flex;
justify-content: center;
align-items: center;

/* width: 70%; */
width: 100%;
height: 100%;
/* background: red; */
background: none;

margin: 0 12px 0 12px;

`}

`

export const StyledItem = styled.div`

${above.medium`
      
`}
${above.large`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;
margin: 0 10px 0 10px;
background: none;

`}

`
export const StyledSocialContainer = styled.div`

${above.medium`
      
`}
${above.large`
display: flex;
justify-content: center;
align-items: center;

width: 40%;
height: 100%;
margin: 0 10px 0 10px;
background: none;

`}

`
export const StyledSocialItem = styled.div`

display: flex;
justify-content: center ;
align-items: center;

width: 2vw;
margin: 0 4px 0 4px;

background: none;


`