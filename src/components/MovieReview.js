import React, { Component } from 'react'

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review row mb-3 border-bottom border-primary pb-2"
    >
      <div className="col col-md-5">
        <header>
          <a
            className="review-link"
            href={link.url}
          >
            {headline}
          </a>
          <br/>
          <span className="author">{byline}</span>
        </header>
        
      </div>
      <div className="col col-md-7">
        <blockquote>{summary_short}</blockquote>
      </div>
    </div>
  );
};

const MovieReview = ({reviews}) => (
  <div>
    {reviews.map(Review)}
  </div>
)

export default MovieReview
