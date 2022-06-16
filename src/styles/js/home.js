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
  position: fixed;
  top: 60%;
  right: 0;
  width: 10vw;
  height: 30vh;
  background: ${colors.none};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${above.large`
  justify-content: flex-end;
  align-items: flex-end;
  top: 40%;
  width: 5vw;
  height: 40vh;

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
  width: 80%;
  height: 90%;
  padding: 0;
  background: ${colors.none};
  
  color: ${colors.black};

  h1{ 
    font-family: ${font.waveBold};
    font-size: ${size.Mtittle};
  }
  h2{
    font-family: ${font.light};
    font-size: ${size.Mtittle};
  }
  h3{
    text-align:justify;
    font-family: ${font.light};
    font-size: ${size.Mtext};
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
  
  `}
`

export const ImgsWedo = styled.div`
  display:flex;
  justify-content: center ;
  align-items: center;
  width: 50%;
  height: 30%;
  right: -15%;
  top: 100%;
  position: absolute;
  background: ${colors.none};
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
  width: 100%;
  height: 70%;
  max-width: 300px;

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
  height: 40vh;
  display:flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  ${above.large` 
  width: 100vw;
  height: 70vh;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  `}
  `

//////TRATAMIENTS

export const StyledSkin = styled.div`
  position: relative;
  background: ${colors.softWhite};
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

  ${above.large` 
  `}
  `
export const StyledHair = styled.div`
  position: relative;
  background: ${colors.green};
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  ${above.large` 
  flex-direction: row;
  justify-content: center;
  align-items: center;

  `}
  `

export const StyledTratamient = styled.div`
  display:flex;
  justify-content: center ;
  align-items: center;
  flex-flow: column-reverse nowrap;
  width: 90%;
  height: 90%;
  background: ${colors.none};
  ${above.large`
  width: 80%;
  height: 100%;
  flex-flow: row nowrap;
  justify-content: space-evenly ;

  
  `}
`

export const ImgSkin = styled.div`
  display:flex;
  justify-content: flex-start ;
  align-items: center;
  width: 50%;
  height: 30%;
  background: ${colors.none};
  ${above.large`
  width: 20%;
  height: 90%;
  `}
`

export const TextSkin = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center ;
  align-items: center;
  width: 80%;
  height: 90%;
  padding: 0;
  background: ${colors.none};
  
  color: ${colors.green};

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
  height: 50%;
  justify-content: flex-end;
  width: 45%;
  a{
    justify-content: flex-start ;
  }
  
  `}
`
export const ImgHair = styled.div`
  display:flex;
  justify-content: flex-start ;
  align-items: center;
  width: 50%;
  height: 30%;
  background: ${colors.none};
  ${above.large`
  width: 25%;
  height: 90%;
  `}
`

export const TextHair = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: flex-end ;
  align-items: center;
  width: 80%;
  height: 70%;
  padding: 0;
  background: ${colors.none};
  
  color: ${colors.softWhite};

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
    color: ${colors.softWhite};
  }
  ${above.large`
  width: 45%;
  height: 50%;
  justify-content: flex-end;

  a{
    justify-content: flex-start ;
  }
  
  `}
`

//////MAPS

export const StyledMaps = styled.div`
  display:flex;
  width: 100vw;
  height: 80vh;
  background: ${colors.none};
  position: relative;

  ${above.large`
  width: 100vw;
  height: 70vh;

  
  `}
`
export const TextMaps = styled.div`
  display flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  
  width: 100%;
  height: 20%;

  background: ${colors.none};
  position: absolute;
  left:auto;
  top: ${props => (props.movil ? "auto" : "0")};
  bottom: ${props => (props.movil ? "15%" : "auto")};

  h2{
    width: 90%;
    text-align: center;
    font-family: ${font.waveBold};
    font-size: ${size.Mheader};
    color: ${colors.green};
  }

  h3{
    display:${props => (props.movil ? "flex" : "none")};
    width: 80%;
    text-align: justify;
    font-family: ${font.light};
    font-size: ${size.Mtext};
    color: ${colors.green};

  }
  a{
    display: ${props => (props.movil ? "flex" : "none")};
    justify-content: center ;
    gap: 0.5em;
    padding: 2em 0 0;
    width: 100%;
    color: ${colors.green};
  }

  ${above.large`
  display ${props => (props.movil ? "none" : "flex")};
  justify-content: flex-start;
  align-items: flex-end;
  width: 45%;
  height: 70vh;
  left:0;
  top:auto;
  h2{
    margin:0;
    width: 70%;
    text-align: left;
    font-family: ${font.waveBold};
    font-size: ${size.Mheader};
    color: ${colors.green};
  }
  h3{
    display:flex;
    width: 70%;
    font-family: ${font.light};
    font-size: ${size.Wtext};

  }
  a{
    display: ${props => (props.movil ? "none" : "flex")};
  }

  
  `}
`

export const TransMap = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  left: auto;
  top: 10%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${colors.softWhite} 40%);

  ${above.large`
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, ${colors.softWhite} 40%);

  width: 30%;
  height: 70vh;
  left: 30%;
  top: auto;


  
  `}
`