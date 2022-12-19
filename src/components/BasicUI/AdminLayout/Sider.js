import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, Text, Icon } from '@chakra-ui/react';
import React from 'react'
import { BsCardText, BsGrid } from "react-icons/bs"
import NavItem from './NavItem';

const Sider = ({ disclosure }) => {

    const menuList = [
        {
            icon: BsGrid,
            title: "Home",
            link:"/"
        },
        {
            icon: BsCardText,
            title: "Articles",
            link:"/articles"
        },
        {
            icon: BsCardText,
            title: "Collections",
            link:"/collections"
        },
        {
            icon: BsCardText,
            title: "Checklists",
            link:"/checklists"
        },
        {
            icon: BsCardText,
            title: "Integrations",
            link:"/integrations"
        },
        {
            icon: BsCardText,
            title: "Changelog",
            link:"/changelog"
        },
        {
            icon: BsCardText,
            title: "Settings",
            link:"/settings"
        }
    ]

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Text fontSize="2xl" ml="2" color="primaryText" fontWeight="semibold">
                    Universal
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="primaryText"
                aria-label="Main Navigation"
            >
                {menuList.map((item, index) =>
                    <NavItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        link={item.link}
                    />
                )}
            </Flex>
        </Box>
    );
    return (
        <React.Fragment>
            <SidebarContent
                display={{
                    base: "none",
                    md: "unset",
                }}
            />
            <Drawer
                isOpen={disclosure.isOpen}
                onClose={disclosure.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    )
}

export default Sider