import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react'

const Pagination = ({ onPageChange, pageSize, items, currentPage }) => {
    const countPages = Math.ceil(items / pageSize);
    if (countPages === 1) return null;
    const pages = Array.from({ length: countPages }, (_, i) => i + 1);
    console.log(pages);

    return (
        <Box
            p='2%'
            gap='50px'
            bg='#f6f6f6'
            m='auto'
            w='100%'
        >
            <HStack
                justify='center'
                gap={2}
                bg='white'
                w='72.5%'
                borderRadius={'8px'}
                p='3'
                ml={{ "lg": '23%' }}
                m='auto'
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >
                <Button>{'< '}Previous</Button>
                {
                    pages.map((page, i) => {
                        return <Button key={i + 1} colorScheme='gray' onClick={() => console.log(page)}>{page}</Button>
                    })
                }
                <Button>Next{' >'}</Button>
            </HStack>
        </Box>
    )
}

export default Pagination;