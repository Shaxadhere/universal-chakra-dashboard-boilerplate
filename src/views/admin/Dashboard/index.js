import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import FormDrawer from '../../../components/Forms/FormDrawer'
import CustomTable from '../../../components/BasicUI/CustomTable'

const Dashboard = () => {
  const formDrawerDisclosure = useDisclosure()
  const data = [
    {
      name:"Shehzad",
      age:21,
    },
    {
      name:"Ahmed",
      age:22,
    }
  ]
  return (
    <Box>
      <Heading>Dashboard</Heading>

      <Button colorScheme='teal' onClick={formDrawerDisclosure.onOpen}>
        Open
      </Button>
      <FormDrawer
        title="Form Title"
        disclosure={formDrawerDisclosure}
      />

      <CustomTable
        head={["Name", "Age", "#"]}
        data={data}
      />
    </Box>
  )
}

export default Dashboard