import React from 'react';
import './Modal.css';

const Modal = ({ active, setActive, children }) => {
  let onClick = () => {
    setActive(false);
    // setNameTeam(false);
    // setDeleteModal(false);
  };
  return (
    <div className={active ? 'page_m activeModal' : 'page_m'} onClick={onClick}>
      <div
        className={active ? 'body_m activeModal' : 'body_m'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
