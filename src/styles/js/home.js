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
  border-radius: 5px;
  margin: 1rem auto;
  justify-content: center ;

  background-color: transparent; 
  border 1px rgba(255, 255, 255, 0.7) solid ;

  font-family: ${font.bold};

  color: ${colors.white};

  :hover{
    transition: 0.2s ;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2); 
  }

  ${above.medium`
      
  `}
  ${above.large`
 
    margin: 0 25px;

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
  display: flex ;
  justify-content: center ;
  flex-direction: column;

  color: ${colors.white};

  h1{
    font-family: ${font.bold};
    font-size: ${size.Mheader};
  }
  h3{
    margin: 0;
    font-family: ${font.light};
  }
  

  ${above.medium`
  
  h1{
    font-size: ${size.Mheader};
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
  display: flex ;
  align-items: center;
  justify-content: center ;
  flex-direction: column;
  font-family: ${font.bold}  
  ${above.medium`

  `}
  ${above.large`
  
    margin-top: 5rem; 
    flex-direction: row;


  `}
`

