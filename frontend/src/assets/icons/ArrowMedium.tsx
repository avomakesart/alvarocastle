import React from 'react';
import 'animate.css';

interface ArrowMediumProps {
  color?: string;
  opacity?: string;
  size?: string;
  marginTop?: string;
  marginLeft?: string;
  animationIn?: string;
  animationOut?: string;
}

export const ArrowMedium: React.FC<ArrowMediumProps> = ({
  color,
  opacity,
  size,
  marginTop,
  marginLeft,
  animationIn,
  animationOut,
}) => {
  return (
    <div
      className={`text-${color}${opacity ? '-' + opacity : ''} w-${size} ${
        marginTop ? 'mt-' + marginTop : ''
      } ${marginLeft ? 'ml-' + marginLeft : ''} ${
        animationIn
          ? 'animate__animated animate__' + animationIn
          : animationOut
          ? 'animate__animated animate__' + animationOut
          : ''
      } `}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
      </svg>
    </div>
  );
};
