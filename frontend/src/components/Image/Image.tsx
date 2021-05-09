import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, width }) => {
  return <img src={src} alt={alt} className={`max-w-full w-${width}`} />;
};
