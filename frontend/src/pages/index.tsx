import React from 'react';
import { Hero, NavBar, Head } from '../components';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Head
        title='Alvaro Castle'
        description='Alvaro Castillo is a product
focused Software Engineer'
      />
    </>
  );
};
export default Home;
