import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, Text, Icon } from '@chakra-ui/react';
import React from 'react'
import { BsCardText, BsGrid } from "react-icons/bs"
import {HiOutlineBriefcase, HiOutlineHome } from "react-icons/hi"
import NavItem from './NavItem';

const Sider = ({ disclosure }) => {

    const menuList = [
        {
            icon: HiOutlineHome,
            title: "Home",
            link: "/admin"
        },
        {
            icon: HiOutlineBriefcase,
            title: "Courses",
            link: "/admin/articles"
        },
        {
            icon: BsCardText,
            title: "Collections",
            link: "/admin/collections"
        },
        {
            icon: BsCardText,
            title: "Checklists",
            link: "/admin/checklists"
        },
        {
            icon: BsCardText,
            title: "Integrations",
            link: "/admin/integrations"
        },
        {
            icon: BsCardText,
            title: "Changelog",
            link: "/admin/changelog"
        },
        {
            icon: BsCardText,
            title: "Settings",
            link: "/admin/settings"
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
            w="280px"
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