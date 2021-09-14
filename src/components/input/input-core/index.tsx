import { FC, memo } from 'react'
import { inputCoreActualValue, inputCoreClassName } from './helper'

export const InputCore: FC<IInput> = memo((props): JSX.Element => {
  return (
    <input
      data-testid="input-core"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={inputCoreActualValue(props.value)}
      onChange={props.onChange}
      className={inputCoreClassName(props.error, props.withError, props.size)}
    />
  )
})
