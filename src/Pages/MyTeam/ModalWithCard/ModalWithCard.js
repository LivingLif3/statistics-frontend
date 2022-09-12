import React from 'react';

const ModalWithCard = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'page_m activeModal' : 'page_m'} onClick={() => setActive(false)}>
      \{children}
    </div>
  );
};

export default ModalWithCard;
