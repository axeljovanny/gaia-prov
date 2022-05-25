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
    height: 100vh;

`

export const StyledServiceContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background: ${colors.none};
    width: 100%;
    height: 50vh;
    ${above.large`
    flex-flow: row nowrap;
    
    `}
    `
export const StyledServiceTittle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
    background: ${colors.none};
    width: 90%;
    ${above.large`
    justify-content: center;
    align-items: flex-start;
    width: 25%;
    flex-flow: column nowrap;
    
    `}
    `
export const TextTittle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${colors.none};
    width: 50%;
    margin: 0.4em 25%;
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
      `
export const DescTittle = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${colors.none};
      width: 95%;

      p{
        font-family: ${font.waveLight};
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
      font-family: ${font.waveLight};
      font-size: ${size.Wmini};
      line-height: 1.25rem;
      padding: .5rem 1rem;
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
      `
export const DescText = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      p{
        font-family: ${font.light};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      ${above.large`
      width: 80%;
      p{
        font-family: ${font.light};
        font-size: ${size.Mtext};
        color: ${colors.black};
      }
      `}
      `
export const StyledServiceDesc = styled.div`
      display: flex;
      justify-content: flex-start;
      flex-flow: column nowrap;
      align-items: flex-start;
      text-align: justify;
      background: ${colors.none};
      border-left: none;
      width: 90%;
      padding: 0 2em;
      height: 100%;
      overflow:scroll;

      ${above.large`
      width: 60%;
      justify-content: center;
      flex-flow: column nowrap;
      align-items: center;
      border-left: solid 0.5px ${colors.black};
      `}
      
      `
export const StyledServicePhoto = styled.div`
    display: none;

      ${above.large`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 20%;
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
    ${above.large`
    width: 80%;
    p{
      font-size: ${size.Wmini};
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