import React from 'react';
import styled from 'styled-components';
import stylr from './styles/Arrows.css';

export const PrevArrow = styled.div`
  position: absolute;
  display: block;
  padding: 0px;
  width: 24px;
  box-sizing: border-box;
  left: -32px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
  visibility: ${(props) => props.hidden ? 'hidden' : 'visible'};
`

export const NextArrow = styled.div`
  position: absolute;
  display: block;
  padding: 0px;
  width: 24px;
  box-sizing: border-box;
  right: -32px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
  visibility: ${(props) => props.hidden ? 'hidden' : 'visible'};
`

export const PrevArrowComp = (props) => (
  <div onClick={() => props.prevSlide()}>
    <span className={stylr.span} >
      <button type="button" className={stylr.button}>
        <svg 
          viewBox="0 0 18 18" 
          role="img" 
          focusable="false" 
          className={stylr.svg}>
          <path 
            d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" 
            fillRule="evenodd">
          </path>
        </svg>
      </button>
    </span>
  </div>
)

export const NextArrowComp = (props) => (
  <div onClick={() => props.nextSlide()}>
    <span className={stylr.span}>
      <button type="button" className={stylr.button}>
        <svg 
          viewBox="0 0 18 18" 
          role="img" 
          focusable="false" 
          className={stylr.svg}>
          <path 
            d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" 
            fillRule="evenodd">
          </path>
        </svg>
      </button>
    </span>
  </div>
)