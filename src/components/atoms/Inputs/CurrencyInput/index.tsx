import { NumericFormatProps, NumericFormat } from 'react-number-format'
import { useState } from 'react'

import style from '../styles/Input.module.scss'

interface CurrencyInputProps extends NumericFormatProps {
  placeholder?: string
}

export default function CurrencyInput(props: CurrencyInputProps) {
  const [value, setValue] = useState('')

  function handleChange(e: any) {
    setValue(value)
  }
  return (
    <NumericFormat
      {...props}
      placeholder={props.placeholder}
      className={style.inputDefault}
      thousandSeparator={true}
      decimalScale={2}
      allowNegative={false}
      prefix={'R$ '}
      value={value}
      onChange={(e) => {
        handleChange(e.target.value)
      }}
    />
  )
}
