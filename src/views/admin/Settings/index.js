import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    chakra
} from '@chakra-ui/react'
import FormInput from '../../../components/Forms/FormInput'
import FormCheckbox from '../../../components/Forms/FormCheckbox'
import FormSelect from '../../../components/Forms/FormSelect'
import FormRadio from '../../../components/Forms/FormRadio'
import FormSwitch from '../../../components/Forms/FormSwitch'

const Settings = () => {
    const {
        handleSubmit,
        control,
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

    const options = [
        {
            label: "Some value 1",
            value: "Some value 1",
        },
        {
            label: "Some value 2",
            value: "Some value 2",
        }
    ]

    return (
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                id={"firstName"}
                label="First Name"
                minLength={5}
                placeholder="Enter your first name"
                required={true}
                errors={errors}
                control={control}
            />

            <FormInput
                id={"lastName"}
                label="Last Name"
                minLength={5}
                placeholder="Enter your last name"
                required={true}
                errors={errors}
                control={control}
                rules={{
                    minLength: { value: 3, message: `Minimum length of last name should be 3` },
                }}
            />
            <FormSelect
                id="selectList"
                label="Select List"
                placeholder={'Select option'}
                required={true}
                errors={errors}
                control={control}
                options={options}
            />

            <FormCheckbox
                id={"CheckboxInput"}
                label={"Select"}
                required={true}
                errors={errors}
                options={["sasuke", "naruto", "kakashi"]}
                defaultChecked={['naruto', 'kakashi']}
                control={control}
            />

            <FormRadio
                id={"RadioInput"}
                label={"Radio Input"}
                required={true}
                errors={errors}
                options={["sasuke", "naruto", "kakashi"]}
                defaultValue={'kakashi'}
                control={control}
            />

            <FormSwitch
                id={"SwitchInput"}
                label={"Switch Input"}
                required={true}
                errors={errors}
                control={control}
            />




            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </chakra.form>
    )
}

export default Settings
