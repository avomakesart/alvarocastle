import React from 'react';
import { firstCharToUppercase } from '../../../../utils';

interface RepositoriesProps {
  repoData: any;
}

export const Repositories: React.FC<RepositoriesProps> = ({ repoData }) => {
  return (
    <section className='text-white body-font'>
      <div className='container px-8 pt-48 mx-auto lg:px-4'>
        <h1 className='text-7xl text-white font-extralight tracking-wide'>
          Other Cool Projects
        </h1>
        <div className='animate__animated animate__fadeIn flex flex-wrap text-left mt-16'>
          {repoData.slice(0, 6).map((res: any) => (
            <div className='px-8 py-6 lg:w-1/3 md:w-full' key={res.id}>
              <div className='flex flex-row items-center mb-3'>
                <div className='inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 mr-3 text-white rounded-full'>
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
                      d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                    />
                  </svg>
                </div>
                <h2 className='mb-3 text-lg font-semibold text-white lg:text-2xl title-font'>
                  {firstCharToUppercase(res.name)}
                </h2>
                <div className='mx-auto -mt-10'>
                  <a
                    href={res.html_url}
                    className='inline-flex items-center font-semibold text-white mt-9 md:mb-2 lg:mb-0 hover:text-gray-400 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-10'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <p className='mb-4 text-base leading-relaxed'>
                {res.description}
              </p>
              <p className='mt-4 text-base font-bold underline leading-relaxed'>
                {res.language}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
