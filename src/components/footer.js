import React from "react"
import { Link } from "gatsby"
import '../styles/css/footer.css'
import { StyledSocialContainer, StyledContainer, StyledFooter, StyledItem, StyledSocialItem } from "../styles/js/footer"
import { FacebookIcon, InstagramIcon, MapsIcon } from "../images/icons";
import { colors } from "../utils/const"



const Footer = ({ children }) => (
    <>
        <StyledFooter>
            <StyledContainer >
                <StyledItem>
                    <p className="text-footer-left">
                        gaiaevolution@icloud.com       |   Tel: 773-799-8843

                    </p>
                </StyledItem>
                <StyledSocialContainer>
                    <StyledSocialItem>
                        <Link to="">
                            <FacebookIcon fill={colors.white} className="svgAbout" />
                        </Link>
                    </StyledSocialItem>
                    <StyledSocialItem>
                        <Link to="">
                            <InstagramIcon fill={colors.white} className="svgAbout" />
                        </Link>
                    </StyledSocialItem>
                    <StyledSocialItem>
                        <Link to="">
                            <MapsIcon fill={colors.white} className="svgAbout" />

                        </Link>
                    </StyledSocialItem>
                </StyledSocialContainer>
                <StyledItem>
                    <p className="text-footer-right">
                        3143 W. Fullerton Ave. Chicago, IL
                    </p>
                </StyledItem>
            </StyledContainer>

        </StyledFooter>

    </>
)


export default Footer