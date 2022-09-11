import React, { createContext, useState, useEffect } from 'react';
import { deleteUser as deleteUserApi, get as getUsers, edit } from './api';

export type User = {
  id: string,
  email: string
}

const usersContext = createContext({
  users: [{
    id: '',
    email: ''
  }],
  isLoading: true,
  handleFetchUsers: (): Promise<void> | null => null,
  deleteUser: (id: string): Promise<void> | null => null,
  editUser: (id: string, values: { email: string }): Promise<void> | null => null,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteUser = async (id) => {
    await deleteUserApi(id);
    await handleFetchUsers();
  };

  const editUser = async (id, values) => {
    await edit(id, values);
    await handleFetchUsers();
  };

  const handleFetchUsers = async () => {
    const { data } = await getUsers();
    const users = data.results || [];
    const [user] = users;
    const { email } = user;    
    setUsers([{ id: '1', email }]);
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <usersContext.Provider value={{
      users,
      isLoading,
      handleFetchUsers,
      deleteUser,
      editUser,
    }}>
      {children}
    </usersContext.Provider>
  );
};

export { usersContext, UsersProvider };
