import { css, createGlobalStyle } from "styled-components"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const aboveMax = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
body {
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  font-family: Josefin;
  background: black;
  height:100%; 
}
a {
  text-decoration: none;
}
ul {
  margin: 0 auto;
  list-style-type: none;
}

.masthead {
  z-index: 0;
  width: 100vw;
  min-height: 100vh;
  
}

.content{
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  width: 100vw;
  height: 100vh;
}

@media (min-width: 1140px) {
  .masthead {
    
    
  }
}

::-webkit-scrollbar {
  display: none;
}
`;