import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
//import fire from './components/fire';

function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);
  return (
    <>
      {user !== null ? (
        <>
        <Navbar setUserState={() => setUser(null)}/>
        </>
      ) : (
         <>
         {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
         : ( <SignUp toggle={() => formMode()}/>)}
        
     </>
      )} 
    </>
   
  );
}

export default App;
