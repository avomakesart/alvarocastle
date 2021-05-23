import React, { ReactNode } from 'react';

interface CardFormProps {
  children: ReactNode | ReactNode[]; 
}

export const CardForm: React.FC<CardFormProps> = ({ children }) => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-8 pb-24 mx-auto lg:px-4'>
        <div className='flex flex-col w-10/12 p-8 mx-auto mt-10 border rounded-lg md:ml-auto md:mt-0'>
          {children}
        </div>
      </div>
    </section>
  );
};
