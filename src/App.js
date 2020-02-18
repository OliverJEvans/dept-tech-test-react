import React from 'react';
import SearchConnected from './containers/SearchConnected/SearchConnected';
import ResultsConnected from './containers/ResultsConnected/ResultsConnected';
import './App.scss';

const App = () => (
  <div className="wrapper">
    <div className="container">
      <div className="content">
        <h1>Compare your Air</h1>
        <p>Compare the air quality between cities in the UK.</p>
        <p>Select cities to compare using the search tool below.</p>
      </div>
      <SearchConnected />
      <ResultsConnected />
    </div>
  </div>
);

export default App;
