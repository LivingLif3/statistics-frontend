import React from "react"
import { useNavigate } from "react-router-dom"
import MainNavLink from "../../Components/MainNavLink/MainNavLink"
import { CABINET_ROUTE, CREATE_QUIZ_ROUTE, MAIN_ROUTE, TEAM_ROUTE } from "../../utils/consts"
import "./Shop.css"

const Shop = () =>{
    let navigator = useNavigate()
    return(
        <div className="page_SH">
            <section className="page1_SH">
                <MainNavLink />
                <div className="mPage_SH">
                   <div className="line_SH p1_SH">
                        <div className="texterDiv_SH">
                            <h1 className="texter_SH">
                               Наборы услуг
                            </h1>
                            <p className="texting_SH">
                                Количество наборов и услуги в них могут<br></br> меняться с выходом обновления
                            </p>
                        </div>
                        <div className="texterDiv_SH ld_SH">
                            
                            <p className="texting_SH l_SH">
                                Не знаете точно какой именно набор Вам нужен? <br></br> Напишите нам и Вам помогут определиться
                            </p>
                        </div>
                   </div>
                   <div className="Ddivider_SH"></div> 
                   <div className="box_SH">
                        <div className="chest_SH">
                            <div className="head_SH">
                                <div className="headText_SH">
                                    <h2 className="packName_SH">
                                        Mini
                                    </h2>
                                    <p className="price_SH">
                                        9 BYN <br></br><span className="month_SH">в месяц</span>
                                    </p>
                                </div>
                            </div>
                            <div className="Body_SH f_SH">
                                <div className="ulDiv_SH">
                                <ul className="pointsOfPackage_SH">
                                    <li>sdfasf sdfgsdfdfd</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                </ul>
                                </div>
                            </div>
                            <div className="foot_SH">
                                <button className="purchase_SH f_SH fh_SH">
                                    Купить
                                </button>
                            </div>
                        </div>
                        <div className="chest_SH">
                            <div className="head_SH">
                                <div className="headText_SH">
                                    <h2 className="packName_SH">
                                        Standart
                                    </h2>
                                    <p className="price_SH">
                                        99 BYN <br></br><span className="month_SH">в месяц</span>
                                    </p>
                                </div>
                            </div>
                            <div className="Body_SH s_SH">
                                <div className="ulDiv_SH">
                                <ul className="pointsOfPackage_SH">
                                    <li>sdfasf sdfgsdfdfd</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                </ul>
                                </div>
                            </div>
                            <div className="foot_SH">
                                <button className="purchase_SH s_SH sh_SH">
                                    Купить
                                </button>
                            </div>
                        </div>
                        <div className="chest_SH">
                            <div className="head_SH">
                                <div className="headText_SH">
                                    <h2 className="packName_SH">
                                        Pro
                                    </h2>
                                    <p className="price_SH">
                                        999 BYN <br></br><span className="month_SH">в месяц</span>
                                    </p>
                                </div>
                            </div>
                            <div className="Body_SH th_SH">
                                <div className="ulDiv_SH">
                                <ul className="pointsOfPackage_SH">
                                    <li>sdfasf sdfgsdfdfd</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                </ul>
                                </div>
                            </div>
                            <div className="foot_SH">
                                <button className="purchase_SH th_SH thh_SH">
                                    Купить
                                </button>
                            </div>
                        </div>
                        <div className="chest_SH">
                            <div className="head_SH">
                                <div className="headText_SH">
                                    <h2 className="packName_SH">
                                        Ultimate
                                    </h2>
                                    <p className="price_SH">
                                        9999 BYN <br></br><span className="month_SH">в месяц</span>
                                    </p>
                                </div>
                            </div>
                            <div className="Body_SH fo_SH">
                                <div className="ulDiv_SH">
                                <ul className="pointsOfPackage_SH">
                                    <li>sdfasf sdfgsdfdfd</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                    <li>sdfasf</li>
                                </ul>
                                </div>
                            </div>
                            <div className="foot_SH">
                                <button className="purchase_SH fo_SH foh_SH">
                                    Купить
                                </button>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default Shop;
