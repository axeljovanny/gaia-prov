import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const DescDetailsBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: row wrap;
      background: ${colors.none};
      width: 100%;
      padding: 3% 0;
      height: 70%; 
      `

export const DescPriceBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 20%;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `
export const DescTitleBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 60%;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `
export const DescNoteBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
        font-family: ${font.medium};
        font-size: ${size.Wmini};
        color: ${colors.green};
      `

export const Desc = styled.div`
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
      width: 100%;
      height: auto; 

        font-family: ${font.light};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `}
      `