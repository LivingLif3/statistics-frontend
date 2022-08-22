import React from 'react';
import { connect } from 'react-redux';
import { stopDailyQuiz } from '../../redux-store/QuizReducer';
import ClearTemplate from '../ClearTemplate/ClearTemplate';
import './DailyElementOfCollection.css';

const DailyElementOfCollection = ({ access, title, text, stopDailyQuiz }) => {
  return (
    <div className="elementInCollection_dec">
      <div className="placeForTheForm_dec">
        <ClearTemplate title={title} text={text} />
      </div>
      <div className="buttonsHolder_dec">
        <button className="button_dec small_dec" onClick={() => stopDailyQuiz(access)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { stopDailyQuiz })(DailyElementOfCollection);
