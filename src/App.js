import React, { Component } from 'react';
import './App.css';
import ShowProductInformation from './components/ShowProductInformation'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jungle Scout Scraper</h1>
        </header>
        <ShowProductInformation />
      </div>
    );
  }
}

export default App;