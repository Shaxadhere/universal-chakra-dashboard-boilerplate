import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Image
} from "@chakra-ui/react"

const CustomTable = ({
    head,
    data,
    size = "md",
    caption,
    containerProps,
    tableProps,
    tableHeadProps,
    tbodyProps
}) => {
    return (
        <TableContainer {...containerProps}>
            <Table variant='simple' size={size} {...tableProps}>
                {caption && <TableCaption>{caption}</TableCaption>}
                <Thead bg="primaryFill" {...tableHeadProps}>
                    <Tr>
                        {head && head.map((item, index) =>
                            <Th color="white" key={index}>{item}</Th>
                        )}
                    </Tr>
                </Thead>
                <Tbody {...tbodyProps}>
                    {(data && data.length > 0) ?
                        data?.map((row, index) =>
                            <Tr key={index} bg="secondaryFill">
                                {Object.keys(row).map((item, index) =>
                                    <Td key={index} color="primaryText">{row[item]}</Td>
                                )}
                            </Tr>
                        ) : (
                            <Tr>
                                <Td colSpan={head.length}>
                                    <Image w="120px" mx="auto" my={10} src={require("../../../assets/images/empty-box.png")} />
                                </Td>
                            </Tr>
                        )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable