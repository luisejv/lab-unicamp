import '../styles/globals.css';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import AOS from 'aos';
import '../styles/globals.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
