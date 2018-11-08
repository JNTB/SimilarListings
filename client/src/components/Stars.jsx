import React from 'react';
import { FullStar, HalfStar, NoStar } from './Star.jsx';
import stylr from './styles/Stars.css';

const Stars = (props) => {
  let createStars = () => {
    let rating = props.rating;
    let stars = [];
    for (let n = 0; n < 5; n++) {
      if (rating >= 0.75) {
        stars.push(<FullStar key={n}/>)
        rating -= 1;
      }
      else if (rating >= 0.25) {
        stars.push(<HalfStar key={n}/>)
        rating -= 0.5;
      } 
      else stars.push(<NoStar key={n}/>)
    }
    return stars;
  }

  return (
    <div className={stylr.divRatings}>
      <span className={stylr.spanStars}>
        {createStars()}
      </span>
      <span className={stylr.spanNumRatings}>
        {props.numRatings}
      </span>
    </div>
  )
}

export default Stars;