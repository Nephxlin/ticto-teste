import {
  ICalculateTransactionResult,
  calculateTransactionData,
} from '@/utils/transactionCalculator'
import { createContext, useContext, useEffect, useState } from 'react'

interface ITransactionData {
  transactionName: string
  transactionType: string
  price: number
  category: string
  timeStamp: number
  id: string
}

interface ITransactionsContext {
  amountTransactionsValues: ICalculateTransactionResult
  transactions: ITransactionData[]
  createTransaction: (
    transaction: Omit<ITransactionData, 'id' | 'timeStamp'>
  ) => void
  readTransaction: (id: string) => ITransactionData | undefined
  deleteTransaction: (id: string) => void
}

const TransactionsContext = createContext<ITransactionsContext>({
  amountTransactionsValues: {
    inTotal: 0,
    outTotal: 0,
    difference: 0,
  },
  transactions: [],
  createTransaction: () => { },
  readTransaction: () => undefined,
  deleteTransaction: () => { },
})

export const useTransactions = () => useContext(TransactionsContext)

const TRANSACTIONS_STORAGE_KEY = 'transactions'

const TransactionsProvider = (props: { children: React.ReactNode }) => {
  const [transactions, setTransactions] = useState<ITransactionData[]>([])
  const [amountTransactionsValues, setAmountTransactionsValues] =
    useState<ICalculateTransactionResult>({
      inTotal: 0,
      outTotal: 0,
      difference: 0,
    })

  useEffect(() => {
    const storedTransactions = localStorage.getItem(TRANSACTIONS_STORAGE_KEY)
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions))
    }
  }, [])

  useEffect(() => {
    const transactionValues = calculateTransactionData(
      transactions.map((e) => {
        const type = e.transactionType
        const value = e.price
        return {
          type,
          value,
        }
      })
    )
    setAmountTransactionsValues(transactionValues)
  }, [transactions])

  const createTransaction = (
    transaction: Omit<ITransactionData, 'id' | 'timeStamp'>
  ) => {
    const id = Date.now().toString()
    const timeStamp = Date.now()
    const newTransaction = { ...transaction, id, timeStamp }
    localStorage.setItem(
      TRANSACTIONS_STORAGE_KEY,
      JSON.stringify([...transactions, newTransaction])
    )
    setTransactions([...transactions, newTransaction])
  }

  const readTransaction = (id: string) =>
    transactions.find((transaction) => transaction.id === id)

  const deleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(
      (existingTransaction) => existingTransaction.id !== id
    )
    localStorage.setItem(
      TRANSACTIONS_STORAGE_KEY,
      JSON.stringify([updatedTransactions])
    )
    setTransactions(updatedTransactions)
  }

  const contextValue: ITransactionsContext = {
    amountTransactionsValues,
    transactions,
    createTransaction,
    readTransaction,
    deleteTransaction,
  }

  return (
    <TransactionsContext.Provider value={contextValue}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider

export const useTransactionContext = () => {
  const context = useContext(TransactionsContext)
  return context
}
