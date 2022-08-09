import React from 'react';
import ClearTemplate from '../ClearTemplate/ClearTemplate';

const ElementOfCollection = ({ id, title, text, deleteQuizTemplate, getDailyQuizes }) => {
  return (
    <div className="elementInCollection_cp">
      <div className="placeForTheForm">
        <ClearTemplate title={title} text={text} />
      </div>
      <div className="buttonsHolder_cp">
        <button
          className="button_cp small_cp"
          onClick={() => {
            deleteQuizTemplate(id);
            getDailyQuizes();
          }}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ElementOfCollection;
