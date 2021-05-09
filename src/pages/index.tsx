import React from 'react';
import Head from 'next/head';

import Welcome from './Welcome';
import About from './About';
import Highlights from './Highlights';
import Works from './Works';

import { Container } from '../styles/home.styles';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>DevTrails - Ricardo</title>
      </Head>
      <Welcome />
      <About />
      <Highlights />
      <Works />
      <Blog />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
