import { Avatar, Flex, Icon, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { FaBell } from 'react-icons/fa'
import {FiMenu, FiSearch} from "react-icons/fi"

const Header = ({ disclosure }) => {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            borderBottomWidth="1px"
            borderColor="blackAlpha.300"
            h="14"
        >
            <IconButton
                aria-label="Menu"
                display={{
                    base: "inline-flex",
                    md: "none",
                }}
                onClick={disclosure.onOpen}
                icon={<FiMenu />}
                size="sm"
            />
            <InputGroup
                w="96"
                display={{
                    base: "none",
                    md: "flex",
                }}
            >
                <InputLeftElement color="gray.500">
                    <FiSearch />
                </InputLeftElement>
                <Input placeholder="Search for articles..." />
            </InputGroup>

            <Flex align="center">
                <Icon color="gray.500" as={FaBell} cursor="pointer" />
                <Avatar
                    ml="4"
                    size="sm"
                    name="anubra266"
                    cursor="pointer"
                />
            </Flex>
        </Flex>
    )
}

export default Header