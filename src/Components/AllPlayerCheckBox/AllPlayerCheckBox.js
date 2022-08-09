import React from 'react';
import './AllPlayerCheckBox.css';

const AllPlayerCheckBox = () => {
  return (
    <div className="playerHolder_apcb">
      <label class="container_apcb">
        {' '}
        Все участники
        <input type="checkbox" />
        <span class="checkmark_apcb"></span>
      </label>
    </div>
  );
};

export default AllPlayerCheckBox;
