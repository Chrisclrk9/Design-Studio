import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Search from './components/Search';
import TopList from './components/TopList';

class App extends Component {
    constructor(props) {
      super();
      this.state = { 
               data: [] 
      };
    }
    componentDidMount() {
      fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Popular Photo Search</h1>
          <Search />
        </header>
        <body>
          <TopList data={ data } />
        </body>
      </div>


    );
  }
}
 

export default App;
