import React from 'react'
import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const FormTextarea = ({ id, label, control, errors, required, rules }) => {
    if (required) {
        required = `${label} is required`
    }
    return (
        <Controller
            control={control}
            name={id}
            rules={{
                required: required,
                ...rules
            }}
            render={({ field: { onChange, onBlur, value, ref, ...rest } }) => (
                <FormControl isInvalid={errors[id]}>
                    <FormLabel htmlFor={id} mb='0'>
                        {label}
                    </FormLabel>
                    <Textarea
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                        placeholder='Here is a sample placeholder'
                        size='sm'
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

export default FormTextarea