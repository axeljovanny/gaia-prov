import { above, aboveLand } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { motion } from "framer-motion"

/// HERO SECTION 

export const StyledAbout = styled.div`
  display: grid; 
  grid-template-columns: repeat(3); 
  grid-template-rows: repeat(3); 
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
  padding-top: 0%;
  background: rgba(130, 140, 122, 0.7);
  overflow-x: hidden;
  ${above.large`  
  grid-template-rows: repeat(2); 
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

/// ABOUT SECTION 

export const StyledFirst = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80vh;
  background: ${colors.none};
  ${above.large` 
  height: 80vh;
  `}
`

export const StyledText = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 80%;
  height: 90%;
  background: ${colors.none};

  h1{
    width: 80%;
    font-family: ${font.Rsemi};
    font-size: ${size.Mheader};
    color: ${colors.black};
  }
  p{
    text-align: justify;
    font-family: ${font.Lregular};
    font-size: ${size.WList};
    color: ${colors.black};
  }

  ${above.large` 
  width: 70%;
  height: 90%;
  h1{
    font-family: ${font.Lregular};
    font-size: ${size.WTitle};
    color: ${colors.black};
  }
  p{
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.black};
  }
  `}
`

export const StyledTwo = styled.div`
  display: flex; 
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: auto;

  background: ${colors.green};
  ${above.large` 
  flex-direction: row;
  width: 100vw;
  `}
`
export const ImgOne = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 65%;
  background: ${colors.none};
  padding: 0 0 4em 0;

  ${above.large` 
  align-items: flex-start;

  width: 50%;
  height: 100%;
  `}
`
export const TextOne = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 80%;
  height: 35%;
  background: ${colors.none};
  padding: 1em 0 3em 0;

  h2{
    width: 100%;
    font-family: ${font.Lregular};
    font-size: ${size.Mtittle};
    color: ${colors.white};
  }
  p{
    margin: 0.3em 0;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.white};
  }
  ${above.large` 
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding: 0;


  h2{
    margin-left: 1.5em;
    width: 70%;
    font-family: ${font.Lregular};
    font-size: ${size.WHeader};
    color: ${colors.white};
  }
  p{
    margin: 0.5em 2em ;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.white};
  }
  `}
`

export const StyledThree = styled.div`
  display: flex; 
  flex-flow: row wrap ;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;
  background: ${colors.none};
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `
  export const OurServicesText = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;

  font-family: ${font.Lregular};
  font-size: ${size.Mtittle};
  color: ${colors.black};

  background: ${colors.none};
  ${above.large` 
  width: 100%;
  height: 10%;
  `}
`

export const ImgArc = styled.div`
  display: flex; 
  flex-flow: row wrap ;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: auto;
  background: ${colors.none};
  ${above.large` 
  flex-direction: column;
  width: 50%;
  height: 60%;
  `}
`

export const TexTwo = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30%;
  background: ${colors.none};

  h2{ 
    display: flex; 
  justify-content: center;
  align-items: center;
    width: 100%;
    font-family: ${font.Llight};
    font-size: ${size.Mtittle};
    color: ${colors.black};
  }
  p{ 
    margin: 0.5em 2em ;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.black};
  }
  ${above.large` 
  width: 50%;
  height: 50%;
  `}
`
export const TexFive = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30%;
  background: ${colors.green};

  h2{ 
    display: flex; 
  justify-content: center;
  align-items: center;
    width: 100%;
    font-family: ${font.Llight};
    font-size: ${size.Mtittle};
    color: ${colors.white};
  }
  p{ 
    margin: 0.5em 2em ;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.white};
  }
  ${above.large` 
  width: 50%;
  height: 50%;
  `}
`
export const TexThree = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 60%;
  height: auto;
  background: ${colors.none};

  h2{ width: 90%; }
  p{ width: 85%;
      margin: 0.5em ;
      font-family: ${font.Lregular};
      font-size: ${size.Wtext};
      color: ${colors.black};
     }
  ${above.large` 
  width: 100%;
  height: 40%;

  h2{ width: 70%; }
  p{ width: 80%; }
  `}
`
export const TexFour = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;


  width: 100%;
  height: auto;
  background: ${colors.none};

  h2{ width: 90%; }
  p{ width: 85%;
      margin: 0.5em ;
      font-family: ${font.Lregular};
      font-size: ${size.Wtext};
      color: ${colors.black};
     }
  ${above.large` 
  width: 100%;
  height: 40%;

  h2{ width: 70%; }
  p{ width: 80%; }
  `}
`

export const StyledFour = styled.div`
  display: flex; 
  flex-flow: row wrap ;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: auto;
  background: ${colors.green};
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `

export const StyledPeopleSay = styled.div`
  display: flex; 
  justify-content: center;
  flex-flow: column wrap ;
  align-items: center;
  
  width: 100vw;
  height: 100vh;
  background: ${colors.none};
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `

export const CardPeopleSay = styled.div`
  display: flex; 
  flex-flow: column wrap ;
  justify-content: center;
  align-items: flex-start;
  
  width: 80%;
  height: auto;
  background: ${colors.none};
  border: 1px solid ${colors.green};

  h2{
    margin-left: 10%;
    width: 80%;
  }
  p{
    margin-left: 10%;
    width: 80%;
  }
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `