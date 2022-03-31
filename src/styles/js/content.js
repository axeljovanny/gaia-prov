import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"

export const StyledContent = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100vw;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.4); 
    padding: 5em 0;

  ${above.medium`
      
  `}
  ${above.large`
    width: 70vw;


  `}
`

export const StyledLogoMobileContainer = styled.div`
  
  display: flex;
  justify-content: center ;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  padding:10%;

.container-logo{
  width: 25vw;
}

h1{
    font-family:  ${font.medium};
    color: ${colors.softYellow} ;
    font-size: ${size.Mheader};
    margin-top: 0.5em ;
}
h2{
    font-family:  ${font.medium};
    color: ${colors.softYellow} ;
    font-size: ${size.Mtittle};
    margin: 0;
}

${above.medium`
padding:10% 0 4%;

.container-logo{
  width: 18vw;
}

`}
${above.large`

.container-logo{
    width: 0;
  }

img{
    display: none;
}

  `}
`

export const StyledText = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: justify;
    text-justify: inter-word;

    width: 90%;

    h2{
        font-family:  ${font.bold};
        color: ${colors.softYellow} ;
        font-size: ${size.Mtittle};
        margin: 0.5em 0;
    }
    h3{
        font-family:  ${font.medium};
        color: ${colors.softYellow} ;
        font-size: ${size.Mmini};
        margin: 0.5em 0;
    }
    p{
        font-family:  ${font.light};
        color: ${colors.white} ;
        font-size: ${size.Mtext};
        margin: 0;

    }

  ${above.medium`
      
  `}
  ${above.large`
  align-items: flex-start;

    h2{
        font-family:  ${font.bold};
        color: ${colors.softYellow} ;
        font-size: ${size.Wtext};
    }
    p{
        font-family:  ${font.light};
        color: ${colors.white} ;
        font-size: ${size.Wtext};
    }
    h3{
        font-family:  ${font.medium};
        color: ${colors.softYellow} ;
        font-size: ${size.Wmini};
    }

  `}
`
