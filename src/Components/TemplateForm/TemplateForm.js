import React, { useEffect, useState } from 'react';
import './TemplateForm.css';

const TemplateForm = ({ title, id, templatesState, setTemplatesState, description }) => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);
  const onClick = () => {
    setClick(!click);
    if (!click) {
      setTemplatesState([...templatesState, id]);
    } else if (click) {
      setTemplatesState(templatesState.filter((itemId) => itemId !== id));
    }
  };
  useEffect(() => {
    if (templatesState.indexOf(id) !== -1) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [templatesState.length]);
  return (
    <div className="qForm_qf" onClick={onClick}>
      <div className="qFormHeader_qf">
        <span className="qFormHeaderText_qf">{title}</span>
      </div>
      <div className="qFormBody_qf">
        <p className="qFormBodyText_qf">{description}</p>
      </div>
      <div className="qFormFooter_qf">
        <span className="qFormHeaderText_qf f-w_qf">{active && 'Выбрано'}</span>
      </div>
    </div>
  );
};

export default TemplateForm;
