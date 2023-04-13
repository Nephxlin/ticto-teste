import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { Roboto, Poppins } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500', '700'], variable: '--font-Roboto' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500', '700'], variable: '--font-Poppins' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${roboto.className, poppins.className}`}>
        <Component {...pageProps} className={`${roboto.variable} ${poppins.variable}`} />
      </main>
    </>
  )
}
