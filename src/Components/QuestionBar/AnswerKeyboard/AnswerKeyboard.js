import React, { useEffect, useState } from 'react';
import './AnswerKeyboard.css';

const AnswerKeyboard = ({ answers, id, submit, setAnswers, answersTest }) => {
  let [value, setValue] = useState(null);
  let onChoose = (number) => {
    setValue(number);
  };
  useEffect(() => {
    if (value) {
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
    <div className="answerKeyboard_ak">
      <button
        className={`keyboardButton_ak ${value && value == 1 && 'activeAnswer'}`}
        onClick={() => onChoose(1)}>
        1
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 2 && 'activeAnswer'}`}
        onClick={() => onChoose(2)}>
        2
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 3 && 'activeAnswer'}`}
        onClick={() => onChoose(3)}>
        3
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 4 && 'activeAnswer'}`}
        onClick={() => onChoose(4)}>
        4
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 5 && 'activeAnswer'}`}
        onClick={() => onChoose(5)}>
        5
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 6 && 'activeAnswer'}`}
        onClick={() => onChoose(6)}>
        6
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 7 && 'activeAnswer'}`}
        onClick={() => onChoose(7)}>
        7
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 8 && 'activeAnswer'}`}
        onClick={() => onChoose(8)}>
        8
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 9 && 'activeAnswer'}`}
        onClick={() => onChoose(9)}>
        9
      </button>
      <button
        className={`keyboardButton_ak ${value && value == 10 && 'activeAnswer'}`}
        onClick={() => onChoose(10)}>
        10
      </button>
    </div>
  );
};

export default AnswerKeyboard;
