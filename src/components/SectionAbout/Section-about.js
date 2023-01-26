import './style.scss';
import photoCollage from '../../img/about_photo_collage.jpg';
import aboutPhoto from '../../img/about_photo.jpg';

const SectionAbout = () => {
    return (
        <div className="container">
        <section class="section-about">
        <h2 class="about-title block-title">— О нас</h2>
        <div class="about-images">
            <div class="block-one">
                <img class="about-img_one"
                src={photoCollage}
                alt="#"
                />
            </div>
            <div class="block-two">
                <img class="about-img_two"
                src={aboutPhoto}
                alt="#"
                />
                <p class="about-text__item">Наш питомник с 2015 года занимается содержанием и разведением рептилий различных видов. Это увлекательное занятие помогает погрузиться в мир природы, ощутить единство с ней и обрести свой собственный живой уголок среди каменных джунглей.</p>
                <p class="about-text__item">Мы хотим видеть вокруг как можно больше единомышленников и приглашаем вас познакомиться с миром рептилий.</p>
                <a href="https://vk.com/im?media=&sel=-183811295"><button class="about-btn">Написать</button></a>
            </div>
        </div>
    </section>
    </div>
    );
}
 
export default SectionAbout;