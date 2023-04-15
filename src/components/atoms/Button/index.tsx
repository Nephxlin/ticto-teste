import styles from './Button.module.scss'
import { ButtonHTMLAttributes, ReactElement } from "react";

type IButtonThemes = "primary" | "secondary"
type PixelLength = `${number}px`;
type IButtonWidth = "fullScreen" | PixelLength

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { // corrigir o tipo do elemento HTML aqui
  color?: IButtonThemes;
  width?: IButtonWidth
  height?: PixelLength
}

function ButtonFactory(theme: IButtonThemes, width: IButtonWidth) {
  const buttonTheme = (theme: IButtonThemes) => {
    switch (theme) {
      case 'primary':
        return styles.primaryButton
      case 'secondary':
        return styles.secondaryButton
      default:
        return styles.buttonDefault
    }
  }
  const buttonWidth = (width: IButtonWidth) => {
    if (width === "fullScreen") {
      return "100%"
    } else {
      return width
    }
  }
  const buttonStyleValues = {
    styleName: buttonTheme(theme) + " " + buttonWidth(width),
    width: buttonWidth(width)
  }
  return buttonStyleValues
}
export default function Button({ color = 'primary', width = 'fullScreen', height, ...props }: IButtonProps) {

  const buttonClassStyle = ButtonFactory(color, width)

  return (
    <button {...props} className={`${styles.buttonDefault} ${buttonClassStyle.styleName}`} style={{ width: buttonClassStyle.width, height }}>
      {props.children}
    </button>
  );
}