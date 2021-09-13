import { Fragment, memo } from 'react'
import { Input } from 'components/input'

import { useProductDetails } from './use-product-details'
import { LoaidngBounce } from 'components/loading'

export const ProductDetails = memo(() => {
  const { data, isLoading } = useProductDetails()

  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      {isLoading ? (
        <LoaidngBounce size="small" />
      ) : (
        <Fragment>
          <Input
            label="Name"
            disabled
            value={data && data.name ? data.name : null}
          />
          <Input
            label="Stock number"
            className="mt-4"
            disabled
            value={data && data.stock ? data.stock.toString() : null}
          />
          {data &&
            data.reservations &&
            data.reservations.map((item) => (
              <Input
                key={item.id}
                label="Reservations"
                className="mt-4"
                disabled
                value={item && item.amount ? item.amount.toString() : null}
              />
            ))}
        </Fragment>
      )}
    </div>
  )
})
