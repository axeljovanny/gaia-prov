import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStaticQuery, graphql } from "gatsby"

import { Pagination ,Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { CardPeopleSay } from "../../styles/js/about";

export const useReviewsService = () => {
    const data = useStaticQuery(
      graphql`
        query {
          allGoogleReviewsSheet {
            edges {
              node {
                name
                rate
                review
              }
            }
          }
        }
        `
    )
    return data.allGoogleReviewsSheet.edges
  }

export default function PeopleSay() {
    const services = useReviewsService()
    return (
        <>
        <h1>WHAT PEOPLE SAY</h1>
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
                {services.map(({ node }) => {
                return (
                    <SwiperSlide>
                      <CardPeopleSay>
                    <h3>{node.name}</h3>
                    <p>{node.review}</p>
                    </CardPeopleSay>
                    </SwiperSlide>
                )})}
            </Swiper>
        </>
    );
}