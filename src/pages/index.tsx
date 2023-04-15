import styles from '@/styles/Home.module.scss'
import CardHandleClientBalance from '@/components/molecules/CardHandleClientBalance'
import Table from '@/components/organisms/Table'
import TrashIcon from '@/components/atoms/Icons/feather-trash'
import ModalTransactionForm from '@/components/organisms/ModalTransactionForm'
import { useState } from 'react'

export default function Home() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false)

  const TableController = {
    columns: [
      { name: 'Descrição' },
      { name: 'Valor' },
      { name: 'Categoria' },
      { name: 'Data' },
      { name: '' }],
    data: [
      { id: 1, description: 'Curso de NextJS', value: 'R$ 899,00', category: 'Educação', data: '12/02/2022 às 13h24' },
      { id: 2, description: 'Curso de NextJS', value: 'R$ 899,00', category: 'Educação', data: '12/02/2022 às 13h24' },
      { id: 3, description: 'Curso de NextJS', value: 'R$ 899,00', category: 'Educação', data: '12/02/2022 às 13h24' },
    ]
  }

  return (
    <div>
      <div className={styles.cardsContainer} >
        <CardHandleClientBalance type='INPUT_BALANCE' />
        <CardHandleClientBalance type='OUTPUT_BALANCE' />
        <CardHandleClientBalance type='CURRENT_BALANCE' />
      </div>

      <Table columns={TableController.columns} >
        <>
          {TableController.data.map((e) => (
            <tr key={e.id}>
              <td>{e.description}</td>
              <td>{e.value}</td>
              <td>{e.category}</td>
              <td>{e.data}</td>
              <td><TrashIcon /></td>
            </tr>
          ))}
        </>
      </Table>
      <ModalTransactionForm />
    </div>
  )
}
