import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination ,Navigation } from "swiper";
import { Gallery, ProductContainer, Rectangulo, Rectangulo2, RectanguloProd, TextProduct } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"

//import librerias Framer motion
import { motion } from "framer-motion";


export default function SwiperF() {



    const animTxt = {
        rest: {
          opacity:0,
          transition: {
            duration: .1,
            ease: "easeIn"
          }
        },
        hover: {
          opacity:1,
          transition: {
            duration: .5,
            type: "tween",
            ease: "easeOut"
          }
        }
      };

      const animImg = {
        rest: {
          scale:1,
          rotate:0,
          transition: {
            duration: .1,
            ease: "easeIn"
          }
        },
        hover: {
          scale:1.1,
          rotate:-8,
          transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeOut"
          }
        }
      };

    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}

                modules={[Navigation, Pagination]}
                navigation={true}


                className="mySwiper"
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },
                }}
            >
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Cherry.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>NOMBRE DEL PRODUCTO 1</h3>
                            <motion.a variants={animTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</motion.a>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd initial="rest" whileHover="hover" animate="rest" >
                        <Rectangulo />
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/HandRelief.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto">
                            <h3 >NOMBRE DEL PRODUCTO</h3>
                            <motion.a variants={animTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</motion.a>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo />
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Invati2.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto">
                            <h3 >NOMBRE DEL PRODUCTO</h3>
                            <motion.a variants={animTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</motion.a>
                        </TextProduct>
                    </RectanguloProd >
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo />
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Shampure.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto">
                            <h3 >NOMBRE DEL PRODUCTO</h3>
                            <motion.a variants={animTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</motion.a>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
            </Swiper>
        </>
    );
}