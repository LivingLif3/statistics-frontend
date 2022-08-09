import React from 'react';

const RoleHolder = ({ role }) => {
  return (
    <div className="postHolder_ocb">
      <span className="post_ocb">{role === 'TRAINER' ? 'Тренер' : 'Игрок'}</span>
    </div>
  );
};

export default RoleHolder;
