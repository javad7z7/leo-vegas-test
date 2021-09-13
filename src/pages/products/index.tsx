import { ProductsList } from 'containers/products/list/index'
import { ProductModal } from 'containers/products/modal'
import { Fragment } from 'react'

const Products = (): JSX.Element => {
  return (
    <Fragment>
      <ProductsList />
      <ProductModal />
    </Fragment>
  )
}

export default Products
