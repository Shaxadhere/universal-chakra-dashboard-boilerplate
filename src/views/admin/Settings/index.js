import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    chakra
} from '@chakra-ui/react'
import FormInput from '../../../components/Forms/FormInput'

const Settings = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }

    return (
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                id={"firstName"}
                label="First Name"
                minLength={5}
                placeholder="Enter your first name"
                required={true}
                register={register}
                errors={errors}
            />

            <FormInput
                id={"lastName"}
                label="Last Name"
                minLength={5}
                placeholder="Enter your last name"
                required={true}
                register={register}
                errors={errors}
            />

            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </chakra.form>
    )
}

export default Settings
