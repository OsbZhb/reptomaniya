import './style.scss';

const Footer = () => {
    return (
        <footer class="section-footer">
        <div class="footer-menu__block">
            <p class="footer-title">
                Рептомания
            </p>
            <p class="footer-subtitle">
                частный питомник экзотических животных
            </p>
        </div>
        <div class="footer-menu">
            <ul class="footer-menu__items">
              <li class="footer-menu__item"><a href="#">О нас</a></li>
              <li class="footer-menu__item"><a href="#">Магазин</a></li>
              <li class="footer-menu__item"><a href="#">Контакты</a></li>
              <li class="footer-menu__item"><a href="#">Рекомендации</a></li>
              <li class="footer-menu__item"><a href="#">Отзывы</a></li>
            </ul>
        </div>
    </footer> 
    );
}
 
export default Footer;