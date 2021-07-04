import React from 'react';
import { Login } from './components/Login'; 
import "./App.css"
import Logout from './components/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function App() {
  const user = useSelector(selectUser)
  return (
    <>
      {user? <Logout/> : <Login/>}
    </>
  );
}

export default App;
