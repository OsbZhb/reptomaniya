import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./style.scss";

import LogoVK from "../../img/logoVK.svg";

const Contact = () => {
    return (
        <section className="section-contact" id="contact">
        <h2 className="contact-title block-title"> — КОНТАКТЫ</h2>
        <div className="section-block-all">
            {/* <div className="section-contact-content"> */}
                <div className="section-maps">
                    <div className="maps-block" id="YMapsID">
                        <YMaps className="YandexMaps">
                        <Map
                            defaultState={{
                                center: [57.694016, 39.771836],
                                zoom: 15.4,
                                behaviors: ["default", "scrollZoom"],

                                title: "Железнодорожная станция"
                            }}
                            width="100%"
                            height="100%"
                            >
                            <Placemark defaultGeometry={[57.694016, 39.771840]} />
                        </Map>
                        </YMaps>  
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
                                    src={LogoVK} 
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