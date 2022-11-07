import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modal/Modal';
import NavBar from '../../Components/NavBar/NavBar';
import UserCardForTeam from '../../Components/UserCard/UserCardForTeam';
import { getTeamPlayers } from '../../redux-store/QuizReducer';
import { createTeam, deletePlayer, getTeam, getTeamTrainers } from '../../redux-store/TeamReducer';
import { checkAuth } from '../../redux-store/UserReducer';
import { MAIN_ROUTE } from '../../utils/consts';
import './TeamPage.css';
import './TeamPageAdoptation.css';

const TeamPage = ({
  createTeam,
  getTeam,
  team,
  checkAuth,
  role,
  getTeamTrainers,
  getTeamPlayers,
  trainers,
  players,
  userTeam,
  deletePlayer,
}) => {
  let navigator = useNavigate();
  useEffect(() => {
    getTeam();
    if (team) {
      setValue(team.name);
    }
    if (!userTeam && role === 'USER') {
      navigator(MAIN_ROUTE);
    }
  }, []);
  useEffect(() => {
    if (team) {
      getTeamTrainers(team._id);
      getTeamPlayers(team._id);
    }
  }, [team]);
  const [ModalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('');
  const [nameTeam, setNameTeam] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedPlayerId, setDeletedPlayerId] = useState(null);
  let onBlur = async () => {
    setNameTeam(true);
    setModalActive(true);
  };
  let onCancel = () => {
    setNameTeam(false);
    setModalActive(false);
  };
  let onUnBlur = async () => {
    setNameTeam(false);
    setModalActive(false);
    await createTeam(value);
    checkAuth();
    setDisabled(true);
  };
  let onDelete = (id) => {
    setDeleteModal(true);
    setModalActive(true);
    setDeletedPlayerId(id);
  };
  let onDeleteConfirm = () => {
    deletePlayer(team._id, deletedPlayerId);
    setModalActive(false);
    setDeleteModal(false);
  };
  return (
    <div className="page_mt">
      <NavBar role={role} />
      <div className="body_mt">
        <div className="firstGroupOfBloks_mt">
          <div className="teaName_mt">
            {team ? (
              <input
                className="input_mt"
                type="text"
                placeholder="Название команды"
                spellCheck="false"
                value={team.name}
                disabled={team && (team.name.length > 0 ? true : false)} //disabled={true} (true)
              />
            ) : (
              <input
                className="input_mt"
                type="text"
                placeholder="Название команды"
                spellCheck="false"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
                disabled={disabled}
              />
            )}
          </div>
          <div className="counterDiv_mt">
            <h3 className="counter_mt">
              Команда:{' '}
              <span className="number_mt">
                {team ? team.players.length + team.trainers.length : '0'}
              </span>
            </h3>
          </div>
        </div>
        <div className="secondGroupOfBlocks_mt">
          <h2 className="textOfTheSecondGroup_mt">Тренерский состав</h2>
          <div style={{ display: 'flex', marginTop: '30px' }}>
            {trainers
              ? trainers.map((trainer) => (
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
                  />
                ))
              : 'Пусто'}
          </div>
        </div>
        <div className="secondGroupOfBlocks_mt">
          <h2 className="textOfTheSecondGroup_mt">Игроки</h2>
          <div className="playerHolder_mt">
            {players
              ? players.map((trainer) => (
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
                  />
                ))
              : 'Пусто'}
            {/* <CardInCollection/>
                        <CardInCollection/>
                        <CardInCollection/>
                        <CardInCollection/> */}
          </div>
        </div>
      </div>
      <Modal
        active={ModalActive}
        setActive={setModalActive}
        setDeleteModal={setDeleteModal}
        setNameTeam={setNameTeam}>
        {deleteModal && (
          <>
            <p className="modalText">
              Карточка будет удалена из Вашей команды. Действительно хотите удалить ее?
            </p>
            <div className="modalButtonHolder">
              <button
                className="modalButton"
                onClick={() => {
                  setModalActive(false);
                  setDeleteModal(false);
                }}>
                Отмена
              </button>
              <button className="modalButton" onClick={onDeleteConfirm}>
                Удалить
              </button>
            </div>
          </>
        )}
        {nameTeam && (
          <>
            <p className="modalText">
              Сменить название команды будет невозможно. Служба поддержки может изменить название на
              случайное. Оставить название?
            </p>
            <div className="modalButtonHolder">
              <button className="modalButton" onClick={onCancel}>
                Отмена
              </button>
              <button className="modalButton" onClick={onUnBlur}>
                Да
              </button>
            </div>{' '}
          </>
        )}
        {/* <p className="modalText">
                    Этот пользователь уже присоединился к одной из команд
               </p>
               <div className="modalButtonHolder">
                    <button className="modalButton">
                        Понял
                    </button>
               </div> */}
      </Modal>
    </div>
  );
};

let mapStateToProps = (state) => ({
  team: state.teamReducer.team,
  role: state.userReducer.role,
  trainers: state.teamReducer.trainers,
  players: state.quizReducer.teamPlayers,
  role: state.userReducer.role,
  userTeam: state.userReducer.team,
});

export default connect(mapStateToProps, {
  createTeam,
  getTeam,
  checkAuth,
  getTeamTrainers,
  getTeamPlayers,
  deletePlayer,
})(TeamPage);
