import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const DescDetailsHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      padding: 0.5% 0;
      `

export const DescPriceHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 20%;
      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `
export const DescTitleHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 40%;
      p{
        font-family: ${font.leporsche};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `