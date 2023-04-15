import { InputHTMLAttributes, ReactNode } from "react";
import style from './TextInput.module.scss'
export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> { }

export default function TextInput(props: TextInputProps) {
  return (
    <input
      className={style.inputDefault}
      {...props}
    />
  );
}