import React from "react";
/* import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; */
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import '../styles/css/galeria.css'
import "./galeria.css";
//imports Swiper
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

export default function Galery() {
    return (
        <>
        <Swiper
        spaceBetween={0}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/FPArco.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />
        </SwiperSlide>
        <SwiperSlide>
        <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/WWDArco.png"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />
        </SwiperSlide>
      </Swiper>
           {/*  <Carousel className="container-prueba" infiniteLoop autoPlay showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} interval={7000} swipeable={true} dynamicHeight={false}>
                <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/seis.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />
                <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/uno.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />

                <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/dos.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />

                <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/tres.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />
                <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/cuatro.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />
                <StaticImage
                    className="imgGallery"
                    src="../images/Fotos/cinco.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                />

            </Carousel> */}
        </>
    );
}