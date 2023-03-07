import { NavLink } from "react-router-dom"

import './style.scss';
import shop01 from '../../img/shop01.jpg';
import shop02 from '../../img/shop02.jpg';
import shop03 from '../../img/shop03.jpg';
import ShopPages from "../pages/ShopPages";

const Shop = () => {
    return (
        <section className="shop">
        <h2 className="shop-title block-title">— Магазин</h2>
        <div className="shop-cart">
            <div className="shop-cart_item">
                <h1>КОРМ</h1>
                <img
                    src={shop01}
                    alt="#" 
                />
            </div>
            <div className="shop-cart_item">
                <h1>ЖИВОТНЫЕ</h1>
                <img
                    src={shop02}
                    alt="#"
                />
            </div>
            <div className="shop-cart_item">
                <h1>ОБОРУДОВАНИЕ</h1>
                <img
                    src={shop03}
                    alt="#"
                />
            </div>
        </div>
        <button className="shop-btn">
            {/* <Link to='/ShopPages'>
                Перейти в магазин
            </Link> */}
            <NavLink to='/ShopPages'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Перейти в магазин</NavLink>
        </button>
    </section>
    );
}

 
export default Shop;