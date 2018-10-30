import React, { Component } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 0 0;
  transition: ${(props) => props.sliding ? 'none' : 'transform 0.5s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-349.33px))'
    if (props.direction === 'prev') return 'translateX(calc(2* (-349.33px)))'
    return 'translateX(0%)'
  }};
`

const Wrapper = styled.div`
  width: 1048px;
  overflow: hidden;
`

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 349.33px;
  order: ${(props) => props.order};
`

const PrevArrow = styled.div`
  position: absolute;
  display: block;
  padding: 0px;
  width: 24px;
  box-sizing: border-box;
  left: -32px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
`

const NextArrow = styled.div`
  position: absolute;
  display: block;
  padding: 0px;
  width: 24px;
  box-sizing: border-box;
  right: -32px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
`


class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliding: false,
      position: 0
    }

    this.getOrder = this.getOrder.bind(this);
  }

  doSliding(direction, position) {
    this.setState({
      sliding: true,
      direction,
      position
    })

    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  prevSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  nextSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }
  

  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div className="list">
          <PrevArrow>
            <div onClick={() => this.prevSlide()}>
              <span style={{position: "absolute", top: "35%", bottom: "auto", padding: "0px", margin: "0px", background: "transparent"}}>
                <button type="button" style={{fill: "transparent", border: "0px", padding: "0px"}}>
                  <svg viewBox="0 0 18 18" role="img" focusable="false" style={{height: "24px", width: "24px", display: "block", fill: "rgb(118, 118, 118)", cursor: "pointer"}}>
                    <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd">
                    </path>
                  </svg>
                </button>
              </span>
            </div>
          </PrevArrow>
          <Wrapper>
            <CarouselContainer sliding={this.state.sliding} direction={this.state.direction}>
              { children.map((child, i) => (
                <CarouselSlot 
                  key={i}
                  order={this.getOrder(i)}>
                  <div className="entry">
                    <div className="entry-picture" style={{backgroundImage: `url(${child.props.listing.pictures[0]})`}}>
                      <button type="button" className="heart">
                        <svg viewBox="0 0 32 32" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2.5" focusable="false" role="img" strokeLinecap="round" strokeLinejoin="round" style={{height: "28px", width: "28px", display: "block", overflow: "visible", cursor: "pointer"}}>
                        <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path></svg>
                      </button>
                    </div>
                    <div className="entry-text-container">
                      <div className="type-size">{child.props.listing.listingType} · {child.props.listing.numBeds} BEDS</div>
                      <div className="listing-title">{child.props.listing.name}</div>
                      <div className="listing-price">${child.props.listing.price} per night</div>
                    </div>
                  </div>
                </CarouselSlot>
              ))}
            </CarouselContainer>
          </Wrapper>
          <NextArrow>
            <div
              onClick={() => this.nextSlide()}>
              <span style={{position: "absolute", top: "35%", bottom: "auto", padding: "0px", margin: "0px", background: "transparent"}}>
                <button type="button" style={{fill: "transparent", border: "0px", padding: "0px"}}>
              <svg viewBox="0 0 18 18" role="img" focusable="false" style={{height: "24px", width: "24px", display: "block", fill: "rgb(118, 118, 118)", cursor: "pointer"}}>
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd">
                </path>
              </svg>
              </button>
              </span>
            </div>
          </NextArrow>
        </div>
      </div>
    )
  }
}

// Carousel.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node
// }
export default Carousel;