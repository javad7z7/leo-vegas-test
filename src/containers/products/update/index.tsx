import { memo } from 'react'

import { Button } from 'components/button'
import { Form } from 'components/form'
import { Input } from 'components/input'

import { useProductForm } from './use-product-form'

export const ProductUpdate = memo(() => {
  const { control, onSubmit, isLoading } = useProductForm()

  return (
    <Form onSubmit={onSubmit}>
      <Input
        control={control}
        name="name"
        label="Product name"
        placeholder="Enter product name"
        className="mt-4"
        required
      />
      <Input
        control={control}
        name="stock"
        label="Product stock"
        placeholder="Enter product stock"
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
        Save Product
      </Button>
    </Form>
  )
})
