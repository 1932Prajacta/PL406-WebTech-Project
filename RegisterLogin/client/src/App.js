import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
//import Register from './components/signin';
import Login from './components/Login';
//import home from './components/home';
import home from './components/home';


const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');  
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    firebase 
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
              case "auth/invalid-email":
                setPasswordError(err.message);
                break;
      }
    });
  };

  const handleRegister = () => {
    clearErrors();
    firebase 
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
      }
    });
  };

  const handleLogOut = () => {
    firebase.auth().signout();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
    if(user) {
      clearInputs();
      setUser(user);
    } else{
      setUser("");
    }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

    return (
      <div className="App">
        {user ? (
           <home handleLogOut={handleLogOut}/>
        ) : (
          <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword}
          handleLogin={handleLogin} 
          handleRegister={handleRegister}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
         />
        )}
      

      
      </div>
      );
    
  };
  
  export default App;
