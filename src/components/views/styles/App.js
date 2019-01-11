import React, { Component } from 'react';
import Search from './components/views/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>gif Search</h1>
        <Search />
      </div>
    );
  }
}

export default App;
