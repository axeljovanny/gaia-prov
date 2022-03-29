import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledFooter = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
  background: none;

  ${above.medium`
      
  `}
  ${above.large`
 
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: 15vh;
  bottom: 0;
  left: 0;
  background: none;

  `}
`

export const StyledContainer = styled.div`
  display: inline table;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
  ${above.medium`
  
  `}
  ${above.large`
  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`}

`

export const StyledItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100% auto;
height: auto;
margin: 0 auto;
background: none;

p{
  font-family:  ${font.bold};
  color: ${colors.white} ;
  font-size: ${size.Wmini};
}
.email,
.tel1 {
  display: none;
  text-align: right;
}

.tel2 {
    width: 100%;
    margin: 10px auto;
    text-align: center;
    background-color: none;
    font-size: ${size.Wtext};
    
}

${above.medium`

.email,
.tel1 {
  display: none;
    text-align: right;
}

`}
${above.large`

justify-content: center;
align-items: center;
width: 100%;
height: 100%;
margin: auto 10px;
background: none;


.email,
.tel1,
.direccion {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }
  
  .email,
  .tel1 {
    text-align: right;
    display:  inline;
}

.direccion {
    text-align: left;
  }
  
  .tel2 {
      display: none;
   
      
  }
  
  `}

`
export const StyledSocialContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
gap: 0.2em;
height: fit-content;
background-color: none;


${above.medium`
      
`}
${above.large`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5em;
width: 40%;
height: 100%;


`}

`
export const StyledSocialItem = styled.div`
display: flex;
width: auto;
justify-content: center ;
align-items: center;

${above.medium`



`}
${above.large`



`}

`