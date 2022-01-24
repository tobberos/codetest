import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { CarCard } from "./CarCard";
import Car from "../interfaces/car";

SwiperCore.use([Pagination]);

export const CarSliderMobile: React.FC<{ carData: Car[] }> = (props) => {
  return (
    <div className="carslidermobilecontainer">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {props.carData.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCard carData={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
