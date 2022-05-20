import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledServicePage = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: ${colors.softWhite};
    width: 100vw;
    height: 100hw;

`
export const StyledServiceNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: row nowrap;
    background: ${colors.none};
    width: 90%;
    height: 15vh;
    ${above.large`
    height: 20vh;
    flex-flow: column nowrap;
    background: ${colors.none};

    `}
`
export const StyledServiceSwitch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.none};
    width: 100%;
    height: 10vh;

`
export const StyledServiceContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
    background: ${colors.none};
    width: 100%;
    height: auto;

    `
export const StyledServiceTittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: column nowrap;
    background: ${colors.none};
    width: 25%;
    `
export const TextTittle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${colors.none};
    width: 70%;
    button{
      font-family: ${font.leporsche};
        font-size: ${size.Mtittle};
        color: ${colors.black};
      }
      `
export const DescTittle = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 70%;

      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }
      `

export const DescDetails = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      padding: 10% 0;
      `
export const DescTime = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 20%;
      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `
export const DescPrice = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 20%;
      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `
export const DescBook = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: ${colors.none};
      width: 60%;
      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `
export const DescText = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 80%;
      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `
export const StyledServiceDesc = styled.div`
      display: flex;
      justify-content: flex-start;
      flex-flow: column wrap;
      align-items: flex-start;
      background: ${colors.none};
      border-left: solid 1px ${colors.black};
      width: 60%;
      padding: 0 2em;
      height: 100%;
      
      `
export const StyledServicePhoto = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 20%;
      
      `
export const StyledServiceFooter = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.green};
      width: 100%;
    height: 50vh;
    
    `

export const StyledNote = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${colors.none};
    width: 80%;
    padding: 0 0%;
    p{
      font-family: ${font.leporsche};
      font-size: ${size.Wmini};
      color: ${colors.black};
    }
    `
export const StyledServiceNote = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: ${colors.none};
        width: 90%;
        padding: 0 0 3% 0;        
    `

// ESTILOS PARA NAV DE SERVICIOS
// 

export const StyledHome = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: ${colors.none};
width: 50%;
height: 100%;

  ${above.medium`
      
  `}
  ${above.large`
  justify-content: flex-end;
  align-items: flex-end;
  background: ${colors.none};
  width: 100%;
  height: 50%;


 
  `}
`

export const StyledNavbar = styled.div`
    background: ${colors.none};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 12;
    width: 50%;
    height: 100%;
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${colors.none};
  a{
    margin-left: auto;
    margin-right: auto;
  }

  
  `}
`
export const Text = styled.div`
display: none;

  ${above.large`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background: ${colors.none};
  width: 100%;
  height: 30%;
  align-items: center;

 
  `}
`
export const SVG = styled.div`
display: none;

  ${above.large`
  display: flex;
  flex-flow: column nowrap;
  gap:2em;
  justify-content: center;
  background: ${colors.none};
  width: 75%;
  height: auto;
  align-items: center;

 
  `}
`

export const StyledHomeReturn = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: ${colors.none};
width: 50%;
height: 50%;

  a:link{
    font-family: ${font.leporsche};
    font-size: ${size.Mtext};
  }
  a:visited {
    color: ${colors.black};
  }

  ${above.large`
  align-items: flex-end;
  width: 100%;
  height: 100%;

  a:link{
    font-family: ${font.leporsche};
    font-size: ${size.Wtext};
  }
    
 
  `}
`
export const StyledService = styled.div`
display: none;

  ${above.large`
  display: flex;
  flex-flow: column nowrap;
  gap:2em;
  justify-content: center;
  background: ${colors.none};
  width: 25%;
  height: 100%;
  align-items: center;

 
  `}
`




/*
 Movil menu
*/
export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    position:fixed;

    ${above.large` {
      display: none;
      }
    `}
`;

export const Line = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    color: ${colors.black};
    background-color: ${colors.black};
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
      width: ${props => (props.open ? "40%" : "70%")};
    }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: ${colors.black};
  transition: height 0.3s ease-in-out;
  position: fixed;
  z-index: 5;
  justify-content: center;
  align-items: center;

  ${above.large` {
    display: none;
    }
  `}
`;


export const OverlayMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 40%;
  list-style: none; 
  margin: 50% 0;

  div a{
    opacity: ${props => (props.open ? 1 : 0)};
    font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.Wtittle};
    transition: opacity 0.4s ease-in-out;
  }

`;

export const StyledIcons = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    height: 25%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 0.6s ease-in-out;


    svg{
      opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 0.6s ease-in-out;
        width: 100%;
    }
    
    ${above.large`
    padding-top: 5vh;
    display: ${props => props.footer ? 'none' : 'flex'};
    height: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    svg{
        width: 60%;
        
    }
  `}
`
export const StyledButton = styled.div`
  width: 100%;
  height: 6vh;
  
  display: flex;
  padding: 5px;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  justify-content: center ;
  font-family: ${font.medium};
  color: ${colors.white};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);  

  :hover{
    transition: 0.2s ;
    background-color: rgba(255, 255, 255, 0.5); 
    color: ${colors.black};
  }

  ${above.large`
  padding: 10px;
  width: 95%;
  height: 2vh;
  `}
    
`
export const StyledItems = styled.div`
  display: none;
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  justify-content: center ;
  align-items: center;
  background: ${colors.none};  
  `}
`

export const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
list-style: none; 
padding: 0;
background-color: none;
margin: 54px 3vw;
font-family: 'Montserrat', sans-serif;

a{
  font-family:  ${font.leporsche};
  color: ${colors.black} ;
  font-size: ${size.Wtext};
}


`