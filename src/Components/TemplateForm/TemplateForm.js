import React, { useState } from 'react';
import './TemplateForm.css';

const TemplateForm = ({ title, templates, id, templatesState, setTemplatesState, description }) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
    if (!click) {
      // templates.push(id);
      setTemplatesState([...templatesState, id]);
    } else if (click) {
      // let index = templates.indexOf(id);
      // templates.splice(index, 1);
      setTemplatesState(templatesState.filter((itemId) => itemId !== id));
    }
  };
  return (
    <div className="qForm_qf" onClick={onClick}>
      <div className="qFormHeader_qf">
        <span className="qFormHeaderText_qf">{title}</span>
      </div>
      <div className="qFormBody_qf">
        <p className="qFormBodyText_qf">{description}</p>
      </div>
      <div className="qFormFooter_qf">
        <span className="qFormHeaderText_qf f-w_qf">{click && 'Выбрано'}</span>
      </div>
    </div>
  );
};

export default TemplateForm;
