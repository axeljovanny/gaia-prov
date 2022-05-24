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
      padding: 0.5% 0;
      `

export const DescPriceBody = styled.div`
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
export const DescTitleBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 40%;
      p{
        font-family: ${font.waveLight};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `
export const DescNoteBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      p{
        font-family: ${font.medium};
        font-size: ${size.Wmini};
        color: ${colors.black};
      }
      `