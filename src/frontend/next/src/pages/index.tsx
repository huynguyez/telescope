import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Posts from '../components/Posts/Posts';

const Home = () => {
  return (
    <>
      <Head>
        <title>Telescope</title>
        <meta property="og:title" content="Telescope" key="title" />
      </Head>

      <Banner />
      <BackToTopButton />
      <main className="main">
        <Posts />
      </main>
    </>
  );
};

export default Home;
