import React, { CSSProperties, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div
      style={style}
      className='lg:col-end-7 col-span-full lg:col-span-1 h-full'
    >
      <div className='flex flex-wrap h-full p-8 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 sm:py-5 xl:px-10 '>
        {children}
      </div>
    </div>
  );
};
