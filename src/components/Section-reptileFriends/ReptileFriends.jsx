import './style.scss';
import photoReptileFriends from '../../img/reptileFriends.jpg';

const ReptileFriends = () => {
    return (
        <section className="section-reptileFriends">
                <div className="reptileFriends_images">
                    <img 
                        src={photoReptileFriends}
                        alt="#"
                    />
                </div> 
            <div className="reptileFriends_text">
                <h2>Дружба – это когда можно ни с того ни с сего приехать к человеку и поселиться у него.</h2>
                <p>Самой первой рептилией обычно становится эублефар. Эублефары умеют моргать, подмигивать и даже строить глазки. Мало кто может устоять перед этим завораживающим умным взглядом. И всё это потому, что эублефары имеют подвижное веко, которое отсутствует у других гекконов.</p>
                <p>Эублефары умеют улыбаться. У них очень своеобразная мимика и при длительном общении вы начинаете понимать, когда эублефар доволен. Это легко читается по большой широкой улыбке на счастливой мордочке, к тому же они очень просты в содержании.</p>
            </div>
        </section>
    );
}
 
export default ReptileFriends;