import React, { Component } from 'react';
import './App.css';
import MovieReviews from './components/MovieReviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieReviews />
      </div>
    );
  }
}

export default App;
