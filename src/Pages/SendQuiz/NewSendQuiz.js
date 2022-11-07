import React, { useEffect, useState } from 'react';
import TemplateForm from '../../Components/TemplateForm/TemplateForm';
// import QForm from './qForm';
// import Checkbox from '../teamComponents/stateForms/checkBox';
// import TeamBar from '../teamComponents/stateForms/teamBar';

import './SendQuiz.scss';
import './SendQuizAdoptation.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import { connect } from 'react-redux';
import $api from '../../http';
import { useNavigate } from 'react-router-dom';
import { CREATE_QUIZ_ROUTE, TEAM_ROUTE } from '../../utils/consts';
import { getAvailableInfo, getQuizTemplates, getTeamPlayers } from '../../redux-store/QuizReducer';
import SmallTeamBar from '../../Components/SmallTeamBar/SmallTeamBar';
import RepeatCheckBox from '../../Components/RepeatCheckbox/RepeatCheckBox';
// import SmallTeamBar from './smallTeamBar';

SwiperCore.use([Navigation, Autoplay]);

const NewSendQuiz = ({
  getQuizTemplates,
  quizTemplates,
  getTeamPlayers,
  teamPlayers,
  team,
  trainers,
  getAvailableInfo,
  availableInfo,
}) => {
  const users = [];
  const templates = [];
  const [usersState, setUsersState] = useState([]);
  const [templatesState, setTemplatesState] = useState([]);
  const [repeat, setRepeat] = useState(false);
  let repeatQuiz;
  useEffect(() => {
    getQuizTemplates();
    getTeamPlayers(team);
    getAvailableInfo();
  }, []);
  let onSendChosenPlayers = async () => {
    if (usersState.length === 0 || templatesState.length === 0) {
      return;
    }
    for (let i = 0; i < templatesState.length; i++) {
      await $api.post('/quiz', { quizId: templatesState[i], users: usersState, repeat });
    }
    setTemplatesState([]);
    setUsersState([]);
    setRepeat(false);
  };
  let onSendAllPlayers = async () => {
    if (templatesState.length === 0) {
      return;
    }
    for (let i = 0; i < templatesState.length; i++) {
      await $api.post('/quiz', {
        quizId: templatesState[i],
        users: teamPlayers.map((player) => player._id),
        repeat,
      });
    }
    setTemplatesState([]);
    setUsersState([]);
    setRepeat(false);
  };
  let onSendAllTrainers = async () => {
    console.log('here');
    if (templatesState.length === 0) {
      return;
    }
    for (let i = 0; i < templatesState.length; i++) {
      await $api.post('/quiz', {
        quizId: templatesState[i],
        users: trainers.trainers,
        repeat,
      });
    }
    setTemplatesState([]);
    setUsersState([]);
    setRepeat(false);
  };
  let navigator = useNavigate();
  if (!team) {
    navigator(TEAM_ROUTE);
  }
  return (
    <div className="page_nqs">
      <StateFormNavBar />
      <section className="body_nqs">
        <div className="mainHolder_nqs">
          <div className="firstPosition_nqs">
            <Swiper
              pagination={{
                type: 'progressbar',
              }}
              navigation={true}
              modules={[Pagination]}
              className="mySwiper_2">
              {quizTemplates &&
                quizTemplates.map((template) => (
                  <SwiperSlide className="ddddd">
                    <TemplateForm
                      key={template._id}
                      title={template.title}
                      id={template._id}
                      description={template.description}
                      templates={templates}
                      templatesState={templatesState}
                      setTemplatesState={setTemplatesState}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="rightSide_nqs">
            <div className="countHolder">
              <div>
                <div className="insideDiv">
                  <span className="taggy">Дневные: </span>
                  <span>{availableInfo && availableInfo.canSendDailyTemplates}</span>
                </div>
                <div className="insideDiv">
                  <span className="taggy">Обычные: </span>
                  <span>{availableInfo && availableInfo.canSendTemplates}</span>
                </div>
              </div>
            </div>
            <RepeatCheckBox repeatQuiz={repeatQuiz} repeat={repeat} setRepeat={setRepeat} />
            <div className="holderOfPlayersBars">
              {teamPlayers &&
                teamPlayers.map((player) => (
                  <SmallTeamBar
                    key={player._id}
                    users={users}
                    name={player.name}
                    id={player._id}
                    surname={player.surname}
                    usersState={usersState}
                    setUsersState={setUsersState}
                    img={player.img}
                  />
                ))}
            </div>
            <div className="buttonPlace">
              <div className="buttonInTheBottom" onClick={onSendChosenPlayers}>
                <span>Выбранным</span>
                <div className="liquid"></div>
              </div>
              <div className="buttonInTheBottom" onClick={onSendAllPlayers}>
                <span>Игрокам</span>
                <div className="liquid"></div>
              </div>
              <div className="buttonInTheBottom" onClick={onSendAllTrainers}>
                <span>Штабу</span>
                <div className="liquid"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="textBelowHolder">
          <span>
            Выберите любой шаблон из ранее созданных Вами или{' '}
            <span className="spanish" onClick={() => navigator(CREATE_QUIZ_ROUTE)}>
              Создайте новый
            </span>{' '}
            прямо сейчас. Количесво доступных отправок на день изменяется сразу после отправки
            некоторой формы, если Вы отменили цикл дневной формы сразу после отправки, то количество
            дневных отправок уменьшится все равно.
          </span>
        </div>
      </section>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizTemplates: state.quizReducer.quizTemplates,
  teamPlayers: state.quizReducer.teamPlayers,
  team: state.userReducer.team,
  trainers: state.teamReducer.team,
  availableInfo: state.quizReducer.availableObject,
});

export default connect(mapStateToProps, { getQuizTemplates, getTeamPlayers, getAvailableInfo })(
  NewSendQuiz,
);
