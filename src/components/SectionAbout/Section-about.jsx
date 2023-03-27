import './style.scss';
import Carousel from "./Carousel";
// import { slides } from "./carouselData.json";
import photoCollage from '../../img/about_photo_collage.jpg';
import aboutPhoto from '../../img/about_photo.jpg';
import bg_img_1 from '../../img/background/01.png';
// SLIDER

// import slide_1 from '../../img/slider/image-1.jpg';
// import slide_2 from '../../img/slider/image-2.jpg';
// import slide_3 from '../../img/slider/image-3.jpg';
// import slide_4 from '../../img/slider/image-4.jpg';

const slides = [
    { src: "https://2.downloader.disk.yandex.ru/preview/07326f6cc07e87684a05448909f2ffc485ff8e99c7fe6d57b313501bcb2f4074/inf/uYbCDfzCt5AL-nc5TcQyb3ANMesTZiMvQrJ1aLGrKvIG4XVKUVAcJoWGApocHxvIeUQIAc4eoCgtiri4AIqBQg%3D%3D?uid=344260561&filename=image-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=344260561&tknv=v2&size=1920x969", title: "beach" },
    { src: "https://1.downloader.disk.yandex.ru/preview/9c868dd3121b997f24a4af2a0fedde87e3fdd0fc96829d28b816fccf4fb9672b/inf/WZcvZcqBE2c9fapOCrJcM3ANMesTZiMvQrJ1aLGrKvIigCNRuEQcZYS5VnIS8lg8Q2i4E3c9LPOhO8nl7KTwpg%3D%3D?uid=344260561&filename=image-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=344260561&tknv=v2&size=1920x969", title: "boat" },
    { src: "https://2.downloader.disk.yandex.ru/preview/495c409c8e39937e9e12ae6af31531a662daf94a6dda3acc72d917e644aa2f57/inf/w4WzpDBtOkj9oOPFrRJEBXANMesTZiMvQrJ1aLGrKvIzRIp9Ql8oEiLctPIuO3GjeVxKVhFzzLu3mhGg7iwMmg%3D%3D?uid=344260561&filename=image-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=344260561&tknv=v2&size=1920x969", title: "forest" },
    { src: "https://3.downloader.disk.yandex.ru/preview/a0da47dcac22b3cbc33fda633dcbbf6aa7a049236b9394e60e445c06a5fb22dc/inf/n--3NS6C0QPl9XlALWtsPXANMesTZiMvQrJ1aLGrKvLvHAwNg4p6l_nRFJZMVPOAX-hjTRPfLU2s-JBa_PHOEw%3D%3D?uid=344260561&filename=image-4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=344260561&tknv=v2&size=1920x969", title: "city" },
    // { src: "https://picsum.photos/seed/img1/600/400", title: "italy" },
  ];

const SectionAbout = () => {
    return (
        <section className="section-about">
        <h2 className="about-title block-title"> — О нас</h2>
        <div className="about-images">
            <div className="Carousel-block">
                <Carousel slides={slides} />
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