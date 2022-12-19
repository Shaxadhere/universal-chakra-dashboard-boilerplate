import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, Text, Icon } from '@chakra-ui/react';
import React from 'react'
import { BsCardText,BsGrid } from "react-icons/bs"

const Sider = ({ disclosure }) => {
    const NavItem = ({ icon, children, ...rest }) => {
        return (
            <Flex
                align="center"
                px="4"
                mx="2"
                rounded="md"
                py="3"
                cursor="pointer"
                color="primaryText"
                _hover={{
                    bg: "secondaryFill",
                    color: "secondaryText",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="2"
                        boxSize="4"
                        _groupHover={{
                            color: "primaryText",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

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
                    Logo
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="primaryText"
                aria-label="Main Navigation"
            >
                <NavItem icon={BsGrid}>Home</NavItem>
                <NavItem icon={BsCardText}>Articles</NavItem>
                <NavItem icon={BsCardText}>Collections</NavItem>
                <NavItem icon={BsCardText}>Checklists</NavItem>
                <NavItem icon={BsCardText}>Integrations</NavItem>
                <NavItem icon={BsCardText}>Changelog</NavItem>
                <NavItem icon={BsCardText}>Settings</NavItem>
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