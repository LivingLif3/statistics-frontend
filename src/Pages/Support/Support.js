import React from "react"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../../utils/consts"
import "./Support.css"

const Support = () => {
    let navigator = useNavigate()
    return(
        <div className="page">
            <section className="sPage">
            <div class="header_inner">
                <div 
                class="Logo"
                onClick={() => navigator(MAIN_ROUTE)}>LoGo</div>
                
                <nav class="nav">
                    <div class="nav_link" href="#"> Домой</div>
                    <div class="nav_link" href="#"> Кабинет</div>
                    <div class="nav_link" href="#">Команда</div>
                    <div class="nav_link" href="#">Возможности</div>
                    <div class="nav_link" href="#">Скоро</div>
                </nav>
            </div>
            <div className="welcomeText">
                <div className="text">
                    <h1 className="texty">Найдем ответ <br></br> на любой вопрос</h1>
                    <p className="sT">
                Вы тренер и заинтересовались данным проектом, но здесь нет Вашего вида <br></br>спорта или Вы хотите что-то предложить?<br></br>
                    Напишите нам, подробно описам идеи, возможно, именно Ваш вид спорта будет добавлен одним из следующих.
                
                </p>
                </div>
            </div> 
            <div className="buttonDiv">
                    <a href="#bottom" className="button">Контакты</a>
                    <a href="#" className="button">Скоро</a>
            </div>
            </section>
            <section className="secondPage">
                <div className="discription">
                    <div className="dTextDiv">
                        <h1 className="dText">
                            Часто задаваемые вопросы
                        </h1>
                        <p className="dTextDisc">
                            Не нашли свой вопрос? <br></br>Напишите нам на почту. Ответ службы поддержки <br></br> 
                            поступит в течение 24 часов
                        </p>
                    </div>
                    <div className="itemHilder firstCol">
                        <div className="item">
                            <button class="accordion">Когда будут добавлены новые виды спорта?</button>
                            <section class="panel">
                                <p>С ближайшим обновлением Вы можете ознакомиться в разделе "Скоро". 
                                    В нем пожробно описано что именно будет в него входит и дата выхода</p>
                                </section>
                        </div>
                        <div className="item">
                            <button class="accordion">Можно ли распределить обязанности?</button>
                            <section class="panel">
                                <p>Тренером в меню настройки команды может быть назначен капитан, который 
                                    так же может получать результаты и оперировать ими.
                                    Лишь один человек с ролью "Игрок" может получать результаты и оперировать ими.  
                                    Любой тренер может получать результаты и оперировать ими </p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="test">
                <div className="itemHilder sec">
                    <div className="itemSecond">
                        <button class="accordion">Как часто я могу получать результаты?</button>
                        <div class="panelFirst">
                            <p>Результаты опроса могут быть получены за разные промежутки времени,
                                но гибкость промежутков может зависить от выбранного Вами пакета. С Ваши возможностями можно 
                                ознакомиться
                                в разделе "Возможности"</p>
                        </div>
                    </div>
                    <div className="itemSecond">
                        <button class="accordion">Лишние игроки в команде?</button>
                        <div class="panelFirst">
                            <p>Вы можете вручную удалить игрока, который не является членом команды. 
                                Если же таких игроков много,
                                Вы можете запросить фильтрацию клуба</p>
                        </div>
                    </div>
                    <div className="itemSecond last">
                        <button class="accordion last">Могу ли я сменить пакет?</button>
                        <section class="panelFirst panelBig">
                            <p> Для этого необходимо написать на почту поддержки, использую адрес электронной 
                                почты ниже, указав в письме:<br></br><br></br>
                        1) Ваше ФИО;<br></br>
                        2) Id (можно найти в личном кабинете);<br></br>
                        3) Пакет, который Вы приобрели; <br></br>
                        4) Пакет, на который Вы хотите сменить. <br></br><br></br>
                        Прикрепите скриншот или фотографию чека с оплатой. Если Вы меняете пакет на более дорогой, 
                        разницу необходимобудет доплатить. Если стоимость пакета, который Вы хотите приобрести, 
                        меньше, Вам вернется разница за исключением 1%. После отправки формы, ожидайте ответа
                        поддержки, которая удостоверится в истинности информации, и сменит пакет, если все 
                        условия будут выполнены. Ваша форма должна быть отправлена не более чем через 24 часа 
                        с момента предоставления пакета.
                        В противном случае, мы будем вынуждены отказать в смене пакета</p>
                        </section>
                    </div>
                </div>
                </div>
            </section>
            <section className="thirdPage">
                <div className="itemHilder lst">
                    <div className="itemThird lastFirst">
                        <button class="accordion lastFirst">Почему название команды сменилось?</button>
                        <div class="panelThird panelForth">
                            <p>Скорее всего Вы выбрали название команды, представителем которой Вы не являетесь.
                                В таком случае Вам на почту может быть отправлен запрос на подтверждение Вашей принадлежности
                                выбранной команде. В случае игнорирования запроса в течение времени указанного в нем или в 
                                случае, когда предоставленной Вами информации будет недостаточно, или же она не будет являться истинной, 
                                название Вашей команды будет изменено на случайное
                            </p>
                        </div>
                    </div>
                    <div className="itemThird lastFirst">
                        <button class="accordion lastFirst lastSecond">Не могу зайти в "кабинет" и "команду". Что делать?</button>
                        <div class="panelThird">
                            <p>Возможно проводится технническое обслуживание или тестирование обновления.Если в течение 24 часов проблема осталась, причиной может быть блокировка Вагшего аккаунта. Проверьте почту по электронному адресу, 
                                который использовался при регистрации аккаунта. В письме будет вся необходимая информация, включая причину блокировки,
                                сроки и адрес электронной почты поддержки на случай, если Вы уверены, что произошла ошибка. В таком
                                случае незамедлительно пишите в поддержку, после дополнительной проверки Ваш аккаунт будет разблокирован
                                если вина не будет доказана
                            </p>
                        </div>
                    </div>
                </div>
                <div className="forthPage">
                <div className="gINfo">
                    <p>При отправке письма на электронную почту службы поддержки старайтесь максимально описать суть проблемы или вопрос. От того как именно Вы зададите вопрос или поставите задачу будет зависеть время поиска решения и конечный результат. </p>
                </div>
                <div className="bottom">
                    <div className="info">
                            <h2 className="infoText">Поддержка</h2>
                            <h2 className="infoText s2">kivanosup@gmail.com</h2>
                    </div>
                    <div className="splitter"></div>
                    <div className="kivano">
                        <a className="kiv" href="#">Kivano</a>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Support