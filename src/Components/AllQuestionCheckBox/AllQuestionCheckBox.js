import React from 'react';
import './AllQuestionCheckBox.css';

const AllQuestionCheckBox = ({ setAllQuestions, allQuestions }) => {
  return (
    <div className="checkBoxHolder_aqcb">
      <label class="container_aqcb">
        Все вопросы
        <input
          type="checkbox"
          checked={allQuestions}
          onChange={() => setAllQuestions(!allQuestions)}
        />
        <span class="checkmark_aqcb"></span>
      </label>
    </div>
  );
};

export default AllQuestionCheckBox;
