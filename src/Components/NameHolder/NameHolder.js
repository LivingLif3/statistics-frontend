import React from 'react';
import './NameHolder.css';

const NameHolder = ({ title, setSelectedQuiz, id, quiz, setSelectedQuizObject }) => {
  let onClick = () => {
    setSelectedQuiz(id);
    setSelectedQuizObject(quiz);
  };
  return (
    <button className="nameHolder_nm" onClick={onClick}>
      {title}
    </button>
  );
};

export default NameHolder;
