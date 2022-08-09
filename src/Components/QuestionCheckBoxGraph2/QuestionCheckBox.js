import React, { useEffect, useState } from 'react';

const QuestionCheckBoxGraph2 = ({ id, question, setQuestion, text }) => {
  let [click, setClick] = useState(false);
  useEffect(() => {
    if (click) {
      setQuestion(id);
    }
  }, [click]);
  useEffect(() => {
    if (question !== id) {
      setClick(false);
    }
  }, [question]);
  // useEffect(() => {
  //   if (click) {
  //     setQuestions([...questions, id]);
  //   } else if (!click) {
  //     setQuestions(questions.filter((question) => question !== id));
  //   }
  // }, [click]);
  // useEffect(() => {
  //   if (!click) {
  //     setQuestions(questions.filter((question) => question !== id));
  //   }
  // }, [questions]);
  return (
    <div className="checkBoxHolder_qcb">
      <label class="container_qcb">
        {text}
        <input type="checkbox" checked={click} onChange={() => setClick(!click)} />
        <span class="checkmark_qcb"></span>
      </label>
    </div>
  );
};

export default QuestionCheckBoxGraph2;
