import { useUi } from 'hooks/use-ui'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICEdit } from 'icons/edit'
import { ICShopCart } from 'icons/shop-cart'
import { ICMemory } from 'icons/memory'
import { ICPlus } from 'icons/plus'
import { ICEyeFill } from 'icons/eye-fill'
import { FC, memo } from 'react'

export const ProductsListActions: FC<{ item: any }> = memo(({ item }) => {
  const { toggleDialog } = useUi()

  return (
    <div className=" hidden group-hover:flex  items-center justify-end ">
      <Tooltip content="Refill">
        <Button
          type="button"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-refill',
              data: item.cell.row.original,
            })
          }}
        >
          <ICPlus className="text-red-500 w-7 h-7 mr-1 " />
        </Button>
      </Tooltip>

      <Tooltip content="Buy">
        <Button
          type="button"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-buy',
              data: item.cell.row.original,
            })
          }}
        >
          <ICShopCart className="text-green-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Reserve">
        <Button
          type="button"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-reserve',
              data: item.cell.row.original,
            })
          }}
        >
          <ICMemory className="text-yellow-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button
          type="button"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-update',
              data: item.cell.row.original,
            })
          }}
        >
          <ICEdit className="text-gray-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Details">
        <Button
          type="button"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'product-details',
              data: item.cell.row.original,
            })
          }}
        >
          <ICEyeFill className="text-blue-500 w-4 h-4  " />
        </Button>
      </Tooltip>
    </div>
  )
})
