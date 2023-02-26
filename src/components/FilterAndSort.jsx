import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Divider,
    Heading,
    Hide,
    Radio,
    RadioGroup,
    Show,
    Stack,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FilterAndSort = ({ handleFilter, handleSortPrice, handleSortRating, handleSortReset }) => {
    const router = useRouter();
    const btnRef = React.useRef()
    const [isChecked, setIsChecked] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleQueryChange = (e) => {
        setIsChecked(e.target.checked);
        router.push({
            pathname: router.pathname,
            query: { ...router.query, q: e.target.value }
        })
    }

    return (
        <>
            <Show above='sm'>
                <Box
                    bg='white'
                    w={{ "lg": "190px", "md": "250px" }}
                    h={{ "lg": "670px", "md": "730px" }}
                    ml={{ "lg": "7%", "md": "5%" }}
                    mt='15px'
                    p={5}
                    fontSize={{ "lg": "14px", "md": "10px" }}
                >
                    <Box m='20px 0'>
                        <Heading fontSize={'14px'}>FILTER</Heading>
                        <CheckboxGroup colorScheme='green'
                            onChange={(e) => handleFilter(e)} >
                            <Stack
                                color={'grey'}
                                spacing={[1, 1]}
                                direction={['column']}
                            >
                                <Checkbox fontSize='10px' checked={isChecked} onChange={handleQueryChange} value='products'>Products</Checkbox>
                                <Checkbox checked={isChecked} onChange={handleQueryChange} value='vitamins-suppliments'>Suppliments</Checkbox>
                                <Checkbox checked={isChecked} onChange={handleQueryChange} value='combo'>Combos</Checkbox>
                                <Checkbox checked={isChecked} onChange={handleQueryChange} value='medicine'>Medicines</Checkbox>
                                <Checkbox checked={isChecked} onChange={handleQueryChange} value='devices'>Devices</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box m='20px 0'>
                        <Heading fontSize={'14px'}>SORT BY DISCOUNT</Heading>
                        <RadioGroup color={'grey'} colorScheme='green'>
                            <Stack direction='column' fontSize={'12px'}>
                                <Radio value='lessThan10'>Less than 10%</Radio>
                                <Radio value='10andAbove'>10% and above</Radio>
                                <Radio value='20andAbove'>20% and above</Radio>
                                <Radio value='30andAbove'>30% and above</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Divider />
                    <Box m='20px 0'>
                        <Heading fontSize={'14px'}>SORT BY PRICE</Heading>
                        <RadioGroup colorScheme='green' onChange={(value) => handleSortPrice(value) && console.log(value)}>
                            <Stack
                                color={'grey'}
                                direction='column'
                                fontSize={'12px'}
                            >
                                <Radio value='asc'>Low to high</Radio>
                                <Radio value='desc'>High to low</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Divider />
                    <Box m='20px 0'>
                        <Heading fontSize={'14px'}>SORT BY RATING</Heading>
                        <RadioGroup colorScheme='green' onChange={(value) => handleSortRating(value)}>
                            <Stack color={'grey'} direction='column' fontSize={'12px'}>
                                <Radio value='asc'>Low to high</Radio>
                                <Radio value='desc'>High to low</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Button
                        fontWeight={'700'}
                        bg="white"
                        size={"sm"}
                        color="#ff6f61"
                        _hover={{
                            bg: "#ff6f61",
                            color: "white"
                        }}
                        onClick={() => handleSortReset()}
                    >
                        Reset
                    </Button>
                </Box>
            </Show>

            {/* -------------------- */}

            <Hide above='sm'>
                <>
                    <Button ref={btnRef} colorScheme='gray' onClick={onOpen}>
                        Filter and Sort
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='bottom'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                <Box >
                                    <Box>
                                        <Heading fontSize={'14px'} mt='20px'>FILTER</Heading>
                                        <CheckboxGroup colorScheme='green' >
                                            <Stack color={'grey'} fontSize={'12px'} spacing={[1, 1]} direction={['column']}>
                                                <Checkbox value='a'>category</Checkbox>
                                                <Checkbox value='b'>category</Checkbox>
                                                <Checkbox value='c'>category</Checkbox>
                                            </Stack>
                                        </CheckboxGroup>
                                    </Box>
                                    <Divider />
                                    <Box m='10px 0'>
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
                                    <Divider />
                                    <Box m='10px 0'>
                                        <Heading fontSize={'14px'}>SORT BY PRICE</Heading>
                                        <RadioGroup colorScheme='green'>
                                            <Stack color={'grey'} direction='column' fontSize={'12px'} onChange={(value) => handleSortPrice(value) && console.log(value)}>
                                                <Radio value='asc'>Low to high</Radio>
                                                <Radio value='desc'>High to low</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Divider />
                                    <Box m='10px 0'>
                                        <Heading fontSize={'14px'}>SORT BY RATING</Heading>
                                        <RadioGroup colorScheme='green'>
                                            <Stack color={'grey'} direction='column' fontSize={'12px'} onChange={(value) => handleSortRating(value)}>
                                                <Radio value='asc'>Low to high</Radio>
                                                <Radio value='desc'>High to low</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Button
                                        fontWeight={'700'}
                                        bg="white"
                                        size={"sm"}
                                        color="#ff6f61"
                                        _hover={{
                                            bg: "#ff6f61",
                                            color: "white"
                                        }}
                                        onClick={() => handleSortReset()}
                                    >
                                        Reset
                                    </Button>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            </Hide>
        </>
    )
}
export default FilterAndSort;