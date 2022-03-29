import { above } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"


export const StyledHome = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 100vw;
  height: 100vh;
  ${above.medium`
      
  `}
  ${above.large`
  
  `}
`

export const StyledButton = styled.button`
  width: 140px;
  height: 43px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 50px;
  margin: 1rem auto;
  justify-content: center ;
  background-color: transparent;
  border 1px white solid ;
  font-family: ${font.bold};
  color: ${colors.white};

  ${above.medium`
      
  `}
  ${above.large`
 
    margin: 0 25px 0 25px;

  `}
`

export const StyledText = styled.div`
    display: none;
  ${above.medium`

  `}
  ${above.large`
    display: block;
    right: 0;
    float: right;
    height: auto;
    background: none;
    text-align:center;
    width: fit-content;
    position: absolute; 
    color: ${colors.white};
    transform: rotate(90deg) translateY(-110px);
    font-family: ${font.light};
    letter-spacing: 1px;

`}
`

export const StyledLogoMobileContainer = styled.div`
  
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 100vw;
  height: 42%;
  position: absolute;
  top: 0;

.container-logo{
  width: 25vw;
}
${above.medium`

.container-logo{
  width: 18vw;
}

`}
${above.large`

  display: none;

  `}
`

export const StyledTitleContainer = styled.div`
  width: 100%;
  background: none;
  font-size: 1rem;
  height: auto;
  align-items: center;
  display: list-item flow ;
  justify-content: center ;
  margin-top: 1.5rem;

  color: ${colors.white};

  h1{
    font-family: ${font.bold};
    font-size: 4.5rem ;
  }
  h3{
    font-family: ${font.light};
  }

  ${above.medium`
  
  h1{
    font-size: 3.5rem ;
  }
      
  `}
  ${above.large`

  .container-logo{
    display: none;
  }
  .logo{
    display: none;
  }

  `}
`

export const StyledButtonsContainer = styled.div`
  
  width: 100%;
  display: inline block ;
  align-items: center;
  height: fit-content ;
  justify-content: center ;
  font-family: ${font.bold}
  margin-top: 5rem; 
  
  ${above.medium`

  `}
  ${above.large`
  
    display: flex ;
  `}
`

