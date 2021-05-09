import { NavBar, Footer } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
