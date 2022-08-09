import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  COLLECTION_ROUTE,
  CREATE_QUIZ_ROUTE,
  SEND_QUIZ_ROUTE,
  SUPPORT_ROUTE,
  TEAM_ROUTE,
  NEW_ROUTE,
  RESULTS_ROUTE,
} from '../../utils/consts';
import './StateFormNavBar.css';

const StateFormNavBar = () => {
  let navigator = useNavigate();
  return (
    <div className="header_sfnb">
      <div className="linkDiv_sfnb">
        <div className="nav_sfnb" onClick={() => navigator(TEAM_ROUTE)}>
          Команда
        </div>
        <div className="nav_sfnb" onClick={() => navigator(CREATE_QUIZ_ROUTE)}>
          Мастерская
        </div>
        <div className="nav_sfnb" onClick={() => navigator(COLLECTION_ROUTE)}>
          Коллекция
        </div>
        <div className="nav_sfnb" onClick={() => navigator(SEND_QUIZ_ROUTE)}>
          Отправить
        </div>
        <div className="nav_sfnb" onClick={() => navigator(RESULTS_ROUTE)}>
          Результаты
        </div>
        <div className="nav_sfnb" onClick={() => navigator(NEW_ROUTE)}>
          Новые
        </div>
        <div className="nav_sfnb" onClick={() => navigator(SUPPORT_ROUTE)}>
          Помощь
        </div>
      </div>
    </div>
  );
};

export default StateFormNavBar;
