import '@/styles/globals.scss'
import '@/styles/header.scss'
import '@/styles/welcome.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
