import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from "gatsby-plugin-image";
import '../styles/css/skin.css'

export default function CarouselComponent() {
    return (
        <>
            <Carousel className="container-prueba" infiniteLoop autoPlay showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} interval={7000} swipeable={true} dynamicHeight={false}>
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

            </Carousel>
        </>
    );
}