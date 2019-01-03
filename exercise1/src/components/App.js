import React, { Component } from 'react';
import '../styles/App.css';
import List from './list';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <List />
      </div>
    );
  }
}

export default App;
