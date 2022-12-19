import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { Controller } from 'react-hook-form'

const FormInput = ({ label, placeholder, id, required = false, minLength, errors = {}, control }) => {
  if (required) {
    required = `${label} is required`
  }
  return (
    <Controller
      control={control}
      name={id}
      rules={{
        required: required
      }}
      render={({ field: { onChange, onBlur, value, ref, ...rest } }) => (
        <FormControl isInvalid={errors[id]}>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <Input
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
            id={id}
            {...rest}
          />
          <FormErrorMessage>
            {errors[id] && errors[id].message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default FormInput