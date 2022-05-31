import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from "gatsby-plugin-image"; 
import '../styles/css/skin.css'

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper"  >
            <Carousel  infiniteLoop autoPlay showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} interval={7000} swipeable={true}>
                 
                    <StaticImage 
                    className="container-prueba"
                    src="../images/Fotos/imga.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                    />

                    <StaticImage 
                    className="container-prueba"
                    src="../images/Fotos/imgb.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                    />
                
                   <StaticImage 
                   className="container-prueba"
                    src="../images/Fotos/imgc.jpg"
                    alt="imagen de prueba"
                    loading="eager"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    quality='70'
                    />
                
            </Carousel>
        </div>
    );
}