import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react'

const Pagination = () => {
    return (
        <Box p='2%' gap='50px' bg='#f6f6f6' m='auto' w='100%' >
            <HStack justify='center' gap={2} bg='white' w='72%' borderRadius={'8px'} p='3' ml='22%' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                <Button>{'< '}Previous</Button>
                <Button colorScheme='gray'>{1}</Button>
                <Button>Next{' >'}</Button>
            </HStack>
        </Box>
    )
}

export default Pagination;