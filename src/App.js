import React, { Component } from 'react';
import MovieReviews from './components/MovieReviews';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MovieReviews />
      </div>
    );
  }
}

export default App;
