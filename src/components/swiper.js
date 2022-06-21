import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Navigation } from "swiper";
import { Gallery, ProductContainer, Rectangulo, Rectangulo2, RectanguloProd, TextProduct } from "../styles/js/home.js"
import { StaticImage } from "gatsby-plugin-image"


export default function SwiperF() {
    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}

                navigation={true}
                modules={[Navigation]}

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
                    <RectanguloProd>
                        <Rectangulo />
                        <StaticImage
                            className="contProduct"
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Cherry.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        <Rectangulo2 />
                        <TextProduct className="texto">
                            <h3>NOMBRE DEL PRODUCTO</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd>
                        <Rectangulo />
                        <StaticImage
                            className="contProduct"
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/HandRelief.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        <Rectangulo2 /><TextProduct className="texto">
                            <h3>NOMBRE DEL PRODUCTO</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd>
                        <Rectangulo />
                        <StaticImage
                            className="contProduct"
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Invati2.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        <Rectangulo2 /><TextProduct className="texto">
                            <h3>NOMBRE DEL PRODUCTO</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>
                <SwiperSlide>
                    <RectanguloProd>
                        <Rectangulo />
                        <StaticImage
                            className="contProduct"
                            imgClassName="imgProduct"
                            src="../images/Products/PNG/Shampure.png"
                            alt="producto"
                            height={270}
                            loading="lazy"
                            formats={['auto', 'webp', 'avif']}
                            quality='100'
                        />
                        <Rectangulo2 /><TextProduct className="texto">
                            <h3>NOMBRE DEL PRODUCTO</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        </TextProduct>
                    </RectanguloProd>
                </SwiperSlide>

            </Swiper>
        </>
    );
}