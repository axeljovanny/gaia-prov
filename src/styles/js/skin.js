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
        font-family: ${font.waveLight};
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
        font-family: ${font.waveLight};
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
      width: 80%;
      p{
        font-family: ${font.waveLight};
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
      font-family: ${font.waveLight};
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