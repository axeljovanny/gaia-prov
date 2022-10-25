import React, {useState} from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { motion } from "framer-motion";
// Componentes
import { Navbar } from "../components/navbar";
import { Bodycare, Haircare, Hero, Maps, Products, Skincare, Wedo } from "../components/home";
import { Footer } from "../components"
// Estilos
import { AdvImage, Gift, StyledHair, StyledSkin } from "../styles/js/home";
import { GiftWeb, GiftMovil, ShopWeb } from "../assets/Home";
// Constantes
import { colors } from "../utils/const"
// CSS
import '../styles/css/home.css'

const IndexPage = () => {

  // graphql Background
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: {eq: "Backgrounds/Home.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 100
              breakpoints:[750, 1080, 1366, 1920]
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
              webpOptions: {quality: 90}
            )
          }
        }
      }
    `
  )
  const image = getImage(backgroundImage123)

  const [isOpen, setIsOpen] = useState(false);
  const itemVariants = {
    open: {
      opacity: 1,
      x: "20%",
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 1, x: "75%", transition: { duration: 0.2 } }
  };


  return (
    <>
      <BgImage image={image} className="mastheadHome">
        <Hero />
      </BgImage>
      <Wedo />
      <StyledSkin>
        <Skincare />
      </StyledSkin>
      <StyledHair>
        <Haircare />
      </StyledHair>
      <StyledSkin>
        <Bodycare />
      </StyledSkin>
      <Products />
      <Maps />
      <Gift 
      initial={false}
      animate={isOpen ? "open" : "closed"} >
        <AdvImage
        href="https://squareup.com/gift/FHH5R6M6H54FS/order" rel="noreferrer" target="_blank"
        onHoverStart={() => setIsOpen(!isOpen)}
        onHoverEnd={() => setIsOpen(!isOpen)}
        variants={itemVariants}>
          <StaticImage 
          src="../images/Home/PNG/Tarjeta.png" 
          alt="GiftMovil" 
          placeholder="blurred"
          breakpoints={[750, 1080, 1366, 1920]}
          
          layout="constrained"
          className="gift"
          />
        </AdvImage>
        <AdvImage movil
        href="https://squareup.com/gift/FHH5R6M6H54FS/order" rel="noreferrer" target="_blank">
          <StaticImage 
          src="../images/Home/PNG/TarjetaRecortada.png" 
          alt="GiftMovil" 
          placeholder="blurred" 
          layout="constrained"
          breakpoints={[750, 1080, 1366, 1920]}
          className="gift"
          />
        </AdvImage>
      </Gift>
       <Navbar siteTitle="index" />
      <Footer></Footer>
    </>
  )
};

export default IndexPage