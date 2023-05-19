//import { Box, Grid } from "@mui/material";
import TheCard from "./TheCard";
import WelcomeMessage from "./Welcome";

import "./Item.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { Typography } from "@mui/material";

const ItemList = ({ items, CardItem }) => {
    return (
        <>
            <WelcomeMessage />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {items.map((elemento) => (
                    <SwiperSlide key={elemento.id}>
                        <TheCard elemento={elemento} CardItem={CardItem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ItemList;
