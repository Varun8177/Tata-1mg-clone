import { Box, Button, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const ProductCard = (props) => {
    const router = useRouter();
    const goToSingleProductPage = () => {
        router.push(`products/${props.id}`);
        console.log(props.id);
    }
    return (
        <GridItem
            w="240px"
            h='auto'
            padding='5'
            textAlign="left"
            bg="white"
            m='auto'
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
            <Box
                maxW={"100%"}
                h={"150px"}
                mb={"10px"}
                align={"center"}
            >
                <Image h="100%"
                    src={props.src}
                    alt={props.id}
                    onClick={goToSingleProductPage}
                    cursor='pointer'
                />
            </Box>
            <Text
                fontSize="14px"
                fontWeight='600'
                mb="5px"
                onClick={goToSingleProductPage}
                cursor='pointer'
            >
                {props.title.substring(0, 24).concat('...')}
            </Text>
            <Text
                color="grey"
                fontSize="13px"
                fontWeight="600"
                mb="10px"
            >
                {props.packsize}
            </Text>
            <Flex gap={"20px"}>
                <Button
                    fontSize={"12px"}
                    fontWeight={600}
                    bg="#1aab2a"
                    size={"xs"}
                    color={"white"}
                    mb={"10px"}
                    cursor='auto'
                    _hover={{
                        bg: "#4dc65b",
                    }}
                >
                    {props.rating}<AiFillStar />
                </Button>
                <Text
                    fontSize={"13px"}
                    mb={"10px"}
                    color="grey"
                    fontWeight={600}
                >
                    {props.CardRatingDetail}
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
                    {props["strike-price"] ? props["strike-price"] : null}₹
                </Text>
                <Text
                    fontSize={"13px"}
                    mb={"10px"}
                    color="#1aab2a"
                    fontWeight={600}
                >
                    {props["discount-percent"] ? props["discount-percent"] : "0%"}
                </Text>
            </Flex>
            <Flex
                align={"center"}
                justify="space-between"
            >
                <Heading
                    fontSize={"15px"}
                    mb="2px"
                    fontWeight={600}
                >
                    ₹{props.price}
                </Heading>
                <Button
                    fontWeight={'700'}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{
                        bg: "#ff6f61",
                        color: "white"
                    }}
                >
                    ADD
                </Button>
            </Flex>
        </GridItem>
    )
}

export default ProductCard;