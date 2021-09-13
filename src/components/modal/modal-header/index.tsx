import { FC, memo } from 'react'
import { Text } from 'components/text'
import { ICClose } from 'icons/close'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'

export const ModalHeader: FC<IModal> = memo(
  ({ header, onClose, withHeader }) => {
    if (withHeader)
      return (
        <div className=" w-full row-between pt-6 pb-2 px-8" slot="header">
          {header ? (
            <Text className="text-gray-600" size="title">
              {header}
            </Text>
          ) : (
            <div />
          )}
          {onClose && (
            <Tooltip content="Close">
              <Button icon className="peer" onClick={onClose}>
                <ICClose role="close" className="w-10 h-10 text-gray-600" />
              </Button>
            </Tooltip>
          )}
        </div>
      )
    else return null
  }
)
