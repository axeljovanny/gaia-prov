import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledServicePage = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: ${props => (props.siteTitle === 'hair' ? colors.softWhite : colors.softWhite)}; //TODO: Cambiar color al estar en hair
    width: 100vw;
    height: auto;

    ${above.large`
    height: 100vh;
    
    `}

`

export const StyledServiceContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background: ${colors.none};
    width: 100%;
    height: auto;
    ${above.large`
    flex-flow: row nowrap;
    height: 50vh;
    `}
    `
export const StyledServiceTittle = styled.div`
    display: flex
    flex-flow: row wrap;

    ${above.large`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 20%;
    
    `}
    `
export const TextTittle = styled.div`
      display: flex;
      width: auto;
      button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        color: ${colors.black}; //usar en SVG
        font-family: ${font.waveMedium};
        font-size: ${size.Wtext};
        }
      ${above.large`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      button{
        margin: 0 0 0.3em 20%;
      }
     
    
    `}
      `
export const DescTittle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.yell};
      flex-flow: column nowrap;
      width: 100%;
      height: 50%; 
      padding : 0.1em 0;

      p{
        margin:0;
        font-family: ${font.waveLight};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }
      ${above.large`
      justify-content: space-between;
      flex-flow: row wrap;
      height: 20%; 
      padding: 0;

    `}
      `

export const DescDetails = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      padding: 10% 0;
      ${above.large`
      justify-content: flex-start;
    `}
      `
export const DescTime = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 20%;
      font-family: ${font.light};
      font-size: ${size.Wmini};
      color: ${colors.black};
      `
export const DescPrice = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 20%;
      font-family: ${font.medium};
      font-size: ${size.Wmini};
      color: ${colors.black};
      `
export const DescBook = styled.button`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: ${colors.green};
      border: 0;
      border-radius: .5rem;
      box-sizing: border-box;
      color: #111827;
      color: ${colors.white};
      font-family: ${font.waveMedium};
      font-size: ${size.Wmini};
      line-height: 1.25rem;
      padding: 1em 3rem;
      text-align: center;
      text-decoration: none #D1D5DB solid;
      text-decoration-thickness: auto;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;


    :hover {
      background-color: ${colors.accentBlue};
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    :focus-visible {
      box-shadow: none;
    }

    ${above.large`
    padding: .5rem 1rem;
    button{
      padding: .5rem;
    }
      `}
    `

export const DescText = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      height: 30%; 
      width: 100%;
      p{
        font-family: ${font.light};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      ${above.large`
      width: 80%;
      height: 30%; 

      p{
        font-family: ${font.light};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `}
      `
export const StyledServiceDesc = styled.div`
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;
      align-items: flex-start;
      text-align: justify;
      background: ${colors.none};
      border-left: none;
      width: 90%;
      padding: 2em;
      height: auto;
      overflow-y: hidden;

      ${above.large`
     
      width: 60%;
      justify-content: flex-start;
      flex-flow: column nowrap;
      align-items: flex-start;
      height: 90%;
      overflow-y: scroll;

      `}
      
      `
export const StyledServicePhoto = styled.div`
    display: none;

      ${above.large`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 19%;
      `}
      
      `
export const StyledSVG = styled.div`
    display: none;

      ${above.large`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 1%;
      height: 90%;

      `}
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
    width: 90%;
    padding: 0 0%;
    p{
      font-family: ${font.light};
      font-size: ${size.Mmini};
      color: ${colors.white};
    }
    a{
      color: ${colors.white};
    }
    ${above.large`
    width: 80%;
    p{
      font-size: ${size.Wmini};
      color: ${colors.black};
    }
    a{
      color: ${colors.black};
    }

  `}
    `
export const StyledServiceNote = styled.div`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        background: ${colors.green};
        width: 100%;
        height: 25vh;
        text-align: justify;
        ${above.large`
        justify-content: center;
        align-items: flex-start;
        width: 90%;
        height: 20vh; 
        background: ${colors.none};
  `}   
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