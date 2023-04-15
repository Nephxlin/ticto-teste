import LayoutBase from '@/components/template/LayoutBase'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutBase>
        <Component {...pageProps} />
      </LayoutBase>
    </>
  )
}
