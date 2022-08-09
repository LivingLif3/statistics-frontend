import React, { useEffect, useState } from 'react';
import './AnswerInput.css';

const AnswerInput = ({ answers, setAnswers, id, submit }) => {
  let [value, setValue] = useState('');
  useEffect(() => {
    if (value.length > 0) {
      // setAnswers(answers.filter((answer) => answer.question !== id));
      // setAnswers([...answers, { question: id, answer: value }]);
      setAnswers(
        answers.map((answer) => {
          if (answer.question == id) {
            answer.answer = value;
          }
          return answer;
        }),
      );
    }
  }, [submit]);
  return (
    <input
      className="answerInput_ai"
      type="text"
      placeholder="Ваш ответ..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      spellCheck="false"
    />
  );
};

export default AnswerInput;
