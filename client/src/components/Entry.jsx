import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry">
        <div className="entry-picture" style={{backgroundImage: `url(${this.props.listing.pictures[0]})`}}>
          <button type="button" className="heart">
            <svg viewBox="0 0 32 32" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2.5" focusable="false" role="img" strokeLinecap="round" strokeLinejoin="round" style={{height: "28px", width: "28px", display: "block", overflow: "visible"}}><path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path></svg>
          </button>
        </div>
        <div className="entry-text-container">
          <div className="type-size">{this.props.listing.listingType} · {this.props.listing.numBeds} BEDS</div>
          <div className="listing-title">{this.props.listing.name}</div>
          <div className="listing-price">${this.props.listing.price} per night</div>
        </div>
      </div>
    )
  }
}

export default Entry;