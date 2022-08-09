import React, { useEffect, useState } from 'react';
import User from './User';

const UserFinder = () => {
  const users = [
    {
      name: 'Nikita',
      surname: 'Letko',
      lastname: 'Yrievich',
      email: 'nikita@gmail.com',
    },
    {
      name: 'Sasha',
      surname: 'Letko',
      lastname: 'Yrievich',
      email: 'alexletko@gmail.com',
    },
    {
      name: 'Dima',
      surname: 'Zhitko',
      lastname: 'Valerievich',
      email: 'dima@gmail.com',
    },
  ];
  const [usersFiltered, setUsersFiltered] = useState(users);
  const [inputValue, setInputValue] = useState('');
  const filterUsers = () => {
    if (!inputValue) {
      return users;
    }
    return users.filter((user) => {
      return user.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  };

  useEffect(() => {
    const filteredUsers = filterUsers();
    setUsersFiltered(filteredUsers);
  }, [inputValue]);
  return (
    <div>
      <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div>
        {usersFiltered.map((user) => (
          <User
            name={user.name}
            surname={user.surname}
            lastname={user.lastname}
            email={user.lastname}
          />
        ))}
      </div>
    </div>
  );
};

export default UserFinder;
