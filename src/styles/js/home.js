import { above } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"


export const StyledHome = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between ;
  align-items: center;
  flex-flow: row nowrap;
  width: 100vw;
  height: 60vh;
  ${above.medium`
      
  `}
  ${above.large`
  height: 90vh;
  
  `}
`
export const StyledTitleContainer = styled.div`
  width: 35%;
  background: none;
  height: auto;
  display: flex ;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  h3{
    display: flex ;
  align-items: flex-start;
  justify-content: flex-start;
    margin: 0;
    font-family: ${font.waveLight};
  }
  
  ${above.large`
  h3{
    font-size: ${size.Wtext};
    color: ${colors.black};
  }

  `}
`

export const StyledLeftContainer = styled.div`
  width: 30%;
  background: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${above.large`


  `}
`
export const StyledRightContainer = styled.div`
  width: 30%;
  background: none;
  height: 30%;
  display: flex ;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  ${above.large`


  `}
`

export const StyledCircle = styled.div`
  width: 60%;
  background: none;
  height: 30%;
  display: flex ;
  align-items:  flex-end;
  justify-content: flex-start;
  svg{
    transform: translate(-80%, 60%)
  }
  ${above.large`


  `}
`
export const StyledSocialMedia = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${above.large`


  `}
`

export const StyledSocialContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
gap: 0.2em 0;
background-color: none;

${above.medium`
      
`}
${above.large`
display: flex;
gap: 0.5em 0;
width: 20%;
height: 100%;

`}
`