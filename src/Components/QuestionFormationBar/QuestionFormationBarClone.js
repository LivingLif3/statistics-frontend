import React, { useEffect, useState } from 'react';
import InputBar from './InputBar/InputBar';

const QuestionFormationBar = ({ questions, setQuestions }) => {
  const [value, setValue] = useState('');
  let [number, setNumber] = useState(1);
  let createQuestion = () => {
    if (value.length > 0) {
      setQuestions([...questions, { text: value, number }]);
      setNumber(number + 1);
      setValue('');
    }
  };
  return (
    <div className="qDiv_owh">
      <span className="numberOfQuestion"></span>
      <InputBar value={value} setValue={setValue} />
      <button className="plusButton_owh" onClick={createQuestion}>
        +
      </button>
    </div>
  );
};

export default QuestionFormationBar;
