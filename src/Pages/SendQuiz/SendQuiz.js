import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamBar from '../../Components/TeamBar/TeamBar';
import TemplateForm from '../../Components/TemplateForm/TemplateForm';
import { connect } from 'react-redux';
import './SendQuiz.css';
import './SendQuizAdoptation.css';
import { getQuizTemplates, getTeamPlayers } from '../../redux-store/QuizReducer';
import $api from '../../http';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import { TEAM_ROUTE } from '../../utils/consts';
import RepeatCheckBox from '../../Components/RepeatCheckbox/RepeatCheckBox';

const SendQuiz = ({
  getQuizTemplates,
  quizTemplates,
  getTeamPlayers,
  teamPlayers,
  team,
  trainers,
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
  }, []);
  let onSendChosenPlayers = async () => {
    // if (usersState.length === 0 || templatesState.length === 0) {
    //   return;
    // }
    for (let i = 0; i < templatesState.length; i++) {
      await $api.post('/quiz', { quizId: templatesState[i], users: usersState, repeat });
    }
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
  };
  let onSendAllTrainers = async () => {
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
  };
  let navigator = useNavigate();
  if (!team) {
    navigator(TEAM_ROUTE);
  }
  return (
    <div className="page_qc">
      <StateFormNavBar />
      <div className="body_qc">
        <div className="leftSide_qc">
          <div className="collection_qc">
            <div className="collectionHeader_qc">
              <span className="collectionHeaderTex_qc">Выберите опросы из коллекции</span>
            </div>
            <div className="collectionBody_qc">
              {quizTemplates &&
                quizTemplates.map((template) => (
                  <TemplateForm
                    key={template._id}
                    title={template.title}
                    id={template._id}
                    description={template.description}
                    templates={templates}
                    templatesState={templatesState}
                    setTemplatesState={setTemplatesState}
                  />
                ))}
            </div>
            <RepeatCheckBox repeatQuiz={repeatQuiz} repeat={repeat} setRepeat={setRepeat} />
          </div>
        </div>
        <div className="hiddenDeviderHolder_qc">
          <div className="hiddenDevider_qc"></div>
        </div>
        <div className="rightSide_qc">
          <div className="playersBank_qc">
            <div className="header_qc">
              <span className="headerText_qc">Кому отправить?</span>
            </div>
            <div className="pBody_qc">
              {teamPlayers &&
                teamPlayers.map((player) => (
                  <TeamBar
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
            <div className="footer_qc">
              <button className="button_qc" onClick={onSendChosenPlayers}>
                <span className="buttonText_qc">Выбранным</span>
              </button>
              <button className="button_qc" onClick={onSendAllPlayers}>
                <span className="buttonText_qc">Всем игрокам</span>
              </button>
              <button className="button_qc" onClick={onSendAllTrainers}>
                <span className="buttonText_qc">Всем тренерам</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizTemplates: state.quizReducer.quizTemplates,
  teamPlayers: state.quizReducer.teamPlayers,
  team: state.userReducer.team,
  trainers: state.teamReducer.team,
});

export default connect(mapStateToProps, { getQuizTemplates, getTeamPlayers })(SendQuiz);
