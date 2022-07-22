import Header from '../components/header'
import 'styles/tailwind.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <div className="py-28">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
