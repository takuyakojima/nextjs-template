import type { AppProps } from 'next/app'
import React from 'react'
import '@/styles/normalize.css'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
