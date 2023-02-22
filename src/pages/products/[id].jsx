import React from 'react'
import {
    Box,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
} from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai';

const SingleProductPage = () => {
    return (
        <>
            <Stack maxW="90%" direction={"row"} m='20px auto'>
                <Flex w={"65%"} m="auto">
                    <Box w={"50%"}>
                        <Image m='auto' src={'https://onemg.gumlet.io/images/f_auto,w_150,c_fit,h_150,q_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-veg-tablet-with-zinc-vitamin-c-calcium-vitamin-d-and-iron-support-immunity-bones-overall-health.jpg'} height="300px" alt='' />
                    </Box>
                    <Box w='50%' p={"0 15px"}>
                        <Text fontSize={"24px"} mb={"10px"} fontWeight={700} lineHeight='35px'>
                            Tata 1mg {"Women's"} Multivitamin Veg Tablet with Zinc, Vitamin C, Calcium, Vitamin D and Iron, Support Immunity, Bones & Overall Health
                        </Text>
                        <Text
                            fontSize={"14px"}
                            mb={"10px"}
                            color="#ff6f61"
                            fontWeight={600}
                        >
                            Tata 1mg Healthcare Solutions Private Limited
                        </Text>
                        <Flex gap={"20px"}>
                            <Button
                                bg="#1aab2a"
                                size={"xs"}
                                color={"#fff"}
                                fontSize={"13px"}
                                mb={"10px"}
                                fontWeight={600}
                            >
                                4.4{' '}<AiFillStar />
                            </Button>
                            <Text
                                fontSize={"13px"}
                                mb={"10px"}
                                color="#ff6f61"
                                fontWeight={600}
                            >
                                1502 Ratings & 219 Reviews
                            </Text>
                        </Flex>
                        <Text color="grey" fontSize={"18px"} mb={"10px"} fontWeight={600}>
                            Pack Size (2)
                        </Text>
                        <Text fontSize={'14px'} lineHeight='20px' fontWeight={'400'} textAlign={"justify"} >
                            Product highlights <br />
                            • Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            • Exercitationem at nam tempora voluptatem error hic vitae, <br />
                            • excepturi iure nulla ducimus in. <br />
                            • Atque minima accusantium quibusdam
                        </Text>
                    </Box>
                </Flex>
                <Box minW={"25%"} p={"10px 15px"}  h='auto' borderRadius={'12px'} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
                    <Box bg='#edf9ee' fontSize={'12px'}>3,114 people bought this recently</Box>
                    <Heading  fontSize={"25px"} mb={"10px"} fontWeight={600}>
                        Price
                    </Heading>
                    <Box >
                        <Flex gap={"10px"} align="center">
                            <Text fontSize={"24px"} mb={"10px"} fontWeight={600}>
                                ₹348
                            </Text>
                            <Text
                                color="grey"
                                fontSize={"15px"}
                                mb={"10px"}
                                textDecor="line-through"
                                fontWeight={600}
                            >
                                ₹995
                            </Text>
                            <Text fontSize={"15px"} mb={"10px"} color="#1aab2a" bg='#edf9ee' fontWeight={600} p={"4px"}>
                                65% OFF
                            </Text>
                        </Flex>
                    </Box>
                    <Button
                        w={"80%"}
                        size={"md"}
                        borderRadius="5px"
                        bg={"#ff6f61"}
                        _hover={{
                            bg: "#ff4f61",
                        }}
                        color="#fff"
                    >
                        Add To Cart
                    </Button>
                </Box>
            </Stack>
        </>
    )
}

export default SingleProductPage;