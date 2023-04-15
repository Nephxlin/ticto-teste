import { Roboto, Poppins } from 'next/font/google'
import styles from './LayoutBase.module.scss'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'
import Header from '@/components/organisms/Header'
import { ModalProvider } from '@/context/Modal/modalProvider'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-Roboto' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-Poppins' })

export default function LayoutBase(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
  return (
    <div className={`${roboto.variable + ' ' + poppins.variable}`}>
      <ModalProvider>
        <Header />
        <main className={styles.mainContent}>
          {props.children}
          <div id="portal" />
        </main>
      </ModalProvider>
    </div >
  )
}