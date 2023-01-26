import './style.scss';
import logoVK from '../../img/logoVK.svg';

const Contact = () => {
    return (
        <section className="section-contact" >
        <h2 className="contact-title block-title">— КОНТАКТЫ</h2>
        <div className="section-block-all">
            <div className="section-contact-content">
                <div className="section-maps">
                    <div className="maps-block" id="YMapsID">
                        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afbc78479c9009cfc67ae439b180ae0be4aa63b6fba40d465b6db949a60a565bc&amp;lang=ru_RU&amp;scroll=true"></script>
                    </div>
                </div>
                    <div className="informations-blocks">
                        <div className="address-block">
                            <h2>Адрес</h2>
                            <p>Ленинградский просп., 64, Ярославль</p>
                            <div className="address-block__line"></div>
                        </div>
                        <div className="contact-block">
                            <h2>СВЯЗЬ</h2>
                            <p>WHATS APP, VIBER</p>
                            <p>+7 (961) 162-03-88</p>
                            <div className="logo1">
                                <a href="ссылка_на_главную">
                                <img 
                                    src={logoVK} 
                                    width="327"
                                    height="38"
                                    alt="#"
                                />
                                </a>
                            </div>
                            <div className="contact-block__line"></div>
                        </div>
                        <div className="workingHours">
                            <h2>Время работы</h2>
                            <p>пн-ПТ 10-19</p>
                            <p>СБ-ВС 10-18</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    );
}
 
export default Contact;