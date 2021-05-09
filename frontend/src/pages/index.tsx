import Head from 'next/head';
import React from 'react';
import { Hero } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <Head>
        <title>Alvaro Castle</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};
export default Home;
