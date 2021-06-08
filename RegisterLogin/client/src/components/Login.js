import React  from 'react';

//import Register from './components/Register';

const Login = (props) => {

  const {email,password,setEmail,setPassword,handleLogin,handleRegister,hasAccount,setHasAccount,emailError,passwordError} = props;

  return(
    <div>
      <div className="loginContainer">
        <label>Username</label>
        <input 
          type="text" 
          autoFocus 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          requiredvalue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <p className="errorMsg">{passwordError}</p>

       <div className="btnContainer">
         {hasAccount ? (
           <>
           <button onClick={handleLogin}>Sign In</button>
           <p>Dont have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
           </>
         ) : (
          <>
          <button onClick={handleRegister}>Sign up</button>
          <p>have account ? <span  onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
          </>
         )}

       </div>

      </div>
    </div>
  )
}

export default Login;
