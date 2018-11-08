import React, {Component} from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import stylr from './styles/List.css';

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
        console.log(data.data);
        this.setState({
          similar: data.data
        }, () => console.log(this.state.similar))
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className={stylr.similarModule}>
        <Carousel title="Similar listings">
          {this.state.similar.map((listing, i) => <div listing={listing} key={i} />)}
        </Carousel>
      </div>
    );
  }
}