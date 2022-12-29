import { Box, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import Sider from './Sider';
import Header from './Header';
import { Outlet } from 'react-router';


const AdminLayout = ({ children }) => {
  const sidebar = useDisclosure();
  return (
    <Box
      as="section"
      minH="100vh"
    >
      <Sider disclosure={sidebar} />
      <Box
        ml={{
          base: 0,
          md: "280px",
        }}
        transition=".3s ease"
      >
        <Header disclosure={sidebar} />

        <Box as="main" p="4">
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default AdminLayout