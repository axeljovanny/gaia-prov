import { above } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"


export const StyledHome = styled.div`
  display: grid; 
  grid-template-columns: repeat(3); 
  grid-template-rows: repeat(3); 
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  width: 100vw;
  height: 100vh;
  padding-top: 0%;
  background: ${colors.none};
  ${above.large`  
  grid-template-rows: repeat(2); 
  `}
`

export const CircleNature = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  width: 100vw;
  height: 40vh;
  background: ${colors.none};
  display:flex;
  align-items: center;
  position: relative;
  ${above.large`
  width: 19vw;
  height: 60vh;
  position: relative;
  grid-area: 1 / 1 / 2 / 2; 
  `}
`
export const LogoPrincipal = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  width: 100vw;
  height: 20vh;
  background: ${colors.none};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3{
    line-height : 2vh;
    margin:0;
    height: auto;
    font-family: ${font.waveLight};
    font-size: ${size.Mtittle};
  }
  svg{
    width: 80%;
  }
  ${above.large`
  width: 60vw;
  height: 60vh;
  grid-area: 1 / 2 / 2 / 3;

  justify-content: flex-end;

  h3{
    font-family: ${font.waveLight};
    font-size: ${size.Wtext};
  }
  svg{
    width: 60%;
  }
  `}
`

export const Gift = styled.div`
  grid-area: 3 / 3 / 4 / 4;
  width: calc(100vw / 3);
  height: 40vh;
  background: ${colors.none};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${above.large`
  justify-content: flex-end;
  align-items: flex-end;

  width: 20vw;
  height: 60vh;
  grid-area: 1 / 3 / 2 / 4; 
  `}
`

export const Social = styled.div`
  grid-area: none;
  display:none;

  ${above.large`
  grid-area: 2 / 1 / 3 / 2; 
  width: 19vw;
  height: 40vh;

  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4em;

  div {
    padding: 10% 0;
  }
  svg{
    width: 100%;
    padding: 5% 0;
  }
  `}
`

export const PhoneLogo = styled.div`
  grid-area: 3 / 2 / 4 / 3;
  width: calc(100vw / 3);
  height: 40vh;
  background: ${colors.none};

  display: flex;
  justify-content: center ;
  align-items: flex-end;

  svg{
    margin-bottom: 4vh;
    width: 50px;
    height: auto;
  }

  a{display: none;}

  ${above.large`
  width: 60vw;
  height: 40vh;
  grid-area: 2 / 2 / 3 / 3; 

  a{
    display:flex;
    margin-bottom: 5vh;
    font-family: ${font.medium};
    font-size: ${size.Wtext};
    color: ${colors.white};
  }
  `}
`
export const Scroll = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  width: calc(100vw / 3);
  height: 40vh;
  background: none;
  ${above.large`
  width: 20vw;
  height: 40vh;
  grid-area: 2 / 3 / 3 / 4; 
  `}
`
///////// WEDO //////////
export const StyledWedoSection = styled.div`
  display:flex;
  justify-content: center ;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${colors.softWhite};
  ${above.large`
  
  `}
`
export const StyledWedo = styled.div`
  display:flex;
  justify-content: center ;
  align-items: center;
  flex-flow: column-reverse nowrap;
  width: 90%;
  height: 90%;
  background: ${colors.none};
  ${above.large`
  width: 90%;
  height: 70%;
  flex-flow: row nowrap;

  
  `}
`

export const TextWedo = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center ;
  align-items: flex-start;
  width: 100%;
  height: 90%;
  padding: 0;
  background: ${colors.none};
  
  color: ${colors.black};

  h1{ 
    font-family: ${font.waveBold};
    font-size: ${size.Wtittle};
  }
  h2{
    font-family: ${font.light};
    font-size: ${size.Wtittle};
  }
  h3{
    text-align:justify;
    font-family: ${font.light};
    font-size: ${size.Wtext};
  }
  a{
    display:flex;
    justify-content: center ;
    gap: 0.5em;
    padding: 4em 0 0;
    width: 100%;
    color: ${colors.green};
  }
  ${above.large`
  padding: 0 1em 0 4em;
  width: 55%;
  height: 90%;
  a{
    justify-content: flex-start ;
  }
  
  `}
`

export const ImgsWedo = styled.div`
  display:flex;
  justify-content: center ;
  align-items: center;
  width: 50%;
  height: 30%;
  right: -10%;
  top: 100%;
  position: absolute;
  background: ${colors.yell};
  ${above.large`
  position: relative;
  right: auto;
  top: auto;
  width: 45%;
  height: 90%;
  
  `}
`


///////// PRODUCTS //////////

export const StyledProducts = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;

  width: 100vw;
  height: 80vh;
  background: ${colors.none};
  ${above.large`  
  
  `}
`

export const RectanguloProd = styled.div`
  width: 100%;
  height: 70%;
  max-width: 300px;
  background: ${colors.none};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  *{
    box-sizing: border-box;
    transition: 400ms;
  }

  ${above.large`  

  `}
`
export const Rectangulo = styled.div`
  position: absolute;
  bottom: -20px;
  background: ${colors.green};
  border-radius: 5px;
  width: 100%;
  height: 60%;
  `
export const Rectangulo2 = styled.div`
  position: absolute;
  bottom: -12%;
  background: ${colors.softWhite};
  width: 110%;
  height: 20%;
  ${above.large`  
  height: 30%;
  bottom: -10%;
  `}
  ${above.xlarge`  
  height: 40%;
  bottom: -12%;
  `}
  `

export const BannerProducts = styled.div`
  position: relative;
  background: ${colors.green};
  width: 100vw;
  height: 70vh;
  display:flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;



  ${above.large` 
  `}
  `

