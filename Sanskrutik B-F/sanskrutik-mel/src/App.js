import React from 'react';
import './App.css';
import SearchResult from './Components/SearchResult';
import Feed from './Components/Feed';
import {Header,searchkey} from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widget';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  
  return (
    <div className="app">
      {
        user ? (
          <>
            <Header/>
            <div className="app__body">
              <Sidebar />
              {/* <SearchResult data={searchkey}/> */}
              <Feed />
              <Widgets />
            </div>
          </>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;