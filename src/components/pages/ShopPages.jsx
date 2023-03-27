import './style.scss';
import shopPages01 from '../../img/shopPages/01.png';
import shopPages02 from '../../img/shopPages/02.png';
import shopPages03 from '../../img/shopPages/03.png';

const ShopPages = () => {
    return (
        <section className="shopPages">
        <h2 className="shopPages-title block-title">— Корм (ЗАМОРОЖЕННЫЙ)</h2>
        <div className="shopPages-cart">
            <div className="shopPages-cart_item">
                <h1>Сверчок домовый</h1>
                <img
                    src={shopPages01}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
            <div className="shopPages-cart_item">
                <h1>Сверчок двупятнистый имаго</h1>
                <img
                    src={shopPages02}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
            <div className="shopPages-cart_item">
                <h1>Микс насекомых</h1>
                <img
                    src={shopPages03}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
        </div>
        <h2 className="shopPages-title block-title">— Животные</h2>
        <div className="shopPages-cart">
            <div className="shopPages-cart_item">
                <h1>Эублефары</h1>
                <img
                    src={shopPages01}
                    alt="#" 
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>

            </div>
            <div className="shopPages-cart_item">
                <h1>Бананоеды</h1>
                <img
                    src={shopPages02}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
            <div className="shopPages-cart_item">
                <h1>Змеи</h1>
                <img
                    src={shopPages03}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
        </div>
        <h2 className="shopPages-title block-title">— Оборудование</h2>
        <div className="shopPages-cart">
            <div className="shopPages-cart_item">
                <h1 className="cart_item_title">Термометр с выносным щупом</h1>
                <img
                    src={shopPages01}
                    alt="#" 
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
            <div className="shopPages-cart_item">
                <h1 className="cart_item_title">Коврик греющий</h1>
                <img
                    src={shopPages02}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
            <div className="shopPages-cart_item">
                <h1 className="cart_item_title">Укрытие пластиковое</h1>
                <img
                    src={shopPages03}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
            <div className="shopPages-cart_item">
                <h1 className="cart_item_title">Укрытие кокосовое натуральное</h1>
                <img
                    src={shopPages03}
                    alt="#"
                />
                <a  href="https://vk.com/im?media=&sel=-183811295">
                    <button className='shopPages-btn'>
                        Заказать
                    </button>
                </a>
            </div>
        </div>

    </section>
    );
}
 
export default ShopPages;