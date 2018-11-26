import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import TopList from './components/TopList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Popular Photo Search</h1>
          <Search />
        </header>

        <body><TopList /></body>
      </div>


    );
  }
}
 

export default App;
