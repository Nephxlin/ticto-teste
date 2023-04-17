import { InputHTMLAttributes, ReactNode } from 'react'
import style from '../styles/Input.module.scss'
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput(props: TextInputProps) {
  return <input className={style.inputDefault} {...props} />
}
