import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/modules/manipulation/manipulation.min.css";

import "./testimonials.scss";

import avatar01 from './avatars/avatar-1.png';
import avatar02 from './avatars/avatar-2.png';
import avatar03 from './avatars/avatar-3.png';
import avatar04 from './avatars/avatar-4.png';

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <section class="section-reviews">
    <div class="reviews-title">
      <h1>Отзывы</h1>
    </div>
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper_1"
      >
        <SwiperSlide mySwiper_1>
        <div class="reviews-cards">
                    <div class="reviews-card">
                        <div class="card-title">
                            <img src={avatar01} alt="#" />
                            <h2 class="card-name">Дарья</h2>
                        </div>
                        <div class="card-text">
                            <p card-content>
                                Очень хороший магазин, больше похож на питомник. Девушка Юля очень общительная по телефону всё рассказала и объяснила.
                            </p>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="reviews-cards">
                    <div class="reviews-card">
                        <div class="card-title">
                        <img src={avatar02} alt="#" />
                            <h2 class="card-name">Зоя Вольпова</h2>
                        </div>
                        <div class="card-text">
                            <p card-content>
                                Здравствуйте! Огромное спасибо Вам за малыша бананаеда! Красавец! Очень активный ребенок! Стал кушать сам из миски готовый корм!
                            </p>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="reviews-cards">
                    <div class="reviews-card">
                        <div class="card-title">
                        <img src={avatar03} alt="#" />
                            <h2 class="card-name">Зоя Вольпова</h2>
                        </div>
                        <div class="card-text">
                            <p card-content>
                                Здравствуйте! Огромное спасибо Вам за малыша бананаеда! Красавец! Очень активный ребенок! Стал кушать сам из миски готовый корм!
                            </p>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="reviews-cards">
                        <div class="reviews-card">
                            <div class="card-title">
                            <img src={avatar04} alt="#" />
                                <h2 class="card-name">Софья Ким</h2>
                            </div>
                            <div class="card-text">
                                <p card-content>
                                    Отличная заводчица. Питомцы в хороших условиях, соответственно здоровые и красивые. Помогла с выбором, проконсультировала.
                                </p>
                            </div>
                        </div>
                    </div>
        </SwiperSlide>
      </Swiper>
    </>
    </section>
  );
}
