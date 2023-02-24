import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {
  return (
    <Box bg='#f6f6f6' p='60px 50px'>
      <Text pt='10px' pl={{ "lg": '110px', "md": '110px', "base": '10px' }}>Items in your cart</Text>
      <Flex
        w='90%'
        m='auto'
        gap={{ "base": '50px' }}
        direction={{ "lg": 'row', "md": 'row', "base": 'column' }}
      >
        <Box
          w={{ "lg": '600px', "md": '400px', "base": '200px' }}
          h={{ "lg": '150px', "md": '160px', "base": 'auto' }}
          m='auto'
          bg='white'
          p='20px 40px'
          display={{ "lg": 'flex', "md": 'flex', "base": 'row' }}
          justifyContent='space-between'
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Box>
            <Text
              fontSize={{ "lg": '14px', "md": '12px', "base": '12px' }}
              fontWeight='700'
              color={'#212121'}
              lineHeight={'25px'}
            >
              Dr Morepen BP 02 Blood Pressure Monitor
            </Text>
            <Text
              fontSize={'12px'}
              fontWeight='700'
              color={'#9e9e9e'}
              lineHeight={'40px'}
            >
              box of 1 Unit
            </Text>
            <Text
              fontSize={'13px'}
              fontWeight='700'
              color={'#9e9e9e'}
              lineHeight={'40px'}
            >
              <DeleteIcon fontSize={'15px'} /> Remove
            </Text>
          </Box>

          <Box>
            <Text
              fontSize={'14px'}
              fontWeight='700'
              color={'#212121'}
              lineHeight={'25px'}
            >
              ₹1084
            </Text>
            <Text
              fontSize={'12px'}
              fontWeight='700'
              color={'#9e9e9e'}
              lineHeight={'30px'}
              textDecor={'line-through'}
            >
              MRP₹1455
            </Text>

            <Box display={'flex'} pt='20px' gap={'5px'}>
              <Button
                size='xs'
                bg='white'
                color='#ff6f61'
                fontSize='14px'
                borderRadius='full'
                border='1px solid #ff6f61'
                _hover={{
                  bg: "white"
                }}
              >
                -
              </Button>
              <Text>1</Text>
              <Button
                size='xs'
                bg='#ff6f61'
                color='white'
                fontSize='14px'
                borderRadius='full'
                _hover={{
                  bg: "#ff6f61",
                }}
              >
                +
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          w='38%'
          h='150px'
          m='auto'
          bg='white'
          p='20px 40px'
          display={'grid'}
          justifyContent='space-between'
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Box gap='100px' display='flex'>
            <Text textAlign='left'>Item Total(MRP)</Text> <Text textAlign='right'>₹6880</Text>
          </Box>
          <Box gap='100px' display='flex'>
            <Text> Price Discount</Text>  <Text textAlign='right'>-₹3291.5</Text>
          </Box>
          <Box gap='100px' display='flex'>
            <Text>Shipping Fee</Text> <Text textAlign='right'>Free</Text></Box>
          <Box gap='100px' display='flex'>
            <Text>To be paid</Text>  <Text>₹568</Text>
          </Box>
        </Box>
      </Flex>
    </Box >
  )
}

export default Cart;