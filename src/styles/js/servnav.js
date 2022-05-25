import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"

export const StyledServiceNav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row nowrap;
    background: ${colors.none};
    width: 100%;
    height: 10vh;
    ${above.large`
    width: 90%;
    justify-content: center;
    height: 20vh;
    flex-flow: column nowrap;
    background: ${colors.none};

    `}
`

export const StyledNavbarServ = styled.div`
    background: ${colors.none};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 12;
    width: auto;
    margin: 1em 0 0 1em;
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 90%;
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
display: none;

  ${above.large`
  display: flex;
  justify-content: flex-start;

  background: ${colors.none};

  align-items: flex-end;
  width: 10%;
  height: 100%;

  a:link{
    font-family: ${font.waveLight};
    font-size: ${size.Wmini};
    color: ${colors.black};
  }
  a:visited {
    color: ${colors.black};
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
  a{
    color: ${props => (props.select === props.siteTitle ? colors.green : colors.softBlack)}; //usar en SVG
    font-family: ${props => (props.select === props.siteTitle ? font.waveSemi : font.waveMedium)};
    font-size: ${size.Wtext};
  }

 
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
    color: ${colors.none};
    background-color: ${props => (props.open ? colors.softWhite : colors.green)};
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
  background: rgba(130, 140, 122, 0.8);
  backdrop-filter: blur(5px);
  transition: height 0.3s ease-in-out;
  position: fixed;
  top:0;
  z-index: 5;
  justify-content: space-between;
  align-items: center;
  :nth-child(1n) {
    align-items: flex-end;
  }

  ${above.large` {
    display: none;
    }
  `}
`;


export const OverlayMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: ${props => (props.open ? 'flex' : 'none')};
  width: 90vw;
  height: ${props => (props.open ? "40%" : 0)};
  transition: opacity 0.4s ease-in-out;
  list-style: none;

  div a{
    font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.Wtittle};
  }

`;
export const OverlayFooter = styled.div`
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  display: ${props => (props.open ? 'flex' : 'none')};
  width: 100%;
  height: 25%;
  background: ${colors.none};

`;

export const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background: ${colors.none};

  a,p{
    font-family:  ${font.light};
    text-align: left;
    color: ${colors.white} ;
    font-size: ${size.Mtext};
  }

`;
export const Logo = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  padding: 1em 0;
  background: ${colors.none};

`;

export const StyledIcons = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    height: ${props => (props.open ? "auto" : 0)};
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1em;
    gap: 1em;
    width: auto;
    opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 1s ease-in-out;

    svg{
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
justify-content: flex-start;
align-items: flex-start;
list-style: none; 
padding: 0;
background-color: none;
margin: .5em 0;
font-family: 'Montserrat', sans-serif;

a{
  font-family:  ${font.waveLight};
  color: ${colors.black} ;
  font-size: ${size.Wtext};
}


`
