import styles from '@/styles/Home.module.scss'
import CardHandleClientBalance from '@/components/molecules/CardHandleClientBalance'
import ModalTransactionForm from '@/components/organisms/ModalTransactionForm'
import { useState } from 'react'
import TableTransactionList from '@/components/organisms/TableTransactionList'
import { useTransactionContext } from '@/context/serealize/Transaction/TransactionProvider'

export default function Home() {
  const { amountTransactionsValues } = useTransactionContext()

  return (
    <div>
      <div className={styles.cardsContainer}>
        <CardHandleClientBalance
          type="INPUT_BALANCE"
          value={amountTransactionsValues.inTotal}
        />
        <CardHandleClientBalance
          type="OUTPUT_BALANCE"
          value={amountTransactionsValues.outTotal}
        />
        <CardHandleClientBalance
          type="CURRENT_BALANCE"
          value={amountTransactionsValues.difference}
        />
      </div>
      <TableTransactionList />
      <ModalTransactionForm />
    </div>
  )
}
