import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"

export const DescBodyTittle = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: ${colors.none};
      flex-flow: column nowrap;
      width: 100%;
      height: auto; 
      padding : 0;

      p{
        margin:0;
        font-family: ${font.waveLight};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }
      ${above.large`
      background: ${colors.none};
      align-items: center;
      justify-content: space-between;
      flex-flow: row wrap;
      width: 85%;
      padding : 0;
      height: auto;
      p{
        text-align: left;
        font-family: ${font.waveMedium};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }

    `}
      `

export const DescDetailsBody = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row wrap;
      background: ${colors.none};
      width: 90vw;
      padding: 5% 0;
      ${above.large`
      background: ${colors.none};
      width: 50vw;
      `}
      `

export const DescPriceBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: auto;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.white};
        padding-right: 3%;

        ${above.large`
        padding-right: 0;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `}
      `
export const DescTitleBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      background: ${colors.none};
      width: 65%;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.white};
        ${above.large`
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `}
      `
export const DescNoteBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
        font-family: ${font.medium};
        font-size: ${size.Wmini};
        color: ${colors.softWhite};
        ${above.large`
        width: 70%;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.green};
      `}
      `

export const Desc = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      text-align: justify;
      padding: 2% 0;
      font-family: ${font.light};
      font-size: ${size.Wtext};
      color: ${colors.white};
      
      ${above.large`
      width: 85%;
      height: auto; 
      padding: 0.5em 0;

        font-family: ${font.light};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `}
      `