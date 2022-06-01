import { above } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"


export const StyledHome = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 100vw;
  height: 60vh;
  padding-top:50%;
  ${above.medium`
      
  `}
  ${above.large`
  padding-top: 5%;
  height: 85vh;
  
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
  border: 1px ${colors.white} solid ;
  font-family: ${font.medium};
  color: ${colors.white};
  font-size: ${size.Mtext};

  :hover{
    transition: 0.2s ;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2); 
  }

  ${above.medium`
      
  `}
  ${above.large`
  font-size: ${size.Mtext}; 
    margin: 0 25px;

  `}
`

export const StyledText = styled.div`
  display: block;
  right: 0;
  float: right;
  height: auto;
  background: none;
  text-align:center;
  width: fit-content;
  position: absolute; 
  color: ${colors.white};
  transform: rotate(90deg) translateY(-140px);
  font-family: ${font.light};
  font-size: ${size.Mmini};
  letter-spacing: 1px;
  ${above.medium`
  transform: rotate(90deg) translateY(-120px);
  font-size: ${size.Wmini};

  `}
  ${above.large`
  transform: rotate(90deg) translateY(-110px);
  font-size: ${size.Wmini};
    

`}
`

export const StyledLogoMobileContainer = styled.div`
  
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 100vw;
  height: 40%;
  position: absolute;
  top: 0;

.container-logo{
  width: 25vw;
  height: 25.5vw;
  padding: 10px;
}
${above.medium`

.container-logo{
  width: 18vw;
  height: 18.5vw;
  padding: 10px;
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
    line-height : 50px;
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
  h1{
    line-height : 70px;
    font-size: ${size.Wheader};
  }

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

