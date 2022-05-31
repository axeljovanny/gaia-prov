import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { above } from "."

export const DescHairTittle = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: ${colors.none};
      flex-flow: column nowrap;
      width: 100%;
      height: auto; 
      padding : 1.5em 0;

      p{
        margin:0;
        font-family: ${font.waveLight};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }
      ${above.large`
      align-items: baseline;
      justify-content: flex-start;
      flex-flow: row wrap;
      height: auto; 
      padding: 0;
      p{
        width: 80%;
        text-align: left;
        margin:0;
        font-family: ${font.waveMedium};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }

    `}
      `

export const DescDetailsHair = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-flow: column wrap;
      background: ${colors.none};
      width: 100%;
      padding: 4% 0;
      height: 70%; 
      `

export const DescPriceHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 30%;
        font-family: ${font.medium};
        font-size: ${size.Mtext};
        color: ${colors.black};
      `
export const DescTitleHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 70%;
      font-family: ${font.medium};
      font-size: ${size.WList};
      color: ${colors.black};
      `

export const DescHairText = styled.div`
      display: flex;
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
      padding: 0.5em 0;
      width: 95%;
      text-align: justify;
      line-height : 23px;
      p{
        font-family: ${font.light};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `}
      `
