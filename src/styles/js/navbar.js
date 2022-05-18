import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledNavbar = styled.div`
    background: ${colors.none};
    display: flex;
    flex-direction: row;
    justify-content: space-betwen;
    align-items: center;
    z-index: 12;
    position: absolute;
    width: 100vw;
    height: 15vh;
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  justify-content: center;
  align-items: center;
  whidth: 100vw;
  //background: linear-gradient(to top, rgba(0, 0, 0, 0.0) 0%, ${colors.green} 150%);
  background: ${colors.none};
  a{
    margin-left: auto;
    margin-right: auto;
  }

  
  `}
`

export const StyledLogoContainer = styled.div`
  display: none;
  ${above.medium`
  `}
  ${above.large`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.none};

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
/*
 Movil menu
*/
export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 2em 2em;
    position: fixed;

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