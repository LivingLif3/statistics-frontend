import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MAIN_ROUTE,
  MY_TEAM_ROUTE,
  NEW_ROUTE,
  SEND_QUIZ_ROUTE,
  SUPPORT_ROUTE,
  TEAM_ROUTE,
} from '../../utils/consts';
import './NavBar.css';
import './NavBarAdoptation.css';

const NavBar = ({ role }) => {
  let navigator = useNavigate();
  return (
    <div className="header_nb">
      <div className="linkDiv_nb">
        <div className="nav_nb" onClick={() => navigator(MAIN_ROUTE)}>
          Главная
        </div>
        <div className="nav_nb" onClick={() => navigator(MY_TEAM_ROUTE)}>
          Поиск
        </div>
        <div className="nav_nb" onClick={() => navigator(TEAM_ROUTE)}>
          Команда
        </div>
        <div
          className="nav_nb"
          onClick={() => {
            role === 'TRAINER1' && navigator(SEND_QUIZ_ROUTE);
            role === 'USER' && navigator(NEW_ROUTE);
          }}>
          {role === 'TRAINER1' ? 'Мои опросы' : 'Новые'}
        </div>
        <div className="nav_nb" onClick={() => navigator(SUPPORT_ROUTE)}>
          Помощь
        </div>
      </div>
    </div>
  );
};

export default NavBar;
