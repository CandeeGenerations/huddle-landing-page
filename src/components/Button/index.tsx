/** @jsx jsx */
import {css, jsx} from '@emotion/core'

export enum ButtonColor {
  Default,
  White,
}

export interface ButtonProps {
  color?: ButtonColor
  large?: boolean
  text: string
}

const Button = (props: ButtonProps): JSX.Element => {
  const defaultStyle = css`
    border: 0;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    padding: 15px 50px;
    border-radius: 50px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  `
  const defaultColorStyle = css`
    color: #fff;
    background-color: #fe52c0;
  `
  const whiteColorStyle = css`
    background-color: #fff;
  `
  const largeStyle = css`
    font-size: 18px;
    padding: 25px 75px;
  `

  const styles = [
    defaultStyle,
    props.color === ButtonColor.White ? whiteColorStyle : defaultColorStyle,
  ]

  if (props.large) {
    styles.push(largeStyle)
  }

  return <button css={styles}>{props.text}</button>
}

export default Button
