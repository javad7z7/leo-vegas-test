import { FC, memo } from 'react'
import { inputLabelClassName } from './helper'

export const InputLabel: FC<IInput> = memo(({ label, size }): JSX.Element => {
  if (label) return <label className={inputLabelClassName(size)}>{label}</label>
  else return null
})
