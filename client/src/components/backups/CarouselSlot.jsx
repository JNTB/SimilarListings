import React from 'react';



export const CarouselSlot = (props) => {

  const style = {
    flex: "1 0 100%",
    flexBasis: "349.33px",
    order: (props) => props.order
  }
  
  return (
  <div className="carousel-slot">
    <div className="entry">
      <div className="entry-picture" style={{backgroundImage: `url(${props.entry.listing.pictures[0]})`}}>
        <button type="button" className="heart">
          <svg viewBox="0 0 32 32" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2.5" focusable="false" role="img" strokeLinecap="round" strokeLinejoin="round" style={{height: "28px", width: "28px", display: "block", overflow: "visible", cursor: "pointer"}}>
          <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path></svg>
        </button>
      </div>
      <div className="entry-text-container">
        <div className="type-size">{props.entry.listing.listingType} · {props.entry.listing.numBeds} BEDS</div>
        <div className="listing-title">{props.entry.listing.name}</div>
        <div className="listing-price">${props.entry.listing.price} per night</div>
      </div>
    </div>
  </div>
)}