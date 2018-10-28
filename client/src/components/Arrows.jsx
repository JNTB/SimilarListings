import React from 'react';

const NextArrow = (props) => {
  return (
    <svg viewBox="0 0 18 18" role="img" focusable="false" style="height: 24px; width: 24px; display: block; fill: rgb(118, 118, 118);">
      <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd">
      </path>
    </svg>
  )
}

const PrevArrow = (props) => {
  return (
    <svg viewBox="0 0 18 18" role="img" focusable="false" style="height: 24px; width: 24px; display: block; fill: rgb(118, 118, 118);">
      <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd">
      </path>
    </svg>
  )
}

export default { NextArrow, PrevArrow };