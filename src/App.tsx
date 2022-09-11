import React from  'react';
import './App.css';
import UsersList from './components/UsersList';
import { User, usersContext, UsersProvider } from './contexts/users';

const App = () => {
 
  return  <UsersProvider>
   <UsersList/>
  </UsersProvider>
};

export default App;
