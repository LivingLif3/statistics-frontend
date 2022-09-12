import React from 'react';

const UsualModal = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'page_m activeModal' : 'page_m'} onClick={() => setActive(false)}>
      <div
        className={active ? 'body_m activeModal' : 'body_m'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default UsualModal;
