import React from 'react';

const InputBar = ({ value, setValue }) => {
  return (
    <>
      <input
        className="qInput_owh"
        type="text"
        placeholder="Задайте вопрос"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputBar;
