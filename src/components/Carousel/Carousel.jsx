/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Controller, Autoplay, Lazy } from "swiper"
import "swiper/swiper-bundle.css"
import "swiper/components/lazy/lazy.min.css"
import "./styles.css"
import { imgLinks } from "./imgLinks"

SwiperCore.use([Navigation, Controller, Autoplay, Lazy])

export default function Carousel() {
  console.log(imgLinks[0].url)
  // eslint-disable-next-line no-unused-vars
  const [controlledSwiper, setControlledSwiper] = useState(null)
  const slides = []
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={imgLinks[i].url}
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader"></div>
      </SwiperSlide>
    )
  }

  return (
    <React.Fragment>
      <Swiper
        id="main"
        controller={{ control: controlledSwiper }}
        tag="section"
        height={1000}
        className="w-full"
        wrapperTag="ul"
        lazy={{ loadPrevNext: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  )
}
