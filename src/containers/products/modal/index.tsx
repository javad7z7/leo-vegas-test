import { memo } from 'react'
import { useUi } from 'hooks/use-ui'
import { Modal } from 'components/modal'

import { ProductUpdate } from '../update'
import { ProductBuy } from '../buy'
import { ProductReserve } from '../reserve'
import { ProductRefill } from '../refill'
import { ProductDetails } from '../details'

export const ProductModal = memo(() => {
  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  switch (dialog.type) {
    case 'product-update':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header="Edit product"
          withHeader
        >
          <ProductUpdate />
        </Modal>
      )
    case 'product-buy':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header="Buy product"
          withHeader
        >
          <ProductBuy />
        </Modal>
      )
    case 'product-reserve':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header="Reserve product"
          withHeader
        >
          <ProductReserve />
        </Modal>
      )
    case 'product-refill':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header="Refill product"
          withHeader
        >
          <ProductRefill />
        </Modal>
      )
    case 'product-details':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null, data: null })}
          header="Product details"
          withHeader
        >
          <ProductDetails />
        </Modal>
      )

    default:
      return null
  }
})
