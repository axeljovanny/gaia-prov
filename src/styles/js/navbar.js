import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledNavbar = styled.div`
    background: none;
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
  justify-content: center ;
  align-items: center;
  whidth: 100vw;
  height: 20vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.05) 10%, ${colors.black} 100%);

  
  `}
`

export const StyledLogoContainer = styled.div`
  display: none;
  ${above.medium`
      
  `}
  ${above.large`

  display: flex;
  justify-content: center ;
  align-items: center;

  width: 10vw;
  height: 100%;
 

  background: none;

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
  width: 18vw;
  height: 100%;
  background: none ;
  
  `}
`

export const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
list-style: none; 
padding: 0;
background-color: none;
margin: 10px 0 10px 0;
width: 100%;
height: 10vh;

a{
  font-family:  ${font.medium};
  color: ${colors.white} ;
  font-size: ${size.Mmini};
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
    background-color: ${colors.white};
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
  transition: height 0.4s ease-in-out;
  position: fixed;
  z-index: 5;

  ${above.large` {
    display: none;
    }
  `}
`;



export const OverlayMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: none;
  width: 100vw;
  height: 70%;
  list-style: none; 
  padding-left: 12%;

  div a{
    opacity: ${props => (props.open ? 1 : 0)};
    font-family:  ${font.bold};
    color: ${colors.white} ;
    font-size: ${size.Mtittle};
    transition: opacity 0.4s ease-in-out;
    
  }

`;

export const StyledIcons = styled.div`
display: ${props => props.open ? 'flex' : 'none'};
height: 25%;
flex-direction: row;
justify-content: center;
align-items: center;

svg{
    width: 90%;


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