import './style.scss';
import './script';

const Header = () => {
    return (
        <header className="header">
        <div className="container">
        <div className="wrapper">
            <button class="header__burger-btn" id="burger">
                <span></span><span></span><span></span>
            </button>
            <div className="menu__wrapper">
                <a href="#!">О нас</a>
                <a href="#!">Магазин</a>
                <a href="#!">Контакты</a>
            </div>
            <div className="menu__wrapper">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#!">О нас</a>
                    </li>
                    <li className="menu__item">
                        <a href="#!">Магазин</a>
                    </li>
                    <li className="menu__item">
                        <a href="#!">Контакты</a>
                    </li>
                </ul>
            </div>
            <div className="nav-menu__logo">
                <p className="menu-logo__title">
                    Рептомания
                </p>
                <p className="menu-logo__subtitle">
                    частный питомник экзотических животных
                </p>
            </div>
            <div className="menu__wrapper">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#!">Рекомендации</a>
                    </li>
                    <li className="menu__item">
                        <a href="#!">Отзывы</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </header>
    );
}
 
export default Header;
