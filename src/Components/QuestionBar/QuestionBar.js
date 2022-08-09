import React, { useState } from 'react';
import AnswerInput from '../AnswerInput/AnswerInput';
// import AnswerInput from './answerInput';
import AnswerKeaboard from './AnswerKeyboard/AnswerKeyboard';
import './QuestionBar.css';

const QuestionBar = ({
  text,
  answers,
  id,
  submit,
  setAnswers,
  answersTest,
  selectedQuizObject,
}) => {
  const [click, setClick] = useState(false);
  let onClick = () => {
    setClick(!click);
  };
  return (
    <div className="answerSectionHolder_qb">
      <button class="accordion_qb" onClick={onClick}>
        {text}
      </button>
      <div class={`panel_qb ${click && 'show'}`}>
        {selectedQuizObject && selectedQuizObject.custom ? (
          <AnswerInput answers={answers} setAnswers={setAnswers} submit={submit} id={id} />
        ) : (
          <AnswerKeaboard
            answers={answers}
            answersTest={answersTest}
            setAnswers={setAnswers}
            submit={submit}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionBar;
