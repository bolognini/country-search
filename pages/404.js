/** @jsxImportSource @emotion/react */
import Link from 'next/link';

const FourOhFour = () => {
  return (
    <div css={styles.container}>
      <main css={styles.main}>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a style={styles.link}>Go back home</a>
        </Link>
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
  link: {
    margin: '20px 0 0 0',
    lineHeight: 1.15,
    textAlign: 'center',
    color: 'orange',
  },
};

export default FourOhFour;
