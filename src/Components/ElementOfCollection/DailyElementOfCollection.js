import React from 'react';
import ClearTemplate from '../ClearTemplate/ClearTemplate';
import './DailyElementOfCollection.css';

const DailyElementOfCollection = ({ title, text }) => {
  return (
    <div className="elementInCollection_dec">
      <div className="placeForTheForm_dec">
        <ClearTemplate title={title} text={text} />
      </div>
      <div className="buttonsHolder_dec">
        <button className="button_dec small_dec">Удалить</button>
      </div>
    </div>
  );
};

export default DailyElementOfCollection;
