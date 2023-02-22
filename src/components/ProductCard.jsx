import { Box, Button, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const ProductCard = () => {
    return (
        <GridItem
            w="240px"
            h='350px'
            padding='5'
            textAlign="left"
            bg="white"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
            <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
                <Image h="100%" src={'https://onemg.gumlet.io/images/f_auto,w_150,c_fit,h_150,q_auto/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-veg-tablet-with-zinc-vitamin-c-calcium-vitamin-d-and-iron-support-immunity-bones-overall-health.jpg'} alt='' />
            </Box>
            <Text
                fontSize="14px"
                fontWeight='600'
                mb="5px"
            >
                Title
            </Text>
            <Text
                color="grey"
                fontSize="13px"
                fontWeight="600"
                mb="10px"
            >
                pack size
            </Text>
            <Flex gap={"20px"}>
                <Button
                    fontSize={"12px"}
                    fontWeight={600}
                    bg="#1aab2a"
                    size={"xs"}
                    color={"white"}
                    mb={"10px"}
                >
                    rating<AiFillStar />
                </Button>
                <Text fontSize={"13px"} mb={"10px"} color="grey" fontWeight={600}>
                    cardRatingDetail
                </Text>
            </Flex>
            <Flex gap={"10px"}>
                <Text
                    color="grey"
                    fontSize={"12px"}
                    mb={"10px"}
                    textDecor="line-through"
                    fontWeight={600}
                >
                    ₹995
                </Text>
                <Text
                    fontSize={"13px"}
                    mb={"10px"}
                    color="#1aab2a"
                    fontWeight={600}
                >
                    65% OFF
                </Text>
            </Flex>{" "}
            <Flex align={"center"} justify="space-between">
                <Heading fontSize={"15px"} mb="2px" fontWeight={600} >
                    ₹348
                </Heading>
                <Button
                fontWeight={'700'}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{ bg: "#ff6f61", color: "white" }}
                >
                    ADD
                </Button>
            </Flex>
        </GridItem>
    )
}

export default ProductCard;