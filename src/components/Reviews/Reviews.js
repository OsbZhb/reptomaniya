const Reviews = () => {
    return (
        <section className="section-reviews">
        <h2 className="reviews-title block-title">Отзывы</h2>
        <div className="reviews-container">
            <div className="reviews-cards">
                <div className="reviews-card">
                    <div className="card-title">
                        <img src="./img/reviews/reviews_01.png" alt="#" />
                        <h2 className="card-name">Софья Ким</h2>
                    </div>
                    <div className="card-text">
                        <p card-content>
                            Отличная заводчица. Питомцы в хороших условиях, соответственно здоровые и красивые. Помогла с выбором, проконсультировала. У неё же выгодно приобрела заморозку домовых сверчков. Единственное, перед приездом лучше позвонить, так как может отсутствовать. Магазин находится на нижнем этаже торгового центра (не сразу нашла)
                        </p>
                    </div>
                </div>
            </div>
            <div className="reviews-cards">
                <div className="reviews-card">
                    <div className="card-title">
                        <img src="./img/reviews/reviews_02.png" alt="#" />
                        <h2 className="card-name">Дарья</h2>
                    </div>
                    <div className="card-text">
                        <p card-content>
                            Очень хороший магазин, больше похож на питомник. Девушка Юля очень общительная по телефону всё рассказала и объяснила.
                        </p>
                    </div>
                </div>
            </div>
            <div className="reviews-cards">
                <div className="reviews-card">
                    <div className="card-title">
                        <img src="./img/reviews/reviews_03.png" alt="#" />
                        <h2 className="card-name">Маргоша Лихова</h2>
                    </div>
                    <div className="card-text">
                        <p card-content>
                            Потрясающий питомник. Если вы хотите завести себе чудесного необычного друга - вам сюда. Юля, спасибо за внимание и помощь!
                        </p>
                    </div>
                </div>
            </div>
            <div className="reviews-cards">
                <div className="reviews-card">
                    <div className="card-title">
                        <img src="./img/reviews/reviews_04.png" alt="#" />
                        <h2 className="card-name">Зоя Вольпова</h2>
                    </div>
                    <div className="card-text">
                        <p card-content>
                            Здравствуйте! Огромное спасибо Вам за малыша бананаеда! Красавец! Очень активный ребенок! Стал кушать сам из миски готовый корм!
                        </p>
                    </div>
                </div>
            </div>
            <div className="reviews-cards">
                <div className="reviews-card">
                    <div className="card-title">
                        <img src="./img/reviews/reviews_04.png" alt="#" />
                        <h2 className="card-name">Зоя Вольпова</h2>
                    </div>
                    <div className="card-text">
                        <p card-content>
                            Здравствуйте! Огромное спасибо Вам за малыша бананаеда! Красавец! Очень активный ребенок! Стал кушать сам из миски готовый корм!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="reviews-cards">
                    <div className="reviews-card">
                        <div className="card-title">
                            <img src="./img/reviews/reviews_01.png" alt="#" />
                            <h2 className="card-name">Софья Ким</h2>
                        </div>
                        <div className="card-text">
                            <p card-content>
                                Отличная заводчица. Питомцы в хороших условиях, соответственно здоровые и красивые. Помогла с выбором, проконсультировала. У неё же выгодно приобрела заморозку домовых сверчков. Единственное, перед приездом лучше позвонить, так как может отсутствовать. Магазин находится на нижнем этаже торгового центра (не сразу нашла)
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="reviews-cards">
                    <div className="reviews-card">
                        <div className="card-title">
                            <img src="./img/reviews/reviews_02.png" alt="#" />
                            <h2 className="card-name">Дарья</h2>
                        </div>
                        <div className="card-text">
                            <p card-content>
                                Очень хороший магазин, больше похож на питомник. Девушка Юля очень общительная по телефону всё рассказала и объяснила.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="swiper-slide">Slide 3</div>
              <div className="swiper-slide">Slide 4</div>
              <div className="swiper-slide">Slide 5</div>
              <div className="swiper-slide">Slide 6</div>
              <div className="swiper-slide">Slide 7</div>
              <div className="swiper-slide">Slide 8</div>
              <div className="swiper-slide">Slide 9</div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
    </section>
    );
}
 
export default Reviews;