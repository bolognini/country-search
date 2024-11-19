import Head from 'next/head';
import { CountrySearch } from '../components/CountrySearch';

const Home = () => {
  return (
    <div data-testid="home" css={styles.container}>
      <Head>
        <title>Country Search</title>
        <meta name="description" content="Country Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={styles.main}>
        <h1 style={{ marginBottom: 16, color: 'var(--bold)' }}>
          Country Search
        </h1>
        <CountrySearch />
      </main>
    </div>
  );
};

const styles = {
  container: {
    padding: '0 2rem',
    color: 'var(--text)',
  },
  main: {
    height: '100vh',
    padding: '4rem 0',
    display: 'flex',
    flexDirection: 'column' as const,
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
