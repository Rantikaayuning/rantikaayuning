import React from 'react';
import Profile from '../assets/profile.jpg';

const SvgComponent = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
    >
      <mask id="prefix__a">
        <path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486z" />
        <image className="home__blob-img" xlinkHref={Profile}/>
      </g>
    </svg>
  )
}

export default SvgComponent;