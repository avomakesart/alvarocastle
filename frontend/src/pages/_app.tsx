import { Footer } from '../components';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
