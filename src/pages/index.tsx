import Head from 'next/head';
import { GetStaticProps } from 'next';
import { api } from '../services/api';

import formatPublishedAt from '../utils/formatPublishedAt';

import Welcome from './Welcome';
import About from './About';
import Carousel from '../components/Highlights/Carousel';
// import Works from './Works';
// import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

import { Container } from '../styles/home.styles';

type Work = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
};

type HomeProps = {
  works: Work[];
};

const Home: React.FC<HomeProps> = ({ works }: HomeProps) => {
  return (
    <Container>
      <Head>
        <title>DevTrails - Ricardo</title>
      </Head>
      <Welcome />
      <About />
      <Carousel works={{ ...works }} lenghtData={works.length} />
      {/* <Works />
      <Blog /> */}
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('works', {
    params: {
      _limit: 6
    }
  });

  const works = data.map(work => {
    return {
      id: work.id,
      title: work.title,
      subtitle: work.subtitle,
      description: work.description,
      thumbnail: work.thumbnail,
      link: work.link,
      publishedAt: formatPublishedAt(work.published_at)
    };
  });

  return {
    props: {
      works
    },
    revalidate: 60 * 60 * 24 // a página será cacheada diariamente
  };
};
