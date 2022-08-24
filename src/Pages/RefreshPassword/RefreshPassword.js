import React, { useState } from 'react';
import $api from '../../http';
import { useNavigate } from 'react-router-dom';
import './RefreshPassword.css';
import './RefreshPasswordAdoptation.css';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import ModalForRefreshPassword from './ModalForRefreshPassword/ModalForRefreshPassword';

const RefreshPassword = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [active, setActive] = useState(false);

  let navigator = useNavigate();

  const refreshPassword = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        await $api.post('/refreshPassword', { email, password }).then((response) => {
          if (response.status === 200) {
            setActive(true);
          }
        });
        setEmail('');
        setPassword('');
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="Form_ff">
      <div className="holder_ff">
        <div className="h1Holder_ff">
          <h1 className="H1_ff">Введите данные</h1>
        </div>
        <div className="Wrapper_ff">
          <div className="Signin_ff">
            <input
              type="text"
              className="User_ff"
              name="user"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="User_ff"
              name="user"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={refreshPassword}>
              &#xf0da;
            </button>
            <p>
              <span onClick={() => navigator(LOGIN_ROUTE)}>Вход</span> <br />
              <span onClick={() => navigator(REGISTRATION_ROUTE)}>Регистрация</span>
            </p>
          </div>
        </div>
      </div>
      <ModalForRefreshPassword active={active} setActive={setActive}>
        <p className="modalText">К Вам на почту пришло письмо с подтерждением. Подтвердите его!</p>
        <div className="modalButtonHolder">
          <button className="modalButton" onClick={() => setActive(false)}>
            Хорошо
          </button>
        </div>
      </ModalForRefreshPassword>
    </div>
  );
};

export default RefreshPassword;
