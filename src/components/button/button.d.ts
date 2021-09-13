interface IButton {
  className?: string
  children?: JSX.Element | string | number
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  icon?: boolean
  loading?: boolean
  id?: string | number
  onClick?: MouseEventHandler<HTMLButtonElement>
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>
}
