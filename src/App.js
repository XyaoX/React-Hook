import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stateless from './Components/Stateless';
import Class from './Components/Class';
import Hook from './Components/Hook';
import Todo from './Components/Todo';
class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <Class /> */}
        {/* <Hook /> */}
        <Todo />
      </div>
    );
  }
}

export default App;
