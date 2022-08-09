import React, { useEffect, useState } from 'react';
import './PlayerCheckBox.css';

const PlayerCheckBox = ({ id, name, surname, setUsers, users }) => {
  let [click, setClick] = useState(false);
  useEffect(() => {
    if (click) {
      setUsers([...users, id]);
    } else if (!click) {
      setUsers(users.filter((user) => user !== id));
    }
  }, [click]);
  return (
    <div className="playerHolder_pcb">
      <label class="container_pcb">
        <span className="surname_pcb">{surname}</span>
        <span className="name_pcb">{name}</span>
        <input type="checkbox" checked={click} onChange={() => setClick(!click)} />
        <span class="checkmark_pcb"></span>
      </label>
    </div>
  );
};

export default PlayerCheckBox;
