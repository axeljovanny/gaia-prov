import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledFooter = styled.div`
display: none;
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: 15vh;
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

width: 100%;
height: 100%;
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

p{
  font-family:  ${font.light};
  color: ${colors.white} ;
  font-size: ${size.Wmini};
}

`}

`
export const StyledSocialContainer = styled.div`

${above.medium`
      
`}
${above.large`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5em;

width: 40%;
height: 100%;

`}

`
export const StyledSocialItem = styled.div`
display: flex;
justify-content: center ;
align-items: center;

`