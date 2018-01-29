import React, { Component } from 'react';
import './App.css';
import SearchKeywordForm from './components/SearchKeywordForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jungle Scout Scraper</h1>
        </header>
        <SearchKeywordForm />
      </div>
    );
  }
}

export default App;
