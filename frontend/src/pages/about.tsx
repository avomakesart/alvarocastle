import Head from 'next/head';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import { Certificates, Container, Experiences, Skills } from '../components';
import { withApollo } from '../utils';

interface aboutProps {}

const About: React.FC<aboutProps> = ({}) => {
  return (
    <>
      <Head>
        <title>AC - About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container title='About'>
        <div
          id='intro'
          className='flex flex-col md:flex-row justify-center items-center'
        >
          <img
            src='https://res.cloudinary.com/bluecatencode/image/upload/v1619416736/IMG_1713_n5ssbx.png'
            alt='profile'
            className='max-full w-72'
          />
          <p className='animate__animated animate__fadeIn max-w-xl mt-10 md:mt-0 md:ml-16 text-2xl text-left'>
            I am a product focused software engineer based in Guadalajara, Jalisco. I create web
            apps and cool software, focused on the best design patterns and
            creating stories visually, through enjoyable and meaningful
            experiences.
          </p>
        </div>

        <div className='mt-52'>
          <h1 className='text-5xl text-white font-semibold text-left tracking-wide mb-16'>
            Professional Skills
          </h1>
          <Skills />
        </div>

        <div className='mt-32'>
          <h1 className='text-5xl text-white font-semibold text-left tracking-wide mb-16'>
            Experience
          </h1>
          <Experiences />
        </div>

        <div className='mt-32'>
          <h1 className='text-5xl text-white font-semibold text-left tracking-wide mb-16'>
            Certificates
          </h1>
          <Certificates />
        </div>

        <div className='mt-32 flex justify-center'>
          <h1 className='cursor-pointer text-5xl text-white text-center mb-16 border-b-4 border-white w-72'>
            <NextLink href='/contact'>Contact me</NextLink>
          </h1>
        </div>
      </Container>
    </>
  );
};

export default withApollo({ ssr: true })(About);
