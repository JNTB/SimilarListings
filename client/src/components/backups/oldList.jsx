import React from 'react';
import Entry from './Entry.jsx';
import axios from 'axios';
import Slider from 'react-slick';
// import { NextArrow, PrevArrow } from './Arrows.jsx';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="arrow-next"
      style={{ display: "block", background: "red" }}
      onClick={onClick}>
      <svg viewBox="0 0 18 18" role="img" focusable="false" style={{height: "24px", width: "24px", display: "block", fill: "rgb(118, 118, 118)"}}>
        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd">
        </path>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="arrow-prev"
      style={{ display: "block", background: "green" }}
      onClick={onClick}>
      <svg viewBox="0 0 18 18" role="img" focusable="false" style={{height: "24px", width: "24px", display: "block", fill: "rgb(118, 118, 118)"}}>
        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd">
        </path>
      </svg>
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similar: []
    }

    this.getSimilar = this.getSimilar.bind(this);
  }

  getSimilar() {
    axios.get('/api/similar')
      .then(data => {
        this.setState({
          similar: data.data
        }, () => console.log(this.state.similar))
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getSimilar();
  }

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }
    return (
      <div id="similar-module">
        <h2 className="header-similar">Similar listings</h2>
        
        
        <div className="list">
          <Slider {...settings}>
            
            {this.state.similar.map((listing, i) => {
              return <Entry listing={listing} key={i} />
            })}
          
          </Slider>
        </div>
        
        
      </div>
    )
  }
}

export default List;