import styled from "styled-components"
import { above } from "."

export const StyledNavbar = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 100vw;
  height: 17vh;
  -webkit-box-shadow: inset 0px 20px 50px -16px #4A4A4A; 
  box-shadow: inset 0px 20px 50px -16px #4A4A4A;
  
  border-bottom: 1px solid red;
  
  `}
`

export const StyledLogoContainer = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`

  display: flex;
  justify-content: center ;
  align-items: center;

  width: 10vw;
  height: 100%;
 

  background: none;

  `}
`

export const StyledLeft = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  justify-content: right ;
  align-items: center;
  width: 18vw;
  height: 100%;
  background: none ;
  
  `}
`

export const StyledRight = styled.div`
  
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 18vw;
  height: 100%;
  background: none;
  
  `}
`

export const Items = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
list-style: none; 
padding: 0;



`

export const ItemLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
list-style: none; 
padding: 0;
background-color: none;
margin: 10px 0 10px 0;
width: 100%;
height: 10vh;
font-family: 'Montserrat', sans-serif;

`

export const ItemRight = styled.div`

display: flex;
justify-content: center;
align-items: center;
list-style: none; 
padding: 0;
background-color: none;
margin: 10px 0 10px 0;
width: 50%;
margin-right: 1px;
height: 10vh;
font-family: 'Montserrat', sans-serif;

`
