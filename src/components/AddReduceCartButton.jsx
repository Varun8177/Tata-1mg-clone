import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const AddReduceCartButton = ({ price, handleTotalPrice }) => {

    const [value, setValue] = useState(1);

    return (
        <Box display={"flex"} pt="20px" gap={"5px"}>
            <Button
                size="xs"
                bg="white"
                color="#ff6f61"
                fontSize="14px"
                borderRadius="full"
                border="1px solid #ff6f61"
                _hover={{
                    bg: "white",
                }}
                isDisabled={value === 1}
                onClick={() => {
                    setValue(value - 1)
                    handleTotalPrice(-price)
                }}
            >
                -
            </Button>

            <Text> {value} </Text>
            <Button
                size="xs"
                bg="#ff6f61"
                color="white"
                fontSize="14px"
                borderRadius="full"
                _hover={{
                    bg: "#ff6f61",
                }}
                isDisabled={value === 5}
                onClick={() => {
                    setValue(value + 1)
                    handleTotalPrice(price)
                }}
            >
                +
            </Button>
        </Box>
    )
}

export default AddReduceCartButton;