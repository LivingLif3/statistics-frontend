import { SmileFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import './TeamBar.css';

const TeamBar = ({ name, surname, id, img, usersState, setUsersState }) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
    if (!click) {
      // users.push(id);
      setUsersState([...usersState, id]);
    } else if (click) {
      // let index = users.indexOf(id);
      // users.splice(index, 1);
      setUsersState(usersState.filter((itemId) => itemId !== id));
    }
  };
  let avatar = img ? `http://localhost:8000/photos/${img}` : null;
  return (
    <div className={`result_tb ${click && 'activeBar'}`} onClick={onClick}>
      {avatar ? (
        <img src={avatar} alt="avatar" className="avatar_tb" />
      ) : (
        <SmileFilled style={{ fontSize: '80px' }} />
      )}

      <div className="info_s">
        <p className="lineOne_tb">
          <span className="surname_tb">{surname}</span>
          <span className="name_tb">{name}</span>
        </p>
        <p className="lineTwo_tb">
          <span className="lable_tb">Возраст:</span>
          <span className="age_tb">18</span>
        </p>
      </div>
      <div className="idContainer_tb">
        <h1 className="id_tb">#{id.slice(0, 8)}</h1>
      </div>
      <div className="buttons_tb"></div>
    </div>
  );
};

export default TeamBar;
