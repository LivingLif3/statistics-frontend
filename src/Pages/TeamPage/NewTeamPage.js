import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { SolutionOutlined } from '@ant-design/icons';
import { TeamOutlined } from '@ant-design/icons';
import UserCardForTeam from '../../Components/UserCard/UserCardForTeam';
import './NewTeamPage.scss';
import './NewTeamPageAdoptation.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createTeam,
  deletePlayer,
  getTeam,
  getTeamForUser,
  getTeamTrainers,
} from '../../redux-store/TeamReducer';
import { MAIN_ROUTE } from '../../utils/consts';
import { getTeamPlayers } from '../../redux-store/QuizReducer';
import NoTeamCreated from '../../Components/NoTeamCreated/NoTeamCreated';
import Modal from '../../Components/Modal/Modal';

const NewTeamPage = ({
  createTeam,
  team,
  role,
  trainers,
  players,
  userTeam,
  getTeam,
  deletePlayer,
  getTeamPlayers,
  getTeamTrainers,
  getTeamForUser,
  teamId,
}) => {
  let navigator = useNavigate();
  let [modalActive, setModalActive] = useState(false);
  let [rotateDeck, setRotateDeck] = useState(false);
  let [deletedPlayerId, setDeletedPlayerId] = useState(null);
  useEffect(() => {
    // if (role === 'USER') {
    //   getTeamForUser();
    // } else {
    //   getTeam();
    // }
    getTeamForUser();

    if (!userTeam && role === 'USER') {
      navigator(MAIN_ROUTE);
    }
  }, []);
  useEffect(() => {
    console.log(team, 'team');
    if (team) {
      getTeamTrainers(team._id);
      getTeamPlayers(team._id);
    }
  }, [team]);
  let onDelete = (id) => {
    setModalActive(true);
    setDeletedPlayerId(id);
  };
  let onDeleteConfirm = () => {
    deletePlayer(team._id, deletedPlayerId);
    setModalActive(false);
  };
  return (
    <div className="page_nmtp">
      <NavBar role={role} />
      {!team && role !== 'USER' ? (
        <NoTeamCreated createTeam={createTeam} />
      ) : (
        <div className="body_nm">
          <div className="upperHolder">
            <div className="teamNameHolder">
              <span>{team && team.name.toUpperCase()}</span>
            </div>
          </div>
          <div className="dividerHolder_nmtp">
            <div className="divider_nmtp"></div>
          </div>
          <div className="playersDeckHolder">
            <div className="playersDeck">
              <div className={`playersDeckFront ${rotateDeck && 'rotateDeckFront'}`}>
                <div className="deckTop">
                  <div className="nameOfTheDeck">
                    <span>Дека Игроков</span>
                  </div>
                  <div className="buttonSwitcher" onClick={() => setRotateDeck(true)}>
                    <SolutionOutlined />
                  </div>
                </div>
                <div className="deckCardHolder">
                  <div className="wrapper_nmt">
                    <div className="container_nature">
                      {players
                        ? players.map((trainer) => (
                            <div className="card_test">
                              <UserCardForTeam
                                key={trainer._id}
                                id={trainer._id}
                                img={trainer.img}
                                name={trainer.name}
                                surname={trainer.surname}
                                role={trainer.role}
                                age={trainer.age}
                                height={trainer.height}
                                weight={trainer.weight}
                                deletePlayer={deletePlayer}
                                teamId={trainer.team}
                                myRole={role}
                                onDelete={onDelete}
                                mainTrainer={team.mainTrainer}
                              />
                            </div>
                          ))
                        : 'Пусто'}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`playersDeckBack ${rotateDeck && 'rotateDeckBack'}`}>
                <div className="deckTop">
                  <div className="nameOfTheDeck">
                    <span>Дека Тренеров</span>
                  </div>
                  <div className="buttonSwitcher" onClick={() => setRotateDeck(false)}>
                    <TeamOutlined />
                  </div>
                </div>
                <div className="deckCardHolder">
                  <div className="wrapper_nmt">
                    <div className="container_nature">
                      {trainers
                        ? trainers.map((trainer) => (
                            <div className="card_test">
                              <UserCardForTeam
                                key={trainer._id}
                                id={trainer._id}
                                img={trainer.img}
                                name={trainer.name}
                                surname={trainer.surname}
                                role={trainer.role}
                                age={trainer.age}
                                height={trainer.height}
                                weight={trainer.weight}
                                deletePlayer={deletePlayer}
                                teamId={team._id}
                                myRole={role}
                                onDelete={onDelete}
                                mainTrainer={team.mainTrainer}
                              />
                            </div>
                          ))
                        : 'Пусто'}
                      {/* <div className="card_test">
                      <UserCardForTeam />
                    </div>
                    <div className="card_test">
                      <UserCardForTeam />
                    </div>
                    <div className="card_test">
                      <UserCardForTeam />
                    </div>
                    <div className="card_test">
                      <UserCardForTeam />
                    </div>
                    <div className="card_test">
                      <UserCardForTeam />
                    </div>
                    <div className="card_test">
                      <UserCardForTeam />
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        <>
          <p className="modalText">
            Карточка будет удалена из Вашей команды. Действительно хотите удалить ее?
          </p>
          <div className="modalButtonHolder">
            <button
              className="modalButton"
              onClick={() => {
                setModalActive(false);
              }}>
              Отмена
            </button>
            <button className="modalButton" onClick={onDeleteConfirm}>
              Удалить
            </button>
          </div>
        </>
      </Modal>
    </div>
  );
};

let mapStateToProps = (state) => ({
  team: state.teamReducer.team,
  teamId: state.userReducer.team,
  role: state.userReducer.role,
  trainers: state.teamReducer.trainers,
  userTeam: state.userReducer.team,
  players: state.quizReducer.teamPlayers,
});

export default connect(mapStateToProps, {
  createTeam,
  deletePlayer,
  getTeam,
  getTeamPlayers,
  getTeamTrainers,
  getTeamForUser,
})(NewTeamPage);
