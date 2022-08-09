import React from 'react';

const ClearTemplateForGraph = ({ title, text, id, setTemplate, template }) => {
  return (
    <div className="qForm_qf" onClick={() => setTemplate(id)}>
      <div className="qFormHeader_qf">
        <span className="qFormHeaderText_qf">{title ? title : 'Пусто'}</span>
      </div>
      <div className="qFormBody_qf">
        <p className="qFormBodyText_qf">{text ? text : 'Пусто'}</p>
      </div>
      <div className="qFormFooter_qf" style={{ color: '#fff', fontSize: '20px' }}>
        {id === template && 'Выбрано'}
      </div>
    </div>
  );
};

export default ClearTemplateForGraph;
