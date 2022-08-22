import React from 'react';
import { useNavigate } from 'react-router-dom';
import OriginalNavBar from '../../Components/OriginalNavBar/OriginalNavBar';
import { animateScroll as scroll } from 'react-scroll';
import './Support.css';
import './SupportAdaptation.css';

const Support = () => {
  let navigator = useNavigate();
  return (
    <div className="page">
      <section className="sPage">
        <OriginalNavBar />
        <div className="welcomeText">
          <div className="text">
            <h1 className="texty">
              Найдем ответ <br></br> на любой вопрос
            </h1>
            <p className="sT">
              Вы тренер и заинтересовались данным проектом, но здесь нет Вашего вида <br></br>спорта
              или Вы хотите что-то предложить?<br></br>
              Напишите нам, подробно описав идеи, возможно, именно Ваш вид спорта будет добавлен
              одним из следующих.
            </p>
          </div>
        </div>
        <div className="buttonDiv">
          <div className="button" onClick={() => scroll.scrollToBottom()}>
            Контакты
          </div>
          <div className="button">Скоро</div>
        </div>
      </section>
      <section className="secondPage">
        <div className="holderOfBlocks">
          <div className="block">
            <div className="boxHolder">
              <div className="item">
                <button class="accordion">Когда будут добавлены новые виды спорта?</button>
                <section class="panel">
                  <p>
                    С ближайшим обновлением Вы можете ознакомиться в разделе "Скоро". В разделе
                    "Скоро" можно отслеживать грядущее обновление на нескольких этапах: предпоказ,
                    анонс изменений и нововведений, время релиза. Изначально время релиза может быть
                    обозначено некоторым месяцем.
                  </p>
                </section>
              </div>
              <div className="item">
                <button class="accordion">Как быстро можно получить ответ от поддержки?</button>
                <section class="panel">
                  <p>
                    При отправки письма на почту ответ можно получиьть в течение 3-12 часов в будние
                    дни и 8-24 часов в выходные дни <br />
                    <br />
                    При контакте через социальные сети время ожидания сильно уменьшено
                  </p>
                </section>
              </div>
              <div className="item">
                <button class="accordion">Что такое ролевая система?</button>
                <section class="panel">
                  <p>
                    На данный момент ролевая система представлена 2 ролями: тренер и игрок. Тренер
                    имеет некоторые возможности недоступные игрокам
                  </p>
                </section>
              </div>
              <div className="item">
                <button class="accordion">Может ли быть несколько команд с одним названием</button>
                <section class="panel">
                  <p>
                    Несколько команд могут иметь схожие или одинаковые названия. Есть возможность
                    получения галочки для команды, для этого необходимо связаться со службой
                    поддержки
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="boxHolder">
              <div className="item big">
                <button class="accordion big">Для чего нужны карточки?</button>
                <section class="panel lefty big">
                  <p>
                    Карточки содержат информацию о пользователе и аккаунте в удобном формате. Такие
                    параметры как вес рост и возраст отражаются на лицевой стороне оригинальной
                    карты. Некоторые из этих параметров могут меняться неограниченное количество
                    раз: рост и вес, а такой параметр как возраст может изменяться лишь единожды.{' '}
                    <br />
                    <br />
                    Обратная сторона содержит информацию об аккаунте и возможность сменить пароль.
                    При просмотре карты другого пользователя обратная сторона его карты не
                    показывается
                  </p>
                </section>
              </div>
              <div className="item big">
                <button class="accordion big">Как часто можно менять данные на карточке?</button>
                <section class="panel lefty big">
                  <p>
                    На лицевой стороне оригинальной карточки (карточке этого сезона) находится 3
                    поля, которые могут быть изменены. Поле с датой рождения может быть изменено
                    единожды. Поля с весом и ростом могут меняться неограниченное количество раз
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="boxHolder">
              <div className="item">
                <button class="accordion">Сколько времени дается на опрос?</button>
                <section class="panel">
                  <p>
                    Через 6 часов с момента отправки опроса игрокам опрос становится
                    недействительным и пройти его будет нельзя
                  </p>
                </section>
              </div>
              <div className="item">
                <button class="accordion">Что такое пользовательский вариант ответа?</button>
                <section class="panel">
                  <p>
                    Пользовательский вариант ответа на вопрос не предоставляет специальную
                    клавиатуру для ответа, а пользователю необходимо самому вводить слова или
                    небольшие предложения в качестве ответа на каждый вопрос
                  </p>
                </section>
              </div>
              <div className="item big">
                <button class="accordion big">Почему аккаунт может быть заблокирован?</button>
                <section class="panel lefty big">
                  <p>
                    Аккаунт может быть заблокирован в случае использоваения грубой, нецензурной
                    лексики в названии команды, имени, фамилии или отчестве. Злоупотреблении
                    некоторыми недоработками платформы. Блокирока может быть получена пользователем
                    на 1 час, 12 часов, 3 дня, 7 дней, 31 день, 183 дня и навсегда
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="boxHolder secondBlock">
              <div className="item">
                <button class="accordion">
                  Столкнулись с проблемой в работе некоторых элементов?
                </button>
                <section class="panel">
                  <p>
                    Сообщите службе поддержки о неполадке в работе какого-либо элемента на сайте и
                    получите награду за помощь в улучшении работы!
                  </p>
                </section>
              </div>
              <div className="item">
                <button class="accordion">Нашли проблему в дизайне?</button>
                <section class="panel">
                  <p>
                    Сообщите службе поддержки об убежавшем тексте или оборваной картинке и получите
                    за жто награду. Сделаем лучше вместе!
                  </p>
                </section>
              </div>
              <div className="item big">
                <button class="accordion big">Не получается зайти в "Кабинет" и "Команду"?</button>
                <section class="panel lefty big">
                  <p>
                    Вы не можете получить доступ к вашей команде или разделу "Кабинет" в случае
                    возникновения некоторых проблем с Вашим аккаунтом. Возможно, Ваш аккаунт
                    заблокирован. Напишите службе поддержки, чтобы узнать причину и возможно решить
                    проблему в более короткие сроки
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="boxHolder">
              <div className="item big">
                <button class="accordion big">Как сменить пароль и почту?</button>
                <section class="panel lefty big">
                  <p>
                    Сменить пароль можно перейдя в раздел "Кабинет", нажав "Сменить пароль" на
                    обратной стороне карты. <br /> <br />
                    На данный момент сменить почту можно исключительно связавшись со службой
                    поддержки по почте или иным образом. После чего Вам может быть выслана форма,
                    которую необходимо будет заполнить. Вам может быть отказано в смене почты
                  </p>
                </section>
              </div>
              <div className="item big">
                <button class="accordion big">Почему название команды сменилось?</button>
                <section class="panel lefty big">
                  <p>
                    Автоматическая смена названия команды произойдет, если название Вашей команды
                    содержит непристойную лексику, грубые слова, оскорбления других команд или
                    пользователей. <br />
                    <br />
                    Одновременно со сменой названия Вам на чту будет отправлено письмо с описанием
                    причин смены названия. Могут быть применены блокировки аккунта как на некоторое
                    время, так и на неограниченный срок
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="boxHolder">
              <div className="item superLong">
                <button class="accordion superLong">
                  Можно ли заменить пакет на новый до окончания действия старого?
                </button>
                <section class="panel superLefty superLong">
                  <p>
                    Для этого необходимо написать на почту поддержки, использую адрес электронной
                    почты ниже, указав в письме:<br></br>
                    <br></br>
                    1) Ваше ФИО;<br></br>
                    2) Id (можно найти на карте в разделе "Кабинет");<br></br>
                    3) Пакет, который Вы приобрели; <br></br>
                    4) Пакет, на который Вы хотите сменить. <br></br>
                    <br></br>
                    Прикрепите скриншот или фотографию чека с оплатой. Если Вы меняете пакет на
                    более дорогой, пользователь оплачивает разницу. Если стоимость пакета, который
                    Вы хотите приобрести, меньше, Вам вернется разница за исключением 1%
                    исключительно на карту, с которой производилась оплата. После отправки формы,
                    ожидайте ответа поддержки, которая удостоверится в истинности информации, и
                    сменит пакет, если все условия будут выполнены. Ваша форма должна быть
                    отправлена не более чем через 24 часа с момента предоставления Вам пакета. В
                    противном случае, мы будем вынуждены отказать в смене пакета
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="forthPage">
          <div className="gINfo">
            <p>
              Не нашли ответа на свой вопрос или же ответ был недостаточно полным? Напишите нам и
              сотрудники службы поддержки с удовольствием ответят на все Ваши вопросы{' '}
            </p>
          </div>
          <div className="bottom">
            <div className="info">
              <h2 className="infoText">Поддержка</h2>
              <h2 className="infoText s2">kivanosup@gmail.com</h2>
            </div>
            <div className="splitter"></div>
            <div className="kivano">
              <div className="kiv" href="#">
                Kivano
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
