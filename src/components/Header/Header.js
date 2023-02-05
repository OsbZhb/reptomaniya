import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './style.scss';

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="nav-menu__logo">
                <p className="menu-logo__title">
                    Рептомания
                </p>
                <p className="menu-logo__subtitle">
                    частный питомник экзотических животных
                </p>
            </div>
			<nav ref={navRef}>
				<a href="/#">О нас</a>
				<a href="/#">Магазин</a>
                <a href="/#">Контакты</a>
				<a href="/#">Рекомендации</a>
				<a href="/#">Отзывы</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;

