import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE, TEAM_ROUTE, NEW_ROUTE, SUPPORT_ROUTE } from '../../utils/consts';
import './PlayersStateFormNavBar.css';

const PlayersStateFormNavBar = () => {
  let navigator = useNavigate();
  return (
    <div className="header_psfnb">
      <div className="linkDiv_psfnb">
        <div className="nav_psfnb" onClick={() => navigator(MAIN_ROUTE)}>
          Главная
        </div>
        <div className="nav_psfnb" onClick={() => navigator(TEAM_ROUTE)}>
          Команда
        </div>
        <div className="nav_psfnb" onClick={() => navigator(NEW_ROUTE)}>
          Новые
        </div>
        <div className="nav_psfnb" onClick={() => navigator(SUPPORT_ROUTE)}>
          Помощь
        </div>
      </div>
    </div>
  );
};

export default PlayersStateFormNavBar;
