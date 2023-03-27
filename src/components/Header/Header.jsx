import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './style.scss';
import headerLine from '../../img/img_line.PNG';
import HeaderFixed from "./HeaderFixed";



function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};



	return (
		<header className="header">
			<div className="header-block">
				<HeaderFixed />
				<div className="nav-menu__logo">
					<p className="menu-logo__title">
						<Link to="">Рептомания</Link>
					</p>
					<div className="menu-logo__line">
						<img src={headerLine} alt="" />
					</div>
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
			</div>

			

		</header>
	);
}

export default Header;

