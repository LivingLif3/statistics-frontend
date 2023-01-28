import React from 'react';

const RoleHolder = ({ role }) => {
  return (
    <div className="postHolder_ocf">
      <span className="post_ocf">{role === 'TRAINER1' ? 'Тренер' : 'Игрок'}</span>
    </div>
  );
};

export default RoleHolder;
