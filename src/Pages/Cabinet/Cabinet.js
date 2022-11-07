import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import { updateAvatar, updateData } from '../../redux-store/UserReducer';
import { DownloadOutlined } from '@ant-design/icons';
import './Cabinet.css';
import './CabinetAdaptation.css';
import UserCard from '../../Components/UserCard/UserCard';
import { APP_URL } from '../../http';
// import OriginalNavBar from "./originalNavLink";

const Cabinet = React.memo(({ updateData, img, updateAvatar, role }) => {
  const [date, setDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (image) {
      updateAvatar(image);
    }
  }, [image]);
  let avatar = img ? `${APP_URL}/photos/${img}` : null;
  return (
    <div className="page_Cab">
      <NavBar role={role} />
      <div className="mpage_Cab">
        <div className="items_Cab">
          <h1 className="bigText_Cab">
            Отредактируй <br />
            свою собственную карту
          </h1>
          <p className="smallText_Cab">
            Каждый пользователь платформы имеет свою карту, содержащую всю <br />
            необходимую информацию о пользователе. Лицевая сторона содержит <br /> ФИО, фото и такие
            параметры как возраст, вес, рост и id. Вы можете использовать <br></br>режим "Просмотр"
            при необходимости более детально осмотреть карту или сделать
            <br /> скриншот. Для этого просто нажмите на нее. Ваша карточка будет использована
            тренером для корректировки информации
          </p>
          <div className="holderOfButtons_Cab">
            <div className="input__wrapper">
              <input
                type="file"
                name="file"
                onChange={(e) => setImage(e.target.files[0])}
                id="input__file"
                className="input input__file"
                accept="image/*"
                multiple={false}
              />
              <label for="input__file" className="input__file-button">
                <span className="input__file-icon-wrapper">
                  <DownloadOutlined />
                </span>
                <span className="input__file-button-text">Выберите фото</span>
              </label>
            </div>
            <div className="container_Cab">
              <div className="itemOne_Cab">
                <h2 className="textInfo_Cab">
                  День
                  <br /> рождения
                </h2>
                <input
                  className="input2_Cab"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="itemOne_Cab">
                <h2 className="textInfo_Cab">
                  <br />
                  Вес (кг)
                </h2>
                <input
                  className="input2_Cab sec_Cab"
                  type="number"
                  min={0}
                  step="0.01"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="itemOne_Cab">
                <h2 className="textInfo_Cab">
                  <br />
                  Рост (см)
                </h2>
                <input
                  className="input2_Cab sec_Cab"
                  type="number"
                  min={0}
                  max={230}
                  step="1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <div className="buttonToSend_Cab">
              <button className="button_Cab" onClick={() => updateData(date, height, weight)}>
                Принять
              </button>
            </div>
          </div>
        </div>
        <UserCard avatar={avatar} />
      </div>
      <div className="footer_Cab">
        <a className="kivano_Cab" href="#">
          kivano
        </a>
      </div>
    </div>
  );
});

let mapStateToProps = (state) => ({
  age: state.userReducer.age,
  weight: state.userReducer.weight,
  height: state.userReducer.height,
  img: state.userReducer.img,
  role: state.userReducer.role,
});

export default connect(mapStateToProps, { updateData, updateAvatar })(Cabinet);
