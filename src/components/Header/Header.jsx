import { useRef } from "react";
import { Link } from "react-router-dom"
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
					<Link to="/">Рептомания</Link>
                </p>
                <p className="menu-logo__subtitle">
                    частный питомник экзотических животных
                </p>
            </div>
			<nav ref={navRef}>
				<Link to="/#">О нас</Link>
				<Link to="/ShopPages">Магазин</Link>
                <Link to="/#">Контакты</Link>
				<Link to="/#">Рекомендации</Link>
				<Link to="/#">Отзывы</Link>
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

