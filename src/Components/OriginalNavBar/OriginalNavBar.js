import React from 'react';
import './OriginalNavBar.css';
import './OriginalNavBarAdoptation.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CABINET_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  SOON_ROUTE,
  SUPPORT_ROUTE,
  TEAM_ROUTE,
} from '../../utils/consts';

const OriginalNavBar = ({ isAuth, team }) => {
  let navigator = useNavigate();
  return (
    <div className="header_onb">
      <div className="linkDiv_onb">
        <div className="nav_onb" onClick={() => navigator(MAIN_ROUTE)}>
          Главная
        </div>
        <div
          className="nav_onb"
          onClick={() => {
            team ? navigator(TEAM_ROUTE) : navigator(MAIN_ROUTE);
          }}>
          Команда
        </div>
        <div
          className="nav_onb"
          onClick={() => {
            isAuth ? navigator(CABINET_ROUTE) : navigator(REGISTRATION_ROUTE);
          }}>
          Кабинет
        </div>
        <div className="nav_onb" onClick={() => navigator(SHOP_ROUTE)}>
          Возможности
        </div>
        <div className="nav_onb" onClick={() => navigator(SUPPORT_ROUTE)}>
          Помощь
        </div>
        <div className="nav_onb" onClick={() => navigator(SOON_ROUTE)}>
          Скоро
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  team: state.userReducer.team,
});

export default connect(mapStateToProps, {})(OriginalNavBar);
