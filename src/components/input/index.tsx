import { FC, memo } from 'react'
import { InputLabel } from './input-label'
import { InputCore } from './input-core'

export const Input: FC<IInput> = memo((props): JSX.Element => {
  return (
    <div className={`w-full col-start relative ${props.className}`}>
      <InputLabel {...props} />
      <InputCore {...props} />
    </div>
  )
})
