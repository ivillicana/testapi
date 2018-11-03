import React, { Component } from 'react';
import MovieReview from './MovieReview'

const NYT_KEY = '0e3bdfeff2f442e98fb03f733c799a22'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_KEY}`;

class MovieReviews extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      times_updated: 0,
      time: 0,
      timer: null
    }
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  
  fetchReviews = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }))
    fetch(URL)
    .then(res => res.json())
    .then(reviews => this.setState({
      reviews: reviews.results,
      times_updated: this.state.times_updated + 1
    }))
  }

  stopTimer = (event) => {
    clearInterval(this.state.timer)
  }
  startTimer = (event) => {
    this.fetchReviews()
    this.setState({
      timer: setInterval(this.fetchReviews, 3000)
    })
  }

  render(){
    return(
      <div>
        <h2>Latest Movie Review</h2>
        <button onClick={this.startTimer}>Start Fetching</button>
        <button onClick={this.stopTimer}>Stop Fetching</button>
        <h4>Times Updated: {this.state.times_updated}</h4>
        <MovieReview reviews={this.state.reviews} />
      </div>
    )
  }
}
export default MovieReviews