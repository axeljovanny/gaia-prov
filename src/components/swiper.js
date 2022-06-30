import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination ,Navigation } from "swiper";
import { DescProduct, Rectangulo, Rectangulo2, RectanguloProd, TextProduct } from "../styles/js/home.js"
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
                spaceBetween={0}
                modules={[Navigation, Pagination]}
                navigation={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: "2%",
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: "2%",
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: "2%",
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: "3%",
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
                            src="../images/Products/PNG/B-shampoo.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Botanical Repair Shampoo</h3>
                            <DescProduct variants={animTxt}>Strengthens & repairs damaged hair with our silicone free shampoo that luxuriously cleanses, gently removing excess sebum, product build-up and pollution.</DescProduct>
                            <DescProduct movil>Strengthens & repairs damaged hair with our silicone free shampoo that luxuriously cleanses, gently removing excess sebum, product build-up and pollution.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/B-Conditioner.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Botanical Repair Conditioner</h3>
                            <DescProduct variants={animTxt}>Conditions and instantly detangles to help prevent breakage; strengthens and repairs with the power of plants.</DescProduct>
                            <DescProduct movil>Conditions and instantly detangles to help prevent breakage; strengthens and repairs with the power of plants.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/B-Leavein.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Botanical Repair strengthening leave-in treatment</h3>
                            <DescProduct variants={animTxt}>Leave-in treatment instantly strengthens, repairs and helps protect against damage while building bonds for stronger hair from the inside out.</DescProduct>
                            <DescProduct movil>Leave-in treatment instantly strengthens, repairs and helps protect against damage while building bonds for stronger hair from the inside out.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/N-Shampoo.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Nutriplenish Shampoo Deep Moisture</h3>
                            <DescProduct variants={animTxt}>Nutrient-powered hydration for lush, visibly healthier hair.</DescProduct>
                            <DescProduct movil>Nutrient-powered hydration for lush, visibly healthier hair.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/N-Conditioner.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Nutriplenish Conditioner</h3>
                            <DescProduct variants={animTxt}>Nutrient-powered hydration for lush, visibly healthier hair. Rich and decadent formula delivers powerful hydration.</DescProduct>
                            <DescProduct movil>Nutrient-powered hydration for lush, visibly healthier hair. Rich and decadent formula delivers powerful hydration.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/N-Leavein.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Nutriplenish Leave-In Conditioner</h3>
                            <DescProduct variants={animTxt}>Instantly hydrates, detangles and protects all hair types and textures. Thermal protection up to 450° F. Naturally derived UV filter helps protect hair from the drying effects of the sun.</DescProduct>
                            <DescProduct movil>Instantly hydrates, detangles and protects all hair types and textures. Thermal protection up to 450° F. Naturally derived UV filter helps protect hair from the drying effects of the sun.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/I-shampoorich.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Invati Advance Exfoliating Shampoo Rich</h3>
                            <DescProduct variants={animTxt}>Nourishing shampoo gently exfoliates and renews the scalp. Reduces hair loss by 53%* when used as part of the Invati advanced™ 3-step system.</DescProduct>
                            <DescProduct movil>Nourishing shampoo gently exfoliates and renews the scalp. Reduces hair loss by 53%* when used as part of the Invati advanced™ 3-step system.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/I-ThickeningConditioner.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Invati Advance Thickening Conditioner</h3>
                            <DescProduct variants={animTxt}>Instantly thickens thin and thinning hair and delivers weightless conditioning to help protect the hair from breakage. Helps strengthen hair from roots to ends with naturally derived amino acids.</DescProduct>
                            <DescProduct movil>Instantly thickens thin and thinning hair and delivers weightless conditioning to help protect the hair from breakage. Helps strengthen hair from roots to ends with naturally derived amino acids.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/I-Scalp.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Invati Advance Scalp Revitalizer</h3>
                            <DescProduct variants={animTxt}>Reduces hair loss* to help keep the hair you have longer. This invigorating formula penetrates to help support hair’s natural keratin, it instantly thickens to help lift hair at the root and invigorates the scalp.</DescProduct>
                            <DescProduct movil>Reduces hair loss* to help keep the hair you have longer. This invigorating formula penetrates to help support hair’s natural keratin, it instantly thickens to help lift hair at the root and invigorates the scalp.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/K-Gelcleanser.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Botanical kinetics purifying gel cleanser</h3>
                            <DescProduct variants={animTxt}>Begin and end each day with a gentle, plant-derived gel cleanser that foams away oil and impurities and helps normalize skin. For normal to oily skin.</DescProduct>
                            <DescProduct movil>Begin and end each day with a gentle, plant-derived gel cleanser that foams away oil and impurities and helps normalize skin. For normal to oily skin.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd 
                        initial="rest" whileHover="hover" animate="rest">
                        <Rectangulo/>
                        <motion.div className="contProduct" variants={animImg}>
                        <StaticImage
                            /* className="contProduct" */
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/K-Grèmecleanser.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        </motion.div>
                        <Rectangulo2 />
                        <TextProduct className="texto" >
                            <h3>Botanical kinetics purifying crème cleanser</h3>
                            <DescProduct variants={animTxt}>Improve the comfort level of daily facial cleansing with a rich crème that removes surface dirt and impurities. Extra-mild on skin with plant-derived oils to leave skin soft and smooth. For normal to dry skin.</DescProduct>
                            <DescProduct movil>Improve the comfort level of daily facial cleansing with a rich crème that removes surface dirt and impurities. Extra-mild on skin with plant-derived oils to leave skin soft and smooth. For normal to dry skin.</DescProduct>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
            </Swiper>
        </>
    );
}