import React from 'react';

const BarInput = ({ text }) => {
  return (
    <input
      className="qInput_owh"
      type="text"
      value={text}
      placeholder="Ваш вопрос"
      disabled={true}
    />
  );
};

export default BarInput;
