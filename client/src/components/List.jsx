import React, {Component} from 'react';
// import Entry from './Entry.jsx';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './DemoCarousel.jsx';

const Item = styled.div`
  text-align: center;
  color: white;
`
export default class CarouselPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      similar: []
    }

    this.getSimilar = this.getSimilar.bind(this);
  }
  
  componentDidMount() {
    this.getSimilar();
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

  render() {
    return (
      <div id="similar-module">
        <Carousel
          title="Similar listings"
        >
          {this.state.similar.map((listing, i) => (
            <Item listing={listing} key={i} />
          ))}
          {/* <Item>Item 0</Item>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
          <Item>Item 5</Item>
          <Item>Item 6</Item>
          <Item>Item 7</Item>
          <Item>Item 8</Item>
          <Item>Item 9</Item> */}
        </Carousel>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similar: []
    }

    this.getSimilar = this.getSimilar.bind(this);
  }
  
  componentDidMount() {
    this.getSimilar();
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

  render() {
    return (
      <div>
        {this.state.similar.map((listing, i) => {
          return (
            <Entry listing={listing} key={i} />
          )
        })}
      </div>
    )
  }
}