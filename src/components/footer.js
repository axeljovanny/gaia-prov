import React from "react"
import { Link } from "gatsby"
import '../styles/css/footer.css'
import { StaticImage } from "gatsby-plugin-image"
import { StyledSocialContainer, StyledContainer, StyledFooter, StyledItem, StyledSocialItem } from "../styles/js/footer"


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
                            <StaticImage src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                                alt="..."
                                placeholder="blurred"
                                layout="constrained"
                                formats={['auto', 'webp', 'avif']}
                                width={30}
                                height={30}
                            />
                        </Link>
                    </StyledSocialItem>
                    <StyledSocialItem>
                        <Link to="">
                            <StaticImage src="https://www.buscopng.com/wp-content/uploads/2020/10/Logo-de-instagram-original.png"
                                alt="..."
                                placeholder="blurred"
                                layout="constrained"
                                formats={['auto', 'webp', 'avif']}
                                width={30}
                                height={30}
                            />
                        </Link>
                    </StyledSocialItem>
                    <StyledSocialItem>
                        <Link to="">
                            <StaticImage src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                                alt="..."
                                placeholder="blurred"
                                layout="constrained"
                                formats={['auto', 'webp', 'avif']}
                                width={30}
                                height={30}
                            />
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