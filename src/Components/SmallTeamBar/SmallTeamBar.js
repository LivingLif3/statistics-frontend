import { SmileFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { APP_URL } from '../../http';
import './SmallTeamBar.scss';
import './SmallTeamBarAdoptation.scss';

const SmallTeamBar = React.memo(({ name, surname, id, img, usersState, setUsersState }) => {
  console.log('test smallBar');
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);
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
  useEffect(() => {
    if (usersState.indexOf(id) !== -1) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [usersState.length]);
  let avatar = img ? `${APP_URL}/photos/${img}` : null;
  return (
    <div className={`result_stb ${active && 'activeSmallBar'}`} onClick={onClick}>
      {avatar ? (
        <img src={avatar} alt="avatar" className="avatar_stb" />
      ) : (
        <SmileFilled className="avatar_stb" />
      )}
      <div className="info_ss">
        <p className="lineOne_stb">
          <span className="surname_stb">{surname}</span>
          <span className="name_stb">{name}</span>
        </p>
        <p className="lineTwo_stb">
          <span className="age_stb">Игрок</span>
        </p>
      </div>
    </div>
  );
});

export default SmallTeamBar;
