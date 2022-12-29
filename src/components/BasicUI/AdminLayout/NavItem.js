import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import appColors from "../../../config/constants/appColors";

const NavItem = ({ icon, link = "#", title, ...rest }) => {
    return (
        <Flex
            as={Link}
            align="center"
            px="4"
            mx="2"
            rounded="md"
            py="3"
            cursor="pointer"
            color={appColors.gray}
            _hover={{
                bg: "secondaryFill",
                color: "primaryText",
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            to={link}
            {...rest}
        >
            {icon && (
                <Icon
                    mr="2"
                    boxSize="5"
                    _groupHover={{
                        color: "primaryText",
                    }}
                    as={icon}
                />
            )}
            {title}
        </Flex>
    );
};

export default NavItem