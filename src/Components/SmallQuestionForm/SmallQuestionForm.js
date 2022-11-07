import React from 'react';
import './SmallQuestionForm.scss';

const SmallQuestionForm = React.memo(({ title, text }) => {
  console.log(title, text);
  return (
    <div className="qForm_sqf">
      <div className="qFormHeader_sqf">
        <span className="qFormHeaderText_sqf">{title}</span>
      </div>
      <div className="qFormBody_sqf">
        <p className="qFormBodyText_sqf">{text}</p>
      </div>
    </div>
  );
});

export default SmallQuestionForm;
