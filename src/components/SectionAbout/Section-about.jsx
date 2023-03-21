import './style.scss';
import Carousel from "./Carousel";
import { slides } from "./carouselData.json";
import photoCollage from '../../img/about_photo_collage.jpg';
import aboutPhoto from '../../img/about_photo.jpg';
import bg_img_1 from '../../img/background/01.png';
// SLIDER

// import slide_1 from '../../img/slider/image-1.jpg';
// import slide_2 from '../../img/slider/image-2.jpg';
// import slide_3 from '../../img/slider/image-3.jpg';
// import slide_4 from '../../img/slider/image-4.jpg';

// const slides = [
//     { url: "https://fastly.picsum.photos/id/531/600/400.jpg?hmac=i7RbaDZ38i_zmIgfTN_iKiIWCPVYttxgOFzhCLK1SI0", title: "beach" },
//     { url: "https://picsum.photos/seed/img1/600/400", title: "boat" },
//     { url: "https://picsum.photos/seed/img1/600/400", title: "forest" },
//     { url: "https://picsum.photos/seed/img1/600/400", title: "city" },
//     { url: "https://picsum.photos/seed/img1/600/400", title: "italy" },
//   ];
//   const containerStyles = {
//     width: "500px",
//     height: "280px",
//     margin: "0 auto",
//   };

const SectionAbout = () => {
    return (
        <section className="section-about">
        <h2 className="about-title block-title">— О нас</h2>
        <div className="about-images">
            <div className="Carousel-block">
            <Carousel data={slides} />
            </div> 
            {/* <div className="block-one">
                <img className="about-img_one"
                src={photoCollage}
                alt="#"
                />
            </div> */}

            <div className="block-two">
                <img className="about-img_two"
                src={aboutPhoto}
                alt="#"
                />
                <p className="about-text__item">Наш питомник с 2015 года занимается содержанием и разведением рептилий различных видов. Это увлекательное занятие помогает погрузиться в мир природы, ощутить единство с ней и обрести свой собственный живой уголок среди каменных джунглей.</p>
                <p className="about-text__item">Мы хотим видеть вокруг как можно больше единомышленников и приглашаем вас познакомиться с миром рептилий.</p>
                <a href="https://vk.com/im?media=&sel=-183811295"><button className="about-btn">Написать</button></a>
            </div>
        </div>
        {/* <div className="bg_img_1">
            <img 
                src={bg_img_1}
                alt="#"
            />
        </div> */}
    </section>
    );
}
 
export default SectionAbout;