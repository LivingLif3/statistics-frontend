import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import $api from '../../http';
import { getUsers, setUserData } from '../../redux-store/UserReducer';
import { MAIN_ROUTE, MY_TEAM_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import './Authorization.css';

const Authorization = ({ setUserData, isAuth, getUsers, users }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const refreshPassword = async () => {
    try {
      await $api.post('/refreshPassword', { email, password });
    } catch (e) {
      console.log(e);
    }
  };
  let navigator = useNavigate();

  const onLogin = () => {
    setUserData(email, password);
    getUsers();
  };

  if (isAuth && users) {
    navigator(MAIN_ROUTE);
  }

  return (
    <div className="suForm">
      <h1 className="suH1">Вход</h1>
      <div className="suWrapper">
        <div className="suSignin">
          <input
            type="text"
            className="suUser"
            name="user"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="suPass"
            name="pass"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={onLogin}>
            &#xf0da;
          </button>
          <p>
            Забыли пароль? <span>Нажмите</span>
          </p>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  users: state.userReducer.users,
});

export default connect(mapStateToProps, { setUserData, getUsers })(Authorization);
