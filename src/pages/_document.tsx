import { Html, Head, Main, NextScript } from 'next/document'
import LayoutBase from '@/components/template/LayoutBase'
import { Poppins, Roboto } from 'next/font/google'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
