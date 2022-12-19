import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const FormInput = ({ label, onChange, placeholder, id, required = false, minLength, register, errors }) => {
  if (required) {
    required = `${label} is required`
  }
  return (
    <FormControl
      isInvalid={errors[id]}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: required,
          minLength: { value: minLength, message: `Minimum length of ${label} should be ${minLength}` },
        })}
        onChange={onChange}
      />
      <FormErrorMessage>
        {errors[id] && errors[id].message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormInput