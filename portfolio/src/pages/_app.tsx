import '@/styles/globals.css'
import "@/styles/first.css"
import "@/styles/second.css"
import "@/styles/wave.css"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
