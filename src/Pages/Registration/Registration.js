import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { getUserData, setConfirmHash, setRegistrationSuccess } from '../../redux-store/UserReducer';
import { CHECK_EMAIL_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../../utils/consts';
import './Registration.css';
import './RegistrationAdoptation.css';

const Registration = ({
  getUserData,
  setConfirmHash,
  isAuth,
  registrationSuccess,
  setRegistrationSuccess,
}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigator = useNavigate();

  let onConfirm = async () => {
    await getUserData(name, surname, lastname, email, password);
    // isAuth && await setConfirmHash(hash)
    // navigator(CHECK_EMAIL_ROUTE + `/${hash}`)
  };

  if (isAuth) {
    navigator(MAIN_ROUTE);
  }

  if (registrationSuccess) {
    let hash = v4();
    setConfirmHash(hash);
    navigator(CHECK_EMAIL_ROUTE + `/${hash}`);
    setRegistrationSuccess(false);
  }

  return (
    <div className="Form_reg">
      <div className="centralHolder_reg">
        <div className="h1Holder_reg">
          <h1 className="H1_reg">Регистрация</h1>
        </div>
        <div className="Wrapper_reg">
          <div className="Signin_reg">
            <input
              type="text"
              className="Surname_reg"
              name="pass"
              placeholder="Фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="text"
              className="Name_reg"
              name="pass"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="Patronymic_reg"
              name="pass"
              placeholder="Отчество"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              className="User_reg"
              name="user"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="Pass_reg"
              name="pass"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={onConfirm}>
              &#xf0da;
            </button>

            <p>
              Есть аккаунт? <span onClick={() => navigator(LOGIN_ROUTE)}>Нажмите</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  registrationSuccess: state.userReducer.registrationSuccess,
});

export default connect(mapStateToProps, { getUserData, setConfirmHash, setRegistrationSuccess })(
  Registration,
);
