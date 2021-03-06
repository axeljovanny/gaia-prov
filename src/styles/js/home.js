import { above, aboveLand } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { motion } from "framer-motion"



/// HERO SECTION 

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
  overflow-x: hidden;
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

  ${above.medium`
  width: 100vw;
  height: 35vh;
  grid-area: 1 / 1 / 2 / 4;
  `}

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
  svg{
    width: 80%;
  }
  ${above.medium`
  svg{
    width: 70%;
  }
  `}
  ${above.large`
  width: 60vw;
  height: 60vh;
  grid-area: 1 / 2 / 2 / 3;
  justify-content: flex-end;

  svg{
    width: 60%;
  }
  `}
`

export const Gift = styled(motion.div)`
  position: fixed;
  top: 60%;
  right: 0%;
  width: 10%;
  height: 30%;
  background: ${colors.none};

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap 5%;

  ${above.medium`
  top: 50%;
  width: 7%;
  height: 35%;
  `}

  ${above.large`
  gap 10%;
  justify-content: flex-start;
  align-items: flex-end;
  top: 20%;
  width: 3%;
  height: 40%;
  `}

  ${above.xlarge`
  width: 2%;
  `}
`

export const Social = styled(motion.div)`
  grid-area: none;
  display:none;

  ${above.large`
  grid-area: 2 / 1 / 3 / 2; 
  width: 19vw;
  height: 40vh;
  background: ${colors.none};

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5em;
  a{padding-left: 15%;}
  
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

  a svg{
    margin-bottom: 4vh;
    width: 50px;
    height: auto;
  }

  a p{display: none;}

  ${above.large`
  width: 60vw;
  height: 40vh;
  grid-area: 2 / 2 / 3 / 3; 

  a p{
    display:flex;
    margin-bottom: 5vh;
    font-family: ${font.Lregular};
    font-size: ${size.Xtext};
    color: ${colors.white};
  }
  `}
`
export const Scroll = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  width: calc(100vw / 3);
  height: 40vh;
  background: ${colors.none};
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${above.large`
  align-items: flex-end;
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
  height: 80vh;
  background: ${colors.none};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  ${above.medium`
  height: 70vh;

  `}
  ${above.large`
  height: 100vh;

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
  ${above.medium`
  width: 100%;
  `}
  ${above.large`
  width: 90%;
  height: 70%;
  flex-flow: row nowrap;
  
  `}
`

export const ImageWedo = styled(motion.div)`
display: ${props => (props.movil ? "flex" : "none")};
background: ${colors.none};
width: calc(20% + 2vw); 
height: calc(40% + 2vh);
position: absolute;
top:0;
right:0;
${above.medium`
right: -8%;
`}
${above.large`
display: ${props => (props.movil ? "none" : "flex")};
position: relative;
align-content: center; 
align-items: center; 
justify-content: center; 
width: 45%; 
height: auto;
  
  `}
`
export const ImageTratamients = styled(motion.div)`
display: ${props => (props.movil ? "flex" : "none")};
position: absolute;
background: ${colors.none};
width: calc(40% + 2vw); 
height:calc(30% + 6vh);

${above.medium`
width: calc(25% + 2vw); 
height:calc(35% + 2vh);
  
  `}
${above.large`
display: ${props => (props.movil ? "none" : "flex")};
align-content: center; 
align-items: center; 
justify-content: center; 
width: 25%; 
height: auto;
  
  `}
  ${above.xlarge`
  gap: 5%;
  width: 20%;
   `}
`

export const StyledSvg = styled(motion.div)`
  position:  absolute;
  width: 80%; 
  top:15%;
${above.medium`
  top:10%;
  `}
${above.large`
  top:40%;
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
    width: 50%;
    font-family: ${font.Rlight};
    font-size: ${size.Mheader};
    color: ${colors.green};

  }
  h2{
    font-family: ${font.Rthin};
    font-size: ${size.Mtittle};

  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.Mtext};
  }
  a{
    display:flex;
    justify-content: center ;
    gap: 0.5em;
    padding: 2em 0 0;
    width: 100%;
    color: ${colors.green};
    font-family: ${font.Lregular};
    font-size: ${size.Mtext};
  }

  ${above.medium`
  padding: 0 1em 0 0em;
  width: 70%;
  height: 80%;
  a{
    justify-content: flex-start ;
    font-size: ${size.XList};
    padding: 3em 0 0;
  }
  h1{ 
    width: 100%;
    font-family: ${font.Rregular};
    font-size: ${size.Xheader};
  }
  h2{
    font-family: ${font.Rthin};
    font-size: ${size.Wtittle};
  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.Xtext};
    line-height: 150%;
  }
  `}

  ${above.large`
  padding: 0 1em 0 4em;
  width: 55%;
  height: 90%;
  a{
    justify-content: flex-start ;
    font-size: ${size.Wtext};
  }
  h1{ 
    width: 100%;
    font-family: ${font.Rlight};
    font-size: ${size.Wheader};
  }
  h2{
    font-family: ${font.Rthin};
    font-size: ${size.Wtittle};
  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.Wtext};
  }
  
  `}

  ${above.xlarge`
  padding: 0 1em 0 4em;
  width: 40%;
  height: 80%;
  
  a{
    justify-content: flex-start ;
  }
  h1{ 
    font-family: ${font.Rsemi};
    font-size: ${size.Xheader};
  }
  h2{
    font-family: ${font.Rsemi};
    font-size: ${size.XList};
  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.WList};
  }
  a{
    width: 19%;
    font-family: ${font.Rbold};
    font-size: ${size.Mtittle};
  }
  
  `}
`

export const ImgsWedo = styled.div`
  display:none;

  ${above.large`
  background: ${colors.none};
  display:flex;
  justify-content: center ;
  align-items: center;
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
  height: 70vh;
  background: ${colors.none};
  ${above.medium`  
  height: 55vh;
  `}
  ${above.large`  
  height: 80vh;

  
  `}
`

export const RectanguloProd = styled(motion.div)`
  width: 100%;
  height: 90%;
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


  ${above.medium`  
  height: 100%;

  `}
  ${above.large`  
  width: 100%;
  height: 100%;
  max-width: 300px;

  `}
`
export const Rectangulo = styled(motion.div)`
  position: absolute;
  background: ${colors.green};
  border-radius: 5px;
  width: 75%;
  height: 40%;
  ${above.medium`
  height: 40%;
  
  `}
  ${above.large`  
  position: absolute;
  bottom: 10%;
  background: ${colors.green};
  border-radius: 5px;
  width: 100%;
  height: 60%;
  `}
  ${above.xlarge`  
  bottom: 50%;
  height: 20%;
  `}
  `

export const TextProduct = styled (motion.div)`
  width: 90%;
  background: ${colors.softWhite};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3{
    width: 80%;
    color: ${colors.black};
    font-family: ${font.Llight};
    font-size: ${size.Mtext};
  }

  ${above.large` 
  
  `}

  ${above.xlarge` 
  background: ${colors.none};
  display: flex;

  h3{
    color: ${colors.black};
    font-family: ${font.Rthin};
    font-size: ${size.Wmini};
  }
  `}
  `

export const DescProduct = styled (motion.a)`
    display: ${props => (props.movil ? "flex" : "none")};
    color: ${colors.green};
    font-family: ${font.Lregular};
    font-size: ${size.Mtext};
    text-align: justify;
    width: 85%;

  ${above.large` 
    display: ${props => (props.movil ? "none" : "flex")};
    font-family: ${font.Lregular};
    font-size: ${size.Mtext};
  `}

  ${above.xlarge` 
  font-family: ${font.Llight};
  font-size: ${size.Mtext};
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
  ${above.large` 
  width: 100vw;
  height: 70vh;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  `}
  `
export const BannerSvg = styled(motion.div)`
  display: ${props => (props.movil ? "flex" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${above.large` 
  display: ${props => (props.movil ? "none" : "flex")};
  `}
  `

//////TRATAMIENTS

export const StyledSkin = styled.div`
  position: relative;
  background: ${colors.softWhite};
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${above.large` 

  `}
  `
export const StyledHair = styled.div`
  position: relative;
  background: ${colors.green};
  width: 100vw;
  height: 80vh;
  display:flex;
  justify-content: center;
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
  width: 100%;
  height: 100%;
  background: ${colors.none};
  position: relative;
  ${above.large`
  width: 100%;
  height: 100%;
  flex-flow: row nowrap;
  justify-content: space-evenly ;
  `}
  ${above.xlarge`
  justify-content: center ;
  gap: 1%;
  `}
`

export const ImgSkin = styled.div`
  
display:none;


  ${above.medium`
  `}

  ${above.large`
  display:flex;
  justify-content: flex-start ;
  align-items: center;
  width: 20%;
  height: 20%;
  `}

  ${above.xlarge`
  width: 22%;
  height: 25%;
  `}

`

export const TextSkin = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center ;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0;
  background: ${colors.none};
  
  color: ${colors.black};

  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.Mtext};
  }
  a{
    display:flex;
    justify-content: center ;
    gap: 0.5em;
    padding: 2em 0 0;
    width: 100%;
    color: ${colors.green};
    font-family: ${font.Lregular};
    font-size: ${size.Mtext};
  }

  ${above.medium`
  height: 40%;
  width: 70%;
  padding: 2em 0 0;
  a{
    justify-content: center ;
    font-size: ${size.XList};
    padding: 2em 0 0;
  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.XList};
    line-height: 150%;
  }
  `}

  ${above.large`
  height: 50%;
  justify-content: flex-end;
  width: 45%;
  a{
    justify-content: flex-start ;
    font-size: ${size.Wtext};
  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.Wtext};
  }
  
  `}
  ${above.xlarge`
  height: 32%;
  justify-content: flex-end;
  width: 45%;
  padding: 5em 0 0;
  a{
    font-family: ${font.Rbold};
    font-size: ${size.Mtittle};
    justify-content: flex-start ;
  }
  h3{
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.WList};
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

  ${above.medium`
  width: 40%;
  height: 35%;
  `}

  ${above.large`
  width: 25%;
  height: 90%;
  `}

  ${above.xlarge`
  width: 25%;
  height: 30%;
  `}
`

export const TextHair = styled.div`
display:flex;
flex-flow: column nowrap;
justify-content: center ;
align-items: center;
width: 80%;
height: 90%;
padding: 0;
background: ${colors.none};

color: ${colors.softWhite};

h3{
  text-align:justify;
  font-family: ${font.Llight};
  font-size: ${size.Mtext};
}
a{
  display:flex;
  justify-content: center ;
  gap: 0.5em;
  padding: 2em 0 0;
  width: 100%;
  color: ${colors.softWhite};
  font-family: ${font.Lregular};
  font-size: ${size.Mtext};
}

${above.medium`
height: 40%;
width: 70%;
padding: 4em 0 0;
a{
  justify-content: center ;
  font-size: ${size.XList};
  padding: 2em 0 0;
}
h3{
  text-align:justify;
  font-family: ${font.Llight};
  font-size: ${size.XList};
  line-height: 150%;
}
`}

${above.large`
height: 50%;
justify-content: flex-end;
width: 38%;
a{
  justify-content: flex-start ;
  font-size: ${size.Wtext};
}
h3{
  text-align:justify;
  font-family: ${font.Llight};
  font-size: ${size.Wtext};
}

`}
${above.xlarge`
height: 32%;
justify-content: flex-end;
width: 45%;
padding: 5em 0 0;
a{
  font-family: ${font.Rbold};
  font-size: ${size.Mtittle};
  justify-content: flex-start ;
}
h3{
  padding: 0 2em 0 0;
  text-align:justify;
  font-family: ${font.Llight};
  font-size: ${size.WList};
}

`}
`

//////MAPS

export const StyledMaps = styled(motion.div)`
  display:flex;
  flex-flow: row nowrap;
  width: 100vw;
  height: 50vh;
  background: ${colors.softWhite};
  position: relative;

  ${above.medium`
  height: 60vh;

  
  `}
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
  height: ${props => (props.movil ? "10%" : "25%")};

  background: ${colors.none};
  position: absolute;
  left:auto;
  top: ${props => (props.movil ? "auto" : "0")};
  bottom: ${props => (props.movil ? "15%" : "auto")};

  h2{
    width: 90%;
    text-align: center;
    font-family: ${font.Rbold};
    font-size: ${size.Mheader};
    color: ${colors.green};
  }

  h3{
    display:${props => (props.movil ? "flex" : "none")};
    width: 80%;
    text-align: justify;
    font-family: ${font.Rlight};
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

  ${above.medium`
  
  width: 100%;
  height: 25%;

  h3{
    display:${props => (props.movil ? "flex" : "none")};
    width: 80%;
    text-align:justify;
    font-family: ${font.Llight};
    font-size: ${size.XList};
    line-height: 150%;
    color: ${colors.green};
    background: ${colors.none};
  }
  a{
    display: ${props => (props.movil ? "flex" : "none")};
    justify-content: center ;
    gap: 0.5em;
    font-family: ${font.Lregular};
    font-size: ${size.XList};
    padding: 2em 0 0;
    width: 100%;
    color: ${colors.green};
  }

  
  `}

  ${above.large`
  display ${props => (props.movil ? "none" : "flex")};
  justify-content: center;
  align-items: flex-end;
  width: 45%;
  height: 70vh;
  left:0;
  top:auto;
  h2{
    margin:0;
    width: 70%;
    text-align: left;
    font-family: ${font.Rbold};
    font-size: ${size.Mheader};
    color: ${colors.green};
  }
  h3{
    display:flex;
    width: 70%;
    font-family: ${font.Rlight};
    font-size: ${size.Wtext};

  }
  a{
    display: ${props => (props.movil ? "none" : "flex")};
  }

  
  `}

  ${above.xlarge`
  a{
    margin-top: 18%;
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
  background: linear-gradient(to top, rgba(244, 242, 239, 0.1) 0%, ${colors.softWhite} 40%);

  ${above.large`
  background: linear-gradient(to left, rgba(244, 242, 239, 0.1) 0%, ${colors.softWhite} 40%);

  width: 30%;
  height: 70vh;
  left: 30%;
  top: auto;


  
  `}
`
export const ImgMap = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 50%;
  top: 20%;
  
  ${above.large`
  width: 60%;
  height: 90%;
  justify-content: flex-end;
  right: 0;
  top: auto;


  
  `}
`