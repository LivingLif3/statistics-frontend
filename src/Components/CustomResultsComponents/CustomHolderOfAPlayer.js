import React, { useState } from 'react';
import CustomWholePersonInformationContainer from './CustomWholePersonInformationContainer';

const CustomPlayerHolder = ({
  id,
  name,
  surname,
  quizeTemplateQuestions,
  quizesCustomResultsInPeriods,
}) => {
  let [show, setShow] = useState(false);
  return (
    <div className="holderOfAnalitics_crp">
      <div className="playerHolder_crp">
        <button className="accordion_crp" onClick={() => setShow(!show)}>
          <span className="span_crp" name="surname_crp">
            {surname}
          </span>
          <span className="span_crp" name="name_crp">
            {name}
          </span>
        </button>
        <div className={`panel_crp ${show && 'showBlock'}`}>
          <CustomWholePersonInformationContainer
            id={id}
            quizeTemplateQuestions={quizeTemplateQuestions}
            quizesCustomResultsInPeriods={quizesCustomResultsInPeriods}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomPlayerHolder;
