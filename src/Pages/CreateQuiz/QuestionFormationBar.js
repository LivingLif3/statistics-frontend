import React from 'react';
import BarInput from './BarInput';
import { PlusOutlined } from '@ant-design/icons';

const QuestionFormationBar = ({ text, number, questions, setQuestions }) => {
  let onDelete = () => {
    setQuestions(questions.filter((question) => question.number !== number));
  };
  return (
    <div className="qDiv_owh">
      <BarInput text={text} />
      <button className="delButton_owh" onClick={onDelete}>
        <PlusOutlined />
      </button>
    </div>
  );
};

export default QuestionFormationBar;
