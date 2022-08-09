import React, { useState } from 'react';

const RepeatCheckBox = ({ repeatQuiz, repeat, setRepeat }) => {
  let onRepeat = () => {
    setRepeat(!repeat);
    repeatQuiz = repeat;
  };
  return (
    <div className="footer_qc a-i-center_qc">
      <label className="container">
        Отправлять каждые 24 часа
        <input type="checkbox" checked={repeat} onChange={onRepeat} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default RepeatCheckBox;
