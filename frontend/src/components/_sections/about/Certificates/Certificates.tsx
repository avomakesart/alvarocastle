import { format } from 'date-fns';
import React from 'react';
import { Card, Image } from '../../..';
import { useCertificatesQuery } from '../../../../generated/graphql';
import { Loader } from '../../../Loader/Loader';

interface CertificatesProps {}

export const Certificates: React.FC<CertificatesProps> = ({}) => {
  const { data, error, loading, fetchMore, variables } = useCertificatesQuery({
    variables: { limit: 50, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {!loading && !data && (
          <Card>
            <div className='flex flex-col'>
              <h3>You got query failed for some reason</h3>
              <p>{error?.message}</p>
            </div>
          </Card>
        )}

        {!data && loading ? (
          <Loader />
        ) : (
          data?.certificates.certificates
            .slice()
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((cert) => (
              <div key={cert.id}>
                <Card key={cert.id}>
                  <div className='w-full mt-6 text-left animate__animated animate__fadeIn'>
                    <Image width='16' src={cert.companyImg} alt={cert.title} />
                    <h1 className='mt-auto mb-2 font-sans text-2xl font-black text-gray-700 tracking-tighter'>
                      {cert.title}
                    </h1>
                    <p className='text-sm leading-relaxed text-gray-400'>
                      {cert.issuer}
                    </p>
                    <p className='text-xs leading-relaxed text-gray-400'>
                      Expedition date: {format(new Date(cert.date), 'LLL y')}
                    </p>
                    <p className='mt-4 text-sm leading-relaxed tracking-tighter text-gray-500 dark:text-gray-100'>
                      Cert ID: <span>{cert.certId}</span>
                    </p>
                    {cert.certUrl && (
                      <button
                        onClick={() => window.open(cert.certUrl)}
                        className='px-4 py-2 mt-12 flex items-center text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl xl:mt-4'
                      >
                        View certificate
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
                    )}
                  </div>
                </Card>
              </div>
            ))
        )}
      </div>
      <div className='flex justify-center mx-auto'>
        {data && data.certificates.hasMore && (
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor:
                    data.certificates.certificates[
                      data.certificates.certificates.length - 1
                    ].createdAt,
                },
              });
            }}
            className='bg-transparent border-2 border-white text-white p-4 m-8 mx-auto rounded shadow-lg focus:outline-none hover:bg-white hover:text-black'
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};
