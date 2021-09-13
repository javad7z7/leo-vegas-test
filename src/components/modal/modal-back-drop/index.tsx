import { FC, memo } from 'react'

export const ModalBackDrop: FC<IModal> = memo(({ onClose }) => {
  return (
    <div
      slot="back-drop"
      className="fixed inset-0 bg-black opacity-80 z-40"
      onClick={onClose}
    />
  )
})
