/** @jsxImportSource @emotion/react */
import Head from 'next/head';

const Home = () => {
  return (
    <div data-testid="home" css={styles.container}>
      <Head>
        <title>Cool Boilerplate</title>
        <meta name="description" content="Cool Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={styles.main}>
        <h1 css={styles.title}>Cool Boilerplate ⭐️</h1>
      </main>
    </div>
  );
};

const styles = {
  container: {
    padding: '0 2rem',
  },
  main: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
  },
};

export default Home;
