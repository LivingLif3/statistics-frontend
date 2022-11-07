import React, { useState } from 'react';
import classes from './NoTeamCreated.module.scss';

const NoTeamCreated = ({ createTeam }) => {
  let [teamName, setTeamName] = useState('');
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <div className={classes.nameHolder}>
          <input
            type="text"
            placeholder="Название команды..."
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className={classes.dividerHolder}>
          <div />
        </div>
        <div className={classes.textHolder}>
          <p>
            Подойдите к выбору названия для Вашей команды осознанно ведь изменить его будет
            навозможно. Если название официально зарегистрированной команды, членом которой Вы
            являетесь, занято, свяжитесь со службой <span>Поддержки</span>. Пока Вы можете выбрать
            временное название для Вашей команды, которое будет автоматически изменено.
          </p>
          <p>
            Название Вашей команды может быть изменено службой поддержки в некоторых случаях.
            Подробнее об этом можно прочитать на странице <span>Поддержки</span>.
          </p>
        </div>
        <div className={classes.buttonsHolder} onClick={() => createTeam(teamName)}>
          <div>
            <span>Создать</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTeamCreated;
