const Videos = () => {
    return (
        <section className="IntroductoryVideos">
            <div className="videos-title">
                <h1 className="IntroductoryVideos__title">Ознакомительные видео</h1>
            </div>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <iframe src="https://www.youtube.com/embed/4p77CX5izSs"></iframe>
                  </div>
                  <div className="swiper-slide">
                    <iframe src="https://www.youtube.com/embed/-n2Dvxuq2SU"></iframe>
                  </div>
                  <div className="swiper-slide">
                    <iframe src="https://www.youtube.com/embed/xai7CssHiLc"></iframe>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
                <div className="slider" id="slider">
              </div>
        </section>
    );
}
 
export default Videos;