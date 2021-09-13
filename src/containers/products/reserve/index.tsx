import { memo } from 'react'

import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'

import { useProducReserve } from './use-product-reserve'

export const ProductReserve = memo(() => {
  const { control, onSubmit, isLoading } = useProducReserve()

  return (
    <Form onSubmit={onSubmit}>
      <Input
        control={control}
        name="amount"
        label="Number of products"
        placeholder="Enter number of products"
        className="mt-8"
        required
        number
      />
      <Button
        loading={isLoading}
        type="submit"
        icon
        className=" w-full h-12 my-10 text-white shadow-blue bg-secondary dark:bg-primary"
      >
        Reserve Product
      </Button>
    </Form>
  )
})
