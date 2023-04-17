import styles from './ButtonRadio.module.scss'
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

type IButtonThemes = 'primary' | 'secondary' | 'tertiary'
type PixelLength = `${number}px`
type IButtonWidth = 'fullScreen' | PixelLength

interface IButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  color?: IButtonThemes
  width?: IButtonWidth
  height?: PixelLength
}
export interface IButtonIcon {
  children: ReactNode
}
function ButtonIcon({ children }: IButtonIcon) {
  return <div className={styles.buttonIcon}>{children}</div>
}

function ButtonText({ ...props }: IButtonProps) {
  return (
    <li className={`${styles.buttonDefault + ' ' + styles._Radiobody}`}>
      <input
        checked={props.defaultChecked}
        value={props.value}
        type="radio"
        id={props.id}
        name={props.name}
        className={styles.ButtonRadio}
      />
      <label htmlFor={props.id} className={styles.radioLabel}>
        {props.children}
      </label>
    </li>
  )
}

export const ButtonRadio = {
  Root: ButtonText,
  Icon: ButtonIcon,
}
