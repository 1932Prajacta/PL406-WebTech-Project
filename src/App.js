//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { BrowseRouter } from "react-router-dom";
//import './App.css';
import SignUpPage from "./SignUpPage";

const App = () => {
  return (
    <>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </>
  )
}

export default App;
