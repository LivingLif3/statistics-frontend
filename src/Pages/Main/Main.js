import React from 'react';
import './Main.css';
import './MainAdoptation.css';
import { InstagramFilled } from '@ant-design/icons';
import { TwitterOutlined } from '@ant-design/icons';
import NavBar from '../../Components/NavBar/NavBar';
import { connect } from 'react-redux';
import OriginalNavBar from '../../Components/OriginalNavBar/OriginalNavBar';

const Main = ({ role }) => {
  <script src="https://kit.fontawesome.com/23d07f4815.js" crossorigin="anonymous"></script>;
  return (
    <div className="page_ma">
      <section className="section_ma">
        <OriginalNavBar />
        <div className="body_ma">
          <div className="blockWithName_ma">
            <p className="fullCoverage_ma">
              <a className="kivano_ma" href="#">
                KIvano
              </a>
              <span className="sport_ma">sports</span>
            </p>
          </div>
        </div>
      </section>
      <section className="section_ma h-a_ma">
        <div className="lastDivText_ma">
          <span className="headerOfTheLsatDivText_ma">Вместе в большой спорт</span>
          <div className="textHolderOfTheLastDivText_ma">
            <div className="TextText_ma">
              Каждый сезон добавление нового вида спорта. Контролируй результат каждого игрока на
              каждой тренировке, анализируй и корректируй, облегчи себе задачу и улучши
              тренировочный процесс. Узнай о ближайшем сезонном обновлении в разделе{' '}
              <a className="link_ma" href="#">
                "Скоро"
              </a>
            </div>
          </div>
        </div>
        <div className="deviderHolder_ma">
          <div className="devider_ma"></div>
        </div>
        <div className="upperTextHplder_ma">
          <h1 className="tag_ma">Создай свою собственную карту</h1>
          <div className="textSectionHolder_ma m-l-10_ma">
            Создай свою собственную карту, с возможностью динамического редактирования отдельных
            полей. Карта поможет тренеру отслеживать показатели каждого игрока в удобном месте и в
            удобное время
          </div>
        </div>
        <div className="upperTextHplder_ma left_ma">
          <div className="holder_ma">
            <h1 className="tag_ma">Воссоздай свою собственную команду</h1>
            <div className="textSectionHolder_ma m-r-10_ma">
              Добавь в свою команду игроков и заполни тренерский штаб с системой ролей. Система
              ролей позволит дать возможность тренерскому штабу контролировать работу и состояние
              игроков
            </div>
          </div>
        </div>
        <div className="upperTextHplder_ma">
          <h1 className="tag_ma">Удобная система поиска</h1>
          <div className="textSectionHolder_ma m-l-10_ma">
            Система поиска позволит найти абсолютно любого пользователя и покажет основные
            параметры, указанные на его карте. При необходимости можно открыть карту пользователя
            прямо из меню поиска или сразу же добавить его в команду
          </div>
        </div>
        <div className="upperTextHplder_ma left_ma">
          <div className="holder_ma">
            <h1 className="tag_ma">
              Контролируй состояние <br></br>команды между тренировками
            </h1>
            <div className="textSectionHolder_ma m-r-10_ma">
              Создавай, настрайвай, отправляй опросы всем игрокам сразу, тренерскому штабу или вовсе
              каждому по отдельности. Настрой автоматическую отправку опросов команде и занимайся
              лишь сравнением результатов
            </div>
          </div>
        </div>
        <div className="upperTextHplder_ma">
          <h1 className="tag_ma">Используй удобные шаблоны</h1>
          <div className="textSectionHolder_ma m-l-10_ma">
            Каждый созданный опрос хранится в удобной форме с названием и описанием, которые задает
            создатель. Каждый шаблон может быть отредактирован и удален. Выбери абсолютно любой
            шаблон из своей коллекции и настрой автоматическую отправку. При необходимости
            автоматическую отправку можно остановить
          </div>
        </div>
        <div className="upperTextHplder_ma left_ma">
          <div className="holder_ma">
            <h1 className="tag_ma">Получай результаты в нужное время</h1>
            <div className="textSectionHolder_ma m-r-10_ma">
              Результаты могут быть получены как за один день, так и за некоторый промежуток
              времени, что позволит оценить состояние каждого игрока в отдельности и всей команды в
              целом в любое время в течение месяца
            </div>
          </div>
        </div>
        <div className="upperTextHplder_ma">
          <h1 className="tag_ma">... и в нужном виде</h1>
          <div className="textSectionHolder_ma m-l-10_ma">
            Алгоритмы высчитают средние показатели за указанные временные срезы, построят графики.
            Удобное и понятное отображение информации позволит с легкостью использовать данные для
            корректировки тренировочного процесса
          </div>
        </div>
        <div className="upperTextHplder_ma left_ma">
          <div className="holder_ma">
            <h1 className="tag_ma">Удобство прохождения опросов</h1>
            <div className="textSectionHolder_ma m-r-10_ma">
              Реализован максимально удобный интерфейс прохождения опросов с системой индикации
              появления новых доступных для проходления опросов
            </div>
          </div>
        </div>
      </section>
      <div className="footer_ma">
        <div className="kivanoDiv_ma">
          <a className="kivanoLink_ma" href="#">
            kivano
          </a>
        </div>
        <div className="social_ma">
          <span className="textOfSocial_ma">Узнавай обо всем первым</span>
          <div className="iconHolder_ma">
            <a className="linkToSocial" href="#">
              <InstagramFilled />
            </a>
            <a className="linkToSocial" href="#">
              <TwitterOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  role: state.userReducer.role,
});

export default connect(mapStateToProps, {})(Main);
