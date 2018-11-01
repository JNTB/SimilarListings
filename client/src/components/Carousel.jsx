import React, { Component } from 'react';
import styled from 'styled-components';
import { PrevArrow, NextArrow, PrevArrowComp, NextArrowComp } from './Arrows.jsx';
import Stars from './Stars.jsx';
import styles from './styles/carousel.css';

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0;
  transition: ${(props) => props.sliding ? 'none' : 'transform 0.3s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-349.33px))'
    if (props.direction === 'prev') return 'translateX(calc(2* (-349.33px)))'
    return 'translateX(0)'
  }};
`

const Wrapper = styled.div`
  width: 1048px;
  overflow: hidden;
`

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 349.33px;
  order: ${(props) => {
    console.log(props);
    return props.order}};
`

const EntryPicture = styled.div`
  box-sizing: border-box;
  height: 222.22px;
  width: 333.33px;
  text-align: center;
  border-radius: 3px;
  background-size: contain;
  background-color: #ccc;
  background-repeat: no-repeat;
  background-position: center;
`

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliding: 0,
      direction: 'prev',
      position: 0
    }

    this.getOrder = this.getOrder.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  doSliding(direction, position) {
    this.setState({
      sliding: this.state.sliding + 1,
      direction,
      position
    })

    setTimeout(() => {
      this.setState({
        sliding: this.state.sliding - 1
      })
    }, 15)
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
        <div style={styles.list}>
          <PrevArrow>
            <PrevArrowComp prevSlide={this.prevSlide} />
          </PrevArrow>
          <Wrapper>
            <CarouselContainer sliding={this.state.sliding} direction={this.state.direction}>
              { children.map((child, i) => (
                <CarouselSlot 
                  key={i}
                  order={this.getOrder(i)}>
                  <div style={styles.entry}>
                    <EntryPicture style={{backgroundImage: `url(${child.props.listing.pictures[0]})`}}>
                      <button type="button" style={styles.button}>
                        <svg viewBox="0 0 32 32" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2.5" focusable="false" role="img" strokeLinecap="round" strokeLinejoin="round" style={{height: "28px", width: "28px", display: "block", overflow: "visible", cursor: "pointer"}}>
                        <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path></svg>
                      </button>
                    </EntryPicture>
                    <div style={{paddingTop: "8px"}}>
                      <div style={styles.typeSize}>{child.props.listing.listingType} · {child.props.listing.numBeds} BEDS</div>
                      <div style={styles.listingTitle}>{child.props.listing.name}</div>
                      <div style={styles.listingPrice}>${child.props.listing.price} per night</div>
                    </div>
                    <Stars rating={child.props.listing.rating} numRatings={child.props.listing.numRatings} />
                  </div>
                </CarouselSlot>
              ))}
            </CarouselContainer>
          </Wrapper>
          <NextArrow>
            <NextArrowComp nextSlide={this.nextSlide} />
          </NextArrow>
        </div>
      </div>
    )
  }
}

export default Carousel;