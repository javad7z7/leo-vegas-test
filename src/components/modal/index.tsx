import { FC, memo } from 'react'
import { ModalCore } from './modal-core'

export const Modal: FC<IModal> = memo((props) => {
  return <ModalCore {...props} />
})
