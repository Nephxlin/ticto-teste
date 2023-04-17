import style from './CardHandleClientBalace.module.scss'
import ArrowUpIcon from '@/components/atoms/Icons/ArrowUpIcon'
import ArrowDownIcon from '@/components/atoms/Icons/ArrowDownIcon'
import { HTMLAttributes, HtmlHTMLAttributes } from 'react'
import { formatCurrency } from '@/utils/formatCurrency'

type ICardTypes = 'CURRENT_BALANCE' | 'INPUT_BALANCE' | 'OUTPUT_BALANCE'

function CardType(themeColor: ICardTypes) {
  switch (themeColor) {
    case 'CURRENT_BALANCE':
      return {
        theme: 'cyan',
        title: 'Saldo Total',
        icon: '',
      }
    case 'INPUT_BALANCE':
      return {
        theme: 'white',
        title: 'Entradas',
        icon: <ArrowDownIcon />,
      }
    case 'OUTPUT_BALANCE':
      return {
        theme: 'white',
        title: 'Saídas',
        icon: <ArrowUpIcon />,
      }
    default:
      return {
        theme: 'white',
        title: 'Carregando',
        icon: '',
      }
  }
}

interface ICardHandleClientBalanceTypes {
  type: ICardTypes
  value: number
}

type ICardTheme = 'white' | 'cyan' | String

function getThemeStyled(theme: ICardTheme) {
  switch (theme) {
    case 'cyan':
      return style.cyanTheme
    case 'white':
      return style.whiteTheme
    default:
      return style.whiteTheme
  }
}

export default function CardHandleClientBalance({
  type,
  ...props
}: ICardHandleClientBalanceTypes) {
  const cardDataType = CardType(type)

  return (
    <div
      {...props}
      className={`${
        style.cardBoxDefaultStyle + ' ' + getThemeStyled(cardDataType.theme)
      }`}
    >
      <div className={style.cardBoxHeadInfoContent}>
        <div>
          <span className={style.cardTitle}>{cardDataType.title}</span>
        </div>
        {cardDataType.icon}
      </div>
      <div>
        <span className={style.cardValue}>{formatCurrency(props.value)}</span>
      </div>
    </div>
  )
}
