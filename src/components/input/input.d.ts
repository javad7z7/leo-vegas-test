interface IInput {
  className?: string
  label?: string
  value?: string | string[]
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'date'
  error?: string
  name?: string
  id?: string
  required?: boolean
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  withError?: boolean
  validate?: Function
  validation?: Function
  onChange?: ChangeEventHandler<HTMLInputElement>
  control?: any
  fieldChange?: ChangeEventHandler<HTMLInputElement>
  fieldValue?: string
  fieldError?: any
  fieldRef?: any
  number?: boolean
}
