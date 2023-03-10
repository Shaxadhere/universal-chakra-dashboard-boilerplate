import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  chakra
} from '@chakra-ui/react'

const FormDrawer = ({ title, disclosure, size = "xl", id = "drawer-form", onSubmit }) => {
  const { isOpen, onClose } = disclosure
  const firstField = React.useRef()

  const FormContent = () => {
    return (
      <chakra.form
        id={id}
        onSubmit={onSubmit}
      >
        <Input ref={firstField} placeholder='Type here...' />
      </chakra.form>
    )
  }
  return (

    <Drawer
      size={size}
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      initialFocusRef={firstField}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody>
          <FormContent />
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit' form={id} colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}

export default FormDrawer
