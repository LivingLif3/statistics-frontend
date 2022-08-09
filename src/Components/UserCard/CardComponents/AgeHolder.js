import React from 'react';

const AgeHolder = ({ age }) => {
  return (
    <div className="field_ocf">
      <span className="textOfFields_ocf">Возраст:</span>
      <span className="ageResult_ocf">{age ? age : 'Не указан'}</span>
    </div>
  );
};

export default AgeHolder;
