import './style.scss';
import smallFriends from '../../img/smallFriends.jpg';
import bg_img_2 from "../../img/background/03.png"

const SmallFriends = () => {
    return (
        <section className="section-smallFriends">
        <div className="smallFriends-blockOne">
            <h1 className="blockOne-title">Маленькое существо для самой большой дружбы</h1>
            <p className="blockOne-subtitle">У эублефаров нежная бархатистая кожа, особенно, на шее. Они совсем не склизкие, а наоборот, очень приятные на ощупь. Поэтому их очень приятно держать в руках. На теле у эублефаров присутствуют «пупырышки», что делает их кожу еще более интересной.
            </p>
            {/* <div className="line-block">
                <p className="line01">01</p>
                <div className="line"></div>
                <p className="line03">03</p>
            </div> */}
        </div>
        <div className="images_smallFriends">
            <img 
                src={smallFriends}
                alt="#" 
            />
        </div>
        {/* <div className="bg_img_2">
            <img 
                src={bg_img_2}
                alt="#"
            />
        </div> */}
    </section>
    );
}
 
export default SmallFriends;