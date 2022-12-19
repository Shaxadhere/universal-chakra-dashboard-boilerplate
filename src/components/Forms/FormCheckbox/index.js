import React from 'react'
import { Checkbox, CheckboxGroup, FormControl, FormErrorMessage, FormLabel, Stack } from '@chakra-ui/react'

const FormCheckbox = ({ options, defaultChecked, label, errors = {}, id, register, required = false }) => {
    return (
        <FormControl
            isInvalid={errors[id]}
        >
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <CheckboxGroup
                defaultValue={defaultChecked}
                {...register(id, {
                    required: required,
                })}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    {options?.map((item, index) =>
                        <Checkbox key={index} value={item.value || item}>{item.label || item}</Checkbox>
                    )}
                </Stack>
            </CheckboxGroup>
            <FormErrorMessage>
                {errors[id] && errors[id].message}
            </FormErrorMessage>
        </FormControl>
    )
}

export default FormCheckbox