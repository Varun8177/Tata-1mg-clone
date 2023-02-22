import {
    Box,
    Checkbox,
    CheckboxGroup,
    Heading,
    Radio,
    RadioGroup,
    Stack
} from '@chakra-ui/react'
import React from 'react'

const FilterAndSort = () => {
    return (
        <Box p={5} gap='200px' >
            <Box m='20px 0'>
                <Heading fontSize={'14px'}>FILTER</Heading>
                <CheckboxGroup colorScheme='green' >
                    <Stack color={'grey'} fontSize={'12px'} spacing={[1, 1]} direction={['column']}>
                        <Checkbox value='a'>category</Checkbox>
                        <Checkbox value='b'>category</Checkbox>
                        <Checkbox value='c'>category</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
            <Box m='20px 0'>
                <Heading fontSize={'14px'}>SORT BY DISCOUNT</Heading>
                <RadioGroup color={'grey'} colorScheme='green'>
                    <Stack direction='column' fontSize={'12px'}>
                        <Radio value='a'>Less than 10%</Radio>
                        <Radio value='b'>10% and above</Radio>
                        <Radio value='c'>20% and above</Radio>
                        <Radio value='d'>30% and above</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            <Box m='20px 0'>
                <Heading fontSize={'14px'}>SORT BY PRICE</Heading>
                <RadioGroup colorScheme='green'>
                    <Stack color={'grey'} direction='column' fontSize={'12px'}>
                        <Radio value='a'>Low to high</Radio>
                        <Radio value='b'>High to low</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            <Box m='20px 0'>
                <Heading fontSize={'14px'}>SORT BY RATING</Heading>
                <RadioGroup colorScheme='green'>
                    <Stack color={'grey'} direction='column' fontSize={'12px'}>
                        <Radio value='a'>Low to high</Radio>
                        <Radio value='b'>High to low</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        </Box>
    )
}

export default FilterAndSort;