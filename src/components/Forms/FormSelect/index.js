import React from 'react'
import { Select } from 'chakra-react-select'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const FormSelect = ({ label, placeholder, options = [], errors, id, control, required = false, rules, multiple }) => {
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
                    <FormLabel htmlFor={id}>{label}</FormLabel>
                    <Select
                        isMulti={multiple}
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        placeholder={placeholder}
                        options={options}
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

export default FormSelect