import React from 'react';
import Entry from './Entry.jsx';
import axios from 'axios';

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
    return (
      <div>
        <h2 className="header-similar">Similar listings</h2>

        <div className="list">
          {this.state.similar.map((listing, i) => {
            return <Entry listing={listing} key={i} />
          })}
        </div>

        
        
        
      </div>
    )
  }
}

export default List;