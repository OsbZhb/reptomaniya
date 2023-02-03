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
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <iframe src="https://www.youtube.com/embed/4p77CX5izSs"></iframe>
      </SwiperSlide>
      <SwiperSlide>
        <iframe src="https://www.youtube.com/embed/-n2Dvxuq2SU"></iframe>
      </SwiperSlide>
      <SwiperSlide>
        <iframe src="https://www.youtube.com/embed/xai7CssHiLc"></iframe>
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </>
  </section>
  );
}
 
export default SectionVideo;