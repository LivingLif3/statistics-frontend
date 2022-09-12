import React, { useRef, useState } from 'react';
import './Soon.css';
import OriginalNavBar from '../../Components/OriginalNavBar/OriginalNavBar';
import football from '../../assets/football.png';
import footballField from '../../assets/footballField.jpg';
import footballField1 from '../../assets/footballField1.jpg';
import footballField2 from '../../assets/footballField2.jpg';
import footballField3 from '../../assets/footballField3.jpg';
import footballField4 from '../../assets/footballField4.jpg';
import playGround from '../../assets/playGround.jpg';

import { FormOutlined, IdcardOutlined, ToolOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { ContainerOutlined } from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons';
import { ClearOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Autoplay]);

const Soon = () => {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <div
          style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <b>Текст с i</b>
        </div>
      </SwiperSlide>,
    );
  }
  return (
    <div className="page_s1">
      <OriginalNavBar />
      <section className="section_s1 noPadding_s1">
        <div className="firstPage_s1">
          <img className="picturePlace_s1" src={footballField3} />
          <div className="textField_s1">
            <span className="date_s1">January 2023</span>
            <span className="seasonPoint_s1">season One</span>

            <div className="nameOfTheSeasonHolder_s1">
              <span className="prefix_s1">The</span>
              <span className="namePartOne_s1">Go</span>
              <div className="namePartsHolder_s1">
                <span className="namePartTwo_s1">lden</span>
                <span className="namePartThree_s1">al</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1">
        <div className="textHolder_s1">
          <div className="blockWithName_s1">
            <p className="fullCoverage_s1">
              <a className="kivano_s1" href="#">
                KIvano
              </a>
              <span className="sport_s1">sports</span>
            </p>
          </div>
        </div>
        <div className="newSeasonShortInfo_s1">
          <div className="line_s1">
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <PlusOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Вид спорта</span>
            </div>
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <IdcardOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Дизайн карт</span>
            </div>
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <ContainerOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Новые услуги</span>
            </div>
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <FormOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Контроль прогресса</span>
            </div>
          </div>
          <div className="line_s1">
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <CalendarOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Календарь событий</span>
            </div>
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <ClearOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Командные темы</span>
            </div>
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <HeartOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Доверительная система</span>
            </div>
            <div className="item_s1">
              <div className="iconHolder_s1">
                <a href="#" className="sender_s1">
                  <ToolOutlined />
                </a>
              </div>
              <span className="textOfAnIcon_s1">Прочие изменения</span>
            </div>
          </div>
        </div>
        <div className="ballSpace_s1">
          <img className="ball_s1" src={football} />
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <PlusOutlined />
          </span>
          <div className="divider_s1"></div>
          <span className="sectionName_s1">Новый вид спорта</span>
        </div>
        <div className="newSportNameHolder_s1">
          <span className="newSportName_s1">Футбол</span>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Фиксируйте как личные, так и командные результаты своей команды в любое время и в любом
            месте. Ни один результат или движение не останется без внимания с системой контроля
            прогресса. Вся необходимая информация находится в быстром и удобном доступе для
            тренерского штаба. Алгоритмы сами посчитают результаты за нужный промежуток времени и
            предоставят отчет по тренировкам или играм в виде понятных графиков. <br />
            Фиксируйте результат дома, на поле, в зале; контролируйте весь тренировочный процесс в
            одном месте и достигайте новых вершин!
          </p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <IdcardOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Новый дизайн карты</span>
        </div>
        <div className="newSportNameHolder_s1">
          <span className="newSportName_s1">Футбол</span>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Фиксируйте как личные, так и командные результаты своей команды в любое время и в любом
            месте. Ни один результат или движение не останется без внимания с системой контроля
            прогресса. Вся необходимая информация находится в быстром и удобном доступе для
            тренерского штаба. Алгоритмы сами посчитают результаты за нужный промежуток времени и
            предоставят отчет по тренировкам или играм в виде понятных графиков. <br />
            Фиксируйте результат дома, на поле, в зале; контролируйте весь тренировочный процесс в
            одном месте и достигайте новых вершин!
          </p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <ContainerOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Новые услуги</span>
        </div>
        <div className="newSportNameHolder_s1">
          <span className="newSportName_s1">Футбол</span>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Фиксируйте как личные, так и командные результаты своей команды в любое время и в любом
            месте. Ни один результат или движение не останется без внимания с системой контроля
            прогресса. Вся необходимая информация находится в быстром и удобном доступе для
            тренерского штаба. Алгоритмы сами посчитают результаты за нужный промежуток времени и
            предоставят отчет по тренировкам или играм в виде понятных графиков. <br />
            Фиксируйте результат дома, на поле, в зале; контролируйте весь тренировочный процесс в
            одном месте и достигайте новых вершин!
          </p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <FormOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Система контроля прогресса</span>
        </div>
        <div className="photoOfTheFieldHolder_s1">
          <img className="photoOfTheField_s1" src={playGround}></img>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Формируйте стартовые составы, планируйте игру, сохраняйте варианты в "Пре-сеты" для
            быстрого доступа и показа во время планерки. Полностью контролируйте процесс тренировки,
            фиксируя показатели игроков для последующего автоматического анализа.
          </p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <CalendarOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Календарь событий</span>
        </div>
        <div className="photoOfTheFieldHolder_s1">
          <img className="photoOfTheField_s1" src={playGround}></img>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Формируйте стартовые составы, планируйте игру, сохраняйте варианты в "Пре-сеты" для
            быстрого доступа и показа во время планерки. Полностью контролируйте процесс тренировки,
            фиксируя показатели игроков для последующего автоматического анализа.
          </p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <ClearOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Командные темы</span>
        </div>
        <div className="holderTwo_s1">
          <div className="searcher_s1">
            <div class="container_s1">
              <input placeholder="Поиск..." class="js-search_s1 one_s1" type="text" />
              <i class="fa fa-search_s1"></i>
            </div>
          </div>
          <div className="searcher_s1">
            <div class="container_s1">
              <input placeholder="Поиск..." class="js-search_s1 two_s1" type="text" />
              <i class="fa fa-search_s1"></i>
            </div>
          </div>
          <div className="searcher_s1">
            <div class="container_s1">
              <input placeholder="Поиск..." class="js-search_s1 three_s1" type="text" />
              <i class="fa fa-search_s1"></i>
            </div>
          </div>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Измените цветовую палитру отдельных элементов или всей платформы у себя либо у всей
            команды. Для этого необходимо лишь создать командную тему
          </p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <HeartOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Доверительная система</span>
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">
            Доверительная система расчитана на поддержку пользователей в необходимое время. На
            данный момент система подразумевает начисление дополнительных дней сверху срока
            купленного абонемента если это необходимо пользователю, купившему пакет услуг.
            Доверительная система будет доступна тем пользователям, которые имеют заполненный
            календарь событий с весомыми событиями, запланированными на дни после окончания действия
            купленного пакета. Истинность указанных событий может проверяться службой поддержки, и
            при подтверждении могут быть начислены дополнительные бесплатные дни к сроку действия
            текущего пакета (до 15 дней). При невозможности доказательства истинности события
            (неофициальный матч и другое) пользователю может быть отказано в начисление
            дополнительных дней к сроку действия текущего пакета. При доказательстве использования
            пользователем ложной информаци с попыткой использования доверительной системы,
            пользователем будет получен отказ и могут быть получены иные наказания вплоть до
            блокировки аккуунта или команды.
          </p>
        </div>
        <div className="splitterHolder_s1">
          <div className="splitter_s1" />
        </div>
        <div className="textOfThePointHolder_s1">
          <p className="textOfThePoint_s1">Мы помогаем тем, кому доверяем.</p>
        </div>
      </section>
      <section className="section_s1 sectionPadding_s1 autoHeight_s1">
        <div className="sectionNameHolder_s1">
          <span className="sectionIcon_s1">
            <ToolOutlined />
          </span>
          <div className="divider_s1 marginLeft_s1"></div>
          <span className="sectionName_s1">Прочие изменения</span>
        </div>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          autoplay={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Soon;
