import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Search from './components/Search';
import TopList from './components/TopList';

class App extends Component {
    constructor() {
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
      return (
        <div>
          <ul>
            {this.state.data.map(item => (
              <li>
                {item.name}:   ${item.price_usd}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
 

export default App;
