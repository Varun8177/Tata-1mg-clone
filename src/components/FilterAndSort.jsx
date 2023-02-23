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
import React from 'react'

const FilterAndSort = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Show above='sm'>
                <Box
                    bg='white'
                    w={{ "lg": "190px", "md": "250px" }}
                    h={{ "lg": "600px", "md": "700px" }}
                    ml={{ "lg": "7%", "md": "5%" }}
                    mt='15px'
                    p={5}
                    fontSize={{ "lg": "14px", "md": "10px" }}
                >
                    <Box m='20px 0'>
                        <Heading fontSize={'14px'}>FILTER</Heading>
                        <CheckboxGroup colorScheme='green' >
                            <Stack
                                color={'grey'}
                                fontSize={'12px'}
                                spacing={[1, 1]}
                                direction={['column']}
                            >
                                <Checkbox value='a'>category</Checkbox>
                                <Checkbox value='b'>category</Checkbox>
                                <Checkbox value='c'>category</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
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
                    <Divider />
                    <Box m='20px 0'>
                        <Heading fontSize={'14px'}>SORT BY PRICE</Heading>
                        <RadioGroup colorScheme='green'>
                            <Stack
                                color={'grey'}
                                direction='column'
                                fontSize={'12px'}
                            >
                                <Radio value='a'>Low to high</Radio>
                                <Radio value='b'>High to low</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Divider />
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
                                            <Stack color={'grey'} direction='column' fontSize={'12px'}>
                                                <Radio value='a'>Low to high</Radio>
                                                <Radio value='b'>High to low</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Divider />
                                    <Box m='10px 0'>
                                        <Heading fontSize={'14px'}>SORT BY RATING</Heading>
                                        <RadioGroup colorScheme='green'>
                                            <Stack color={'grey'} direction='column' fontSize={'12px'}>
                                                <Radio value='a'>Low to high</Radio>
                                                <Radio value='b'>High to low</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
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