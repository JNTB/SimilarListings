import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry">
        <div className="entry-picture"><img src={this.props.listing.pictures[0]}></img></div>
        <div className="type-size">{this.props.listing.listingType} · {this.props.listing.numBeds} BEDS</div>
        <div className="listing-title">{this.props.listing.name}</div>
        <div className="listing-price">${this.props.listing.price} per night</div>
      </div>
    )
  }
}

export default Entry;