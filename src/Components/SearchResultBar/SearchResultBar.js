import React, { useState } from 'react';
import './SearchResultBar.css';
import Modal from '../Modal/Modal';
import { SmileFilled } from '@ant-design/icons';
import { APP_URL } from '../../http';
import UserCardForTeam from '../UserCard/UserCardForTeam';
import ModalWithCard from '../../Pages/MyTeam/ModalWithCard/ModalWithCard';

const SearchResultBar = ({
  img,
  name,
  surname,
  age,
  id,
  pushPlayer,
  pushTrainer,
  teamId,
  role,
  height,
  weight,
}) => {
  let [active, setActive] = useState(false);
  let [activeCard, setActiveCard] = useState(false);
  let onPushPlayer = () => {
    setActive(false);
    pushPlayer(id, teamId);
  };
  let onPushTrainer = () => {
    setActive(false);
    pushTrainer(id, teamId);
  };
  let avatar = img ? `${APP_URL}/photos/${img}` : null;
  return (
    <div className="result_s">
      {avatar ? (
        <img src={avatar} alt="avatar" className="avatar_s" />
      ) : (
        <SmileFilled style={{ fontSize: '80px' }} />
      )}
      <div className="info_s">
        <p className="lineOne_s">
          <span className="surname_s">{surname}</span>
          <span className="name_s">{name}</span>
        </p>
        <p className="lineTwo_s">
          <span className="lable_s">Возраст:</span>
          <span className="age_s">{age ? age : 'не указан'}</span>
        </p>
      </div>
      <div className="idContainer_s">
        <h1 className="id_s">#{id.slice(0, 8)}...</h1>
      </div>
      <div className="buttons_s">
        <button className="button_s" onClick={() => setActiveCard(true)}>
          Карта
        </button>
        <button className="button_s" onClick={() => setActive(true)}>
          {/* {pushPlayer(id, teamId)} */}В команду
        </button>
      </div>
      <Modal active={active} setActive={setActive}>
        <p className="modalText" style={{ color: 'black' }}>
          Добавить в команду в качестве тренера или игрока?
        </p>
        <div className="modalButtonHolder modalChoice">
          <button className="modalButton" onClick={onPushTrainer}>
            Тренер
          </button>
          <button className="modalButton" onClick={onPushPlayer}>
            Игрок
          </button>
        </div>
      </Modal>
      <ModalWithCard active={activeCard} setActive={setActiveCard}>
        <UserCardForTeam
          key={id}
          id={id}
          img={img}
          name={name}
          surname={surname}
          role={role}
          age={age}
          height={height}
          weight={weight}
        />
      </ModalWithCard>
    </div>
  );
};

export default SearchResultBar;
