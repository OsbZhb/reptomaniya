import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sectionVideo.scss";

import { Pagination, Navigation } from "swiper";

const SectionVideo = () => {
  return (
    <section class="IntroductoryVideos">
    <>
    <div class="videos-title">
      <h1 class="IntroductoryVideos__title">Ознакомительные видео</h1>
    </div>
    <Swiper className="mySwiper_2"
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide className="mySwiper_2">
        <iframe src="https://www.youtube.com/embed/4p77CX5izSs"></iframe>
      </SwiperSlide>
      <SwiperSlide className="mySwiper_2">
        <iframe src="https://www.youtube.com/embed/-n2Dvxuq2SU"></iframe>
      </SwiperSlide>
      <SwiperSlide className="mySwiper_2">
        <iframe src="https://www.youtube.com/embed/xai7CssHiLc"></iframe>
      </SwiperSlide>
      <SwiperSlide className="mySwiper_2">Slide 4</SwiperSlide>
      <SwiperSlide className="mySwiper_2">Slide 5</SwiperSlide>
      <SwiperSlide className="mySwiper_2">Slide 6</SwiperSlide>
      <SwiperSlide className="mySwiper_2">Slide 7</SwiperSlide>
      <SwiperSlide className="mySwiper_2">Slide 8</SwiperSlide>
      <SwiperSlide className="mySwiper_2">Slide 9</SwiperSlide>
    </Swiper>
  </>
  </section>
  );
}
 
export default SectionVideo;