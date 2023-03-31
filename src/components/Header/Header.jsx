// // import { useRef } from "react";
// // import { Link } from "react-router-dom";
// import React, { useState } from 'react'
// import { FaBars, FaTimes } from "react-icons/fa";
// import './style.scss';
// import headerLine from '../../img/img_line.PNG';
// import HeaderFixed from "./HeaderFixed";

// import {Link, link} from 'react-scroll'



// function Header() {
// 	// const navRef = useRef();

// 	// const showNavbar = () => {
// 	// 	navRef.current.classList.toggle("responsive_nav");
// 	// };


// 	const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const closeMenu = () => setClick(false)

// 	return (
// 		<header className="header">
// 			<div className="header-block">
// 				<HeaderFixed />
// 				<div className="nav-menu__logo">
// 					<p className="menu-logo__title">
// 						<Link to="#">Рептомания</Link>
// 					</p>
// 					<div className="menu-logo__line">
// 						<img src={headerLine} alt="" />
// 					</div>
// 					<p className="menu-logo__subtitle">
// 						частный питомник экзотических животных
// 					</p>
// 				</div>
// 				<nav className="navbar">
// 				<div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaTimes size={30} style={{ color: '#42AAFF' }} />)
//                         : (<FaBars size={30} style={{ color: '#42AAFF' }} />)}

//                 </div>
// 					<ul className={click ? "nav-menu active" : "nav-menu"}>
// 						<li className='nav-item'>
// 							<Link to="about" spy={true} smooth={true} offset={50} duration={500}>О нас</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link to="shop" spy={true} smooth={true} offset={50} duration={500}>Магазин</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Контакты</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link to="recommendations" spy={true} smooth={true} offset={50} duration={500}>Рекомендации</Link>
// 						</li>
// 						<li className='nav-item'>
// 							<Link to="reviews" spy={true} smooth={true} offset={50} duration={500}>Отзывы</Link>
// 						</li>
// 					</ul>

					
					
// 					{/* <button
// 						className="nav-btn nav-close-btn"
// 						onClick={showNavbar}>
// 						<FaTimes />
// 					</button> */}
// 				</nav>
// 				{/* <button className="nav-btn" onClick={showNavbar}>
// 				<FaBars />
// 				</button> */}
// 			</div>

			

// 		</header>
// 	);
// }

// export default Header;

