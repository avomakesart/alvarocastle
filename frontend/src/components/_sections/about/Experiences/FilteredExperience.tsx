import React, { useState } from 'react';
import { Card, Tab } from '../../..';

interface FilteredExperienceProps {
  loading?: boolean;
  data?: any;
  error?: any;
  tabLabel: string;
  tabName: string;
  company: string;
}

export const FilteredExperience: React.FC<FilteredExperienceProps> = ({
  loading,
  data,
  error,
  tabLabel,
  tabName,
  company,
}) => {
  const [showMoreExp, setShowMoreExp] = useState(false);

  return (
    <Tab label={tabLabel} tabName={tabName}>
      <Card>
        {!loading && !data && (
          <div className='flex flex-col'>
            <h3>You got query failed for some reason</h3>
            <p>{error?.message}</p>
          </div>
        )}
        {data?.experiences.experience
          .filter((exp: any) => exp.company === company)
          .map((exp: any) => (
            <div
              className='animate__animated animate__fadeIn w-full mt-6 text-left'
              key={exp.id}
            >
              <h1 className='mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-black'>
                {exp.company}
              </h1>
              <p className='text-sm leading-relaxed text-gray-400'>
                {exp.position}
              </p>
              <p className='text-xs leading-relaxed text-gray-400'>
                period {exp.period}
              </p>

              <p className='mt-4 text-sm leading-relaxed tracking-tighter text-gray-500 dark:text-gray-100'>
                {exp.description.length > 300 ? (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: exp.description.substring(0, 400),
                      }}
                    />

                    {!showMoreExp ? (
                      <button
                        onClick={() => setShowMoreExp(true)}
                        className='px-4 py-2 mt-12 flex items-center text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl xl:mt-4'
                      >
                        Show More
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='ml-2'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path
                            stroke='none'
                            d='M0 0h24v24H0z'
                            fill='none'
                          ></path>
                          <line x1='5' y1='12' x2='19' y2='12'></line>
                          <line x1='15' y1='16' x2='19' y2='12'></line>
                          <line x1='15' y1='8' x2='19' y2='12'></line>
                        </svg>
                      </button>
                    ) : (
                      <>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: exp.description.substring(400, 2000),
                          }}
                        />
                        <button
                          onClick={() => setShowMoreExp(false)}
                          className='px-4 py-2 mt-12 flex items-center text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl xl:mt-4'
                        >
                          Show Less
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='ml-2'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path
                              stroke='none'
                              d='M0 0h24v24H0z'
                              fill='none'
                            ></path>
                            <line x1='5' y1='12' x2='19' y2='12'></line>
                            <line x1='15' y1='16' x2='19' y2='12'></line>
                            <line x1='15' y1='8' x2='19' y2='12'></line>
                          </svg>
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: exp.description.substring(0, 200),
                      }}
                    />
                    {showMoreExp ? (
                      <button
                        onClick={() => setShowMoreExp(true)}
                        className='px-4 py-2 mt-12 flex items-center text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl xl:mt-4'
                      >
                        Show More
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='ml-2'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path
                            stroke='none'
                            d='M0 0h24v24H0z'
                            fill='none'
                          ></path>
                          <line x1='5' y1='12' x2='19' y2='12'></line>
                          <line x1='15' y1='16' x2='19' y2='12'></line>
                          <line x1='15' y1='8' x2='19' y2='12'></line>
                        </svg>
                      </button>
                    ) : null}

                    {showMoreExp && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: exp.description.substring(300, 1234444),
                        }}
                      />
                    )}
                  </>
                )}
              </p>
            </div>
          ))}
      </Card>
    </Tab>
  );
};
