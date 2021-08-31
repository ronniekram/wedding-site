import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/style.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <title>Stacy & Jason - October 9th, 2021</title>
      </Head>

      <Component {...pageProps} />

    </Layout>
  );
};

export default MyApp;
