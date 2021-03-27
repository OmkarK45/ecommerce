/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Controller, Autoplay, Lazy } from "swiper"
import "swiper/swiper-bundle.css"
import "./styles.css"

SwiperCore.use([Navigation, Controller, Autoplay, Lazy])

export default function Carousel() {
  // eslint-disable-next-line no-unused-vars
  const [controlledSwiper, setControlledSwiper] = useState(null)
  const slides = []
  for (let i = 9; i < 14; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <a href="https://google.com">
          <img
            src={`https://picsum.photos/id/${i + 1}/1920/500`}
            style={{ listStyle: "none" }}
            alt={`Slide ${i}`}
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader"></div>
        </a>
      </SwiperSlide>
    )
  }

  return (
    <React.Fragment>
      <Swiper
        id="main"
        controller={{ control: controlledSwiper }}
        tag="section"
        className="w-full h-auto"
        wrapperTag="ul"
        lazy={{ loadPrevNext: true }}
        navigation
        autoHeight={true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex)
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  )
}
