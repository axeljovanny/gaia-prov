import styled from "styled-components"
import { colors, font, size } from "../../utils/const"


export const DescDetailsHair = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 30vw;
      padding: 2% 0;
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
        font-family: ${font.light};
        font-size: ${size.Mtext};
        color: ${colors.black};
      `