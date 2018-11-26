import React, { Component } from 'react';
import './App.css';
const ActiveSearch = {};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Popular Photo Search</h1>
          <Search />
        </header>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input placeholder="Search..."></input>
        <button onClick={ActiveSearch}>Search</button>
      </div>
    )
  }
} 

export default App;
