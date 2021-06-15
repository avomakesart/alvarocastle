import React, { CSSProperties, ReactNode } from 'react';

interface ContainerProps {
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  title,
  children,
  style,
}) => {
  return (
    <div
      className='container w-full max-w-full pl-4 pr-4 md:p-20 m-4 mx-auto mt-16 text-center bg-transparent h-auto'
      style={style}
    >
      <h1 className='text-4xl md:text-7xl text-white font-extralight tracking-wide'>
        {title}
      </h1>
      <div className='mt-20'>{children}</div>
    </div>
  );
};
