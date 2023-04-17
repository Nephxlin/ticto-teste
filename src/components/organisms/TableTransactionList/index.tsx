import TrashIcon from '@/components/atoms/Icons/feather-trash'
import Table from '@/components/molecules/Table'
import { useTransactionContext } from '@/context/serealize/Transaction/TransactionProvider'
import { formatCurrency } from '@/utils/formatCurrency'

import style from './TableTransactionList.module.scss'

const TableTransactionList = () => {
  const { transactions, deleteTransaction } = useTransactionContext()
  const TableController = {
    columns: [
      { name: 'Descrição' },
      { name: 'Valor' },
      { name: 'Categoria' },
      { name: 'Data' },
      { name: '' },
    ],
  }

  if (!transactions) {
    return null
  }

  return (
    <Table columns={TableController.columns}>
      {transactions &&
        transactions.map((e) => (
          <tr key={e.transactionName}>
            <td>{e.transactionName}</td>
            <td
              className={
                e.transactionType == 'in'
                  ? style.dataInValue
                  : style.dataOutValue
              }
            >
              {formatCurrency(e.price)}
            </td>
            <td>{e.category}</td>
            <td>{e.timeStamp}</td>
            <td onClick={() => deleteTransaction(e.id)}>
              <TrashIcon />
            </td>
          </tr>
        ))}
    </Table>
  )
}

export default TableTransactionList
