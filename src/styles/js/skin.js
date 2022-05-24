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
    height: 60vh;
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
    align-items: flex-end;
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
    button{
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;
      font-family: ${font.waveLight};
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
      p{
        font-family: ${font.medium};
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
        font-family: ${font.medium};
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
        font-family: ${font.waveLight};
        font-size: ${size.Wtext};
        color: ${colors.black};
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
      border-left: solid 1px ${colors.black};
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
        padding: 0;
        text-align: justify;
        ${above.large`
        justify-content: space-around;
        align-items: flex-start;
        width: 90%;
        padding: 0 0 3% 0;    
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