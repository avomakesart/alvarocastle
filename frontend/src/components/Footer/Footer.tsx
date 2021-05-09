import React from 'react';
import jsonData from '../../../package.json';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className='mt-4 body-font'>
        <div className='container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row'>
          <p className='text-sm text-center text-gray-200 sm:text-left '>
            Designed & Builded by
            <span
              className='ml-2 cursor-pointer mr-1'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/alvarocastle/',
                  '__blank'
                )
              }
            >
              Alvaro Castillo
            </span>
            © 2020
          </p>
          <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
 
            <a className='ml-4 text-white hover:text-blue-500'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a className='ml-4 text-white hover:text-blue-500'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <p className="text-sm text-center text-gray-200 ml-4 sm:text-left"> v {jsonData.version}</p>
          </span>
        </div>
      </footer>
    </>
  );
};
