import React, { useEffect, useState } from 'react';
import './QuestionCheckBox.css';

const QuestionCheckBox = ({
  id,
  text,
  setSelectedQuestion,
  selectedQuestion,
  setAllQuestions,
  allQuestions,
}) => {
  let [click, setClick] = useState(false);
  let onSetClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    if (click) {
      setSelectedQuestion(id);
      setAllQuestions(false);
    }
  }, [click]);
  useEffect(() => {
    if (selectedQuestion !== id) {
      setClick(false);
    }
  }, [selectedQuestion]);
  useEffect(() => {
    if (allQuestions) {
      setClick(false);
      setSelectedQuestion(null);
    }
  }, [allQuestions]);
  return (
    <div className="checkBoxHolder_qcb">
      <label class="container_qcb">
        {text}
        <input type="checkbox" checked={click} onChange={onSetClick} />
        <span class="checkmark_qcb"></span>
      </label>
    </div>
  );
};

export default QuestionCheckBox;
