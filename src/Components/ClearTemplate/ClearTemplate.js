import React from 'react';

const ClearTemplate = ({ title, text }) => {
  return (
    <div className="qForm_qf">
      <div className="qFormHeader_qf">
        <span className="qFormHeaderText_qf">{title ? title : 'Пусто'}</span>
      </div>
      <div className="qFormBody_qf">
        <p className="qFormBodyText_qf">{text ? text : 'Пусто'}</p>
      </div>
      <div className="qFormFooter_qf"></div>
    </div>
  );
};

export default ClearTemplate;
