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
  height: auto;
  background: ${colors.none};

  ${above.medium` 
  padding: 10% 0;
  `}
  ${above.large` 
  padding: 5% 0;
  `}
`

export const StyledText = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 80%;
  height: 100%;
  background: ${colors.none};

  h1{
    text-align: justify;
    word-spacing:-2px;  
    width: 80%;
    padding: 10% 0;
    font-family: ${font.Rsemi};
    font-size: ${size.Mheader};
    color: ${colors.black};
  }
  p{
    text-align: justify;
    word-spacing:-2px;  
    padding: 5% 0;
    font-family: ${font.Llight};
    font-size: ${size.WList};
    color: ${colors.black};
  }
  p:nth-child(4) {
    padding: 0 0 10% 0;
  }

  ${above.medium` 
  h1{
    padding: 5% 0;
    font-size: ${size.WTitle};
  }
  p{
    padding: 3% 0;
    font-size: ${size.WList};
  }
  `}
  ${above.large` 
  align-items: center;

  h1{
    text-align: center;
    width: 80%;
    padding: 3% 0;
    font-size: ${size.WTitle};
  }
  p{
    background: ${colors.none};
    width: 90%;
    padding: 2% 0 ;
    margin: 0;
    font-size: ${size.XList};
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
  padding: 10% 0;

  background: ${colors.green};
  ${above.medium` 
  flex-direction: row;
  `}
  ${above.large` 
  padding: 1% 0;
  align-items: flex-start;
  justify-content: flex-start;
  
  `}
`
export const ImgOne = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;

  width: 110%;
  background: ${colors.none};
  padding: 0 0;

  ${above.medium` 
  align-items: flex-start;
  width: 50%;

  `}
  ${above.large` 
  width: 50%;
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

  h1{
    word-spacing: -1px;  
    padding: 10% 0;
    width: 100%;
    text-align: right;
    font-family: ${font.Rthin};
    font-size: ${size.XList};
    color: ${colors.white};
  }
  p{
    margin: 2% 0;
    word-spacing: -1px; 
    font-family: ${font.Llight};
    font-size: 17px;
    color: ${colors.white};
  }
  ${above.medium` 
  width: 50%;
  padding: 0 0 0 5%;
  h1{
    width: 80%;
    padding: 5% 0;
    font-size: ${size.WTitle};
  }
  p{
    margin: 1% 0;
    font-size: ${size.WList};
  }
  `}
  ${above.large`
  width: 80%;
  h1{
    font-family: ${font.Rsemi};
    font-size: ${size.WTitle};
    text-align: left;
  }
  p{
    font-size: ${size.XList};
  }
 
  `}
`

export const StyledThree = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  padding: 10% 0;
  
  width: 100vw;
  height: auto;

  background: ${colors.none};
  ${above.large` 
  padding: 5% 0;

  `}

  `
  export const OurServicesText = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 3;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 70vw;
  padding: 0 10%;
  height: auto;

  h1{font-family: ${font.Lregular};
  font-size: ${size.WTitle};
  color: ${colors.black};}
  

  background: ${colors.none};
  ${above.large`
  padding: 0;
  align-items: center;
  width: 100%;
  `}
`
export const TexTwo = styled.div`
  grid-area: 2 / 1 / 3 / 3; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 5% 0;
  text-align: justify;
  word-spacing: -1px; 


  width: 100%;
  height: auto;
  background: ${colors.none};

  p{ 
    margin: 0.5em 10%;
    font-family: ${font.Llight};
    font-size: ${size.WList};
    color: ${colors.black};
  }
  ${above.medium` 
  grid-area: 2 / 1 / 3 / 2;
  width: 100%;
  p{ 
    margin: 2% 5% 0 20%;
    font-family: ${font.Llight};
    font-size: 17px;
    color: ${colors.black};
  }
  `}
  ${above.large` 
  width: 60vw;
  
  p{
    font-size: ${size.XList};
  }
  `}
`

export const TexThree = styled.div`
  grid-area: 3 / 2 / 4 / 3; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  word-spacing: -1px; 

  width: 100%;
  height: auto;
  background: ${colors.none};

  h2{ width: 90%; }
  p{ 
    margin: 0 15% 10% 10%;
    font-family: ${font.Llight};
    font-size: ${size.WList};
    color: ${colors.black};
  }
  ${above.medium` 
  grid-area: 3 / 1 / 4 / 2;

  width: 100%;
  p{ 
    margin: 2% 5% 0 20%;
    word-spacing: -1px; 
    font-family: ${font.Llight};
    font-size: 17px;
    color: ${colors.black};
  }
  `}
  ${above.large` 
  width: 60vw;
  p{
    font-size: ${size.XList};
  }
  `}
`
export const TexFour = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  word-spacing: -1px; 
  margin: 5% 0;


  width: 100%;
  height: auto;
  background: ${colors.none};

  h2{ width: 90%; }
  p{ 
    margin: 5% 10%;
    font-family: ${font.Llight};
    font-size: ${size.WList};
    color: ${colors.black};
  }
  ${above.medium` 
  width: 100%;
  grid-area: 4 / 1 / 5 / 3;
  margin: 3% 0;

  p{ 
    margin: 1% 12%;
    word-spacing: -1px; 
    font-family: ${font.Llight};
    font-size: 17px;
    color: ${colors.black};
  }
  `}
  ${above.large` 
  p{
    font-size: ${size.XList};
  }  
  `}
`

export const ImgArc = styled(motion.div)`
  grid-area: 3 / 1 / 4 / 2;
  margin: 0;
  padding: 0;

  width: 100%;
  height: auto;
  background: ${colors.none};
  ${above.medium` 
  grid-area: 2 / 2 / 4 / 3;
  width: 90%;
  `}
  ${above.large` 
  width: 70%;
  `}
`
export const ImgVM = styled(motion.div)`
  margin: 0;
  padding: 0;

  width: 100%;
  height: auto;
  background: ${colors.none};
  ${above.medium` 
  width: 40%;
  `}
  ${above.large` 
  width: 30%;
  `}
`

export const TexFive = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 0;

  width: 100%;
  height: auto;
  background: ${colors.green};

  h2{
    margin: 0.5em 10%;
  font-family: ${font.Lregular};
  font-size: ${size.WTitle};
  color: ${colors.white};
}
  p{ 
    margin: 0.5em 10%;
    font-family: ${font.Llight};
    font-size: ${size.WList};
    color: ${colors.white};
  }

  ${above.medium` 
  width: 50%;
  p{ 
    margin: 0.5em 10%;
    font-family: ${font.Llight};
    font-size: ${size.WList};
    color: ${colors.white};
  }
  `}
  ${above.large` 
  p{ 
    font-size: ${size.XList};
  }
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

  padding: 10% 0;
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `

export const StyledPeopleSay = styled.div`
  display: flex; 
  justify-content: center;
  flex-flow: column nowrap ;
  align-items: center;
  padding: 10% 0;
  
  width: 100vw;
  height: 60vh;
  background: ${colors.none};
  h1{
    margin: 0.5em 10%;
  font-family: ${font.Lregular};
  font-size: ${size.WTitle};
  color: ${colors.black};
}
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `

export const CardPeopleSay = styled.div`
  display: flex; 
  flex-flow: column nowrap ;
  justify-content: center;
  align-items: flex-start;
  
  width: 80%;
  height: 90%;
  background: ${colors.none};
  border: 1px solid rgba(130, 140, 122, 0.3);

  h3{
    margin: 10% 0 0 10%;
    width: 80%;
    height: auto;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.black};
  }
  p{
    margin: 0 0 10% 10%;
    overflow-x: scroll;
    width: 80%;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.black};
  }
.rating {
			width: 80%;
      height: auto;
      margin: 0 0 10% 10%;
			font-size: 20px;
		}

		.rating a,
    .rating label {
			color: #828C7A;
			text-decoration: none;
			-webkit-transition: color .4s;
			-moz-transition: color .4s;
			-o-transition: color .4s;
			transition: color .4s;
		}

  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  `