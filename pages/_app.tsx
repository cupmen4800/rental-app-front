import Header from 'components/header';
import Footer from 'components/footer';
import 'styles/tailwind.scss';
import type { AppProps } from 'next/app';
import Bottom_navbar from 'components/bottom_navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen relative box-border pb-44 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Header />
      <div className="w-full py-2 md:py-28">
        <Component {...pageProps} />
      </div>
      <Footer />
      <Bottom_navbar />
    </div>
  );
}

export default MyApp;
