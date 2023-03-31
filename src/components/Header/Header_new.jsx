import React, { useState } from 'react'
import {Link, link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'
import headerLine from '../../img/img_line.PNG';

import './Navbar.scss'


const Header_new = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                {/* <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a> */}
                <div className="nav-menu__logo">
					<p className="menu-logo__title">
						<Link to="#">Рептомания</Link>
					</p>
					{/* <div className="menu-logo__line">
					</div> */}
                    <img className="menu-logo__line" src={headerLine} alt="" />
					<p className="menu-logo__subtitle">
						частный питомник экзотических животных
					</p>
				</div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>О нас</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='shop' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Магазин</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Контакты</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='recommendations' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Рекомендации</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='reviews' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Отзывы</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header_new;