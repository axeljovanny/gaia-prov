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
  left: 35%;
  top: -35%;
  ${above.large`
  width: 20vw;
  height: 60vh;
  position: relative;
  left: -33%;
  top: 0;
  grid-area: 1 / 1 / 2 / 2; 
  div{
    transform: translate(-200px);
  }  
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
  ${above.large`
  grid-area: 2 / 1 / 3 / 2; 
  width: 20vw;
  height: 40vh;
  background: blue;
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
  background: green;
  ${above.large`
  width: 20vw;
  height: 40vh;
  grid-area: 2 / 3 / 3 / 4; 
  `}
`


///////// PRODUCTS //////////

export const StyledProducts = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: ${colors.none};
  ${above.large`  
  
  `}
`

export const Gallery = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;

  width: 90%;
  height: 90%;
  gap: 2%;
  background: ${colors.none};
  ${above.large`  

  `}
`
export const ProductContainer = styled.div`
  display: flex;
  justify-content: center ;

  align-items: center;

  width: 30%;
  height: 50%;
  background: ${colors.none};
  ${above.large`  
 

  `}
`
export const RectanguloProd = styled.div`
  width: 100%;
  height: 70%;
  max-width: 300px;
  border-radius: 5px;
  background: ${colors.none};
  padding: 15px;
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
  width: 100%;
  height: 60%;
  `
export const Rectangulo2 = styled.div`
  position: absolute;
  bottom: -22%;
  background: ${colors.softWhite};
  width: 100%;
  height: 15%;
  `

