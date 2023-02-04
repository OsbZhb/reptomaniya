import React, { useState } from "react";

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
  const [setSwiperRef] = useState(null);

  return (
    <section className="section-reviews">
    <div className="reviews-title">
      <h1>Отзывы</h1>
    </div>
    <>
      <Swiper className="mySwiper_1"
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className= "mySwiper_1">
        <div className="reviews-cards">
                    <div className="reviews-card">
                        <div className="card-title">
                            <img className="card-title__img" src={avatar01} alt="#" />
                            <h2 className="card-name">Дарья</h2>
                        </div>
                        <div className="card-text">
                          <p className="card-content">
                            Очень хороший магазин, больше похож на питомник. Девушка Юля очень общительная по телефону всё рассказала и объяснила.
                          </p>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className= "mySwiper_1">
        <div className="reviews-cards">
                    <div className="reviews-card">
                        <div className="card-title">
                        <img className="card-title__img" src={avatar02} alt="#" />
                            <h2 className="card-name">Зоя Вольпова</h2>
                        </div>
                        <div className="card-text">
                          <p className="card-content">
                            Здравствуйте! Огромное спасибо Вам за малыша бананаеда! Красавец! Очень активный ребенок! Стал кушать сам из миски готовый корм!
                          </p>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className= "mySwiper_1">
        <div className="reviews-cards">
                    <div className="reviews-card">
                        <div className="card-title">
                        <img className="card-title__img" src={avatar03} alt="#" />
                            <h2 className="card-name">Зоя Вольпова</h2>
                        </div>
                        <div className="card-text">
                          <p className="card-content">
                            Здравствуйте! Огромное спасибо Вам за малыша бананаеда! Красавец! Очень активный ребенок! Стал кушать сам из миски готовый корм!
                          </p>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className= "mySwiper_1">
        <div className="reviews-cards">
                        <div className="reviews-card">
                            <div className="card-title">
                              <img className="card-title__img" src={avatar04} alt="#" />
                              <h2 className="card-name">Софья Ким</h2>
                            </div>
                            <div className="card-text">
                              <p className="card-content">
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
