import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Item from './Item';
import List from './List';
import ButtonClick from './ButtonClick';
import MyFriendsList from './MyFriendsList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*      <Item color="blue" size="large" appear="true"/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          <List />
        </p>
        <MyFriendsList />
        <ButtonClick />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/*Learn React*/}
        </a>
      </header>
    </div>
  );
}

export default App;
