import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { Error } from 'components/error'

import { InputLabel } from './input-label'
import { InputCore } from './input-core'

export const Input: FC<IInput> = memo((props) => {
  const { required, error, className, validation, control, name, number } =
    props
  const { validate } = useValidation({
    required,
    validation,
    number,
  })

  if (control)
    return (
      <Controller
        name={name}
        rules={{ validate }}
        control={control}
        render={({
          field: { onChange: fieldChange, value: fieldValue, ref: fieldRef },
          fieldState: { error: fieldError },
        }) => (
          <div className={`w-full col-start relative ${className}`}>
            <InputLabel {...props} />
            <InputCore
              validate={validate}
              fieldChange={fieldChange}
              fieldValue={fieldValue}
              fieldError={fieldError}
              fieldRef={fieldRef}
              {...props}
            />

            <Error error={fieldError} className="absolute top-[78px] left-0" />
          </div>
        )}
      />
    )
  else
    return (
      <div className={`w-full col-start relative ${className}`}>
        <InputLabel {...props} />
        <InputCore validate={validate} {...props} />
        <Error error={error} />
      </div>
    )
})
