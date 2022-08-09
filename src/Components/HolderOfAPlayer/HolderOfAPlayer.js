import React, { useState } from 'react';
import WholePersonInformationContainer from '../WholePersonInformationContainer/WholePersonInformationContainer';
import './HolderOfAPlayer.css';

const PlayerHolder = ({ id, name, surname, quizeTemplateQuestions, results }) => {
  let [click, setClick] = useState(false);
  return (
    <div className="holderOfAnalitics_ph">
      <div className="playerHolder_ph">
        <button class="accordion_ph" onClick={() => setClick(!click)}>
          <span className="span_ph" name="surname_ph">
            {surname}
          </span>
          <span className="span_ph" name="name_ph">
            {name}
          </span>
        </button>
        <div className={`panel_ph`}>
          <WholePersonInformationContainer
            click={click}
            setClick={setClick}
            results={results[0]}
            quizeTemplateQuestions={quizeTemplateQuestions}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerHolder;
