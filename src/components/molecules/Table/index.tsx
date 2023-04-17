'use-client'
import { ReactElement } from 'react'
import styles from './Table.module.scss'

interface IColumn {
  name: string
  label?: string
}

interface ITableProps {
  columns: IColumn[]
  children?: ReactElement[]
}
export default function Table({ columns, children }: ITableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.headerTable}>
        <tr>
          {columns.map((column) => (
            <th key={column.name} suppressHydrationWarning>
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
